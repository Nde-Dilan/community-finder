import React, { useState } from 'react';
import { REGIONS, COMMUNITY_TYPES } from '../../utils/constants';

const FilterSidebar = ({ 
  onFiltersChange, 
  searchQuery = '', 
  selectedRegions = ['All Regions'], 
  selectedCategories = [],
  memberSizeFilter = 0,
  showSearch = true,
  showRegions = true,
  showCategories = true,
  showMemberSize = true,
  showEvents = false,
  showEventsFilter = false
}) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);
  const [localSelectedRegions, setLocalSelectedRegions] = useState(selectedRegions);
  const [localSelectedCategories, setLocalSelectedCategories] = useState(selectedCategories);
  const [localMemberSizeFilter, setLocalMemberSizeFilter] = useState(memberSizeFilter);
  const [localShowEvents, setLocalShowEvents] = useState(showEvents);

  const handleSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
    if (onFiltersChange) {
      onFiltersChange({
        searchQuery: e.target.value,
        selectedRegions: localSelectedRegions,
        selectedCategories: localSelectedCategories,
        memberSizeFilter: localMemberSizeFilter,
        showEvents: localShowEvents
      });
    }
  };

  const handleRegionChange = (region) => {
    let newRegions;
    if (region === 'All Regions') {
      newRegions = ['All Regions'];
    } else {
      newRegions = localSelectedRegions.filter(r => r !== 'All Regions');
      newRegions = newRegions.includes(region)
        ? newRegions.filter(r => r !== region)
        : [...newRegions, region];
      
      if (newRegions.length === 0) {
        newRegions = ['All Regions'];
      }
    }
    
    setLocalSelectedRegions(newRegions);
    if (onFiltersChange) {
      onFiltersChange({
        searchQuery: localSearchQuery,
        selectedRegions: newRegions,
        selectedCategories: localSelectedCategories,
        memberSizeFilter: localMemberSizeFilter,
        showEvents: localShowEvents
      });
    }
  };

  const handleCategoryChange = (category) => {
    const newCategories = localSelectedCategories.includes(category)
      ? localSelectedCategories.filter(c => c !== category)
      : [...localSelectedCategories, category];
    
    setLocalSelectedCategories(newCategories);
    if (onFiltersChange) {
      onFiltersChange({
        searchQuery: localSearchQuery,
        selectedRegions: localSelectedRegions,
        selectedCategories: newCategories,
        memberSizeFilter: localMemberSizeFilter,
        showEvents: localShowEvents
      });
    }
  };

  const handleMemberSizeChange = (e) => {
    const value = parseInt(e.target.value);
    setLocalMemberSizeFilter(value);
    if (onFiltersChange) {
      onFiltersChange({
        searchQuery: localSearchQuery,
        selectedRegions: localSelectedRegions,
        selectedCategories: localSelectedCategories,
        memberSizeFilter: value,
        showEvents: localShowEvents
      });
    }
  };

  const handleShowEventsChange = () => {
    const newShowEvents = !localShowEvents;
    setLocalShowEvents(newShowEvents);
    if (onFiltersChange) {
      onFiltersChange({
        searchQuery: localSearchQuery,
        selectedRegions: localSelectedRegions,
        selectedCategories: localSelectedCategories,
        memberSizeFilter: localMemberSizeFilter,
        showEvents: newShowEvents
      });
    }
  };

  const applyFilters = () => {
    if (onFiltersChange) {
      onFiltersChange({
        searchQuery: localSearchQuery,
        selectedRegions: localSelectedRegions,
        selectedCategories: localSelectedCategories,
        memberSizeFilter: localMemberSizeFilter,
        showEvents: localShowEvents
      });
    }
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>
      
      {/* Search */}
      {showSearch && (
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4">Search</h4>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search communities..." 
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20 focus:border-[var(--primary)]"
              value={localSearchQuery}
              onChange={handleSearchChange}
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <i className="ri-search-line"></i>
            </div>
          </div>
        </div>
      )}
      
      {/* Regions */}
      {showRegions && (
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4">Regions</h4>
          <div className="space-y-2">
            {REGIONS.map(region => (
              <div key={region} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="custom-checkbox mr-2" 
                  id={`region-${region.toLowerCase().replace(/\s+/g, '-')}`}
                  checked={localSelectedRegions.includes(region)}
                  onChange={() => handleRegionChange(region)}
                />
                <label 
                  htmlFor={`region-${region.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-gray-600 cursor-pointer"
                >
                  {region}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Categories */}
      {showCategories && (
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4">Categories</h4>
          <div className="space-y-2">
            {COMMUNITY_TYPES.map(category => (
              <div key={category} className="flex items-center">
                <input 
                  type="checkbox" 
                  className="custom-checkbox mr-2" 
                  id={`cat-${category.toLowerCase().replace(/\s+/g, '-')}`}
                  checked={localSelectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                <label 
                  htmlFor={`cat-${category.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-gray-600 cursor-pointer"
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Member Size */}
      {showMemberSize && (
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4">Member Size</h4>
          <input 
            type="range" 
            min="0" 
            max="1000" 
            value={localMemberSizeFilter} 
            className="custom-range"
            onChange={handleMemberSizeChange}
          />
          <div className="flex justify-between text-sm text-gray-500 mt-1">
            <span>Any</span>
            <span>{localMemberSizeFilter}+</span>
          </div>
        </div>
      )}
      
      {/* Show Events Toggle */}
      {showEventsFilter && (
        <div className="mb-6">
          <h4 className="font-semibold text-lg mb-4">Show Events</h4>
          <label className="custom-switch">
            <input 
              type="checkbox" 
              checked={localShowEvents}
              onChange={handleShowEventsChange}
            />
            <span className="switch-slider"></span>
          </label>
        </div>
      )}
      
      <button 
        onClick={applyFilters}
        className="w-full px-4 py-2 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterSidebar;