import React from 'react';

const SpotlightCard = ({ community, isReversed = false }) => {
  const {
    name,
    title,
    description,
    longDescription,
    image,
    stats,
    buttonColor,
    buttonText
  } = community;

  return (
    <div className={`flex flex-col md:flex-row items-center mb-16 gap-8 ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600 mb-6">{longDescription}</p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
              <div className={`w-10 h-10 flex items-center justify-center ${stat.bgColor} ${stat.textColor} rounded-full mr-3`}>
                <i className={`${stat.icon} ri-lg`}></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="font-semibold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
        
        <button className={`px-6 py-3 ${buttonColor} text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center`}>
          <i className="ri-profile-line ri-lg mr-2"></i>
          {buttonText}
        </button>
      </div>
      <div className="w-full md:w-1/2">
        <img 
          src={image} 
          alt={name} 
          className="rounded-lg shadow-lg w-full h-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

const CommunitySpotlights = () => {
  const spotlights = [
    {
      name: "Douala Developers",
      title: "Douala Developers: Building Local Solutions",
      description: "Founded in 2018, Douala Developers has grown from a small meetup group to one of Cameroon's most influential tech communities with over 780 members. Their mission is to nurture local talent and build solutions that address Cameroon's unique challenges.",
      longDescription: "The community hosts monthly coding sessions, hackathons, and mentorship programs that have helped launch several successful startups and connected dozens of developers with job opportunities both locally and internationally.",
      image: "https://readdy.ai/api/search-image?query=A%20diverse%20group%20of%20young%20African%20software%20developers%20collaborating%20in%20a%20modern%20tech%20workspace%20in%20Douala%2C%20Cameroon.%20They%20are%20gathered%20around%20computers%2C%20engaged%20in%20coding%20and%20discussion.%20The%20space%20has%20a%20professional%20yet%20creative%20atmosphere%20with%20subtle%20green%20and%20red%20Cameroon%20colors%20in%20the%20decor.%20Natural%20lighting%2C%20modern%20office%20setting.&width=600&height=400&seq=spot1&orientation=landscape",
      stats: [
        { label: "Members", value: "785+", icon: "ri-user-line", bgColor: "bg-[var(--primary)]/10", textColor: "text-[var(--primary)]" },
        { label: "Events Hosted", value: "124", icon: "ri-calendar-line", bgColor: "bg-[var(--primary)]/10", textColor: "text-[var(--primary)]" },
        { label: "Startups Launched", value: "17", icon: "ri-building-line", bgColor: "bg-[var(--primary)]/10", textColor: "text-[var(--primary)]" }
      ],
      buttonColor: "bg-[var(--primary)]",
      buttonText: "View Full Profile"
    },
    {
      name: "Women Techmakers Buea",
      title: "Women Techmakers Buea: Empowering Female Technologists",
      description: "Women Techmakers Buea is dedicated to increasing female representation in Cameroon's tech industry. Since its founding in 2019, the community has trained over 400 women in various technology skills from web development to data science.",
      longDescription: "Their signature programs include a quarterly coding bootcamp, monthly mentorship sessions, and an annual women in tech conference that attracts participants from across Central Africa.",
      image: "https://readdy.ai/api/search-image?query=A%20professional%20scene%20of%20women%20tech%20professionals%20in%20Buea%2C%20Cameroon%2C%20engaged%20in%20a%20coding%20workshop.%20The%20diverse%20group%20of%20African%20women%20are%20working%20on%20laptops%2C%20some%20teaching%20others.%20The%20space%20is%20bright%20and%20modern%20with%20subtle%20tech%20elements%20and%20hints%20of%20Cameroon%20national%20colors%20in%20the%20background.%20Professional%20atmosphere%2C%20collaborative%20environment.&width=600&height=400&seq=spot2&orientation=landscape",
      stats: [
        { label: "Members", value: "418+", icon: "ri-user-line", bgColor: "bg-[var(--secondary)]/10", textColor: "text-[var(--secondary)]" },
        { label: "Women Trained", value: "312", icon: "ri-women-line", bgColor: "bg-[var(--secondary)]/10", textColor: "text-[var(--secondary)]" },
        { label: "Job Placements", value: "86", icon: "ri-briefcase-line", bgColor: "bg-[var(--secondary)]/10", textColor: "text-[var(--secondary)]" }
      ],
      buttonColor: "bg-[var(--secondary)]",
      buttonText: "View Full Profile"
    },
    {
      name: "Cameroon AI Alliance",
      title: "Cameroon AI Alliance: Advancing Artificial Intelligence",
      description: "The Cameroon AI Alliance brings together researchers, engineers, and entrepreneurs passionate about artificial intelligence and its applications in the African context. With chapters in multiple cities, they're building a national network of AI expertise.",
      longDescription: "Their initiatives include AI research collaborations with local universities, specialized training programs, and partnerships with international organizations to bring cutting-edge AI knowledge to Cameroon.",
      image: "https://readdy.ai/api/search-image?query=A%20professional%20gathering%20of%20AI%20researchers%20and%20engineers%20in%20Cameroon%2C%20diverse%20group%20of%20African%20tech%20professionals%20analyzing%20data%20visualizations%20on%20large%20screens.%20Modern%20tech%20conference%20room%20with%20subtle%20Cameroon%20flag%20colors%20in%20the%20decor.%20Professional%20atmosphere%2C%20collaborative%20environment%2C%20clean%20lighting.&width=600&height=400&seq=spot3&orientation=landscape",
      stats: [
        { label: "Members", value: "632+", icon: "ri-user-line", bgColor: "bg-blue-500/10", textColor: "text-blue-500" },
        { label: "Research Papers", value: "28", icon: "ri-file-paper-2-line", bgColor: "bg-blue-500/10", textColor: "text-blue-500" },
        { label: "Chapters", value: "5", icon: "ri-global-line", bgColor: "bg-blue-500/10", textColor: "text-blue-500" }
      ],
      buttonColor: "bg-blue-500",
      buttonText: "View Full Profile"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Community Spotlights</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn about the inspiring stories and achievements of Cameroon's leading tech communities.
          </p>
        </div>
        
        {spotlights.map((community, index) => (
          <SpotlightCard 
            key={community.name}
            community={community}
            isReversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default CommunitySpotlights;