# Backend Migration Strategy

This document outlines the strategy for migrating from mock data to real backends (Firebase/Supabase) with the ability to switch between them.

## Architecture Overview

The new backend system introduces an abstraction layer that allows you to switch between different backends without changing your component code.

```
Components → useApiV2 hooks → ApiService → Backend Interface → Specific Backend (Mock/Firebase/Supabase)
```

## Current Structure

### New Files Added

- `src/services/backend/` - Backend implementation directory

  - `BaseBackend.js` - Abstract base class defining the interface
  - `MockBackend.js` - Mock implementation (replacement for current api.js)
  - `FirebaseBackend.js` - Firebase implementation (placeholder)
  - `SupabaseBackend.js` - Supabase implementation (placeholder)
  - `BackendFactory.js` - Factory for creating backend instances
  - `types.js` - Type definitions and constants
  - `index.js` - Main exports

- `src/services/newApi.js` - New API service using backend interface
- `src/hooks/useApiV2.js` - Enhanced hooks with caching and error handling
- `.env` - Environment configuration
- `.env.example` - Environment template

## Migration Phases

### Phase 1: Setup Infrastructure (CURRENT)

✅ Created backend interface system
✅ Created mock backend implementation
✅ Added configuration system
✅ Created enhanced hooks

### Phase 2: Gradual Component Migration (NEXT)

Choose components to migrate one by one:

1. **Start with simple components** (e.g., CommunitySpotlights)
2. **Update imports** from old API to new API
3. **Update hooks** from `useApi` to specialized hooks like `useFeaturedCommunities`
4. **Test thoroughly** before moving to next component

### Phase 3: Backend Implementation

Once components are migrated:

1. **Choose backend** (Firebase or Supabase)
2. **Install dependencies**
3. **Implement backend methods**
4. **Update environment variables**
5. **Test with real data**

### Phase 4: Production Ready

1. **Add error boundaries**
2. **Implement proper authentication**
3. **Add caching strategies**
4. **Performance optimization**

## Quick Start Guide

### 1. Test the Current Setup

The mock backend is already configured. You can test it by:

```javascript
// In any component
import { useFeaturedCommunities } from "../hooks/useApiV2";

function TestComponent() {
  const { data, loading, error } = useFeaturedCommunities();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.communities?.map((community) => (
        <div key={community.id}>{community.name}</div>
      ))}
    </div>
  );
}
```

### 2. Migrate a Simple Component

Example: Migrating CommunitySpotlights component

**Before:**

```javascript
import { useApi } from "../hooks/useApi";
import { fetchFeaturedCommunities } from "../services/api";

function CommunitySpotlights() {
  const { data, loading, error } = useApi(fetchFeaturedCommunities);

  // Component logic...
}
```

**After:**

```javascript
import { useFeaturedCommunities } from "../hooks/useApiV2";

function CommunitySpotlights() {
  const { data, loading, error } = useFeaturedCommunities(6, {
    cache: true,
    onError: (err) => console.error("Failed to load communities:", err),
  });

  // Component logic (data structure is the same)...
}
```

### 3. Switch to Firebase (When Ready)

1. **Install Firebase:**

   ```bash
   npm install firebase
   ```

2. **Update environment:**

   ```env
   VITE_BACKEND_TYPE=firebase
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_PROJECT_ID=your_project_id
   # ... other Firebase config
   ```

3. **Implement Firebase methods in `FirebaseBackend.js`**

### 4. Switch to Supabase (Alternative)

1. **Install Supabase:**

   ```bash
   npm install @supabase/supabase-js
   ```

2. **Update environment:**

   ```env
   VITE_BACKEND_TYPE=supabase
   VITE_SUPABASE_URL=https://your_project.supabase.co
   VITE_SUPABASE_ANON_KEY=your_anon_key
   ```

3. **Implement Supabase methods in `SupabaseBackend.js`**

## Key Benefits

1. **Zero Breaking Changes**: Your existing components will continue working
2. **Gradual Migration**: Migrate components one by one at your own pace
3. **Easy Backend Switching**: Change one environment variable to switch backends
4. **Enhanced Features**: Built-in caching, retry logic, error handling
5. **Better Performance**: Specialized hooks prevent unnecessary re-renders
6. **Type Safety**: Consistent response formats across all backends

## Migration Checklist

### For Each Component:

- [ ] Identify current API usage
- [ ] Update imports to use new API service
- [ ] Replace `useApi` with specialized hooks
- [ ] Test component functionality
- [ ] Verify error handling
- [ ] Check loading states

### For Backend Implementation:

- [ ] Choose backend (Firebase/Supabase)
- [ ] Install dependencies
- [ ] Set up backend project
- [ ] Implement data models/schemas
- [ ] Implement CRUD operations
- [ ] Add authentication
- [ ] Test with real data
- [ ] Set up production environment

## Best Practices

1. **Start Small**: Begin with read-only components
2. **Keep Mock Data**: Keep mock backend for development and testing
3. **Error Handling**: Always handle errors gracefully
4. **Caching**: Use appropriate cache durations for different data types
5. **Loading States**: Provide good loading experiences
6. **Validation**: Validate data at backend boundaries
7. **Security**: Implement proper authentication and authorization

## Need Help?

This migration strategy allows you to:

- Keep your existing code working
- Migrate gradually without pressure
- Switch backends easily
- Add real data when ready
- Scale to production

The key is to start small and migrate one component at a time!
