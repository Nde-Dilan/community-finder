import React, { useState } from 'react';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <section 
      className="relative overflow-hidden" 
      style={{
        backgroundImage: "url('cmr-tech-banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Discover Cameroon's Tech Communities
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Connect with innovative tech groups, attend local events, and grow your network across Cameroon's thriving digital ecosystem.
          </p>
          
          <div className="bg-white p-2 rounded-lg shadow-lg mb-8 max-w-2xl">
            <div className="flex items-center">
              <div className="w-10 h-10 flex items-center justify-center text-gray-400">
                <i className="ri-search-line ri-lg"></i>
              </div>
              <input 
                type="text" 
                placeholder="Search communities, events, or locations..." 
                className="w-full py-2 px-3 focus:outline-none text-gray-700 border-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <button 
                onClick={handleSearch}
                className="ml-2 px-4 py-2 bg-[var(--primary)] text-white rounded-button whitespace-nowrap"
              >
                Search
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center">
              <i className="ri-community-line ri-lg mr-2"></i>
               <a href="#communities-directory"> Explore Communities</a>
             
            </button>
            <button className="px-6 py-3 bg-white text-[var(--primary)] font-medium border-2 border-white hover:bg-white/90 rounded-button whitespace-nowrap flex items-center justify-center">
              <i className="ri-calendar-event-line ri-lg mr-2"></i>
              Find Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;