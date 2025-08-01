import { useState, useEffect, useCallback } from "react";
import { apiService } from "../services/newApi.js";

// Enhanced version of useApi that supports the new backend interface
export const useApiV2 = (apiMethod, params = [], options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastFetch, setLastFetch] = useState(null);

  const {
    cache = false,
    cacheDuration = 5 * 60 * 1000, // 5 minutes
    retryAttempts = 0,
    retryDelay = 1000,
    onSuccess,
    onError,
  } = options;

  const fetchData = useCallback(
    async (customParams = params, skipCache = false) => {
      try {
        setLoading(true);
        setError(null);

        // Check cache if enabled
        if (cache && !skipCache && lastFetch && data) {
          const timeSinceLastFetch = Date.now() - lastFetch;
          if (timeSinceLastFetch < cacheDuration) {
            setLoading(false);
            return data;
          }
        }

        let result;
        let attempts = 0;

        while (attempts <= retryAttempts) {
          try {
            // Call the API method on the service
            if (typeof apiMethod === "string") {
              result = await apiService[apiMethod](...customParams);
            } else {
              result = await apiMethod(...customParams);
            }
            break;
          } catch (err) {
            attempts++;
            if (attempts > retryAttempts) {
              throw err;
            }
            await new Promise((resolve) =>
              setTimeout(resolve, retryDelay * attempts)
            );
          }
        }

        setData(result);
        setLastFetch(Date.now());

        if (onSuccess) {
          onSuccess(result);
        }

        return result;
      } catch (err) {
        const errorMessage = err.message || "An error occurred";
        setError(errorMessage);

        if (onError) {
          onError(err);
        }

        throw err;
      } finally {
        setLoading(false);
      }
    },
    [
      apiMethod,
      params,
      cache,
      cacheDuration,
      retryAttempts,
      retryDelay,
      onSuccess,
      onError,
      lastFetch,
      data,
    ]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const invalidateCache = useCallback(() => {
    setLastFetch(null);
  }, []);

  const refetch = useCallback(
    (customParams) => {
      return fetchData(customParams, true); // Skip cache on manual refetch
    },
    [fetchData]
  );

  return {
    data,
    loading,
    error,
    refetch,
    invalidateCache,
    lastFetch: lastFetch ? new Date(lastFetch) : null,
  };
};

// Backward compatible version that maintains the original interface
export const useApi = (apiFunction, params = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (customParams = params) => {
      try {
        setLoading(true);
        setError(null);
        const result = await apiFunction(...customParams);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    },
    [apiFunction, params]
  );

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

// Specialized hooks for common operations
export const useCommunities = (filters = {}, options = {}) => {
  return useApiV2("fetchCommunities", [filters], {
    cache: true,
    cacheDuration: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
};

export const useFeaturedCommunities = (limit = 6, options = {}) => {
  return useApiV2("fetchFeaturedCommunities", [limit], {
    cache: true,
    cacheDuration: 30 * 60 * 1000, // 30 minutes
    ...options,
  });
};

export const useCommunityDetails = (id, options = {}) => {
  return useApiV2("fetchCommunityDetails", [id], {
    cache: true,
    cacheDuration: 15 * 60 * 1000, // 15 minutes
    ...options,
  });
};

export const useEvents = (filters = {}, options = {}) => {
  return useApiV2("fetchEvents", [filters], {
    cache: true,
    cacheDuration: 5 * 60 * 1000, // 5 minutes
    ...options,
  });
};

export const useNews = (filters = {}, options = {}) => {
  return useApiV2("fetchNews", [filters], {
    cache: true,
    cacheDuration: 10 * 60 * 1000, // 10 minutes
    ...options,
  });
};

// Mutation hooks for write operations
export const useSubmitContact = (options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submit = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const result = await apiService.submitContact(formData);
      setSuccess(true);

      if (options.onSuccess) {
        options.onSuccess(result);
      }

      return result;
    } catch (err) {
      setError(err.message);

      if (options.onError) {
        options.onError(err);
      }

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading, error, success };
};

export const useNewsletterSubscription = (options = {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email, preferences = {}) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      const result = await apiService.subscribeNewsletter(email, preferences);
      setSuccess(true);

      if (options.onSuccess) {
        options.onSuccess(result);
      }

      return result;
    } catch (err) {
      setError(err.message);

      if (options.onError) {
        options.onError(err);
      }

      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { subscribe, loading, error, success };
};
