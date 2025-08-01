import { MockBackend } from "./MockBackend.js";
import { BACKEND_TYPES } from "./types.js";

// Environment configuration
const getBackendConfig = () => {
  const type = import.meta.env.VITE_BACKEND_TYPE || BACKEND_TYPES.MOCK;

  const configs = {
    [BACKEND_TYPES.MOCK]: {
      type: BACKEND_TYPES.MOCK,
      delay: parseInt(import.meta.env.VITE_MOCK_DELAY) || 800,
    },
    [BACKEND_TYPES.FIREBASE]: {
      type: BACKEND_TYPES.FIREBASE,
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    },
    [BACKEND_TYPES.SUPABASE]: {
      type: BACKEND_TYPES.SUPABASE,
      url: import.meta.env.VITE_SUPABASE_URL,
      anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },
  };

  return configs[type];
};

// Backend factory
export class BackendFactory {
  static async createBackend(customConfig = null) {
    const config = customConfig || getBackendConfig();
    switch (config.type) {
      case BACKEND_TYPES.MOCK:
        return new MockBackend(config);

      case BACKEND_TYPES.FIREBASE: {
        // Dynamic import to avoid loading Firebase unless needed
        const { FirebaseBackend } = await import("./FirebaseBackend.js");
        return new FirebaseBackend(config);
      }

      case BACKEND_TYPES.SUPABASE: {
        // Dynamic import to avoid loading Supabase unless needed
        const { SupabaseBackend } = await import("./SupabaseBackend.js");
        return new SupabaseBackend(config);
      }

      default:
        throw new Error(`Unsupported backend type: ${config.type}`);
    }
  }
}

// Singleton backend instance
let backendInstance = null;

export const getBackend = async () => {
  if (!backendInstance) {
    backendInstance = await BackendFactory.createBackend();
    await backendInstance.initialize();
  }
  return backendInstance;
};

// Helper to reset backend (useful for testing or switching backends)
export const resetBackend = () => {
  backendInstance = null;
};

// Helper to check if backend is ready
export const isBackendReady = () => {
  return backendInstance && backendInstance.isInitialized;
};
