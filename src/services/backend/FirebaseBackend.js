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

      this.isInitialized = true;
      return createApiResponse({
        message: "Firebase backend initialized successfully",
        config: {
          projectId: firebaseConfig.projectId,
          authDomain: firebaseConfig.authDomain,
        },
      });
    } catch (error) {
      return createApiError(
        `Failed to initialize Firebase: ${error.message}`,
        "INIT_ERROR"
      );
    }
  }
  // Helper method to apply filters to Firestore queries
  async _applyFilters(query, filters = {}) {
    const { where } = await import("firebase/firestore");

    let firestoreQuery = query;

    // Apply where filters
    if (filters.region) {
      firestoreQuery = where(firestoreQuery, "region", "==", filters.region);
    }
    if (filters.category) {
      firestoreQuery = where(
        firestoreQuery,
        "category",
        "==",
        filters.category
      );
    }
    if (filters.featured !== undefined) {
      firestoreQuery = where(
        firestoreQuery,
        "featured",
        "==",
        filters.featured
      );
    }
    if (filters.tags && filters.tags.length > 0) {
      firestoreQuery = where(
        firestoreQuery,
        "tags",
        "array-contains-any",
        filters.tags
      );
    }
    if (filters.minMembers) {
      firestoreQuery = where(
        firestoreQuery,
        "members",
        ">=",
        filters.minMembers
      );
    }
    if (filters.maxMembers) {
      firestoreQuery = where(
        firestoreQuery,
        "members",
        "<=",
        filters.maxMembers
      );
    }
    if (filters.status) {
      firestoreQuery = where(firestoreQuery, "status", "==", filters.status);
    }
    if (filters.upcoming === true) {
      const today = new Date().toISOString().split("T")[0];
      firestoreQuery = where(firestoreQuery, "date", ">=", today);
    }

    return firestoreQuery;
  }

  // Helper method to apply sorting to Firestore queries
  async _applySorting(query, sort = {}) {
    const { orderBy } = await import("firebase/firestore");

    if (sort.field) {
      const direction = sort.direction === "desc" ? "desc" : "asc";
      return orderBy(query, sort.field, direction);
    }

    return query;
  }

  // Helper method to apply pagination to Firestore queries
  async _applyPagination(query, pagination = {}) {
    const { limit, startAfter } = await import("firebase/firestore");

    if (pagination.limit) {
      query = limit(query, pagination.limit);
    }

    if (pagination.startAfter) {
      query = startAfter(query, pagination.startAfter);
    }

    return query;
  }
  async getCommunities(filters = {}, pagination = {}, sort = {}) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, query, getDocs, orderBy, where, limit } =
        await import("firebase/firestore");

      let firestoreQuery = collection(this.db, COLLECTION_NAMES.COMMUNITIES);

      // Apply filters
      firestoreQuery = await this._applyFilters(firestoreQuery, filters);

      // Apply sorting (default: by members desc)
      if (!sort.field) {
        sort = { field: "members", direction: "desc" };
      }
      firestoreQuery = await this._applySorting(firestoreQuery, sort);

      // Apply pagination
      firestoreQuery = await this._applyPagination(firestoreQuery, pagination);

      const querySnapshot = await getDocs(firestoreQuery);
      const communities = [];
      querySnapshot.forEach((doc) => {
        communities.push({ id: doc.id, ...doc.data() });
      });

      // Handle exclude filter (for similar communities)
      let filteredCommunities = communities;
      if (filters.exclude && Array.isArray(filters.exclude)) {
        filteredCommunities = communities.filter(
          (community) => !filters.exclude.includes(community.id)
        );
      }

      return createApiResponse({
        communities: filteredCommunities,
        total: filteredCommunities.length,
        pagination: {
          page: pagination.page || 1,
          limit: pagination.limit || 10,
          hasNext: querySnapshot.docs.length === (pagination.limit || 10),
        },
      });
    } catch (error) {
      return createApiError(
        `Failed to fetch communities: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async getFeaturedCommunities(limit = 6) {
    try {
      const result = await this.getCommunities(
        { featured: true },
        { limit },
        { field: "members", direction: "desc" }
      );

      if (!result.success) {
        return result;
      }

      return createApiResponse({
        communities: result.data.communities,
        total: result.data.total,
      });
    } catch (error) {
      return createApiError(
        `Failed to fetch featured communities: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async getCommunityById(id) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { doc, getDoc } = await import("firebase/firestore");
      const docRef = doc(this.db, COLLECTION_NAMES.COMMUNITIES, id.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return createApiResponse({
          community: { id: docSnap.id, ...docSnap.data() },
        });
      } else {
        return createApiError(`Community with id ${id} not found`, "NOT_FOUND");
      }
    } catch (error) {
      return createApiError(
        `Failed to fetch community: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async createCommunity(communityData) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, addDoc, Timestamp } = await import(
        "firebase/firestore"
      );

      const newCommunity = {
        ...communityData,
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
        members: communityData.members || 0,
        featured: communityData.featured || false,
      };

      const docRef = await addDoc(
        collection(this.db, COLLECTION_NAMES.COMMUNITIES),
        newCommunity
      );

      return createApiResponse({
        community: { id: docRef.id, ...newCommunity },
        message: "Community created successfully",
      });
    } catch (error) {
      return createApiError(
        `Failed to create community: ${error.message}`,
        "CREATE_ERROR"
      );
    }
  }

  async updateCommunity(id, updates) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { doc, updateDoc, Timestamp } = await import("firebase/firestore");
      const docRef = doc(this.db, COLLECTION_NAMES.COMMUNITIES, id.toString());

      const updateData = {
        ...updates,
        updated_at: Timestamp.now(),
      };

      await updateDoc(docRef, updateData);

      return createApiResponse({
        message: "Community updated successfully",
      });
    } catch (error) {
      return createApiError(
        `Failed to update community: ${error.message}`,
        "UPDATE_ERROR"
      );
    }
  }

  async deleteCommunity(id) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { doc, deleteDoc } = await import("firebase/firestore");
      const docRef = doc(this.db, COLLECTION_NAMES.COMMUNITIES, id.toString());

      await deleteDoc(docRef);

      return createApiResponse({
        message: "Community deleted successfully",
      });
    } catch (error) {
      return createApiError(
        `Failed to delete community: ${error.message}`,
        "DELETE_ERROR"
      );
    }
  }
  async getEvents(filters = {}, pagination = {}, sort = {}) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, getDocs } = await import("firebase/firestore");

      let firestoreQuery = collection(this.db, COLLECTION_NAMES.EVENTS);

      // Apply filters
      firestoreQuery = await this._applyFilters(firestoreQuery, filters);

      // Apply sorting (default: by date asc for upcoming events)
      if (!sort.field) {
        sort = { field: "date", direction: "asc" };
      }
      firestoreQuery = await this._applySorting(firestoreQuery, sort);

      // Apply pagination
      firestoreQuery = await this._applyPagination(firestoreQuery, pagination);

      const querySnapshot = await getDocs(firestoreQuery);
      const events = [];
      querySnapshot.forEach((doc) => {
        events.push({ id: doc.id, ...doc.data() });
      });

      return createApiResponse({
        events,
        total: events.length,
        pagination: {
          page: pagination.page || 1,
          limit: pagination.limit || 10,
          hasNext: querySnapshot.docs.length === (pagination.limit || 10),
        },
      });
    } catch (error) {
      return createApiError(
        `Failed to fetch events: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async getUpcomingEvents(limit = 10) {
    try {
      const today = new Date().toISOString().split("T")[0];
      const result = await this.getEvents(
        { upcoming: true },
        { limit },
        { field: "date", direction: "asc" }
      );

      if (!result.success) {
        return result;
      }

      return createApiResponse({
        events: result.data.events,
        total: result.data.total,
      });
    } catch (error) {
      return createApiError(
        `Failed to fetch upcoming events: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async getEventById(id) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { doc, getDoc } = await import("firebase/firestore");
      const docRef = doc(this.db, COLLECTION_NAMES.EVENTS, id.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return createApiResponse({
          event: { id: docSnap.id, ...docSnap.data() },
        });
      } else {
        return createApiError(`Event with id ${id} not found`, "NOT_FOUND");
      }
    } catch (error) {
      return createApiError(
        `Failed to fetch event: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async createEvent(eventData) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, addDoc, Timestamp } = await import(
        "firebase/firestore"
      );

      const newEvent = {
        ...eventData,
        created_at: Timestamp.now(),
        status: eventData.status || "upcoming",
      };

      const docRef = await addDoc(
        collection(this.db, COLLECTION_NAMES.EVENTS),
        newEvent
      );

      return createApiResponse({
        event: { id: docRef.id, ...newEvent },
        message: "Event created successfully",
      });
    } catch (error) {
      return createApiError(
        `Failed to create event: ${error.message}`,
        "CREATE_ERROR"
      );
    }
  }

  async registerForEvent(eventId, userData) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, addDoc, Timestamp } = await import(
        "firebase/firestore"
      );

      const registration = {
        eventId,
        ...userData,
        registered_at: Timestamp.now(),
        status: "confirmed",
      };

      const docRef = await addDoc(
        collection(this.db, "event_registrations"),
        registration
      );

      return createApiResponse({
        registration: { id: docRef.id, ...registration },
        message: "Successfully registered for event",
      });
    } catch (error) {
      return createApiError(
        `Failed to register for event: ${error.message}`,
        "REGISTRATION_ERROR"
      );
    }
  }
  async getNews(filters = {}, pagination = {}, sort = {}) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, getDocs } = await import("firebase/firestore");

      let firestoreQuery = collection(this.db, COLLECTION_NAMES.NEWS);

      // Apply filters
      firestoreQuery = await this._applyFilters(firestoreQuery, filters);

      // Apply sorting (default: by date desc)
      if (!sort.field) {
        sort = { field: "created_at", direction: "desc" };
      }
      firestoreQuery = await this._applySorting(firestoreQuery, sort);

      // Apply pagination
      firestoreQuery = await this._applyPagination(firestoreQuery, pagination);

      const querySnapshot = await getDocs(firestoreQuery);
      const news = [];
      querySnapshot.forEach((doc) => {
        news.push({ id: doc.id, ...doc.data() });
      });

      return createApiResponse({
        news,
        total: news.length,
        pagination: {
          page: pagination.page || 1,
          limit: pagination.limit || 10,
          hasNext: querySnapshot.docs.length === (pagination.limit || 10),
        },
      });
    } catch (error) {
      return createApiError(
        `Failed to fetch news: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async getNewsById(id) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { doc, getDoc } = await import("firebase/firestore");
      const docRef = doc(this.db, COLLECTION_NAMES.NEWS, id.toString());
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return createApiResponse({
          article: { id: docSnap.id, ...docSnap.data() },
        });
      } else {
        return createApiError(
          `News article with id ${id} not found`,
          "NOT_FOUND"
        );
      }
    } catch (error) {
      return createApiError(
        `Failed to fetch news article: ${error.message}`,
        "FETCH_ERROR"
      );
    }
  }

  async createNews(newsData) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, addDoc, Timestamp } = await import(
        "firebase/firestore"
      );

      const newArticle = {
        ...newsData,
        created_at: Timestamp.now(),
        date: newsData.date || new Date().toISOString().split("T")[0],
      };

      const docRef = await addDoc(
        collection(this.db, COLLECTION_NAMES.NEWS),
        newArticle
      );

      return createApiResponse({
        article: { id: docRef.id, ...newArticle },
        message: "News article created successfully",
      });
    } catch (error) {
      return createApiError(
        `Failed to create news article: ${error.message}`,
        "CREATE_ERROR"
      );
    }
  }

  async submitContact(contactData) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, addDoc, Timestamp } = await import(
        "firebase/firestore"
      );

      const contactSubmission = {
        ...contactData,
        submitted_at: Timestamp.now(),
        status: "new",
      };

      const docRef = await addDoc(
        collection(this.db, "contact_submissions"),
        contactSubmission
      );

      return createApiResponse({
        submission: { id: docRef.id, ...contactSubmission },
        message: "Contact form submitted successfully",
      });
    } catch (error) {
      return createApiError(
        `Failed to submit contact form: ${error.message}`,
        "SUBMIT_ERROR"
      );
    }
  }

  async subscribeNewsletter(email, preferences = {}) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, addDoc, Timestamp } = await import(
        "firebase/firestore"
      );

      const subscription = {
        email,
        preferences,
        subscribed_at: Timestamp.now(),
        status: "active",
      };

      const docRef = await addDoc(
        collection(this.db, "newsletter_subscriptions"),
        subscription
      );

      return createApiResponse({
        subscription: { id: docRef.id, ...subscription },
        message: "Successfully subscribed to newsletter",
      });
    } catch (error) {
      return createApiError(
        `Failed to subscribe to newsletter: ${error.message}`,
        "SUBSCRIPTION_ERROR"
      );
    }
  }

  async unsubscribeNewsletter(email) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, query, where, getDocs, updateDoc, doc } =
        await import("firebase/firestore");

      const q = query(
        collection(this.db, "newsletter_subscriptions"),
        where("email", "==", email)
      );

      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return createApiError("Email not found in subscriptions", "NOT_FOUND");
      }

      querySnapshot.forEach(async (docSnap) => {
        await updateDoc(doc(this.db, "newsletter_subscriptions", docSnap.id), {
          status: "unsubscribed",
          unsubscribed_at: Timestamp.now(),
        });
      });

      return createApiResponse({
        message: "Successfully unsubscribed from newsletter",
      });
    } catch (error) {
      return createApiError(
        `Failed to unsubscribe from newsletter: ${error.message}`,
        "UNSUBSCRIBE_ERROR"
      );
    }
  }

  async search(query, collections = [], filters = {}) {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const results = { communities: [], events: [], news: [] };
      const searchTerm = query.toLowerCase();

      // Search in specified collections or all by default
      const collectionsToSearch =
        collections.length > 0
          ? collections
          : ["communities", "events", "news"];

      for (const collectionName of collectionsToSearch) {
        const { collection, getDocs } = await import("firebase/firestore");
        const querySnapshot = await getDocs(
          collection(this.db, collectionName)
        );

        querySnapshot.forEach((doc) => {
          const data = doc.data();
          const matchesSearch =
            (data.name && data.name.toLowerCase().includes(searchTerm)) ||
            (data.title && data.title.toLowerCase().includes(searchTerm)) ||
            (data.description &&
              data.description.toLowerCase().includes(searchTerm)) ||
            (data.content && data.content.toLowerCase().includes(searchTerm)) ||
            (data.tags &&
              data.tags.some((tag) => tag.toLowerCase().includes(searchTerm)));

          if (matchesSearch) {
            results[collectionName].push({ id: doc.id, ...data });
          }
        });
      }

      return createApiResponse({
        results,
        query,
        total: Object.values(results).reduce((acc, arr) => acc + arr.length, 0),
      });
    } catch (error) {
      return createApiError(
        `Failed to perform search: ${error.message}`,
        "SEARCH_ERROR"
      );
    }
  }

  async healthCheck() {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      // Try a simple read operation to test connectivity
      const { collection, limit, getDocs, query } = await import(
        "firebase/firestore"
      );
      await getDocs(
        query(collection(this.db, COLLECTION_NAMES.COMMUNITIES), limit(1))
      );

      return createApiResponse({
        status: "healthy",
        backend: "firebase",
        timestamp: new Date().toISOString(),
        projectId: this.firebaseApp.options.projectId,
      });
    } catch (error) {
      return createApiError(
        `Firebase health check failed: ${error.message}`,
        "HEALTH_CHECK_ERROR"
      );
    }
  }

  async getStats() {
    try {
      if (!this.isInitialized) {
        await this.initialize();
      }

      const { collection, getDocs } = await import("firebase/firestore");

      const [communitiesSnapshot, eventsSnapshot, newsSnapshot] =
        await Promise.all([
          getDocs(collection(this.db, COLLECTION_NAMES.COMMUNITIES)),
          getDocs(collection(this.db, COLLECTION_NAMES.EVENTS)),
          getDocs(collection(this.db, COLLECTION_NAMES.NEWS)),
        ]);

      // Calculate additional stats
      let totalMembers = 0;
      let featuredCommunities = 0;

      communitiesSnapshot.forEach((doc) => {
        const data = doc.data();
        totalMembers += data.members || 0;
        if (data.featured) featuredCommunities++;
      });

      const stats = {
        communities: communitiesSnapshot.size,
        events: eventsSnapshot.size,
        news: newsSnapshot.size,
        totalMembers,
        featuredCommunities,
        lastUpdated: new Date().toISOString(),
      };

      return createApiResponse({ stats });
    } catch (error) {
      return createApiError(
        `Failed to fetch stats: ${error.message}`,
        "STATS_ERROR"
      );
    }
  }
}
