// Updated API with local image paths
// Generated on: 2025-05-26T00:35:12.761Z

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchFeaturedCommunities = async () => {
  await delay(1000);
  return {
    communities: [
      {
        id: 1,
        name: "Douala Developers",
        location: "Douala, Littoral",
        members: 785,
        description: "A vibrant community of software developers sharing knowledge and building innovative solutions for local challenges.",
        logo: "/images/communities/logo-1-douala-developers.jpg", // Local path
        tags: ["JavaScript","Python","Web Dev"]
      },
      {
        id: 2,
        name: "Yaounde Tech Hub",
        location: "Yaounde, Centre",
        members: 1245,
        description: "The capital's premier innovation space connecting entrepreneurs, developers, and investors to build Cameroon's digital future.",
        logo: "/images/communities/logo-2-yaounde-tech-hub.jpg", // Local path
        tags: ["Startups","Innovation","Coworking"]
      },
      {
        id: 3,
        name: "Cameroon AI Alliance",
        location: "Multiple Locations",
        members: 632,
        description: "Advancing artificial intelligence and machine learning expertise through workshops, projects and research collaborations.",
        logo: "/images/communities/logo-3-cameroon-ai-alliance.jpg", // Local path
        tags: ["AI","ML","Data Science"]
      },
      {
        id: 4,
        name: "Women Techmakers Buea",
        location: "Buea, South West",
        members: 418,
        description: "Empowering women in technology through mentorship, skill development workshops and networking opportunities.",
        logo: "/images/communities/logo-4-women-techmakers-buea.jpg", // Local path
        tags: ["Women in Tech","Mentorship","Diversity"]
      },
      {
        id: 5,
        name: "Cameroon Blockchain Network",
        location: "Douala & Yaounde",
        members: 295,
        description: "Exploring blockchain applications for financial inclusion, supply chain and digital identity solutions in Cameroon.",
        logo: "/images/communities/logo-5-cameroon-blockchain-network.jpg", // Local path
        tags: ["Blockchain","Crypto","Web3"]
      },
      {
        id: 6,
        name: "Cameroon UX Community",
        location: "Limbe, South West",
        members: 326,
        description: "Designers creating user-centered digital experiences with a focus on local context and accessibility considerations.",
        logo: "/images/communities/logo-6-cameroon-ux-community.jpg", // Local path
        tags: ["UX Design","UI","Product"]
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
        image: "/images/news/news-1-douala-hackathon-winners-secure-50-000-investment.jpg", // Local path
        category: "Investment"
      },
      {
        id: 2,
        title: "Women Techmakers Buea Launches Scholarship Program",
        date: "May 15, 2025",
        excerpt: "The community has partnered with Google to offer 50 scholarships for women pursuing careers in software development and data science.",
        image: "/images/news/news-2-women-techmakers-buea-launches-scholarship-program.jpg", // Local path
        category: "Education"
      },
      {
        id: 3,
        title: "Yaounde Tech Hub Expands with New Innovation Center",
        date: "May 10, 2025",
        excerpt: "The community has opened a new 2,000 sqm facility with co-working spaces, event venues, and specialized labs for hardware prototyping.",
        image: "/images/news/news-3-yaounde-tech-hub-expands-with-new-innovation-center.jpg", // Local path
        category: "Infrastructure"
      },
      {
        id: 4,
        title: "Cameroon AI Alliance Partners with Microsoft for Research Lab",
        date: "May 5, 2025",
        excerpt: "The partnership will establish Cameroon's first dedicated AI research laboratory with a focus on applications in healthcare and agriculture.",
        image: "/images/news/news-4-cameroon-ai-alliance-partners-with-microsoft-for-research-lab.jpg", // Local path
        category: "Partnership"
      },
      {
        id: 5,
        title: "Cameroon Blockchain Network to Host Pan-African Conference",
        date: "April 28, 2025",
        excerpt: "The first-ever Pan-African Blockchain Conference will be held in Douala, bringing together experts from 15 African countries.",
        image: "/images/news/news-5-cameroon-blockchain-network-to-host-pan-african-conference.jpg", // Local path
        category: "Conference"
      },
      {
        id: 6,
        title: "Cameroon UX Community Members Win African Design Awards",
        date: "April 22, 2025",
        excerpt: "Three members of the Cameroon UX Community received recognition at the prestigious African Design Awards for their innovative user interfaces.",
        image: "/images/news/news-6-cameroon-ux-community-members-win-african-design-awards.jpg", // Local path
        category: "Awards"
      }
    ]
  };
};

// ... other API functions remain the same
