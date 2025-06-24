import { BaseBackend } from "./BaseBackend.js";
import {
  createApiResponse,
  createApiError,
  COLLECTION_NAMES,
} from "./types.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockBackend extends BaseBackend {
  constructor(config = {}) {
    super(config);
    this.mockData = {
      communities: [
        {
          id: 1,
          name: "Douala Developers",
          location: "Douala, Littoral",
          region: "Littoral",
          members: 785,
          description:
            "A vibrant community of software developers sharing knowledge and building innovative solutions for local challenges.",
          logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20software%20development%20community%20in%20Cameroon%2C%20featuring%20abstract%20code%20symbols%2C%20clean%20lines%2C%20blue%20and%20green%20colors%2C%20minimalist%20design&width=300&height=160&seq=com1&orientation=landscape",
          tags: ["JavaScript", "Python", "Web Dev"],
          category: "Software Development",
          featured: true,
          created_at: "2023-01-15T00:00:00Z",
          updated_at: "2025-01-15T00:00:00Z",
        },
        {
          id: 2,
          name: "Yaounde Tech Hub",
          location: "Yaounde, Centre",
          region: "Centre",
          members: 1245,
          description:
            "The capital's premier innovation space connecting entrepreneurs, developers, and investors to build Cameroon's digital future.",
          logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20tech%20startup%20hub%20in%20Cameroon%2C%20featuring%20abstract%20geometric%20shapes%2C%20red%20and%20yellow%20colors%2C%20minimalist%20design%20with%20tech%20elements&width=300&height=160&seq=com2&orientation=landscape",
          tags: ["Startups", "Innovation", "Coworking"],
          category: "Startup Ecosystem",
          featured: true,
          created_at: "2022-11-20T00:00:00Z",
          updated_at: "2025-01-10T00:00:00Z",
        },
        {
          id: 3,
          name: "Cameroon AI Alliance",
          location: "Multiple Locations",
          region: "Multiple",
          members: 632,
          description:
            "Advancing artificial intelligence and machine learning expertise through workshops, projects and research collaborations.",
          logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20an%20AI%20and%20data%20science%20community%20in%20Cameroon%2C%20featuring%20neural%20network%20patterns%2C%20purple%20and%20blue%20colors%2C%20minimalist%20tech%20design&width=300&height=160&seq=com3&orientation=landscape",
          tags: ["AI", "ML", "Data Science"],
          category: "AI & Machine Learning",
          featured: true,
          created_at: "2023-03-08T00:00:00Z",
          updated_at: "2025-01-12T00:00:00Z",
        },
        {
          id: 4,
          name: "Women Techmakers Buea",
          location: "Buea, South West",
          region: "South West",
          members: 418,
          description:
            "Empowering women in technology through mentorship, skill development workshops and networking opportunities.",
          logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20women%20in%20tech%20community%20in%20Cameroon%2C%20featuring%20abstract%20feminine%20tech%20symbols%2C%20teal%20and%20purple%20colors%2C%20minimalist%20design&width=300&height=160&seq=com4&orientation=landscape",
          tags: ["Women in Tech", "Mentorship", "Diversity"],
          category: "Women in Tech",
          featured: true,
          created_at: "2022-06-14T00:00:00Z",
          updated_at: "2025-01-08T00:00:00Z",
        },
        {
          id: 5,
          name: "Cameroon Blockchain Network",
          location: "Douala & Yaounde",
          region: "Multiple",
          members: 295,
          description:
            "Exploring blockchain applications for financial inclusion, supply chain and digital identity solutions in Cameroon.",
          logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20blockchain%20technology%20community%20in%20Cameroon%2C%20featuring%20blockchain%20pattern%20elements%2C%20green%20and%20blue%20colors%2C%20minimalist%20tech%20design&width=300&height=160&seq=com5&orientation=landscape",
          tags: ["Blockchain", "Crypto", "Web3"],
          category: "Blockchain",
          featured: true,
          created_at: "2023-09-22T00:00:00Z",
          updated_at: "2025-01-05T00:00:00Z",
        },
        {
          id: 6,
          name: "Cameroon UX Community",
          location: "Limbe, South West",
          region: "South West",
          members: 326,
          description:
            "Designers creating user-centered digital experiences with a focus on local context and accessibility considerations.",
          logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20UX%20design%20community%20in%20Cameroon%2C%20featuring%20design%20tool%20symbols%2C%20orange%20and%20blue%20colors%2C%20minimalist%20creative%20design&width=300&height=160&seq=com6&orientation=landscape",
          tags: ["UX Design", "UI", "Product"],
          category: "Design & UX",
          featured: true,
          created_at: "2023-05-30T00:00:00Z",
          updated_at: "2025-01-03T00:00:00Z",
        },
      ],
      events: [
        {
          id: 1,
          title: "Douala Developer Conference",
          date: "2025-05-28",
          time: "09:00 AM - 05:00 PM",
          location: "Akwa Palace Hotel, Douala",
          host: "Douala Developers",
          hostId: 1,
          description:
            "The largest annual gathering of software developers in Cameroon featuring workshops, talks, and networking opportunities.",
          type: "Conference",
          status: "upcoming",
          created_at: "2025-01-10T00:00:00Z",
        },
        {
          id: 2,
          title: "AI Summit Cameroon",
          date: "2025-06-10",
          time: "10:00 AM - 04:00 PM",
          location: "Hilton Hotel, Yaounde",
          host: "Cameroon AI Alliance",
          hostId: 3,
          description:
            "Exploring artificial intelligence applications and opportunities in the Cameroonian context with industry experts.",
          type: "Conference",
          status: "upcoming",
          created_at: "2025-01-08T00:00:00Z",
        },
        {
          id: 3,
          title: "Women in Tech Bootcamp",
          date: "2025-06-24",
          time: "09:00 AM - 05:00 PM (3 days)",
          location: "Silicon Mountain Hub, Buea",
          host: "Women Techmakers Buea",
          hostId: 4,
          description:
            "A three-day intensive coding bootcamp for women looking to start or advance their careers in technology.",
          type: "Workshop",
          status: "upcoming",
          created_at: "2025-01-05T00:00:00Z",
        },
        {
          id: 4,
          title: "Blockchain & Fintech Forum",
          date: "2025-07-15",
          time: "10:00 AM - 03:00 PM",
          location: "Sawa Hotel, Douala",
          host: "Cameroon Blockchain Network",
          hostId: 5,
          description:
            "Discussing the future of financial technology and blockchain applications in the Cameroonian economy.",
          type: "Forum",
          status: "upcoming",
          created_at: "2025-01-03T00:00:00Z",
        },
      ],
      news: [
        {
          id: 1,
          title: "Douala Hackathon Winners Secure $50,000 Investment",
          date: "2025-05-20",
          excerpt:
            "Team CodeCrafters from Douala Developers community won the annual hackathon with their innovative agricultural supply chain solution, securing major investment.",
          content: "Full news article content would go here...",
          image:
            "https://readdy.ai/api/search-image?query=A%20professional%20tech%20conference%20or%20hackathon%20scene%20in%20Cameroon%2C%20with%20diverse%20African%20developers%20presenting%20their%20work%20on%20stage.%20Modern%20event%20space%20with%20audience%2C%20professional%20lighting%2C%20subtle%20Cameroon%20flag%20colors%20in%20the%20background%20decorations.&width=400&height=250&seq=news1&orientation=landscape",
          category: "Achievement & Awards",
          author: "Tech News Cameroon",
          created_at: "2025-05-20T00:00:00Z",
        },
        {
          id: 2,
          title: "Women Techmakers Buea Launches Scholarship Program",
          date: "2025-05-15",
          excerpt:
            "The community has partnered with Google to offer 50 scholarships for women pursuing careers in software development and data science.",
          content: "Full news article content would go here...",
          image:
            "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20African%20women%20in%20tech%20at%20a%20workshop%20or%20training%20session%20in%20Cameroon.%20Women%20engaged%20with%20laptops%20and%20technology%2C%20collaborative%20learning%20environment.%20Modern%20tech%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news2&orientation=landscape",
          category: "Community News",
          author: "Women Techmakers Buea",
          created_at: "2025-05-15T00:00:00Z",
        },
      ],
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
    sort = { field: "name", direction: "asc" }
  ) {
    await delay(800);

    let communities = [...this.mockData.communities];

    // Apply filters
    if (filters.region && filters.region !== "All Regions") {
      communities = communities.filter((c) => c.region === filters.region);
    }
    if (filters.category) {
      communities = communities.filter((c) => c.category === filters.category);
    }
    if (filters.tags && filters.tags.length > 0) {
      communities = communities.filter((c) =>
        filters.tags.some((tag) => c.tags.includes(tag))
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
          c.tags.some((tag) => tag.toLowerCase().includes(searchLower))
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
      (c) => c.id.toString() === id.toString()
    );

    if (!community) {
      return createApiError(`Community with id ${id} not found`, "NOT_FOUND");
    }

    // Add additional details for single community view
    const detailedCommunity = {
      ...community,
      mission:
        "To empower local developers with cutting-edge skills while building innovative solutions that address Cameroon's unique technological challenges.",
      vision:
        "To be the leading tech community in Central Africa, recognized for producing world-class developers and groundbreaking digital solutions.",
      values: [
        "Innovation and Creativity",
        "Collaborative Learning",
        "Open Source Philosophy",
        "Local Impact Focus",
      ],
      activities: [
        {
          name: "Weekly Code Reviews",
          description: "Peer code review sessions to improve code quality",
          frequency: "Every Wednesday",
        },
        {
          name: "Monthly Hackathons",
          description: "Build solutions to local challenges in 48 hours",
          frequency: "Last weekend of each month",
        },
      ],
      achievements: [
        {
          title: "Best Tech Community Award 2024",
          description:
            "Recognized by Cameroon Tech Awards for outstanding community impact",
          date: "December 2024",
        },
      ],
      socialLinks: {
        website: `https://${community.name
          .toLowerCase()
          .replace(/\s+/g, "")}.cm`,
        twitter: `@${community.name.toLowerCase().replace(/\s+/g, "")}`,
        linkedin: `${community.name.toLowerCase().replace(/\s+/g, "")}`,
      },
    };

    return createApiResponse({ community: detailedCommunity });
  }

  async getEvents(
    filters = {},
    pagination = { page: 1, limit: 10 },
    sort = { field: "date", direction: "asc" }
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
        (e) => e.hostId.toString() === filters.hostId.toString()
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
      { field: "date", direction: "asc" }
    );
    return result;
  }

  async getNews(
    filters = {},
    pagination = { page: 1, limit: 6 },
    sort = { field: "date", direction: "desc" }
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
          n.excerpt.toLowerCase().includes(searchLower)
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
    filters = {}
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
        0
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
      (c) => c.id.toString() === id.toString()
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
      (c) => c.id.toString() === id.toString()
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
      (e) => e.id.toString() === id.toString()
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
      (n) => n.id.toString() === id.toString()
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
