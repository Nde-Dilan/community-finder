import React from "react";
import {
  useFeaturedCommunities,
  useCommunities,
  useEvents,
  useNews,
} from "../hooks/useApiV2";

const BackendTestComponent = () => {
  const {
    data: communities,
    loading: communitiesLoading,
    error: communitiesError,
  } = useFeaturedCommunities(3);
  const { data: allCommunities, loading: allCommunitiesLoading } =
    useCommunities();
  const { data: events, loading: eventsLoading } = useEvents();
  const { data: news, loading: newsLoading } = useNews();

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Backend Migration Test
      </h1>

      {/* Featured Communities Test */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Featured Communities Test
        </h2>
        {communitiesLoading && <p>Loading featured communities...</p>}
        {communitiesError && (
          <p className="text-red-500">Error: {communitiesError}</p>
        )}
        {communities && (
          <div>
            <p className="text-green-600 mb-2">
              ✅ Successfully loaded {communities.communities?.length} featured
              communities
            </p>
            <ul className="space-y-2">
              {communities.communities?.slice(0, 3).map((community) => (
                <li key={community.id} className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>
                    {community.name} - {community.members} members
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* All Communities Test */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">All Communities Test</h2>
        {allCommunitiesLoading && <p>Loading all communities...</p>}
        {allCommunities && (
          <p className="text-green-600">
            ✅ Successfully loaded {allCommunities.communities?.length} total
            communities
          </p>
        )}
      </div>

      {/* Events Test */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Events Test</h2>
        {eventsLoading && <p>Loading events...</p>}
        {events && (
          <p className="text-green-600">
            ✅ Successfully loaded {events.events?.length} events
          </p>
        )}
      </div>

      {/* News Test */}
      <div className="mb-8 bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">News Test</h2>
        {newsLoading && <p>Loading news...</p>}
        {news && (
          <p className="text-green-600">
            ✅ Successfully loaded {news.news?.length} news articles
          </p>
        )}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-600">
          If you see green checkmarks above, the backend migration is working!
          🎉
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Backend type: {import.meta.env.VITE_BACKEND_TYPE || "mock"}
        </p>
      </div>
    </div>
  );
};

export default BackendTestComponent;
