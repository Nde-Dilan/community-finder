import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  container,
  item,
  searchBar,
  button,
  background,
} from '../../utils/motion';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search functionality
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative overflow-hidden"
    >
      <motion.div
        variants={background}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('cmr-tech-banner.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <motion.div variants={container} className="max-w-3xl">
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
             Discover <span className="text-green-500">Cam</span><span className="text-red-400">ero</span><span className="text-yellow-400">on's</span> Tech Communities
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Connect with innovative tech groups, attend local events, and grow
            your network across Cameroon's thriving digital ecosystem.
          </motion.p>

          <motion.div
            variants={searchBar}
            className="bg-white p-2 rounded-lg shadow-lg mb-8 max-w-2xl"
          >
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
          </motion.div>

          <motion.div
            variants={container}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              variants={button}
              className="px-6 py-3 bg-[var(--primary)] text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center"
            >
              <i className="ri-community-line ri-lg mr-2"></i>
              <a href="#communities-directory"> Explore Communities</a>
            </motion.button>
            <motion.button
              variants={button}
              className="px-6 py-3 bg-white text-[var(--primary)] font-medium border-2 border-white hover:bg-white/90 rounded-button whitespace-nowrap flex items-center justify-center"
            >
              <i className="ri-calendar-event-line ri-lg mr-2"></i>
              <a href="#events"> Find Events</a>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;