import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { fetchEvents } from '../services/api';
import FilterSidebar from '../components/ui/FilterSidebar';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { EVENT_TYPES } from '../utils/constants';

const EventsPage = () => {
  const [filters, setFilters] = useState({
    searchQuery: '',
    selectedRegions: ['All Regions'],
    selectedCategories: EVENT_TYPES,
    dateRange: 'upcoming'
  });

  const { data, loading, error } = useApi(fetchEvents, []);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const events = data?.events || [];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tech Events in Cameroon</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover upcoming tech events, workshops, conferences, and meetups happening across Cameroon's vibrant tech ecosystem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Filter Events</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Search Events</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search events..."
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                      value={filters.searchQuery}
                      onChange={(e) => handleFiltersChange({...filters, searchQuery: e.target.value})}
                    />
                    <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Event Type</label>
                  <div className="space-y-2">
                    {EVENT_TYPES.map(type => (
                      <div key={type} className="flex items-center">
                        <input
                          type="checkbox"
                          className="custom-checkbox mr-2"
                          id={`type-${type.toLowerCase().replace(/\s+/g, '-')}`}
                          checked={filters.selectedCategories.includes(type)}
                          onChange={() => {
                            const newCategories = filters.selectedCategories.includes(type)
                              ? filters.selectedCategories.filter(c => c !== type)
                              : [...filters.selectedCategories, type];
                            handleFiltersChange({...filters, selectedCategories: newCategories});
                          }}
                        />
                        <label htmlFor={`type-${type.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Date Range</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={filters.dateRange}
                    onChange={(e) => handleFiltersChange({...filters, dateRange: e.target.value})}
                  >
                    <option value="upcoming">Upcoming Events</option>
                    <option value="this-week">This Week</option>
                    <option value="this-month">This Month</option>
                    <option value="past">Past Events</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            {loading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="large" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">Error loading events: {error}</p>
              </div>
            ) : (
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-3">{event.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        event.type === 'primary' ? 'bg-[var(--primary)]/10 text-[var(--primary)]' :
                        event.type === 'secondary' ? 'bg-[var(--secondary)]/10 text-[var(--secondary)]' :
                        'bg-yellow-500/10 text-yellow-600'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-gray-600">
                        <i className="ri-calendar-line mr-2"></i>
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-time-line mr-2"></i>
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <i className="ri-map-pin-line mr-2"></i>
                        {event.location}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-gray-600">
                        <i className="ri-user-line mr-1"></i>
                        <span className="text-sm">Hosted by {event.host}</span>
                      </div>
                      <button className="px-6 py-2 bg-[var(--primary)] text-white rounded-button">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;