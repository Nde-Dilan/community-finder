import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useCommunities } from "../../hooks/useApiV2";
import { REGIONS, COMMUNITY_TYPES } from "../../utils/constants";
import LoadingSpinner from "../common/LoadingSpinner";

const CommunitiesDirectory = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegions, setSelectedRegions] = useState(["All Regions"]);
  const [selectedCategories, setSelectedCategories] = useState(COMMUNITY_TYPES);
  const [memberSizeFilter, setMemberSizeFilter] = useState(0);

  // Create dynamic filters object for the API
  const filters = useMemo(
    () => ({
      search: searchQuery,
      region: selectedRegions.includes("All Regions")
        ? undefined
        : selectedRegions[0],
      category:
        selectedCategories.length === COMMUNITY_TYPES.length
          ? undefined
          : selectedCategories[0],
      minMembers: memberSizeFilter || undefined,
    }),
    [searchQuery, selectedRegions, selectedCategories, memberSizeFilter]
  );

  const { data, loading, error } = useCommunities(filters, {
    cache: true,
    onError: (err) => console.error("Failed to load communities:", err),
  });

  const handleRegionChange = (region) => {
    if (region === "All Regions") {
      setSelectedRegions(["All Regions"]);
    } else {
      setSelectedRegions((prev) => {
        const newRegions = prev.filter((r) => r !== "All Regions");
        return prev.includes(region)
          ? newRegions.filter((r) => r !== region)
          : [...newRegions, region];
      });
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const applyFilters = () => {
    console.log("Applying filters:", {
      searchQuery,
      selectedRegions,
      selectedCategories,
      memberSizeFilter,
    });
  };

  const handleViewProfile = (communityId) => {
    navigate(`/community/${communityId}`);
  };

  const filteredCommunities = data?.communities || [];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            id="communities-directory"
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Communities Directory
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive directory of tech communities across
            Cameroon. Filter by region, category, or search for specific groups.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full md:w-1/4 bg-gray-50 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Search</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search communities..."
                  className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <i className="ri-search-line"></i>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Regions</h3>
              <div className="space-y-2">
                {REGIONS.map((region) => (
                  <div key={region} className="flex items-center">
                    <input
                      type="checkbox"
                      className="custom-checkbox mr-2"
                      id={`region-${region.toLowerCase().replace(/\s+/g, "-")}`}
                      checked={selectedRegions.includes(region)}
                      onChange={() => handleRegionChange(region)}
                    />
                    <label
                      htmlFor={`region-${region
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-gray-600"
                    >
                      {region}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {COMMUNITY_TYPES.map((category) => (
                  <div key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="custom-checkbox mr-2"
                      id={`cat-${category.toLowerCase().replace(/\s+/g, "-")}`}
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label
                      htmlFor={`cat-${category
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-gray-600"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-4">Member Size</h3>
              <input
                type="range"
                min="0"
                max="1000"
                value={memberSizeFilter}
                className="custom-range"
                onChange={(e) => setMemberSizeFilter(parseInt(e.target.value))}
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Any</span>
                <span>{memberSizeFilter}+</span>
              </div>
            </div>

            <button
              onClick={applyFilters}
              className="w-full px-4 py-2 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap"
            >
              Apply Filters
            </button>
          </div>

          {/* Communities Grid */}
          <div className="w-full md:w-3/4">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <LoadingSpinner size="large" />
              </div>
            ) : error ? (
              <div className="text-center text-red-600 py-8">
                Error loading communities: {error}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCommunities.map((community) => (
                    <div
                      key={community.id}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >
                      <div className="h-40 bg-[#FFFFFF] flex items-center justify-center">
                        <img
                          src={community.logo}
                          alt={community.name}
                          className="h-24 object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-xl mb-2">
                          {community.name}
                        </h3>
                        <div className="flex items-center text-gray-500 mb-3">
                          <i className="ri-map-pin-line mr-1"></i>
                          <span className="text-sm">{community.description}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mb-3">
                          <i className="ri-user-line mr-1"></i>
                          <span className="text-sm">
                            {community.members} members
                          </span>
                        </div>
                        {community.tags && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {community.tags.map((tag, index) => (
                              <span
                                key={index}
                                className={`px-2 py-1 rounded text-xs ${
                                  index % 6 === 0
                                    ? "bg-blue-100 text-blue-800"
                                    : index % 6 === 1
                                    ? "bg-green-100 text-green-800"
                                    : index % 6 === 2
                                    ? "bg-purple-100 text-purple-800"
                                    : index % 6 === 3
                                    ? "bg-red-100 text-red-800"
                                    : index % 6 === 4
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-indigo-100 text-indigo-800"
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <button
                          onClick={() => handleViewProfile(community.id)}
                          className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded-button whitespace-nowrap"
                        >
                          <a href={community.links}> Explore Community</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex justify-center">
                  <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-button whitespace-nowrap flex items-center justify-center hover:bg-gray-50">
                    <i className="ri-refresh-line ri-lg mr-2"></i>
                    Load More Communities
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitiesDirectory;
