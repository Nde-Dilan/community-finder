// Mock API functions - replace with actual API calls when backend is ready

import { Icons } from "../utils/icons";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchFeaturedCommunities = async () => {
  await delay(1000); // Simulate network delay
  return {
    communities: [
      {
        id: 1,
        name: "Laravel Cameroun",
        location: "Cameroon",
        members: 785,
        description:
          "Laravel Cameroun is a community of developers and enthusiasts who specialize in building web applications using the Laravel framework. This community shares knowledge, organizes meetups, and collaborates on open-source projects to advance the Laravel ecosystem in Cameroon.",
        logo: "/communities/laravel-cm.png",
        tags: ["PHP", "Laravel", "MySQL"],

        links: "https://laravel.cm/"
      },
      {
        id: 2,
        name: "Dot NET Cameroun",
        location: "Cameroon",
        members: 1245,
        description:
          "Dot NET Cameroun is a community for .NET developers in Cameroon. It provides a platform for professionals and enthusiasts to learn, share, and develop their skills in .NET technologies, including web, desktop, and cloud applications.",
        logo: "/communities/dot-net.png",
        tags: ["C#", ".NET Core", "Azure"],
         links:  "https://dotnetcameroon.azurewebsites.net/",
      },
      {
        id: 3,
        name: "Flutter & Dart Community",
        location: "Cameroon",
        members: 632,
        description:
          "The Flutter & Dart Community in Cameroon is dedicated to mobile application development using the Flutter framework and Dart programming language. Members of this community engage in collaborative projects, workshops, and knowledge-sharing sessions to enhance their expertise in building cross-platform apps.",
        logo: "/communities/flutter-cm.png",
        tags: ["Dart", "Flutter", "Mobile Dev"],
          links:  "https://chat.whatsapp.com/J5ToUhSX2ADKR9k1qyh0Vf",
      },
      {
        id: 4,
        name: "FOF - Douala",
        location: "Douala, Littoral",
        members: 418,
        description:
          "FOF - Douala (Friends of Figma - Douala) is a community of designers and developers who use Figma for creating user interfaces and experiences. The community provides a platform for sharing knowledge, organizing workshops, and collaborating on design projects using Figma and related tools.",
        logo: "/communities/fof-douala.png",
        tags: ["UI/UX Design", "Figma", "Prototyping"],
         links:  "https://t.me/FOF_Cameroon",
      },
    ],
  };
};

export const fetchCommunities = async (filters = {}) => {
  await delay(800);
  const allCommunities = await fetchFeaturedCommunities();
  return {
    communities: allCommunities.communities,
    total: allCommunities.communities.length,
    hasMore: false,
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
        description:
          "The largest annual gathering of software developers in Cameroon featuring workshops, talks, and networking opportunities.",
        type: "primary",
      },
      {
        id: 2,
        title: "AI Summit Cameroon",
        date: "June 10, 2025",
        time: "10:00 AM - 04:00 PM",
        location: "Hilton Hotel, Yaounde",
        host: "Cameroon AI Alliance",
        description:
          "Exploring artificial intelligence applications and opportunities in the Cameroonian context with industry experts.",
        type: "secondary",
      },
      {
        id: 3,
        title: "Women in Tech Bootcamp",
        date: "June 24, 2025",
        time: "09:00 AM - 05:00 PM (3 days)",
        location: "Silicon Mountain Hub, Buea",
        host: "Women Techmakers Buea",
        description:
          "A three-day intensive coding bootcamp for women looking to start or advance their careers in technology.",
        type: "yellow",
      },
      {
        id: 4,
        title: "Blockchain & Fintech Forum",
        date: "July 15, 2025",
        time: "10:00 AM - 03:00 PM",
        location: "Sawa Hotel, Douala",
        host: "Cameroon Blockchain Network",
        description:
          "Discussing the future of financial technology and blockchain applications in the Cameroonian economy.",
        type: "primary",
      },
    ],
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
        excerpt:
          "Team CodeCrafters from Douala Developers community won the annual hackathon with their innovative agricultural supply chain solution, securing major investment.",
        image:
          "https://readdy.ai/api/search-image?query=A%20professional%20tech%20conference%20or%20hackathon%20scene%20in%20Cameroon%2C%20with%20diverse%20African%20developers%20presenting%20their%20work%20on%20stage.%20Modern%20event%20space%20with%20audience%2C%20professional%20lighting%2C%20subtle%20Cameroon%20flag%20colors%20in%20the%20background%20decorations.&width=400&height=250&seq=news1&orientation=landscape",
      },
      {
        id: 2,
        title: "Women Techmakers Buea Launches Scholarship Program",
        date: "May 15, 2025",
        excerpt:
          "The community has partnered with Google to offer 50 scholarships for women pursuing careers in software development and data science.",
        image:
          "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20African%20women%20in%20tech%20at%20a%20workshop%20or%20training%20session%20in%20Cameroon.%20Women%20engaged%20with%20laptops%20and%20technology%2C%20collaborative%20learning%20environment.%20Modern%20tech%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news2&orientation=landscape",
      },
      {
        id: 3,
        title: "Yaounde Tech Hub Expands with New Innovation Center",
        date: "May 10, 2025",
        excerpt:
          "The community has opened a new 2,000 sqm facility with co-working spaces, event venues, and specialized labs for hardware prototyping.",
        image:
          "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20tech%20startup%20founders%20or%20entrepreneurs%20in%20Cameroon%20meeting%20with%20international%20investors.%20Diverse%20group%20of%20African%20business%20professionals%20in%20discussion%20in%20a%20modern%20office%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news3&orientation=landscape",
      },
      {
        id: 4,
        title: "Cameroon AI Alliance Partners with Microsoft for Research Lab",
        date: "May 5, 2025",
        excerpt:
          "The partnership will establish Cameroon's first dedicated AI research laboratory with a focus on applications in healthcare and agriculture.",
        image:
          "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20tech%20professionals%20in%20Cameroon%20working%20with%20AI%20or%20data%20visualization%20technology.%20Diverse%20group%20of%20African%20tech%20experts%20analyzing%20data%20on%20screens%20in%20a%20modern%20office%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news4&orientation=landscape",
      },
      {
        id: 5,
        title: "Cameroon Blockchain Network to Host Pan-African Conference",
        date: "April 28, 2025",
        excerpt:
          "The first-ever Pan-African Blockchain Conference will be held in Douala, bringing together experts from 15 African countries.",
        image:
          "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20blockchain%20or%20fintech%20professionals%20in%20Cameroon%20at%20a%20conference%20or%20workshop.%20Diverse%20group%20of%20African%20tech%20experts%20engaged%20in%20discussion%20in%20a%20modern%20setting%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news5&orientation=landscape",
      },
      {
        id: 6,
        title: "Cameroon UX Community Members Win African Design Awards",
        date: "April 22, 2025",
        excerpt:
          "Three members of the Cameroon UX Community received recognition at the prestigious African Design Awards for their innovative user interfaces.",
        image:
          "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20UX%20designers%20or%20creative%20tech%20professionals%20in%20Cameroon%20collaborating%20on%20a%20project.%20Diverse%20group%20of%20African%20designers%20working%20with%20design%20tools%20and%20prototypes%20in%20a%20modern%20creative%20space%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.&width=400&height=250&seq=news6&orientation=landscape",
      },
    ],
  };
};

export const submitContact = async (formData) => {
  await delay(1500);
  console.log("Contact form submitted:", formData);
  return { success: true, message: "Message sent successfully!" };
};

export const subscribeNewsletter = async (email) => {
  await delay(1000);
  console.log("Newsletter subscription:", email);
  return { success: true, message: "Successfully subscribed!" };
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
      description:
        "A vibrant community of software developers sharing knowledge and building innovative solutions for local challenges.",
      fullDescription:
        "Douala Developers is Cameroon's premier software development community, bringing together passionate developers, designers, and tech enthusiasts from across the Littoral region. Since our founding in 2018, we've grown from a small meetup group to one of the most influential tech communities in Central Africa. Our mission is to foster innovation, facilitate knowledge sharing, and build solutions that address both local and global challenges using cutting-edge technology.",
      logo: "https://readdy.ai/api/search-image?query=A%20modern%2C%20professional%20logo%20for%20a%20software%20development%20community%20in%20Cameroon%2C%20featuring%20abstract%20code%20symbols%2C%20clean%20lines%2C%20blue%20and%20green%20colors%2C%20minimalist%20design&width=300&height=160&seq=com1&orientation=landscape",
      categories: ["Software Development", "Open Source"],
      tags: ["JavaScript", "Python", "Web Dev", "Mobile Development"],
      specialties: [
        "Full Stack Development",
        "Cloud Computing",
        "DevOps",
        "API Development",
      ],
      focusAreas: [
        "Building local solutions for Cameroonian businesses",
        "Open source project contributions",
        "Mentorship and skill development",
        "Tech entrepreneurship support",
      ],
      socialLinks: {
        website: "https://doualadevelopers.com",
        twitter: "https://twitter.com/doualadevelopers",
        github: "https://github.com/doualadevelopers",
        linkedin: "https://linkedin.com/company/doualadevelopers",
        discord: "https://discord.gg/doualadevelopers",
      },
      email: "contact@doualadevelopers.com",
      phone: "+237 651 234 567",
      eventsHosted: 124,
      activeProjects: 15,
      partnerships: 8,
      meetingSchedule: [
        { day: "Saturday", time: "2:00 PM - 5:00 PM" },
        { day: "Wednesday", time: "6:00 PM - 8:00 PM (Online)" },
      ],
      upcomingEvents: [
        {
          title: "JavaScript Workshop: Modern ES6+ Features",
          description:
            "Learn the latest JavaScript features and best practices",
          date: "June 15, 2025",
          time: "2:00 PM - 5:00 PM",
          location: "Silicon Valley Quarter, Douala",
          type: "workshop",
          attendees: 45,
        },
        {
          title: "Monthly Developer Meetup",
          description:
            "Network with fellow developers and share project updates",
          date: "June 22, 2025",
          time: "6:00 PM - 9:00 PM",
          location: "Digital Hub Douala",
          type: "meetup",
          attendees: 80,
        },
      ],
      mission:
        "To empower local developers with cutting-edge skills while building innovative solutions that address Cameroon's unique technological challenges.",
      vision:
        "To be the leading tech community in Central Africa, recognized for producing world-class developers and groundbreaking digital solutions.",
      values: [
        "Innovation and Creativity",
        "Collaborative Learning",
        "Open Source Philosophy",
        "Local Impact Focus",
      ],
      activities: [
        {
          name: "Weekly Code Reviews",
          description: "Peer code review sessions to improve code quality",
          frequency: "Every Wednesday",
        },
        {
          name: "Monthly Hackathons",
          description: "Build solutions to local challenges in 48 hours",
          frequency: "Last weekend of each month",
        },
      ],
      achievements: [
        {
          title: "Best Tech Community Award 2024",
          description:
            "Recognized by Cameroon Tech Awards for outstanding community impact",
          date: "December 2024",
        },
        {
          title: "15+ Successful Startups Launched",
          description:
            "Community members have successfully launched tech startups",
          date: "2018-2025",
        },
      ],
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
    .filter((c) => c.id.toString() !== currentId.toString())
    .slice(0, 3);

  return { communities: similar };
};


/**communities: [
    {
      title: "Laravel Cameroun",
      href: "https://laravel.cm",
      dates: "Jan 2017 - Aug 2024",
      active: true,
      description: "Laravel Cameroun is a community of developers and enthusiasts who specialize in building web applications using the Laravel framework. This community shares knowledge, organizes meetups, and collaborates on open-source projects to advance the Laravel ecosystem in Cameroon.",
      technologies: [
        "PHP",
        "Laravel",
        "Composer",
        "MySQL",
        "PostgreSQL",
        "TailwindCSS"
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "Github",
          href: "https://chatcollect.com",
          icon: <Icons.github className='size-3' />
        },
        {
          type: "WhatsApp",
          href: "https://chatcollect.com",
          icon: <Icons.whatsapp className='size-3' />
        }
      ],
      image: "/communities/laravel-cm.png",
      video: ""
    },
    {
      title: "Dot NET Cameroun",
      href: "https://dotnetcameroon.azurewebsites.net/",
      dates: "June 2019 - Present",
      active: true,
      description: "Dot NET Cameroun is a community for .NET developers in Cameroon. It provides a platform for professionals and enthusiasts to learn, share, and develop their skills in .NET technologies, including web, desktop, and cloud applications.",
      technologies: [
        "C#",
        ".NET Core",
        "ASP.NET",
        "Azure",
        "Entity Framework",
        "Blazor",
        "SQL Server"
      ],
      links: [
        {
          type: "Website",
          href: "https://dotnetcameroon.azurewebsites.net/",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "GitHub",
          href: "https://github.com/dotnetcameroon",
          icon: <Icons.github className='size-3' />
        },
        {
          type: "WhatsApp",
          href: "https://chat.whatsapp.com/KlBkiJX85Y8KFS28tIm1UU",
          icon: <Icons.whatsapp className='size-3' />
        }
      ],
      image: "/communities/dot-net.png",
      video: " "
    },
    {
      title: "Flutter & Dart Community",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description: "The Flutter & Dart Community in Cameroon is dedicated to mobile application development using the Flutter framework and Dart programming language. Members of this community engage in collaborative projects, workshops, and knowledge-sharing sessions to enhance their expertise in building cross-platform apps.",
      technologies: [
        "Dart",
        "Flutter",
        "Firebase",
        "Provider",
        "GetX",
        "Sqflite",
        "Shared Preferences",
        "State Management",
        "UI Design",
        "Responsive Layouts",
        "Git"
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "WhatsApp",
          href: "https://chat.whatsapp.com/J5ToUhSX2ADKR9k1qyh0Vf",
          icon: <Icons.whatsapp className='size-3' />
        }
      ],
      image: "/communities/flutter-cm.png",
      video: " "
    },
    {
      title: "FOF - Douala",
      href: "https://automatic.chat",
      dates: "April 2019 - March 2024",
      active: true,
      description: "FOF - Douala (Friends of Figma - Douala) is a community of designers and developers who use Figma for creating user interfaces and experiences. The community provides a platform for sharing knowledge, organizing workshops, and collaborating on design projects using Figma and related tools.",
      technologies: [
        "Figma",
        "UI/UX Design",
        "Prototyping",
        "Design Systems",
        "Collaborative Design",
        "Wireframing"
      ],
      links: [
        {
          type: "Website",
          href: "https://friends.figma.com/douala/",
          icon: <Icons.globe className='size-3' />
        },
        {
          type: "Telegram",
          href: "",
          icon: <Icons.globe className='size-3' />
        },
      ],
      image: "/communities/fof-douala.png",
      video: "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4"
    }
    
  ]

  Use this data for my communiies here, jus remove the video attributes, from what I have selected, we can keep the id, location, also image can be renamed to logo */