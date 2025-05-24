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
        backgroundImage: "url('https://readdy.ai/api/search-image?query=A%20beautiful%20panoramic%20view%20of%20Cameroon%20landscape%20with%20tech%20elements%2C%20modern%20city%20skyline%20in%20the%20distance%2C%20geometric%20patterns%20in%20green%2C%20red%2C%20and%20yellow%20colors%20representing%20Cameroon%20flag%2C%20subtle%20tech-related%20symbols%2C%20clean%20modern%20design%2C%20soft%20lighting&width=1920&height=1080&seq=hero1&orientation=landscape')",
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