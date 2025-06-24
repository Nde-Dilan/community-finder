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

### Phase 1: Setup Infrastructure (✅ COMPLETED)

✅ Created backend interface system
✅ Created mock backend implementation
✅ Added configuration system
✅ Created enhanced hooks
✅ **NEW**: Successfully migrated `FeaturedCommunities` component
✅ **NEW**: Successfully migrated `CommunitiesDirectory` component
✅ **NEW**: Added test component at `/test-backend` route

### Phase 2: Gradual Component Migration (🎉 COMPLETED!)

All components have been successfully migrated:

1. ✅ **FeaturedCommunities** - COMPLETED
2. ✅ **CommunitiesDirectory** - COMPLETED
3. ✅ **EventsTimeline** - COMPLETED
4. ✅ **NewsFeed** - COMPLETED
5. ✅ **CommunityProfilePage** - COMPLETED
6. ✅ **SimilarCommunities** - COMPLETED

**Migration Pattern Used:**

1. ✅ Updated imports from old API to new hooks
2. ✅ Replaced `useApi(apiFunction, params)` with specialized hooks
3. ✅ Added caching and error handling options
4. ✅ Tested all component functionality
5. ✅ Enhanced backend with additional filters

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

## Testing the Migration

### Quick Test

1. **Start your development server**: `npm run dev`
2. **Visit the test page**: Navigate to `http://localhost:5173/test-backend`
3. **Check for green checkmarks**: If you see green checkmarks, the backend is working!

### Test Results Expected:

- ✅ Successfully loaded 6 featured communities
- ✅ Successfully loaded 6 total communities
- ✅ Successfully loaded 4 events
- ✅ Successfully loaded 2 news articles
- Backend type: mock

### Migrated Components

The following components have been successfully migrated:

1. **`FeaturedCommunities.jsx`**

   - **Before**: Used `useApi(fetchFeaturedCommunities)`
   - **After**: Uses `useFeaturedCommunities(6, { cache: true })`
   - **Benefits**: Built-in caching, error callbacks, retry logic

2. **`CommunitiesDirectory.jsx`**
   - **Before**: Used `useApi(fetchCommunities, [])`
   - **After**: Uses `useCommunities(filters, { cache: true })`
   - **Benefits**: Dynamic filtering passed to backend, improved performance

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

## Troubleshooting

### Common Issues

1. **Component shows loading forever**

   - Check browser console for errors
   - Verify `.env` file has `VITE_BACKEND_TYPE=mock`
   - Ensure all backend files are properly created

2. **Import errors**

   ```javascript
   // ❌ Wrong
   import { useApi } from "../hooks/useApi";
   import { fetchFeaturedCommunities } from "../services/api";

   // ✅ Correct
   import { useFeaturedCommunities } from "../hooks/useApiV2";
   ```

3. **Data structure differences**

   - Old API: `data` (direct object)
   - New API: `data.communities`, `data.events`, etc.
   - Check your component's data access patterns

4. **Backend not switching**
   - Restart dev server after changing `.env`
   - Clear browser cache
   - Check environment variable: `import.meta.env.VITE_BACKEND_TYPE`

### Debug Tools

Add this to any component to debug:

```javascript
console.log("Backend type:", import.meta.env.VITE_BACKEND_TYPE);
console.log("API data:", data);
console.log("Loading state:", loading);
console.log("Error state:", error);
```

## Need Help?

This migration strategy allows you to:

- Keep your existing code working
- Migrate gradually without pressure
- Switch backends easily
- Add real data when ready
- Scale to production

The key is to start small and migrate one component at a time!
