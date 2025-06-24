import { getBackend } from "./backend/BackendFactory.js";
import { COLLECTION_NAMES } from "./backend/types.js";

// New API service that uses the backend interface
export class ApiService {
  constructor() {
    this.backend = null;
  }

  async initialize() {
    if (!this.backend) {
      this.backend = await getBackend();
    }
    return this.backend;
  }

  // Communities
  async fetchFeaturedCommunities(limit = 6) {
    const backend = await this.initialize();
    const result = await backend.getFeaturedCommunities(limit);

    if (!result.success) {
      throw new Error(
        result.error?.message || "Failed to fetch featured communities"
      );
    }

    return result.data;
  }

  async fetchCommunities(filters = {}) {
    const backend = await this.initialize();
    const result = await backend.getCommunities(filters);

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to fetch communities");
    }

    return result.data;
  }

  async fetchCommunityDetails(id) {
    const backend = await this.initialize();
    const result = await backend.getCommunityById(id);

    if (!result.success) {
      throw new Error(
        result.error?.message || "Failed to fetch community details"
      );
    }

    return result.data;
  }

  async fetchSimilarCommunities(currentId, limit = 3) {
    const backend = await this.initialize();
    const filters = { exclude: [currentId] };
    const pagination = { page: 1, limit };
    const result = await backend.getCommunities(filters, pagination);

    if (!result.success) {
      throw new Error(
        result.error?.message || "Failed to fetch similar communities"
      );
    }

    return result.data;
  }

  // Events
  async fetchEvents(filters = {}) {
    const backend = await this.initialize();
    const result = await backend.getEvents(filters);

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to fetch events");
    }

    return result.data;
  }

  async fetchUpcomingEvents(limit = 10) {
    const backend = await this.initialize();
    const result = await backend.getUpcomingEvents(limit);

    if (!result.success) {
      throw new Error(
        result.error?.message || "Failed to fetch upcoming events"
      );
    }

    return result.data;
  }

  async registerForEvent(eventId, userData) {
    const backend = await this.initialize();
    const result = await backend.registerForEvent(eventId, userData);

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to register for event");
    }

    return result.data;
  }

  // News
  async fetchNews(filters = {}) {
    const backend = await this.initialize();
    const result = await backend.getNews(filters);

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to fetch news");
    }

    return result.data;
  }

  async fetchNewsDetails(id) {
    const backend = await this.initialize();
    const result = await backend.getNewsById(id);

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to fetch news details");
    }

    return result.data;
  }

  // Contact & Communication
  async submitContact(formData) {
    const backend = await this.initialize();
    const result = await backend.submitContact(formData);

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to submit contact form");
    }

    return result.data;
  }

  async subscribeNewsletter(email, preferences = {}) {
    const backend = await this.initialize();
    const result = await backend.subscribeNewsletter(email, preferences);

    if (!result.success) {
      throw new Error(
        result.error?.message || "Failed to subscribe to newsletter"
      );
    }

    return result.data;
  }

  // Search
  async search(query, options = {}) {
    const backend = await this.initialize();
    const collections = options.collections || [COLLECTION_NAMES.COMMUNITIES];
    const filters = options.filters || {};

    const result = await backend.search(query, collections, filters);

    if (!result.success) {
      throw new Error(result.error?.message || "Search failed");
    }

    return result.data;
  }

  // Utility
  async getStats() {
    const backend = await this.initialize();
    const result = await backend.getStats();

    if (!result.success) {
      throw new Error(result.error?.message || "Failed to fetch stats");
    }

    return result.data;
  }

  async healthCheck() {
    const backend = await this.initialize();
    const result = await backend.healthCheck();

    if (!result.success) {
      throw new Error(result.error?.message || "Health check failed");
    }

    return result.data;
  }
}

// Create singleton instance
export const apiService = new ApiService();

// Export functions that maintain backward compatibility with your current API
export const fetchFeaturedCommunities = (...args) =>
  apiService.fetchFeaturedCommunities(...args);
export const fetchCommunities = (...args) =>
  apiService.fetchCommunities(...args);
export const fetchCommunityDetails = (...args) =>
  apiService.fetchCommunityDetails(...args);
export const fetchSimilarCommunities = (...args) =>
  apiService.fetchSimilarCommunities(...args);
export const fetchEvents = (...args) => apiService.fetchEvents(...args);
export const fetchNews = (...args) => apiService.fetchNews(...args);
export const submitContact = (...args) => apiService.submitContact(...args);
export const subscribeNewsletter = (...args) =>
  apiService.subscribeNewsletter(...args);
