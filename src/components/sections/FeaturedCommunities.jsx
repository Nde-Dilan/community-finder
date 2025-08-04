import React, { useRef } from "react";
import { useFeaturedCommunities } from "../../hooks/useApiV2";
import CommunityCard from "../ui/CommunityCard";
import LoadingSpinner from "../common/LoadingSpinner";

const FeaturedCommunities = () => {
  const { data, loading, error } = useFeaturedCommunities(6, {
    cache: true,
    onError: (err) =>
      console.error("Failed to load featured communities:", err),
  });
  const carouselRef = useRef(null);

  console.dir("Data fetchted from <FeaturedCommunities/>: "+ data);
  

  const scroll = (direction) => {
    const cardWidth = 300 + 24; // card width + gap
    const scrollAmount = direction === "next" ? cardWidth : -cardWidth;

    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (loading) {
    return (
      <section id="communities" className="py-16 cameroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Communities
            </h2>
            <p className="text-gray-600 mb-10">
              Discover the most active tech communities in Cameroon
            </p>
            <LoadingSpinner size="large" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="communities" className="py-16 cameroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Communities
            </h2>
            <p className="text-red-600">Error loading communities: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="communities" className="py-16 cameroon-gradient">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              Featured Communities
            </h2>
            <p className="text-gray-600">
              Discover the most active tech communities in Cameroon
            </p>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => scroll("prev")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-white hover:text-[var(--primary)] transition"
            >
              <i className="ri-arrow-left-s-line ri-lg"></i>
            </button>
            <button
              onClick={() => scroll("next")}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-white hover:text-[var(--primary)] transition"
            >
              <i className="ri-arrow-right-s-line ri-lg"></i>
            </button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={carouselRef}
            className="carousel flex space-x-6 overflow-x-auto pb-6"
          >
            {data?.map((community) => (
              <CommunityCard key={community.id} community={community} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCommunities;
