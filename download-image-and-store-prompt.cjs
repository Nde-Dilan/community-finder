const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// News data from api.js
const newsData = [
  {
    id: 1,
    title: "Douala Hackathon Winners Secure $50,000 Investment",
    date: "May 20, 2025",
    excerpt: "Team CodeCrafters from Douala Developers community won the annual hackathon with their innovative agricultural supply chain solution, securing major investment.",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20tech%20conference%20or%20hackathon%20scene%20in%20Cameroon%2C%20with%20diverse%20African%20developers%20presenting%20their%20work%20on%20stage.%20Modern%20event%20space%20with%20audience%2C%20professional%20lighting%2C%20subtle%20Cameroon%20flag%20colors%20in%20the%20background%20decorations.&width=400&height=250&seq=news1&orientation=landscape",
    category: "Investment"
  },
  {
    id: 2,
    title: "Women Techmakers Buea Launches Scholarship Program",
    date: "May 15, 2025",
    excerpt: "The community has partnered with Google to offer 50 scholarships for women pursuing careers in software development and data science.",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20African%20women%20in%20tech%20at%20a%20workshop%20or%20training%20session%20in%20Cameroon.%20Women%20engaged%20with%20laptops%20and%20technology%2C%20collaborative%20learning%20environment.%20Modern%20tech%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news2&orientation=landscape",
    category: "Education"
  },
  {
    id: 3,
    title: "Yaounde Tech Hub Expands with New Innovation Center",
    date: "May 10, 2025",
    excerpt: "The community has opened a new 2,000 sqm facility with co-working spaces, event venues, and specialized labs for hardware prototyping.",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20tech%20startup%20founders%20or%20entrepreneurs%20in%20Cameroon%20meeting%20with%20international%20investors.%20Diverse%20group%20of%20African%20business%20professionals%20in%20discussion%20in%20a%20modern%20office%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news3&orientation=landscape",
    category: "Infrastructure"
  },
  {
    id: 4,
    title: "Cameroon AI Alliance Partners with Microsoft for Research Lab",
    date: "May 5, 2025",
    excerpt: "The partnership will establish Cameroon's first dedicated AI research laboratory with a focus on applications in healthcare and agriculture.",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20tech%20professionals%20in%20Cameroon%20working%20with%20AI%20or%20data%20visualization%20technology.%20Diverse%20group%20of%20African%20tech%20experts%20analyzing%20data%20on%20screens%20in%20a%20modern%20office%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news4&orientation=landscape",
    category: "Partnership"
  },
  {
    id: 5,
    title: "Cameroon Blockchain Network to Host Pan-African Conference",
    date: "April 28, 2025",
    excerpt: "The first-ever Pan-African Blockchain Conference will be held in Douala, bringing together experts from 15 African countries.",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20blockchain%20or%20fintech%20professionals%20in%20Cameroon%20at%20a%20conference%20or%20workshop.%20Diverse%20group%20of%20African%20tech%20experts%20engaged%20in%20discussion%20in%20a%20modern%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news5&orientation=landscape",
    category: "Conference"
  },
  {
    id: 6,
    title: "Cameroon UX Community Members Win African Design Awards",
    date: "April 22, 2025",
    excerpt: "Three members of the Cameroon UX Community received recognition at the prestigious African Design Awards for their innovative user interfaces.",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20UX%20designers%20or%20creative%20tech%20professionals%20in%20Cameroon%20collaborating%20on%20a%20project.%20Diverse%20group%20of%20African%20designers%20working%20with%20design%20tools%20and%20prototypes%20in%20a%20modern%20creative%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news6&orientation=landscape",
    category: "Awards"
  }
];

// Community spotlights data
const spotlightsData = [
  {
    name: "Douala Developers",
    title: "Douala Developers: Building Local Solutions",
    image: "https://readdy.ai/api/search-image?query=A%20diverse%20group%20of%20young%20African%20software%20developers%20collaborating%20in%20a%20modern%20tech%20workspace%20in%20Douala%2C%20Cameroon.%20They%20are%20gathered%20around%20computers%2C%20engaged%20in%20coding%20and%20discussion.%20The%20space%20has%20a%20professional%20yet%20creative%20atmosphere%20with%20subtle%20green%20and%20red%20Cameroon%20colors%20in%20the%20decor.%20Natural%20lighting%2C%20modern%20office%20setting.&width=600&height=400&seq=spot1&orientation=landscape"
  },
  {
    name: "Women Techmakers Buea",
    title: "Women Techmakers Buea: Empowering Female Technologists",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20women%20tech%20professionals%20in%20Buea%2C%20Cameroon%2C%20engaged%20in%20a%20coding%20workshop.%20The%20diverse%20group%20of%20African%20women%20are%20working%20on%20laptops%2C%20some%20teaching%20others.%20The%20space%20is%20bright%20and%20modern%20with%20subtle%20tech%20elements%20and%20hints%20of%20Cameroon%20national%20colors%20in%20the%20background.%20Professional%20atmosphere%2C%20collaborative%20environment.&width=600&height=400&seq=spot2&orientation=landscape"
  },
  {
    name: "Cameroon AI Alliance",
    title: "Cameroon AI Alliance: Advancing Artificial Intelligence",
    image: "https://readdy.ai/api/search-image?query=A%20professional%20gathering%20of%20AI%20researchers%20and%20engineers%20in%20Cameroon%2C%20diverse%20group%20of%20African%20tech%20professionals%20analyzing%20data%20visualizations%20on%20large%20screens.%20Modern%20tech%20conference%20room%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.%20Professional%20atmosphere%2C%20collaborative%20environment%2C%20clean%20lighting.&width=600&height=400&seq=spot3&orientation=landscape"
  }
];

// Gallery data
const galleryData = [
  {
    id: 1,
    url: "https://readdy.ai/api/search-image?query=African%20tech%20community%20meetup%20in%20Cameroon%2C%20diverse%20group%20of%20developers%20networking%20and%20collaborating%2C%20modern%20tech%20space%2C%20professional%20atmosphere&width=400&height=300&seq=gallery1&orientation=landscape",
    alt: "Community Meetup",
    title: "Monthly Developer Meetup"
  },
  {
    id: 2,
    url: "https://readdy.ai/api/search-image?query=Tech%20workshop%20in%20Cameroon%2C%20African%20developers%20learning%20and%20coding%20together%2C%20laptops%20and%20screens%2C%20collaborative%20environment&width=400&height=300&seq=gallery2&orientation=landscape",
    alt: "Workshop Session",
    title: "Hands-on Workshop"
  },
  {
    id: 3,
    url: "https://readdy.ai/api/search-image?query=Hackathon%20event%20in%20Cameroon%2C%20teams%20of%20African%20developers%20working%20intensively%20on%20projects%2C%20modern%20tech%20venue%2C%20competitive%20atmosphere&width=400&height=300&seq=gallery3&orientation=landscape",
    alt: "Hackathon Event",
    title: "Annual Hackathon"
  },
  {
    id: 4,
    url: "https://readdy.ai/api/search-image?query=Tech%20conference%20presentation%20in%20Cameroon%2C%20African%20speaker%20presenting%20to%20an%20engaged%20tech%20audience%2C%20professional%20stage%20setup&width=400&height=300&seq=gallery4&orientation=landscape",
    alt: "Conference Presentation",
    title: "Tech Conference"
  }
];

// Communities data (from previous script)
const communitiesData = [
  {
    id: 1,
    name: "Douala Developers",
    location: "Douala, Littoral",
    members: 785,
    description: "A vibrant community of software developers sharing knowledge and building innovative solutions for local challenges.",
    logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20software%20development%20community%20in%20Cameroon%2C%20featuring%20abstract%20code%20symbols%2C%20clean%20lines%2C%20blue%20and%20green%20colors%2C%20minimalist%20design&width=300&height=160&seq=com1&orientation=landscape",
    tags: ["JavaScript", "Python", "Web Dev"]
  },
  {
    id: 2,
    name: "Yaounde Tech Hub",
    location: "Yaounde, Centre",
    members: 1245,
    description: "The capital's premier innovation space connecting entrepreneurs, developers, and investors to build Cameroon's digital future.",
    logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20tech%20startup%20hub%20in%20Cameroon%2C%20featuring%20abstract%20geometric%20shapes%2C%20red%20and%20yellow%20colors%2C%20minimalist%20design%20with%20tech%20elements&width=300&height=160&seq=com2&orientation=landscape",
    tags: ["Startups", "Innovation", "Coworking"]
  },
  {
    id: 3,
    name: "Cameroon AI Alliance",
    location: "Multiple Locations",
    members: 632,
    description: "Advancing artificial intelligence and machine learning expertise through workshops, projects and research collaborations.",
    logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20an%20AI%20and%20data%20science%20community%20in%20Cameroon%2C%20featuring%20neural%20network%20patterns%2C%20purple%20and%20blue%20colors%2C%20minimalist%20tech%20design&width=300&height=160&seq=com3&orientation=landscape",
    tags: ["AI", "ML", "Data Science"]
  },
  {
    id: 4,
    name: "Women Techmakers Buea",
    location: "Buea, South West",
    members: 418,
    description: "Empowering women in technology through mentorship, skill development workshops and networking opportunities.",
    logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20women%20in%20tech%20community%20in%20Cameroon%2C%20featuring%20abstract%20feminine%20tech%20symbols%2C%20teal%20and%20purple%20colors%2C%20minimalist%20design&width=300&height=160&seq=com4&orientation=landscape",
    tags: ["Women in Tech", "Mentorship", "Diversity"]
  },
  {
    id: 5,
    name: "Cameroon Blockchain Network",
    location: "Douala & Yaounde",
    members: 295,
    description: "Exploring blockchain applications for financial inclusion, supply chain and digital identity solutions in Cameroon.",
    logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20blockchain%20technology%20community%20in%20Cameroon%2C%20featuring%20blockchain%20pattern%20elements%2C%20green%20and%20blue%20colors%2C%20minimalist%20tech%20design&width=300&height=160&seq=com5&orientation=landscape",
    tags: ["Blockchain", "Crypto", "Web3"]
  },
  {
    id: 6,
    name: "Cameroon UX Community",
    location: "Limbe, South West",
    members: 326,
    description: "Designers creating user-centered digital experiences with a focus on local context and accessibility considerations.",
    logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20UX%20design%20community%20in%20Cameroon%2C%20featuring%20design%20tool%20symbols%2C%20orange%20and%20blue%20colors%2C%20minimalist%20creative%20design&width=300&height=160&seq=com6&orientation=landscape",
    tags: ["UX Design", "UI", "Product"]
  }
];

// Function to extract query parameter from URL
function extractQueryFromUrl(url) {
  try {
    const urlObj = new URL(url);
    return decodeURIComponent(urlObj.searchParams.get('query') || '');
  } catch (error) {
    console.error('Error parsing URL:', error);
    return '';
  }
}

// Enhanced function to download an image with redirect handling
function downloadImage(url, filename, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      }
    };
    
    function makeRequest(requestUrl, redirectCount = 0) {
      if (redirectCount > maxRedirects) {
        reject(new Error(`Too many redirects (${maxRedirects})`));
        return;
      }
      
      const requestProtocol = requestUrl.startsWith('https:') ? https : http;
      
      console.log(`🔄 Attempting to download: ${filename} (redirect ${redirectCount})`);
      
      requestProtocol.get(requestUrl, options, (response) => {
        console.log(`📊 Response status: ${response.statusCode} for ${filename}`);
        
        // Handle redirects (301, 302, 307, 308)
        if ([301, 302, 307, 308].includes(response.statusCode)) {
          const location = response.headers.location;
          if (location) {
            console.log(`↩️ Redirecting to: ${location}`);
            
            // Handle relative URLs
            const redirectUrl = location.startsWith('http') 
              ? location 
              : new URL(location, requestUrl).href;
            
            makeRequest(redirectUrl, redirectCount + 1);
            return;
          } else {
            reject(new Error(`Redirect without location header`));
            return;
          }
        }
        
        // Handle successful response
        if (response.statusCode === 200) {
          const fileStream = fs.createWriteStream(filename);
          
          // Handle gzip encoding
          let stream = response;
          if (response.headers['content-encoding'] === 'gzip') {
            const zlib = require('zlib');
            stream = response.pipe(zlib.createGunzip());
          }
          
          stream.pipe(fileStream);
          
          fileStream.on('finish', () => {
            fileStream.close();
            console.log(`✅ Successfully downloaded: ${path.basename(filename)}`);
            resolve();
          });
          
          fileStream.on('error', (err) => {
            console.error(`❌ Error saving ${filename}:`, err);
            fs.unlink(filename, () => {});
            reject(err);
          });
          
          stream.on('error', (err) => {
            console.error(`❌ Stream error for ${filename}:`, err);
            fileStream.destroy();
            fs.unlink(filename, () => {});
            reject(err);
          });
          
        } else {
          reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        }
        
      }).on('error', (err) => {
        console.error(`❌ Network error downloading ${filename}:`, err);
        reject(err);
      });
    }
    
    makeRequest(url);
  });
}

// Function to create directory if it doesn't exist
function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`📁 Created directory: ${dirPath}`);
  }
}

// Function to create a safe filename
function createSafeFilename(name, id, prefix = '', extension = 'jpg') {
  const safeName = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
  
  return `${prefix}${id}-${safeName}.${extension}`;
}

// Enhanced function to download with retry logic
async function downloadWithRetry(url, filename, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`🎯 Attempt ${attempt}/${maxRetries} for ${path.basename(filename)}`);
      await downloadImage(url, filename);
      return; // Success
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed for ${path.basename(filename)}:`, error.message);
      
      if (attempt === maxRetries) {
        console.error(`🚫 All attempts failed for ${path.basename(filename)}`);
        throw error;
      }
      
      // Wait before retry (exponential backoff)
      const delay = Math.pow(2, attempt) * 1000;
      console.log(`⏳ Waiting ${delay}ms before retry...`);
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Main function to download all images
async function downloadAllImages() {
  console.log('🚀 Starting comprehensive image download for Community Finder...\n');
  
  // Ensure directories exist
  const publicDir = path.join(__dirname, 'public');
  const imagesDir = path.join(publicDir, 'images');
  const communitiesDir = path.join(imagesDir, 'communities');
  const newsDir = path.join(imagesDir, 'news');
  const spotlightsDir = path.join(imagesDir, 'spotlights');
  const galleryDir = path.join(imagesDir, 'gallery');
  
  ensureDirectoryExists(publicDir);
  ensureDirectoryExists(imagesDir);
  ensureDirectoryExists(communitiesDir);
  ensureDirectoryExists(newsDir);
  ensureDirectoryExists(spotlightsDir);
  ensureDirectoryExists(galleryDir);
  
  // Prepare data for all downloads
  const allPrompts = [];
  const allResults = [];
  
  // Prepare download tasks
  const downloadTasks = [];
  
  console.log('📋 Preparing download tasks...\n');
  
  // 1. Community logos
  communitiesData.forEach((community) => {
    const query = extractQueryFromUrl(community.logo);
    const filename = createSafeFilename(community.name, community.id, 'logo-');
    const filePath = path.join(communitiesDir, filename);
    
    allPrompts.push({
      type: 'community',
      id: community.id,
      name: community.name,
      filename: filename,
      prompt: query,
      originalUrl: community.logo,
      localPath: `/images/communities/${filename}`
    });
    
    downloadTasks.push({
      type: 'Community Logo',
      name: community.name,
      url: community.logo,
      filePath: filePath,
      id: `community-${community.id}`
    });
  });
  
  // 2. News images
  newsData.forEach((article) => {
    const query = extractQueryFromUrl(article.image);
    const filename = createSafeFilename(article.title, article.id, 'news-');
    const filePath = path.join(newsDir, filename);
    
    allPrompts.push({
      type: 'news',
      id: article.id,
      name: article.title,
      filename: filename,
      prompt: query,
      originalUrl: article.image,
      localPath: `/images/news/${filename}`,
      category: article.category
    });
    
    downloadTasks.push({
      type: 'News Article',
      name: article.title,
      url: article.image,
      filePath: filePath,
      id: `news-${article.id}`
    });
  });
  
  // 3. Spotlight images
  spotlightsData.forEach((spotlight, index) => {
    const query = extractQueryFromUrl(spotlight.image);
    const filename = createSafeFilename(spotlight.name, index + 1, 'spotlight-');
    const filePath = path.join(spotlightsDir, filename);
    
    allPrompts.push({
      type: 'spotlight',
      id: index + 1,
      name: spotlight.name,
      filename: filename,
      prompt: query,
      originalUrl: spotlight.image,
      localPath: `/images/spotlights/${filename}`
    });
    
    downloadTasks.push({
      type: 'Community Spotlight',
      name: spotlight.name,
      url: spotlight.image,
      filePath: filePath,
      id: `spotlight-${index + 1}`
    });
  });
  
  // 4. Gallery images
  galleryData.forEach((image) => {
    const query = extractQueryFromUrl(image.url);
    const filename = createSafeFilename(image.title, image.id, 'gallery-');
    const filePath = path.join(galleryDir, filename);
    
    allPrompts.push({
      type: 'gallery',
      id: image.id,
      name: image.title,
      filename: filename,
      prompt: query,
      originalUrl: image.url,
      localPath: `/images/gallery/${filename}`,
      alt: image.alt
    });
    
    downloadTasks.push({
      type: 'Gallery Image',
      name: image.title,
      url: image.url,
      filePath: filePath,
      id: `gallery-${image.id}`
    });
  });
  
  console.log(`📊 Total images to download: ${downloadTasks.length}`);
  console.log(`   - Community logos: ${communitiesData.length}`);
  console.log(`   - News images: ${newsData.length}`);
  console.log(`   - Spotlight images: ${spotlightsData.length}`);
  console.log(`   - Gallery images: ${galleryData.length}\n`);
  
  // Download all images sequentially
  for (const task of downloadTasks) {
    console.log(`\n${'='.repeat(80)}`);
    console.log(`📥 Processing: ${task.type} - ${task.name}`);
    console.log(`🏷️ Filename: ${path.basename(task.filePath)}`);
    console.log(`🔗 URL: ${task.url}`);
    console.log(`${'='.repeat(80)}`);
    
    try {
      await downloadWithRetry(task.url, task.filePath);
      allResults.push({ 
        id: task.id, 
        type: task.type, 
        name: task.name, 
        status: 'success' 
      });
    } catch (error) {
      console.error(`🚫 Final failure for ${task.name}:`, error.message);
      allResults.push({ 
        id: task.id, 
        type: task.type, 
        name: task.name, 
        status: 'failed', 
        error: error.message 
      });
    }
    
    // Small delay between downloads
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  // Print comprehensive summary
  console.log(`\n${'='.repeat(80)}`);
  console.log('📊 COMPREHENSIVE DOWNLOAD SUMMARY');
  console.log(`${'='.repeat(80)}`);
  
  const successful = allResults.filter(r => r.status === 'success');
  const failed = allResults.filter(r => r.status === 'failed');
  
  console.log(`✅ Total successful downloads: ${successful.length}/${downloadTasks.length}`);
  console.log(`❌ Total failed downloads: ${failed.length}/${downloadTasks.length}\n`);
  
  // Group by type
  const resultsByType = {
    'Community Logo': allResults.filter(r => r.type === 'Community Logo'),
    'News Article': allResults.filter(r => r.type === 'News Article'),
    'Community Spotlight': allResults.filter(r => r.type === 'Community Spotlight'),
    'Gallery Image': allResults.filter(r => r.type === 'Gallery Image')
  };
  
  Object.entries(resultsByType).forEach(([type, results]) => {
    const typeSuccessful = results.filter(r => r.status === 'success').length;
    const typeTotal = results.length;
    console.log(`${type}: ${typeSuccessful}/${typeTotal} successful`);
    
    if (typeSuccessful > 0) {
      results.filter(r => r.status === 'success').forEach(r => 
        console.log(`   ✓ ${r.name}`)
      );
    }
    
    const typeFailed = results.filter(r => r.status === 'failed');
    if (typeFailed.length > 0) {
      typeFailed.forEach(r => 
        console.log(`   ✗ ${r.name}: ${r.error}`)
      );
    }
    console.log('');
  });
  
  // Create comprehensive prompts file
  const promptsFilePath = path.join(__dirname, 'all-images-prompts.txt');
  let promptsContent = 'COMMUNITY FINDER - ALL IMAGES PROMPTS\n';
  promptsContent += '='.repeat(60) + '\n\n';
  
  // Group prompts by type
  const promptsByType = {
    'community': allPrompts.filter(p => p.type === 'community'),
    'news': allPrompts.filter(p => p.type === 'news'),
    'spotlight': allPrompts.filter(p => p.type === 'spotlight'),
    'gallery': allPrompts.filter(p => p.type === 'gallery')
  };
  
  Object.entries(promptsByType).forEach(([type, prompts]) => {
    promptsContent += `${type.toUpperCase()} IMAGES\n`;
    promptsContent += '-'.repeat(40) + '\n\n';
    
    prompts.forEach((item, index) => {
      const result = allResults.find(r => r.id === `${type}-${item.id}`);
      const status = result ? result.status : 'unknown';
      
      promptsContent += `${index + 1}. ${item.name} (ID: ${item.id}) [${status.toUpperCase()}]\n`;
      promptsContent += `   Filename: ${item.filename}\n`;
      promptsContent += `   Local Path: ${item.localPath}\n`;
      promptsContent += `   Prompt: ${item.prompt}\n`;
      promptsContent += `   Original URL: ${item.originalUrl}\n`;
      
      if (item.category) {
        promptsContent += `   Category: ${item.category}\n`;
      }
      if (item.alt) {
        promptsContent += `   Alt Text: ${item.alt}\n`;
      }
      if (result && result.error) {
        promptsContent += `   Error: ${result.error}\n`;
      }
      promptsContent += '\n';
    });
    
    promptsContent += '\n';
  });
  
  fs.writeFileSync(promptsFilePath, promptsContent, 'utf8');
  console.log(`📝 Comprehensive prompts saved to: ${promptsFilePath}`);
  
  // Create comprehensive JSON data
  const jsonFilePath = path.join(__dirname, 'all-images-data.json');
  const jsonData = {
    downloadDate: new Date().toISOString(),
    summary: {
      totalImages: downloadTasks.length,
      successfulDownloads: successful.length,
      failedDownloads: failed.length,
      byType: {
        communities: communitiesData.length,
        news: newsData.length,
        spotlights: spotlightsData.length,
        gallery: galleryData.length
      }
    },
    prompts: promptsByType,
    results: allResults
  };
  
  fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2), 'utf8');
  console.log(`📊 Comprehensive JSON data saved to: ${jsonFilePath}`);
  
  // Generate updated API files
  console.log('🔄 Generating updated API files with local paths...');
  generateUpdatedApiFiles(allPrompts, allResults);
  
  console.log('\n🎉 Comprehensive download completed!');
  
  if (failed.length > 0) {
    console.log('\n⚠️ Some downloads failed. You may need to:');
    console.log('1. Check if the URLs are accessible');
    console.log('2. Try running the script again later');
    console.log('3. Use alternative image sources for failed downloads');
  }
  
  console.log('\n📁 Directory structure created:');
  console.log('public/');
  console.log('├── images/');
  console.log('│   ├── communities/ (logos)');
  console.log('│   ├── news/ (article images)');
  console.log('│   ├── spotlights/ (spotlight images)');
  console.log('│   └── gallery/ (gallery images)');
}

// Function to generate updated API files
function generateUpdatedApiFiles(allPrompts, allResults) {
  // Generate updated API.js content
  let updatedApiContent = '// Updated API with local image paths\n';
  updatedApiContent += '// Generated on: ' + new Date().toISOString() + '\n\n';
  updatedApiContent += 'const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\n';
  
  // Communities
  updatedApiContent += 'export const fetchFeaturedCommunities = async () => {\n';
  updatedApiContent += '  await delay(1000);\n';
  updatedApiContent += '  return {\n';
  updatedApiContent += '    communities: [\n';
  
  communitiesData.forEach((community, index) => {
    const promptData = allPrompts.find(p => p.type === 'community' && p.id === community.id);
    const result = allResults.find(r => r.id === `community-${community.id}`);
    const isSuccessful = result && result.status === 'success';
    
    const logoPath = isSuccessful ? promptData.localPath : community.logo;
    
    updatedApiContent += '      {\n';
    updatedApiContent += `        id: ${community.id},\n`;
    updatedApiContent += `        name: "${community.name}",\n`;
    updatedApiContent += `        location: "${community.location}",\n`;
    updatedApiContent += `        members: ${community.members},\n`;
    updatedApiContent += `        description: "${community.description}",\n`;
    updatedApiContent += `        logo: "${logoPath}",${isSuccessful ? ' // Local path' : ' // Original URL (download failed)'}\n`;
    updatedApiContent += `        tags: ${JSON.stringify(community.tags)}\n`;
    updatedApiContent += '      }';
    
    if (index < communitiesData.length - 1) {
      updatedApiContent += ',';
    }
    updatedApiContent += '\n';
  });
  
  updatedApiContent += '    ]\n';
  updatedApiContent += '  };\n';
  updatedApiContent += '};\n\n';
  
  // News
  updatedApiContent += 'export const fetchNews = async () => {\n';
  updatedApiContent += '  await delay(900);\n';
  updatedApiContent += '  return {\n';
  updatedApiContent += '    news: [\n';
  
  newsData.forEach((article, index) => {
    const promptData = allPrompts.find(p => p.type === 'news' && p.id === article.id);
    const result = allResults.find(r => r.id === `news-${article.id}`);
    const isSuccessful = result && result.status === 'success';
    
    const imagePath = isSuccessful ? promptData.localPath : article.image;
    
    updatedApiContent += '      {\n';
    updatedApiContent += `        id: ${article.id},\n`;
    updatedApiContent += `        title: "${article.title}",\n`;
    updatedApiContent += `        date: "${article.date}",\n`;
    updatedApiContent += `        excerpt: "${article.excerpt}",\n`;
    updatedApiContent += `        image: "${imagePath}",${isSuccessful ? ' // Local path' : ' // Original URL (download failed)'}\n`;
    updatedApiContent += `        category: "${article.category}"\n`;
    updatedApiContent += '      }';
    
    if (index < newsData.length - 1) {
      updatedApiContent += ',';
    }
    updatedApiContent += '\n';
  });
  
  updatedApiContent += '    ]\n';
  updatedApiContent += '  };\n';
  updatedApiContent += '};\n\n';
  
  // Add other API functions (events, contact, etc.)
  updatedApiContent += `// ... other API functions remain the same\n`;
  
  const updatedApiPath = path.join(__dirname, 'updated-api-with-all-local-images.js');
  fs.writeFileSync(updatedApiPath, updatedApiContent, 'utf8');
  console.log(`📁 Updated API file saved to: ${updatedApiPath}`);
  
  // Generate React component updates
  generateReactComponentUpdates(allPrompts, allResults);
}

// Function to generate updated React components
function generateReactComponentUpdates(allPrompts, allResults) {
  // Updated CommunitySpotlights.jsx
  let spotlightsContent = '// Updated CommunitySpotlights.jsx with local images\n\n';
  spotlightsContent += 'const spotlights = [\n';
  
  spotlightsData.forEach((spotlight, index) => {
    const promptData = allPrompts.find(p => p.type === 'spotlight' && p.id === index + 1);
    const result = allResults.find(r => r.id === `spotlight-${index + 1}`);
    const isSuccessful = result && result.status === 'success';
    
    const imagePath = isSuccessful ? promptData.localPath : spotlight.image;
    
    spotlightsContent += '  {\n';
    spotlightsContent += `    name: "${spotlight.name}",\n`;
    spotlightsContent += `    title: "${spotlight.title}",\n`;
    spotlightsContent += `    image: "${imagePath}",${isSuccessful ? ' // Local path' : ' // Original URL (download failed)'}\n`;
    spotlightsContent += '    // ... other properties\n';
    spotlightsContent += '  }';
    
    if (index < spotlightsData.length - 1) {
      spotlightsContent += ',';
    }
    spotlightsContent += '\n';
  });
  
  spotlightsContent += '];\n';
  
  const spotlightsPath = path.join(__dirname, 'updated-community-spotlights.js');
  fs.writeFileSync(spotlightsPath, spotlightsContent, 'utf8');
  console.log(`📁 Updated CommunitySpotlights data saved to: ${spotlightsPath}`);
  
  // Updated CommunityGallery.jsx
  let galleryContent = '// Updated CommunityGallery.jsx with local images\n\n';
  galleryContent += 'const defaultGallery = [\n';
  
  galleryData.forEach((image, index) => {
    const promptData = allPrompts.find(p => p.type === 'gallery' && p.id === image.id);
    const result = allResults.find(r => r.id === `gallery-${image.id}`);
    const isSuccessful = result && result.status === 'success';
    
    const imagePath = isSuccessful ? promptData.localPath : image.url;
    
    galleryContent += '  {\n';
    galleryContent += `    id: ${image.id},\n`;
    galleryContent += `    url: "${imagePath}",${isSuccessful ? ' // Local path' : ' // Original URL (download failed)'}\n`;
    galleryContent += `    alt: "${image.alt}",\n`;
    galleryContent += `    title: "${image.title}"\n`;
    galleryContent += '  }';
    
    if (index < galleryData.length - 1) {
      galleryContent += ',';
    }
    galleryContent += '\n';
  });
  
  galleryContent += '];\n';
  
  const galleryPath = path.join(__dirname, 'updated-community-gallery.js');
  fs.writeFileSync(galleryPath, galleryContent, 'utf8');
  console.log(`📁 Updated CommunityGallery data saved to: ${galleryPath}`);
}

// Run the script
if (require.main === module) {
  downloadAllImages()
    .catch(error => {
      console.error('❌ Script failed:', error);
      process.exit(1);
    });
}

module.exports = {
  downloadAllImages,
  communitiesData,
  newsData,
  spotlightsData,
  galleryData
};