// Mock API functions - replace with actual API calls when backend is ready

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchFeaturedCommunities = async () => {
  await delay(1000); // Simulate network delay
  return {
    communities: [
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
    ]
  };
};

export const fetchCommunities = async (filters = {}) => {
  await delay(800);
  const allCommunities = await fetchFeaturedCommunities();
  return {
    communities: allCommunities.communities,
    total: allCommunities.communities.length,
    hasMore: false
  };
};

export const fetchEvents = async () => {
  await delay(1200);
  return {
    events: [
      {
        id: 1,
        title: "Douala Developer Conference",
        date: "May 28, 2025",
        time: "09:00 AM - 05:00 PM",
        location: "Akwa Palace Hotel, Douala",
        host: "Douala Developers",
        description: "The largest annual gathering of software developers in Cameroon featuring workshops, talks, and networking opportunities.",
        type: "primary"
      },
      {
        id: 2,
        title: "AI Summit Cameroon",
        date: "June 10, 2025",
        time: "10:00 AM - 04:00 PM",
        location: "Hilton Hotel, Yaounde",
        host: "Cameroon AI Alliance",
        description: "Exploring artificial intelligence applications and opportunities in the Cameroonian context with industry experts.",
        type: "secondary"
      },
      {
        id: 3,
        title: "Women in Tech Bootcamp",
        date: "June 24, 2025",
        time: "09:00 AM - 05:00 PM (3 days)",
        location: "Silicon Mountain Hub, Buea",
        host: "Women Techmakers Buea",
        description: "A three-day intensive coding bootcamp for women looking to start or advance their careers in technology.",
        type: "yellow"
      },
      {
        id: 4,
        title: "Blockchain & Fintech Forum",
        date: "July 15, 2025",
        time: "10:00 AM - 03:00 PM",
        location: "Sawa Hotel, Douala",
        host: "Cameroon Blockchain Network",
        description: "Discussing the future of financial technology and blockchain applications in the Cameroonian economy.",
        type: "primary"
      }
    ]
  };
};

export const fetchNews = async () => {
  await delay(900);
  return {
    news: [
      {
        id: 1,
        title: "Douala Hackathon Winners Secure $50,000 Investment",
        date: "May 20, 2025",
        excerpt: "Team CodeCrafters from Douala Developers community won the annual hackathon with their innovative agricultural supply chain solution, securing major investment.",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20tech%20conference%20or%20hackathon%20scene%20in%20Cameroon%2C%20with%20diverse%20African%20developers%20presenting%20their%20work%20on%20stage.%20Modern%20event%20space%20with%20audience%2C%20professional%20lighting%2C%20subtle%20Cameroon%20flag%20colors%20in%20the%20background%20decorations.&width=400&height=250&seq=news1&orientation=landscape"
      },
      {
        id: 2,
        title: "Women Techmakers Buea Launches Scholarship Program",
        date: "May 15, 2025",
        excerpt: "The community has partnered with Google to offer 50 scholarships for women pursuing careers in software development and data science.",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20African%20women%20in%20tech%20at%20a%20workshop%20or%20training%20session%20in%20Cameroon.%20Women%20engaged%20with%20laptops%20and%20technology%2C%20collaborative%20learning%20environment.%20Modern%20tech%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news2&orientation=landscape"
      },
      {
        id: 3,
        title: "Yaounde Tech Hub Expands with New Innovation Center",
        date: "May 10, 2025",
        excerpt: "The community has opened a new 2,000 sqm facility with co-working spaces, event venues, and specialized labs for hardware prototyping.",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20tech%20startup%20founders%20or%20entrepreneurs%20in%20Cameroon%20meeting%20with%20international%20investors.%20Diverse%20group%20of%20African%20business%20professionals%20in%20discussion%20in%20a%20modern%20office%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news3&orientation=landscape"
      },
      {
        id: 4,
        title: "Cameroon AI Alliance Partners with Microsoft for Research Lab",
        date: "May 5, 2025",
        excerpt: "The partnership will establish Cameroon's first dedicated AI research laboratory with a focus on applications in healthcare and agriculture.",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20tech%20professionals%20in%20Cameroon%20working%20with%20AI%20or%20data%20visualization%20technology.%20Diverse%20group%20of%20African%20tech%20experts%20analyzing%20data%20on%20screens%20in%20a%20modern%20office%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news4&orientation=landscape"
      },
      {
        id: 5,
        title: "Cameroon Blockchain Network to Host Pan-African Conference",
        date: "April 28, 2025",
        excerpt: "The first-ever Pan-African Blockchain Conference will be held in Douala, bringing together experts from 15 African countries.",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20blockchain%20or%20fintech%20professionals%20in%20Cameroon%20at%20a%20conference%20or%20workshop.%20Diverse%20group%20of%20African%20tech%20experts%20engaged%20in%20discussion%20in%20a%20modern%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news5&orientation=landscape"
      },
      {
        id: 6,
        title: "Cameroon UX Community Members Win African Design Awards",
        date: "April 22, 2025",
        excerpt: "Three members of the Cameroon UX Community received recognition at the prestigious African Design Awards for their innovative user interfaces.",
        image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20UX%20designers%20or%20creative%20tech%20professionals%20in%20Cameroon%20collaborating%20on%20a%20project.%20Diverse%20group%20of%20African%20designers%20working%20with%20design%20tools%20and%20prototypes%20in%20a%20modern%20creative%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news6&orientation=landscape"
      }
    ]
  };
};

export const submitContact = async (formData) => {
  await delay(1500);
  console.log('Contact form submitted:', formData);
  return { success: true, message: 'Message sent successfully!' };
};

export const subscribeNewsletter = async (email) => {
  await delay(1000);
  console.log('Newsletter subscription:', email);
  return { success: true, message: 'Successfully subscribed!' };
};

export const fetchCommunityDetails = async (id) => {
  await delay(1200);

    console.log(id);

  
  // Mock detailed community data
  const communities = {
    1: {
      id: 1,
      name: "Douala Developers",
      location: "Douala, Littoral",
      address: "Silicon Valley Quarter, Akwa, Douala",
      members: 785,
      founded: "2018",
      description: "A vibrant community of software developers sharing knowledge and building innovative solutions for local challenges.",
      fullDescription: "Douala Developers is Cameroon's premier software development community, bringing together passionate developers, designers, and tech enthusiasts from across the Littoral region. Since our founding in 2018, we've grown from a small meetup group to one of the most influential tech communities in Central Africa. Our mission is to foster innovation, facilitate knowledge sharing, and build solutions that address both local and global challenges using cutting-edge technology.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20software%20development%20community%20in%20Cameroon%2C%20featuring%20abstract%20code%20symbols%2C%20clean%20lines%2C%20blue%20and%20green%20colors%2C%20minimalist%20design&width=300&height=160&seq=com1&orientation=landscape",
      categories: ["Software Development", "Open Source"],
      tags: ["JavaScript", "Python", "Web Dev", "Mobile Development"],
      specialties: ["Full Stack Development", "Cloud Computing", "DevOps", "API Development"],
      focusAreas: [
        "Building local solutions for Cameroonian businesses",
        "Open source project contributions",
        "Mentorship and skill development",
        "Tech entrepreneurship support"
      ],
      socialLinks: {
        website: "https://doualadevelopers.com",
        twitter: "https://twitter.com/doualadevelopers",
        github: "https://github.com/doualadevelopers",
        linkedin: "https://linkedin.com/company/doualadevelopers",
        discord: "https://discord.gg/doualadevelopers"
      },
      email: "contact@doualadevelopers.com",
      phone: "+237 651 234 567",
      eventsHosted: 124,
      activeProjects: 15,
      partnerships: 8,
      meetingSchedule: [
        { day: "Saturday", time: "2:00 PM - 5:00 PM" },
        { day: "Wednesday", time: "6:00 PM - 8:00 PM (Online)" }
      ],
      upcomingEvents: [
        {
          title: "JavaScript Workshop: Modern ES6+ Features",
          description: "Learn the latest JavaScript features and best practices",
          date: "June 15, 2025",
          time: "2:00 PM - 5:00 PM",
          location: "Silicon Valley Quarter, Douala",
          type: "workshop",
          attendees: 45
        },
        {
          title: "Monthly Developer Meetup",
          description: "Network with fellow developers and share project updates",
          date: "June 22, 2025",
          time: "6:00 PM - 9:00 PM",
          location: "Digital Hub Douala",
          type: "meetup",
          attendees: 80
        }
      ],
      mission: "To empower local developers with cutting-edge skills while building innovative solutions that address Cameroon's unique technological challenges.",
      vision: "To be the leading tech community in Central Africa, recognized for producing world-class developers and groundbreaking digital solutions.",
      values: [
        "Innovation and Creativity",
        "Collaborative Learning",
        "Open Source Philosophy",
        "Local Impact Focus"
      ],
      activities: [
        {
          name: "Weekly Code Reviews",
          description: "Peer code review sessions to improve code quality",
          frequency: "Every Wednesday"
        },
        {
          name: "Monthly Hackathons",
          description: "Build solutions to local challenges in 48 hours",
          frequency: "Last weekend of each month"
        }
      ],
      achievements: [
        {
          title: "Best Tech Community Award 2024",
          description: "Recognized by Cameroon Tech Awards for outstanding community impact",
          date: "December 2024"
        },
        {
          title: "15+ Successful Startups Launched",
          description: "Community members have successfully launched tech startups",
          date: "2018-2025"
        }
      ]
    },
    // Add more communities as needed...
  };
  
  return communities[id] || null;
};

export const fetchSimilarCommunities = async (currentId) => {
  await delay(800);
  const allCommunities = await fetchFeaturedCommunities();
  
  // Filter out current community and return 3 similar ones
  const similar = allCommunities.communities
    .filter(c => c.id.toString() !== currentId.toString())
    .slice(0, 3);
    
  return { communities: similar };
};