import React from 'react';

const CommunityLocation = ({ community }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-4">Location & Contact</h3>
        
        {/* Address */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <i className="ri-map-pin-line text-[var(--primary)] mr-3 mt-1"></i>
            <div>
              <div className="font-medium">{community.location}</div>
              {community.address && (
                <div className="text-sm text-gray-600">{community.address}</div>
              )}
            </div>
          </div>
          
          {community.email && (
            <div className="flex items-center">
              <i className="ri-mail-line text-[var(--primary)] mr-3"></i>
              <a 
                href={`mailto:${community.email}`}
                className="text-[var(--primary)] hover:underline"
              >
                {community.email}
              </a>
            </div>
          )}
          
          {community.phone && (
            <div className="flex items-center">
              <i className="ri-phone-line text-[var(--primary)] mr-3"></i>
              <a 
                href={`tel:${community.phone}`}
                className="text-[var(--primary)] hover:underline"
              >
                {community.phone}
              </a>
            </div>
          )}
        </div>
        
        {/* Meeting Schedule */}
        {community.meetingSchedule && (
          <div className="mb-6">
            <h4 className="font-semibold mb-3">Regular Meetings</h4>
            <div className="space-y-2">
              {community.meetingSchedule.map((meeting, index) => (
                <div key={index} className="flex items-center text-sm">
                  <i className="ri-calendar-line text-gray-400 mr-2"></i>
                  <span className="font-medium mr-2">{meeting.day}:</span>
                  <span className="text-gray-600">{meeting.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Mini Map */}
      <div className="h-48 bg-gray-100 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <i className="ri-map-pin-fill text-[var(--primary)] text-3xl mb-2"></i>
            <div className="text-sm text-gray-600">Interactive map would be here</div>
            <div className="text-xs text-gray-500">Click to view in full screen</div>
          </div>
        </div>
        
        {/* Map overlay buttons */}
        <div className="absolute top-4 right-4 space-y-2">
          <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-gray-600 hover:text-[var(--primary)]">
            <i className="ri-add-line"></i>
          </button>
          <button className="w-8 h-8 bg-white rounded shadow-md flex items-center justify-center text-gray-600 hover:text-[var(--primary)]">
            <i className="ri-subtract-line"></i>
          </button>
        </div>
        
        {/* Get Directions Button */}
        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full px-3 py-2 bg-[var(--primary)] text-white rounded-button text-sm font-medium">
            <i className="ri-navigation-line mr-2"></i>
            Get Directions
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityLocation;