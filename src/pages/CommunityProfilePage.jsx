import React from "react";
import { useParams } from "react-router-dom";
import { useCommunityDetails } from "../hooks/useApiV2";
import LoadingSpinner from "../components/common/LoadingSpinner";
import CommunityHero from "../components/community/CommunityHero";
import CommunityInfo from "../components/community/CommunityInfo";
import CommunityLocation from "../components/community/CommunityLocation";
import CommunityStats from "../components/community/CommunityStats";
import CommunityEvents from "../components/community/CommunityEvents";
import CommunityGallery from "../components/community/CommunityGallery";
import SimilarCommunities from "../components/community/SimilarCommunities";
import Breadcrumb from "../components/common/Breadcrumb";

const CommunityProfilePage = () => {
  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useCommunityDetails(id, {
    cache: true,
    cacheDuration: 15 * 60 * 1000, // 15 minutes
    onError: (err) => console.error("Failed to load community details:", err),
  });

  const community = data?.community;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  if (error || !community) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Community Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            The community you're looking for doesn't exist or may have been
            removed.
          </p>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-[var(--primary)] text-white rounded-button"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Communities", href: "/#communities-directory" },
    { label: community.name, href: "", current: true },
  ];

  return (
    <div className="bg-gray-50">
      <Breadcrumb items={breadcrumbItems} />
      <CommunityHero community={community} />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CommunityInfo community={community} />
            <CommunityEvents events={community.upcomingEvents} />
            <CommunityGallery gallery={community.gallery} />
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <CommunityStats community={community} />
            <CommunityLocation community={community} />
          </div>
        </div>
      </div>

      <SimilarCommunities currentCommunityId={id} />
    </div>
  );
};

export default CommunityProfilePage;
