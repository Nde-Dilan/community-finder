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