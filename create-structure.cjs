const fs = require('fs');
const path = require('path');

const directories = [
  'src/components/common',
  'src/components/sections',
  'src/components/ui',
  'src/services',
  'src/hooks',
  'src/utils',
  'src/styles'
];

const files = [
  'src/components/common/Header.jsx',
  'src/components/common/Footer.jsx',
  'src/components/common/Newsletter.jsx',
  'src/components/common/BackToTop.jsx',
  'src/components/common/LoadingSpinner.jsx',
  'src/components/sections/Hero.jsx',
  'src/components/sections/InteractiveMap.jsx',
  'src/components/sections/FeaturedCommunities.jsx',
  'src/components/sections/CommunitiesDirectory.jsx',
  'src/components/sections/EventsTimeline.jsx',
  'src/components/sections/CommunitySpotlights.jsx',
  'src/components/sections/NewsFeed.jsx',
  'src/components/sections/ContactHub.jsx',
  'src/components/ui/CommunityCard.jsx',
  'src/components/ui/EventCard.jsx',
  'src/components/ui/NewsCard.jsx',
  'src/components/ui/FilterSidebar.jsx',
  'src/services/api.js',
  'src/hooks/useApi.js',
  'src/utils/constants.js',
  'src/styles/index.css',
  'src/App.jsx',
  'src/main.jsx'
];

// Create directories
directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Create files
files.forEach(file => {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, '', 'utf8');
    console.log(`Created file: ${file}`);
  }
});

console.log('Folder structure created successfully!');