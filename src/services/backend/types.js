// Backend interface types and constants

export const BACKEND_TYPES = {
  MOCK: "mock",
  FIREBASE: "firebase",
  SUPABASE: "supabase",
};

export const COLLECTION_NAMES = {
  COMMUNITIES: "communities",
  EVENTS: "events",
  NEWS: "news",
  CONTACTS: "contacts",
  NEWSLETTER_SUBSCRIPTIONS: "newsletter_subscriptions",
};

// Standard response format for all backends
export const createApiResponse = (
  data,
  success = true,
  message = null,
  meta = {}
) => ({
  success,
  data,
  message,
  meta: {
    timestamp: new Date().toISOString(),
    ...meta,
  },
});

// Standard error format
export const createApiError = (
  message,
  code = "UNKNOWN_ERROR",
  details = null
) => ({
  success: false,
  error: {
    message,
    code,
    details,
    timestamp: new Date().toISOString(),
  },
});

// Filter and sort options
export const FILTER_OPERATORS = {
  EQUALS: "eq",
  NOT_EQUALS: "neq",
  GREATER_THAN: "gt",
  LESS_THAN: "lt",
  GREATER_EQUAL: "gte",
  LESS_EQUAL: "lte",
  IN: "in",
  NOT_IN: "not_in",
  CONTAINS: "contains",
  STARTS_WITH: "starts_with",
  ENDS_WITH: "ends_with",
};

export const SORT_DIRECTIONS = {
  ASC: "asc",
  DESC: "desc",
};
