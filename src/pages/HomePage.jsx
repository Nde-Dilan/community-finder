import React from 'react';
import Hero from '../components/sections/Hero';
import InteractiveMap from '../components/sections/InteractiveMap';
import FeaturedCommunities from '../components/sections/FeaturedCommunities';
import CommunitiesDirectory from '../components/sections/CommunitiesDirectory';
import EventsTimeline from '../components/sections/EventsTimeline';
import CommunitySpotlights from '../components/sections/CommunitySpotlights';
import NewsFeed from '../components/sections/NewsFeed';
import ContactHub from '../components/sections/ContactHub';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InteractiveMap />
      {/* <FeaturedCommunities /> */}
      <CommunitiesDirectory />
      <EventsTimeline />
      <CommunitySpotlights />
      {/* <NewsFeed /> */}
      <ContactHub />
    </>
  );
};

export default HomePage;