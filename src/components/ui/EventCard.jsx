import React from 'react';
import { useApi } from '../../hooks/useApi';
import { fetchEvents } from '../../services/api';
import LoadingSpinner from '../common/LoadingSpinner';

const EventCard = ({ event, index }) => {
  const isRight = index % 2 === 1;
  const typeColors = {
    primary: 'bg-[var(--primary)]/10 text-[var(--primary)]',
    secondary: 'bg-[var(--secondary)]/10 text-[var(--secondary)]',
    yellow: 'bg-yellow-500/10 text-yellow-600'
  };

  const buttonColors = {
    primary: 'bg-[var(--primary)] text-white',
    secondary: 'bg-[var(--secondary)] text-white',
    yellow: 'bg-yellow-500 text-white'
  };

  return (
    <div className="md:flex items-start relative">
      <div className="hidden md:block timeline-dot"></div>
      <div className={`md:w-1/2 ${isRight ? 'md:pl-12 mb-8 md:mb-0 md:order-2' : 'md:pr-12 md:text-right mb-8 md:mb-0'}`}>
        <div className="bg-white rounded-lg shadow-md p-6 inline-block">
          <div className={`inline-block px-3 py-1 ${typeColors[event.type]} rounded-full text-sm font-medium mb-3`}>
            {event.date}
          </div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <p className="text-gray-600 mb-3">{event.description}</p>
          <div className={`flex items-center ${isRight ? '' : 'justify-end'} text-gray-500 mb-4`}>
            <i className="ri-map-pin-line mr-1"></i>
            <span className="text-sm">{event.location}</span>
          </div>
          <div className={`flex items-center ${isRight ? '' : 'justify-end'} text-gray-500 mb-4`}>
            <i className="ri-time-line mr-1"></i>
            <span className="text-sm">{event.time}</span>
          </div>
          <div className={`flex items-center ${isRight ? '' : 'justify-end'} text-gray-500 mb-4`}>
            <i className="ri-user-line mr-1"></i>
            <span className="text-sm">Hosted by {event.host}</span>
          </div>
          <button className={`px-4 py-2 ${buttonColors[event.type]} rounded-button whitespace-nowrap`}>
            Register Now
          </button>
        </div>
      </div>
      <div className={`md:w-1/2 ${isRight ? 'md:order-1' : ''} md:hidden`}>
        <div className={`w-4 h-4 ${buttonColors[event.type]} rounded-full absolute left-0 top-6 transform -translate-x-1/2`}></div>
      </div>
    </div>
  );
};

const EventsTimeline = () => {
  const { data, loading, error } = useApi(fetchEvents);

  if (loading) {
    return (
      <section id="events" className="py-16 cameroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Tech Events</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Stay updated with the latest tech events, workshops, and meetups happening across Cameroon's vibrant tech ecosystem.</p>
          </div>
          <LoadingSpinner size="large" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="events" className="py-16 cameroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Tech Events</h2>
            <p className="text-red-600">Error loading events: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="events" className="py-16 cameroon-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Tech Events</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest tech events, workshops, and meetups happening across Cameroon's vibrant tech ecosystem.
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden md:block timeline-connector"></div>
          
          <div className="space-y-8 relative">
            {data?.events?.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
          
          <div className="mt-12 flex justify-center">
            <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-button whitespace-nowrap flex items-center justify-center hover:bg-gray-50">
              <i className="ri-calendar-line ri-lg mr-2"></i>
              View All Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;