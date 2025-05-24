import React from 'react';

const CommunityEvents = ({ events }) => {
  if (!events || events.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-bold mb-4">Upcoming Events</h3>
        <div className="text-center py-8">
          <i className="ri-calendar-line text-gray-300 text-4xl mb-4"></i>
          <p className="text-gray-500">No upcoming events at the moment.</p>
          <p className="text-sm text-gray-400 mt-2">Check back soon for new events!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Upcoming Events</h3>
        <button className="text-[var(--primary)] text-sm font-medium hover:underline">
          View All Events
        </button>
      </div>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-lg mb-2">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                
                <div className="space-y-1 text-sm text-gray-500">
                  <div className="flex items-center">
                    <i className="ri-calendar-line mr-2"></i>
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-time-line mr-2"></i>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line mr-2"></i>
                    <span>{event.location}</span>
                  </div>
                  {event.attendees && (
                    <div className="flex items-center">
                      <i className="ri-user-line mr-2"></i>
                      <span>{event.attendees} attendees</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="ml-4 flex flex-col space-y-2">
                {event.type && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.type === 'workshop' ? 'bg-blue-100 text-blue-800' :
                    event.type === 'meetup' ? 'bg-green-100 text-green-800' :
                    event.type === 'hackathon' ? 'bg-purple-100 text-purple-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {event.type}
                  </span>
                )}
                <button className="px-4 py-2 bg-[var(--primary)] text-white text-sm rounded-button font-medium">
                  Register
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityEvents;