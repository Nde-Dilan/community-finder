import React, { useState } from 'react';
import { REGIONS, COMMUNITY_TYPES } from '../../utils/constants';

const InteractiveMap = () => {
  const [filters, setFilters] = useState({
    region: 'All Regions',
    communityTypes: [],
    memberSize: 500,
    showEvents: true
  });

  const handleRegionChange = (e) => {
    setFilters(prev => ({ ...prev, region: e.target.value }));
  };

  const handleCommunityTypeChange = (type) => {
    setFilters(prev => ({
      ...prev,
      communityTypes: prev.communityTypes.includes(type)
        ? prev.communityTypes.filter(t => t !== type)
        : [...prev.communityTypes, type]
    }));
  };

  const handleMemberSizeChange = (e) => {
    setFilters(prev => ({ ...prev, memberSize: parseInt(e.target.value) }));
  };

  const handleShowEventsChange = () => {
    setFilters(prev => ({ ...prev, showEvents: !prev.showEvents }));
  };

  const applyFilters = () => {
    console.log('Applying filters:', filters);
    // Implementation for filtering map data
  };

  return (
    <section id="map" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Tech Communities Across Cameroon</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover tech communities and upcoming events throughout Cameroon with our interactive map. Filter by region, category, or event type.
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Map Filters Sidebar */}
            <div className="w-full md:w-1/4 bg-gray-50 p-5 border-r border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Region</label>
                <select 
                  className="w-full bg-white border border-gray-300 rounded px-3 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
                  value={filters.region}
                  onChange={handleRegionChange}
                >
                  {REGIONS.map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
              </div>
              
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Community Type</label>
                <div className="space-y-2">
                  {COMMUNITY_TYPES.map(type => (
                    <div key={type} className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="custom-checkbox mr-2" 
                        id={`type-${type.toLowerCase().replace(/\s+/g, '-')}`}
                        checked={filters.communityTypes.includes(type)}
                        onChange={() => handleCommunityTypeChange(type)}
                      />
                      <label 
                        htmlFor={`type-${type.toLowerCase().replace(/\s+/g, '-')}`} 
                        className="text-gray-600"
                      >
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Member Size</label>
                <input 
                  type="range" 
                  min="0" 
                  max="1000" 
                  value={filters.memberSize} 
                  className="custom-range" 
                  onChange={handleMemberSizeChange}
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>0</span>
                  <span>{filters.memberSize}</span>
                  <span>1000+</span>
                </div>
              </div>
              
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-2">Show Events</label>
                <label className="custom-switch">
                  <input 
                    type="checkbox" 
                    checked={filters.showEvents}
                    onChange={handleShowEventsChange}
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>
              
              <button 
                onClick={applyFilters}
                className="w-full px-4 py-2 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap"
              >
                Apply Filters
              </button>
            </div>
            
            {/* Map Container */}
            <div className="w-full md:w-3/4">
              <div className="map-container h-[500px] relative">
                {/* Map Markers (Placeholder) */}
                <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-[var(--primary)] rounded-full pulse flex items-center justify-center text-white text-xs font-bold">
                  12
                </div>
                <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-[var(--secondary)] rounded-full pulse flex items-center justify-center text-white text-xs font-bold">
                  8
                </div>
                <div className="absolute top-2/3 left-1/4 w-6 h-6 bg-yellow-500 rounded-full pulse flex items-center justify-center text-white text-xs font-bold">
                  5
                </div>
                <div className="absolute top-1/2 left-2/3 w-6 h-6 bg-[var(--primary)] rounded-full pulse flex items-center justify-center text-white text-xs font-bold">
                  15
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2">
                  <div className="flex flex-col space-y-2">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[var(--primary)]">
                      <i className="ri-add-line ri-lg"></i>
                    </button>
                    <div className="w-full h-px bg-gray-200"></div>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-[var(--primary)]">
                      <i className="ri-subtract-line ri-lg"></i>
                    </button>
                  </div>
                </div>
                
                {/* Map Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
                  <div className="text-sm font-medium mb-2">Legend</div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 bg-[var(--primary)] rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Software Communities</span>
                  </div>
                  <div className="flex items-center mb-1">
                    <div className="w-3 h-3 bg-[var(--secondary)] rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Startup Hubs</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <span className="text-xs text-gray-600">Upcoming Events</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;