export const REGIONS = [
  "All Regions",
  "Littoral",
  "Centre",
  "South West",
  "North West",
  "West",
  "East",
  "Adamawa",
  "North",
  "Far North",
  "South",
];

export const COMMUNITY_TYPES = [
  "Software Development",
  "AI & Machine Learning",
  "Startup Ecosystem",
  "Design & UX",
  "Blockchain",
  "Women in Tech",
  "Mobile Development",
  "Data Science",
  "DevOps & Cloud",
  "Cybersecurity",
  "IoT & Hardware",
  "Game Development",
];

export const CONTACT_SUBJECTS = [
  "General Inquiry",
  "List My Community",
  "Event Promotion",
  "Partnership Opportunity",
  "Technical Support",
  "Media & Press",
  "Sponsorship",
  "Feedback & Suggestions",
];

export const EVENT_TYPES = [
  "Conference",
  "Workshop",
  "Meetup",
  "Hackathon",
  "Webinar",
  "Networking",
  "Training",
  "Panel Discussion",
];

export const NEWS_CATEGORIES = [
  "Community News",
  "Tech Updates",
  "Startup Funding",
  "New Partnerships",
  "Event Announcements",
  "Achievement & Awards",
  "Product Launches",
  "Research & Innovation",
];

export const MEMBER_SIZE_RANGES = [
  { label: "Any Size", min: 0, max: null },
  { label: "1-50 members", min: 1, max: 50 },
  { label: "51-200 members", min: 51, max: 200 },
  { label: "201-500 members", min: 201, max: 500 },
  { label: "501-1000 members", min: 501, max: 1000 },
  { label: "1000+ members", min: 1000, max: null },
];

export const COMMUNITY_TAGS = [
  // Programming Languages
  "JavaScript",
  "Python",
  "Java",
  "TypeScript",
  "PHP",
  "C++",
  "Go",
  "Rust",
  "Swift",
  "Kotlin",

  // Frameworks & Technologies
  "React",
  "Vue.js",
  "Angular",
  "Node.js",
  "Laravel",
  "Django",
  "Flutter",
  "React Native",

  // Specializations
  "Web Development",
  "Mobile Development",
  "Frontend",
  "Backend",
  "Full Stack",
  "DevOps",
  "Cloud Computing",
  "Machine Learning",
  "Data Science",
  "Artificial Intelligence",
  "Blockchain",
  "Cryptocurrency",
  "Cybersecurity",
  "Game Development",
  "AR/VR",
  "IoT",

  // Design & UX
  "UI Design",
  "UX Design",
  "Product Design",
  "Graphic Design",
  "Motion Graphics",

  // Business & Entrepreneurship
  "Startups",
  "Innovation",
  "Digital Marketing",
  "E-commerce",
  "Fintech",
  "Edtech",
  "Healthtech",
  "Agritech",

  // Community Focus
  "Women in Tech",
  "Youth Development",
  "Mentorship",
  "Networking",
  "Open Source",
  "Remote Work",
  "Freelancing",
  "Career Development",
];

export const SOCIAL_PLATFORMS = [
  {
    name: "Website",
    icon: "ri-global-line",
    placeholder: "https://example.com",
  },
  {
    name: "Twitter",
    icon: "ri-twitter-x-line",
    placeholder: "https://twitter.com/username",
  },
  {
    name: "Facebook",
    icon: "ri-facebook-fill",
    placeholder: "https://facebook.com/page",
  },
  {
    name: "LinkedIn",
    icon: "ri-linkedin-fill",
    placeholder: "https://linkedin.com/company/name",
  },
  {
    name: "Instagram",
    icon: "ri-instagram-line",
    placeholder: "https://instagram.com/username",
  },
  {
    name: "GitHub",
    icon: "ri-github-fill",
    placeholder: "https://github.com/organization",
  },
  {
    name: "Discord",
    icon: "ri-discord-fill",
    placeholder: "https://discord.gg/invite",
  },
  {
    name: "Slack",
    icon: "ri-slack-fill",
    placeholder: "https://workspace.slack.com",
  },
  {
    name: "Telegram",
    icon: "ri-telegram-fill",
    placeholder: "https://t.me/channel",
  },
  {
    name: "WhatsApp",
    icon: "ri-whatsapp-line",
    placeholder: "https://chat.whatsapp.com/invite",
  },
  {
    name: "YouTube",
    icon: "ri-youtube-fill",
    placeholder: "https://youtube.com/channel",
  },
];

export const API_ENDPOINTS = {
  // Communities
  COMMUNITIES: "/api/communities",
  FEATURED_COMMUNITIES: "/api/communities/featured",
  COMMUNITY_DETAILS: "/api/communities/:id",
  SUBMIT_COMMUNITY: "/api/communities/submit",

  // Events
  EVENTS: "/api/events",
  UPCOMING_EVENTS: "/api/events/upcoming",
  EVENT_DETAILS: "/api/events/:id",
  REGISTER_EVENT: "/api/events/:id/register",

  // News
  NEWS: "/api/news",
  NEWS_DETAILS: "/api/news/:id",

  // Contact & Communication
  CONTACT: "/api/contact",
  NEWSLETTER: "/api/newsletter",

  // Search & Filters
  SEARCH: "/api/search",
  MAP_DATA: "/api/map",
};

export const PAGINATION_SIZES = [6, 12, 24, 48];

export const SORT_OPTIONS = [
  { value: "name_asc", label: "Name (A-Z)" },
  { value: "name_desc", label: "Name (Z-A)" },
  { value: "members_desc", label: "Most Members" },
  { value: "members_asc", label: "Least Members" },
  { value: "created_desc", label: "Newest First" },
  { value: "created_asc", label: "Oldest First" },
  { value: "activity_desc", label: "Most Active" },
];

export const FILTER_PRESETS = [
  {
    name: "All Communities",
    filters: {
      regions: ["All Regions"],
      categories: COMMUNITY_TYPES,
      memberSize: 0,
      tags: [],
    },
  },
  {
    name: "Large Communities",
    filters: {
      regions: ["All Regions"],
      categories: COMMUNITY_TYPES,
      memberSize: 500,
      tags: [],
    },
  },
  {
    name: "Women in Tech",
    filters: {
      regions: ["All Regions"],
      categories: ["Women in Tech"],
      memberSize: 0,
      tags: ["Women in Tech", "Mentorship", "Diversity"],
    },
  },
  {
    name: "Startup Ecosystem",
    filters: {
      regions: ["All Regions"],
      categories: ["Startup Ecosystem"],
      memberSize: 0,
      tags: ["Startups", "Innovation", "Entrepreneurship"],
    },
  },
  {
    name: "AI & Data Science",
    filters: {
      regions: ["All Regions"],
      categories: ["AI & Machine Learning", "Data Science"],
      memberSize: 0,
      tags: ["AI", "ML", "Data Science", "Machine Learning"],
    },
  },
];

export const CAMEROON_CITIES = [
  // Major Cities
  { name: "Douala", region: "Littoral", coordinates: [9.7043, 4.0614] },
  { name: "Yaounde", region: "Centre", coordinates: [11.5174, 3.848] },
  { name: "Buea", region: "South West", coordinates: [9.2395, 4.1556] },
  { name: "Bamenda", region: "North West", coordinates: [10.1578, 5.9631] },
  { name: "Bafoussam", region: "West", coordinates: [10.4167, 5.4667] },
  { name: "Limbe", region: "South West", coordinates: [9.2145, 4.0156] },
  { name: "Kribi", region: "South", coordinates: [9.9076, 2.9373] },
  { name: "Bertoua", region: "East", coordinates: [13.6843, 4.5776] },
  { name: "Ngaoundéré", region: "Adamawa", coordinates: [13.5847, 7.3167] },
  { name: "Garoua", region: "North", coordinates: [13.4, 9.3] },
  { name: "Maroua", region: "Far North", coordinates: [14.3203, 10.5916] },
  { name: "Ebolowa", region: "South", coordinates: [11.1547, 2.9167] },
];

export const THEME_COLORS = {
  primary: "#009639", // Green from Cameroon flag
  secondary: "#CE1126", // Red from Cameroon flag
  accent: "#FCDD16", // Yellow from Cameroon flag
  success: "#10B981",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",
};

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const ANIMATION_DURATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
};

export const LOCAL_STORAGE_KEYS = {
  THEME: "tech_communities_theme",
  FILTERS: "tech_communities_filters",
  FAVORITES: "tech_communities_favorites",
  RECENT_SEARCHES: "tech_communities_recent_searches",
};

export const FORM_VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^(\+237|237)?[0-9]{8,9}$/,
  URL_REGEX:
    /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&=]*)$/,
  MIN_PASSWORD_LENGTH: 8,
  MAX_MESSAGE_LENGTH: 1000,
  MAX_DESCRIPTION_LENGTH: 500,
};

export const DEFAULT_PAGINATION = {
  page: 1,
  limit: 12,
  total: 0,
  hasMore: false,
};

export const MAP_CONFIG = {
  DEFAULT_CENTER: [11.5174, 3.848], // Yaounde coordinates
  DEFAULT_ZOOM: 6,
  MIN_ZOOM: 5,
  MAX_ZOOM: 15,
  MARKER_COLORS: {
    "Software Development": "#3B82F6", // Blue
    "AI & Machine Learning": "#8B5CF6", // Purple
    "Startup Ecosystem": "#EF4444", // Red
    "Design & UX": "#F97316", // Orange
    Blockchain: "#10B981", // Green
    "Women in Tech": "#EC4899", // Pink
    default: "#6B7280", // Gray
  },
};

// Backend Configuration
export const BACKEND_CONFIG = {
  TYPES: {
    MOCK: "mock",
    FIREBASE: "firebase",
    SUPABASE: "supabase",
  },
  COLLECTIONS: {
    COMMUNITIES: "communities",
    EVENTS: "events",
    NEWS: "news",
    CONTACTS: "contacts",
    NEWSLETTER_SUBSCRIPTIONS: "newsletter_subscriptions",
  },
  CACHE_DURATION: {
    SHORT: 5 * 60 * 1000, // 5 minutes
    MEDIUM: 30 * 60 * 1000, // 30 minutes
    LONG: 60 * 60 * 1000, // 1 hour
  },
};

// Data Migration Settings
export const MIGRATION_CONFIG = {
  BATCH_SIZE: 100,
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000,
  BACKUP_ENABLED: true,
};

// API Response Codes
export const API_RESPONSE_CODES = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
  NOT_FOUND: "NOT_FOUND",
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  RATE_LIMITED: "RATE_LIMITED",
  SERVER_ERROR: "SERVER_ERROR",
};
