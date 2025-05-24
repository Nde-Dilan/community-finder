import React from 'react';

const CommunityCard = ({ community, showTags = false }) => {
  return (
    <div className="min-w-[300px] bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 hover:shadow-lg transition duration-300">
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <img 
          src={community.logo} 
          alt={community.name} 
          className="h-24 object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-xl mb-2">{community.name}</h3>
        <div className="flex items-center text-gray-500 mb-3">
          <i className="ri-map-pin-line mr-1"></i>
          <span className="text-sm">{community.location}</span>
        </div>
        <div className="flex items-center text-gray-500 mb-3">
          <i className="ri-user-line mr-1"></i>
          <span className="text-sm">{community.members} members</span>
        </div>
        {showTags && community.tags && (
          <div className="flex flex-wrap gap-2 mb-4">
            {community.tags.map((tag, index) => (
              <span 
                key={index}
                className={`px-2 py-1 rounded text-xs ${
                  index % 3 === 0 ? 'bg-blue-100 text-blue-800' :
                  index % 3 === 1 ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <p className="text-gray-600 text-sm mb-4">{community.description}</p>
        <button className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded-button whitespace-nowrap">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default CommunityCard;