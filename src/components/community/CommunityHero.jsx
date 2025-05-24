import React, { useState } from 'react';
import { SOCIAL_PLATFORMS } from '../../utils/constants';

const CommunityHero = ({ community }) => {
  const [isJoined, setIsJoined] = useState(false);

  const handleJoinCommunity = () => {
    setIsJoined(!isJoined);
    // API call to join/leave community would go here
  };

  const handleShareCommunity = () => {
    if (navigator.share) {
      navigator.share({
        title: community.name,
        text: community.description,
        url: window.location.href,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Community link copied to clipboard!');
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/5 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Community Logo & Basic Info */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 bg-white rounded-xl shadow-lg flex items-center justify-center">
              <img 
                src={community.logo} 
                alt={community.name}
                className="w-24 h-24 object-contain"
              />
            </div>
          </div>
          
          {/* Community Details */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {community.categories?.map((category, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{community.name}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <i className="ri-map-pin-line mr-2"></i>
                <span>{community.location}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-user-line mr-2"></i>
                <span>{community.members?.toLocaleString()} members</span>
              </div>
              <div className="flex items-center">
                <i className="ri-calendar-line mr-2"></i>
                <span>Founded {community.founded}</span>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg leading-relaxed mb-8 max-w-3xl">
              {community.description}
            </p>
            
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              {community.socialLinks && Object.entries(community.socialLinks).map(([platform, url]) => {
                const socialPlatform = SOCIAL_PLATFORMS.find(p => p.name.toLowerCase() === platform.toLowerCase());
                if (!socialPlatform || !url) return null;
                
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-[var(--primary)] hover:shadow-lg transition-all"
                    title={`Follow on ${socialPlatform.name}`}
                  >
                    <i className={socialPlatform.icon}></i>
                  </a>
                );
              })}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleJoinCommunity}
                className={`px-8 py-3 rounded-button font-medium transition-all ${
                  isJoined 
                    ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                    : 'bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90'
                }`}
              >
                <i className={`${isJoined ? 'ri-check-line' : 'ri-user-add-line'} mr-2`}></i>
                {isJoined ? 'Joined' : 'Join Community'}
              </button>
              
              <button
                onClick={handleShareCommunity}
                className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-button font-medium hover:bg-gray-50 transition-all"
              >
                <i className="ri-share-line mr-2"></i>
                Share
              </button>
              
              {community.website && (
                <a
                  href={community.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-button font-medium hover:bg-gray-50 transition-all"
                >
                  <i className="ri-external-link-line mr-2"></i>
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;