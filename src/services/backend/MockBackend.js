import {
  createApiResponse,
  createApiError,
  COLLECTION_NAMES,
} from "./types.js";
import { normalizedCommunities } from "./normalizedCommunities.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockBackend {
  constructor(config = {}) {
    this.config = config;
    this.isInitialized = false;
    this.mockData = {
      communities: normalizedCommunities,
      events: [],
      news: [],
    };
  }

  async initialize() {
    await delay(100);
    this.isInitialized = true;
    return createApiResponse({
      message: "Mock backend initialized successfully",
    });
  }

  async getCommunities(
    filters = {},
    pagination = { page: 1, limit: 12 },
    sort = { field: "name", direction: "asc" },
  ) {
    await delay(800);

    let communities = [...this.mockData.communities]; // Apply filters
    if (filters.exclude && filters.exclude.length > 0) {
      communities = communities.filter(
        (c) => !filters.exclude.includes(c.id.toString()),
      );
    }
    if (filters.region && filters.region !== "All Regions") {
      communities = communities.filter((c) => c.region === filters.region);
    }
    if (filters.category) {
      communities = communities.filter((c) => c.category === filters.category);
    }
    if (filters.tags && filters.tags.length > 0) {
      communities = communities.filter((c) =>
        filters.tags.some((tag) => c.tags.includes(tag)),
      );
    }
    if (filters.minMembers) {
      communities = communities.filter((c) => c.members >= filters.minMembers);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      communities = communities.filter(
        (c) =>
          c.name.toLowerCase().includes(searchLower) ||
          c.description.toLowerCase().includes(searchLower) ||
          c.tags.some((tag) => tag.toLowerCase().includes(searchLower)),
      );
    }

    // Apply sorting
    communities.sort((a, b) => {
      const aVal = a[sort.field];
      const bVal = b[sort.field];
      const direction = sort.direction === "desc" ? -1 : 1;

      if (typeof aVal === "string") {
        return aVal.localeCompare(bVal) * direction;
      }
      return (aVal - bVal) * direction;
    });

    // Apply pagination
    const startIndex = (pagination.page - 1) * pagination.limit;
    const endIndex = startIndex + pagination.limit;
    const paginatedCommunities = communities.slice(startIndex, endIndex);

    return createApiResponse({
      communities: paginatedCommunities,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: communities.length,
        hasMore: endIndex < communities.length,
      },
    });
  }

  async getFeaturedCommunities(limit = 6) {
    await delay(1000);
    const featured = this.mockData.communities
      .filter((c) => c.featured)
      .slice(0, limit);

    return createApiResponse({ communities: featured });
  }

  async getCommunityById(id) {
    await delay(1200);
    const community = this.mockData.communities.find(
      (c) => c.id.toString() === id.toString(),
    );

    if (!community) {
      return createApiError(`Community with id ${id} not found`, "NOT_FOUND");
    }

    // Add additional details for single community view
    const detailedCommunity = {
      ...community,
      mission: "",
      vision: " ",
      values: [],
      activities: [],
      achievements: [],
      socialLinks: {},
    };

    return createApiResponse({ community: detailedCommunity });
  }

  async getEvents(
    filters = {},
    pagination = { page: 1, limit: 10 },
    sort = { field: "date", direction: "asc" },
  ) {
    await delay(1200);

    let events = [...this.mockData.events];

    // Apply filters
    if (filters.upcoming) {
      const today = new Date().toISOString().split("T")[0];
      events = events.filter((e) => e.date >= today);
    }
    if (filters.hostId) {
      events = events.filter(
        (e) => e.hostId.toString() === filters.hostId.toString(),
      );
    }
    if (filters.type) {
      events = events.filter((e) => e.type === filters.type);
    }

    // Apply sorting
    events.sort((a, b) => {
      const aVal = a[sort.field];
      const bVal = b[sort.field];
      const direction = sort.direction === "desc" ? -1 : 1;

      if (sort.field === "date") {
        return new Date(aVal).getTime() - new Date(bVal).getTime() * direction;
      }
      return aVal.localeCompare(bVal) * direction;
    });

    // Apply pagination
    const startIndex = (pagination.page - 1) * pagination.limit;
    const endIndex = startIndex + pagination.limit;
    const paginatedEvents = events.slice(startIndex, endIndex);

    return createApiResponse({
      events: paginatedEvents,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: events.length,
        hasMore: endIndex < events.length,
      },
    });
  }

  async getUpcomingEvents(limit = 10) {
    const result = await this.getEvents(
      { upcoming: true },
      { page: 1, limit },
      { field: "date", direction: "asc" },
    );
    return result;
  }

  async getNews(
    filters = {},
    pagination = { page: 1, limit: 6 },
    sort = { field: "date", direction: "desc" },
  ) {
    await delay(900);

    let news = [...this.mockData.news];

    // Apply filters
    if (filters.category) {
      news = news.filter((n) => n.category === filters.category);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      news = news.filter(
        (n) =>
          n.title.toLowerCase().includes(searchLower) ||
          n.excerpt.toLowerCase().includes(searchLower),
      );
    }

    // Apply sorting
    news.sort((a, b) => {
      const aVal = a[sort.field];
      const bVal = b[sort.field];
      const direction = sort.direction === "desc" ? -1 : 1;

      if (sort.field === "date") {
        return (
          (new Date(aVal).getTime() - new Date(bVal).getTime()) * direction
        );
      }
      return aVal.localeCompare(bVal) * direction;
    });

    // Apply pagination
    const startIndex = (pagination.page - 1) * pagination.limit;
    const endIndex = startIndex + pagination.limit;
    const paginatedNews = news.slice(startIndex, endIndex);

    return createApiResponse({
      news: paginatedNews,
      pagination: {
        page: pagination.page,
        limit: pagination.limit,
        total: news.length,
        hasMore: endIndex < news.length,
      },
    });
  }

  async submitContact(contactData) {
    await delay(1500);
    console.log("Contact form submitted:", contactData);
    return createApiResponse({ message: "Message sent successfully!" });
  }

  async subscribeNewsletter(email, preferences = {}) {
    await delay(1000);
    console.log("Newsletter subscription:", { email, preferences });
    return createApiResponse({ message: "Successfully subscribed!" });
  }

  async search(
    query,
    collections = [COLLECTION_NAMES.COMMUNITIES],
    filters = {},
  ) {
    await delay(1000);
    const results = {};

    if (collections.includes(COLLECTION_NAMES.COMMUNITIES)) {
      const communityResults = await this.getCommunities({
        search: query,
        ...filters,
      });
      results.communities = communityResults.data.communities;
    }

    if (collections.includes(COLLECTION_NAMES.EVENTS)) {
      const eventResults = await this.getEvents({ search: query, ...filters });
      results.events = eventResults.data.events;
    }

    if (collections.includes(COLLECTION_NAMES.NEWS)) {
      const newsResults = await this.getNews({ search: query, ...filters });
      results.news = newsResults.data.news;
    }

    return createApiResponse(results);
  }

  async healthCheck() {
    await delay(200);
    return createApiResponse({
      status: "healthy",
      backend: "mock",
      timestamp: new Date().toISOString(),
    });
  }

  async getStats() {
    await delay(500);
    return createApiResponse({
      totalCommunities: this.mockData.communities.length,
      totalMembers: this.mockData.communities.reduce(
        (sum, c) => sum + c.members,
        0,
      ),
      totalEvents: this.mockData.events.length,
      totalNews: this.mockData.news.length,
    });
  }

  // Placeholder implementations for create/update/delete operations
  async createCommunity(communityData) {
    await delay(1000);
    const newCommunity = {
      id: this.mockData.communities.length + 1,
      ...communityData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    this.mockData.communities.push(newCommunity);
    return createApiResponse({ community: newCommunity });
  }

  async updateCommunity(id, updates) {
    await delay(800);
    const index = this.mockData.communities.findIndex(
      (c) => c.id.toString() === id.toString(),
    );
    if (index === -1) {
      return createApiError(`Community with id ${id} not found`, "NOT_FOUND");
    }

    this.mockData.communities[index] = {
      ...this.mockData.communities[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };

    return createApiResponse({ community: this.mockData.communities[index] });
  }

  async deleteCommunity(id) {
    await delay(600);
    const index = this.mockData.communities.findIndex(
      (c) => c.id.toString() === id.toString(),
    );
    if (index === -1) {
      return createApiError(`Community with id ${id} not found`, "NOT_FOUND");
    }

    this.mockData.communities.splice(index, 1);
    return createApiResponse({ message: "Community deleted successfully" });
  }

  // Event operations
  async getEventById(id) {
    await delay(800);
    const event = this.mockData.events.find(
      (e) => e.id.toString() === id.toString(),
    );
    return event
      ? createApiResponse({ event })
      : createApiError(`Event with id ${id} not found`, "NOT_FOUND");
  }

  async createEvent(eventData) {
    await delay(1000);
    const newEvent = {
      id: this.mockData.events.length + 1,
      ...eventData,
      created_at: new Date().toISOString(),
    };
    this.mockData.events.push(newEvent);
    return createApiResponse({ event: newEvent });
  }

  async registerForEvent(eventId, userData) {
    await delay(1200);
    console.log("Event registration:", { eventId, userData });
    return createApiResponse({ message: "Successfully registered for event!" });
  }

  // News operations
  async getNewsById(id) {
    await delay(600);
    const newsItem = this.mockData.news.find(
      (n) => n.id.toString() === id.toString(),
    );
    return newsItem
      ? createApiResponse({ news: newsItem })
      : createApiError(`News with id ${id} not found`, "NOT_FOUND");
  }

  async createNews(newsData) {
    await delay(1000);
    const newNews = {
      id: this.mockData.news.length + 1,
      ...newsData,
      created_at: new Date().toISOString(),
    };
    this.mockData.news.push(newNews);
    return createApiResponse({ news: newNews });
  }

  async unsubscribeNewsletter(email) {
    await delay(800);
    console.log("Newsletter unsubscription:", email);
    return createApiResponse({ message: "Successfully unsubscribed!" });
  }
}
