import React from "react";
import { useNavigate } from "react-router-dom";
import { useCommunities } from "../../hooks/useApiV2";
import LoadingSpinner from "../common/LoadingSpinner";

const SimilarCommunities = ({ currentCommunityId }) => {
  const navigate = useNavigate();
  const { data, loading } = useCommunities(
    { exclude: [currentCommunityId] },
    {
      cache: true,
      cacheDuration: 10 * 60 * 1000, // 10 minutes
      onError: (err) =>
        console.error("Failed to load similar communities:", err),
    }
  );

  const handleViewCommunity = (communityId) => {
    navigate(`/community/${communityId}`);
  };

  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Similar Communities
          </h2>
          <LoadingSpinner size="large" />
        </div>
      </section>
    );
  }

  if (!data?.communities || data.communities.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Discover More Tech Communities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore other amazing tech communities across Cameroon that share
            similar interests and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.communities.map((community) => (
            <div
              key={community.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => handleViewCommunity(community.id)}
            >
              <div className="h-32 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/5 flex items-center justify-center">
                <img
                  src={community.logo}
                  alt={community.name}
                  className="h-16 object-contain"
                  loading="lazy"
                />
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{community.name}</h3>

                <div className="flex items-center text-gray-500 mb-3">
                  <i className="ri-map-pin-line mr-2"></i>
                  <span className="text-sm">{community.location}</span>
                </div>

                <div className="flex items-center text-gray-500 mb-4">
                  <i className="ri-user-line mr-2"></i>
                  <span className="text-sm">{community.members} members</span>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {community.description}
                </p>

                {community.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {community.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                    {community.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        +{community.tags.length - 3} more
                      </span>
                    )}
                  </div>
                )}

                <button
                  className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded-button font-medium hover:bg-[var(--primary)]/90 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewCommunity(community.id);
                  }}
                >
                  View Community
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/#communities-directory")}
            className="px-8 py-3 border border-gray-300 text-gray-700 rounded-button font-medium hover:bg-gray-50 transition-colors"
          >
            View All Communities
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimilarCommunities;
