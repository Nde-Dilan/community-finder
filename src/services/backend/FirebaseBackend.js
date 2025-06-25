import { BaseBackend } from "./BaseBackend.js";
import {
  createApiResponse,
  createApiError,
  COLLECTION_NAMES,
} from "./types.js";

/* eslint-disable no-unused-vars */

export class FirebaseBackend extends BaseBackend {
  constructor(config) {
    super(config);
    this.firebaseApp = null;
    this.db = null;
    this.auth = null;
  }

  async initialize() {
    try {
      // Dynamic import of Firebase to avoid loading unless needed
      const { initializeApp } = await import("firebase/app");
      const { getFirestore } = await import("firebase/firestore");
      const { getAuth } = await import("firebase/auth");

      // Get Firebase config from environment variables
      const firebaseConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
        appId: import.meta.env.VITE_FIREBASE_APP_ID,
        measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
      };

      // Initialize Firebase
      this.firebaseApp = initializeApp(firebaseConfig);
      this.db = getFirestore(this.firebaseApp);
      this.auth = getAuth(this.firebaseApp);

      console.log("🔥 Firebase initialized successfully");
    } catch (error) {
      console.error("❌ Firebase initialization failed:", error);
      throw createApiError(`Firebase initialization failed: ${error.message}`);
    }
  }

  // Helper method to apply filters to Firestore queries
  _applyFirestoreFilters(queryRef, filters = {}) {
    let currentQuery = queryRef;

    try {
      // Import Firestore functions synchronously since they're already loaded
      const { where, orderBy, limit: firestoreLimit } = require("firebase/firestore");

      // Apply where filters
      if (filters.region && filters.region !== "All Regions") {
        currentQuery = where(currentQuery, "region", "==", filters.region);
      }

      if (filters.category && filters.category !== "All Categories") {
        currentQuery = where(currentQuery, "category", "==", filters.category);
      }

      if (filters.featured !== undefined) {
        currentQuery = where(currentQuery, "featured", "==", filters.featured);
      }

      if (filters.status) {
        currentQuery = where(currentQuery, "status", "==", filters.status);
      }

      if (filters.upcoming === true) {
        const now = new Date().toISOString().split('T')[0];
        currentQuery = where(currentQuery, "date", ">=", now);
      }

      if (filters.minMembers) {
        currentQuery = where(currentQuery, "members", ">=", filters.minMembers);
      }

      if (filters.maxMembers) {
        currentQuery = where(currentQuery, "members", "<=", filters.maxMembers);
      }

      // Apply exclude filter (for similar communities)
      if (filters.exclude && filters.exclude.length > 0) {
        // Note: Firestore doesn't support "not in" with arrays, so we'll handle this differently
        // We'll fetch all and filter in memory for now
      }

      // Apply sorting
      if (filters.sortBy) {
        const direction = filters.sortOrder === "desc" ? "desc" : "asc";
        currentQuery = orderBy(currentQuery, filters.sortBy, direction);
      }

      // Apply limit
      if (filters.limit) {
        currentQuery = firestoreLimit(currentQuery, filters.limit);
      }

      return currentQuery;
    } catch (error) {
      console.error("Error applying Firestore filters:", error);
      return queryRef; // Return original query if filtering fails
    }
  }

  async getCommunities(filters = {}, pagination = {}, sort = {}) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { collection, getDocs, query } = await import("firebase/firestore");
      
      // Start with basic collection reference
      const communitiesRef = collection(this.db, COLLECTION_NAMES.COMMUNITIES);
      
      // Create query with filters
      let communitiesQuery = communitiesRef;
      
      // Apply filters manually to avoid the _internalPath issue
      if (filters.region && filters.region !== "All Regions") {
        const { where } = await import("firebase/firestore");
        communitiesQuery = query(communitiesQuery, where("region", "==", filters.region));
      }

      if (filters.category && filters.category !== "All Categories") {
        const { where } = await import("firebase/firestore");
        communitiesQuery = query(communitiesQuery, where("category", "==", filters.category));
      }

      if (filters.featured !== undefined) {
        const { where } = await import("firebase/firestore");
        communitiesQuery = query(communitiesQuery, where("featured", "==", filters.featured));
      }

      if (filters.status) {
        const { where } = await import("firebase/firestore");
        communitiesQuery = query(communitiesQuery, where("status", "==", filters.status));
      }

      // Apply sorting
      if (sort.field) {
        const { orderBy } = await import("firebase/firestore");
        const direction = sort.direction === "desc" ? "desc" : "asc";
        communitiesQuery = query(communitiesQuery, orderBy(sort.field, direction));
      }

      // Apply limit
      if (pagination.limit) {
        const { limit } = await import("firebase/firestore");
        communitiesQuery = query(communitiesQuery, limit(pagination.limit));
      }

      // Execute query
      const querySnapshot = await getDocs(communitiesQuery);
      
      let communityList = [];
      querySnapshot.forEach((doc) => {
        communityList.push({
          id: doc.id,
          ...doc.data()
        });
      });

      // Apply exclude filter in memory (since Firestore doesn't support NOT IN efficiently)
      if (filters.exclude && filters.exclude.length > 0) {
        communityList = communityList.filter(community => 
          !filters.exclude.includes(community.id)
        );
      }

      console.log(`🏘️ Fetched ${communityList.length} communities from Firebase`);
      
      return createApiResponse({
        communities: communityList,
        total: communityList.length,
        page: pagination.page || 1,
        limit: pagination.limit || communityList.length
      });

    } catch (error) {
      console.error("❌ Error fetching communities from Firebase:", error);
      throw createApiError(`Failed to fetch communities: ${error.message}`);
    }
  }

  async getFeaturedCommunities(limit = 6) {
    try {
      console.log(`🌟 Fetching ${limit} featured communities from Firebase...`);
      
      const result = await this.getCommunities(
        { featured: true, status: "active" },
        { limit },
        { field: "members", direction: "desc" }
      );
      
      return createApiResponse(result.data.communities);
    } catch (error) {
      console.error("❌ Error fetching featured communities:", error);
      throw createApiError(`Failed to fetch featured communities: ${error.message}`);
    }
  }

  async getCommunityById(id) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { doc, getDoc } = await import("firebase/firestore");
      
      const communityRef = doc(this.db, COLLECTION_NAMES.COMMUNITIES, id);
      const communityDoc = await getDoc(communityRef);

      if (!communityDoc.exists()) {
        throw createApiError(`Community with ID ${id} not found`);
      }

      const community = {
        id: communityDoc.id,
        ...communityDoc.data()
      };

      console.log(`🏘️ Fetched community: ${community.name}`);
      return createApiResponse(community);

    } catch (error) {
      console.error("❌ Error fetching community by ID:", error);
      throw createApiError(`Failed to fetch community: ${error.message}`);
    }
  }

  async getEvents(filters = {}, pagination = {}, sort = {}) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { collection, getDocs, query, where, orderBy, limit } = await import("firebase/firestore");
      
      let eventsQuery = collection(this.db, COLLECTION_NAMES.EVENTS);

      // Apply filters
      if (filters.upcoming === true) {
        const now = new Date().toISOString().split('T')[0];
        eventsQuery = query(eventsQuery, where("date", ">=", now));
      }

      if (filters.type) {
        eventsQuery = query(eventsQuery, where("type", "==", filters.type));
      }

      if (filters.status) {
        eventsQuery = query(eventsQuery, where("status", "==", filters.status));
      }

      // Apply sorting (default to date ascending for events)
      const sortField = sort.field || "date";
      const sortDirection = sort.direction || "asc";
      eventsQuery = query(eventsQuery, orderBy(sortField, sortDirection));

      // Apply limit
      if (pagination.limit) {
        eventsQuery = query(eventsQuery, limit(pagination.limit));
      }

      const querySnapshot = await getDocs(eventsQuery);
      
      const eventsList = [];
      querySnapshot.forEach((doc) => {
        eventsList.push({
          id: doc.id,
          ...doc.data()
        });
      });

      console.log(`📅 Fetched ${eventsList.length} events from Firebase`);
      
      return createApiResponse({
        events: eventsList,
        total: eventsList.length,
        page: pagination.page || 1,
        limit: pagination.limit || eventsList.length
      });

    } catch (error) {
      console.error("❌ Error fetching events from Firebase:", error);
      throw createApiError(`Failed to fetch events: ${error.message}`);
    }
  }

  async getNews(filters = {}, pagination = {}, sort = {}) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { collection, getDocs, query, where, orderBy, limit } = await import("firebase/firestore");
      
      let newsQuery = collection(this.db, COLLECTION_NAMES.NEWS);

      // Apply filters
      if (filters.category) {
        newsQuery = query(newsQuery, where("category", "==", filters.category));
      }

      if (filters.author) {
        newsQuery = query(newsQuery, where("author", "==", filters.author));
      }

      // Apply sorting (default to date descending for news)
      const sortField = sort.field || "date";
      const sortDirection = sort.direction || "desc";
      newsQuery = query(newsQuery, orderBy(sortField, sortDirection));

      // Apply limit
      if (pagination.limit) {
        newsQuery = query(newsQuery, limit(pagination.limit));
      }

      const querySnapshot = await getDocs(newsQuery);
      
      const newsList = [];
      querySnapshot.forEach((doc) => {
        newsList.push({
          id: doc.id,
          ...doc.data()
        });
      });

      console.log(`📰 Fetched ${newsList.length} news articles from Firebase`);
      
      return createApiResponse({
        news: newsList,
        total: newsList.length,
        page: pagination.page || 1,
        limit: pagination.limit || newsList.length
      });

    } catch (error) {
      console.error("❌ Error fetching news from Firebase:", error);
      throw createApiError(`Failed to fetch news: ${error.message}`);
    }
  }

  // Placeholder methods for future implementation
  async createCommunity(communityData) {
    throw createApiError("Community creation not implemented yet");
  }

  async updateCommunity(id, updates) {
    throw createApiError("Community update not implemented yet");
  }

  async deleteCommunity(id) {
    throw createApiError("Community deletion not implemented yet");
  }

  async getUpcomingEvents(limit = 10) {
    return this.getEvents(
      { upcoming: true, status: "upcoming" },
      { limit },
      { field: "date", direction: "asc" }
    );
  }

  async getEventById(id) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { doc, getDoc } = await import("firebase/firestore");
      
      const eventRef = doc(this.db, COLLECTION_NAMES.EVENTS, id);
      const eventDoc = await getDoc(eventRef);

      if (!eventDoc.exists()) {
        throw createApiError(`Event with ID ${id} not found`);
      }

      return createApiResponse({
        id: eventDoc.id,
        ...eventDoc.data()
      });

    } catch (error) {
      console.error("❌ Error fetching event by ID:", error);
      throw createApiError(`Failed to fetch event: ${error.message}`);
    }
  }

  async submitContact(contactData) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      
      const contactRef = collection(this.db, "contacts");
      const docRef = await addDoc(contactRef, {
        ...contactData,
        created_at: serverTimestamp(),
        status: "new"
      });

      console.log("📧 Contact form submitted to Firebase");
      return createApiResponse({ id: docRef.id, message: "Contact form submitted successfully" });

    } catch (error) {
      console.error("❌ Error submitting contact form:", error);
      throw createApiError(`Failed to submit contact form: ${error.message}`);
    }
  }

  async subscribeNewsletter(email, preferences = {}) {
    try {
      if (!this.db) {
        await this.initialize();
      }

      const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
      
      const subscribersRef = collection(this.db, "newsletter_subscribers");
      const docRef = await addDoc(subscribersRef, {
        email,
        preferences,
        subscribed_at: serverTimestamp(),
        status: "active"
      });

      console.log("📧 Newsletter subscription added to Firebase");
      return createApiResponse({ id: docRef.id, message: "Successfully subscribed to newsletter" });

    } catch (error) {
      console.error("❌ Error subscribing to newsletter:", error);
      throw createApiError(`Failed to subscribe to newsletter: ${error.message}`);
    }
  }

  async healthCheck() {
    try {
      if (!this.db) {
        await this.initialize();
      }

      // Simple health check - try to read from a collection
      const { collection, getDocs, limit } = await import("firebase/firestore");
      const testQuery = query(collection(this.db, COLLECTION_NAMES.COMMUNITIES), limit(1));
      await getDocs(testQuery);

      return createApiResponse({
        status: "healthy",
        backend: "firebase",
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      throw createApiError(`Firebase health check failed: ${error.message}`);
    }
  }

  async getStats() {
    try {
      const [communitiesResult, eventsResult, newsResult] = await Promise.all([
        this.getCommunities(),
        this.getEvents(),
        this.getNews()
      ]);

      return createApiResponse({
        communities: communitiesResult.data.total,
        events: eventsResult.data.total,
        news: newsResult.data.total,
        backend: "firebase"
      });
    } catch (error) {
      throw createApiError(`Failed to get stats: ${error.message}`);
    }
  }
}