import React from "react";

const SpotlightCard = ({ community, isReversed = false }) => {
  const {
    name,
    title,
    description,
    longDescription,
    image,
    stats,
    buttonColor,
    buttonText,
    link,
  } = community;

  return (
    <div
      className={`flex flex-col md:flex-row items-center mb-16 gap-8 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-gray-600 mb-6">{longDescription}</p>

        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-50 p-3 rounded-lg"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center ${stat.bgColor} ${stat.textColor} rounded-full mr-3`}
              >
                <i className={`${stat.icon} ri-lg`}></i>
              </div>
              <div>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="font-semibold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <button
          className={`px-6 py-3 ${buttonColor} text-white font-medium rounded-button whitespace-nowrap flex items-center justify-center`}
        >
          <i className="ri-profile-line ri-lg mr-2"></i>
          <a href={link}>{buttonText}</a>
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
      name: "AWS User Group Douala",
      title: "AWS User Group Douala: Empowering Cloud Innovation",
      description:
        "AWS User Group Douala is a vibrant community of cloud enthusiasts, developers, and IT professionals passionate about Amazon Web Services. The group brings together professionals to share knowledge, best practices, and real-world experiences with AWS technologies.",
      longDescription:
        "Through regular meetups, hands-on workshops, and certification bootcamps, the community helps members stay current with the latest AWS services and cloud computing trends. They focus on practical learning and networking opportunities that advance careers in cloud technology.",
      image: "/communities/awsusergroupdouala.webp",
      link: "https://linktr.ee/awsugdouala",
      stats: [
        {
          label: "Members",
          value: "450+",
          icon: "ri-user-line",
          bgColor: "bg-[var(--primary)]/10",
          textColor: "text-[var(--primary)]",
        },
        {
          label: "Meetups Held",
          value: "10+",
          icon: "ri-calendar-line",
          bgColor: "bg-[var(--primary)]/10",
          textColor: "text-[var(--primary)]",
        },
        // { label: "AWS Certifications", value: "120+", icon: "ri-award-line", bgColor: "bg-[var(--primary)]/10", textColor: "text-[var(--primary)]" }
      ],
      buttonColor: "bg-[#9675D8]",
      buttonText: "View Full Profile",
    },
    {
      name: "Women Techmakers Yaoundé",
      title: "Women Techmakers Yaoundé: Redefining What's Possible",
      description:
        "Women Techmakers Yaoundé is a Google program dedicated to highlighting women in technology and celebrating International Women's Day through empowering events. Part of GDG Yaoundé, this community focuses on creating opportunities for women to excel in tech.",
      longDescription:
        "Their signature annual event 'Redéfinir le Possible' emphasizes AI's impact and women's role in technological transformation. The community provides learning opportunities, skill-building workshops, and certification programs designed to advance women's careers in technology.",
      image: "/communities/wtm_yaounde.webp",
      link: "https://gdg.community.dev/gdg-yaounde/",

      stats: [
        {
          label: "Members",
          value: "1300+",
          icon: "ri-user-line",
          bgColor: "bg-blue-500/10",
          textColor: "text-blue-500",
        },
        {
          label: "Events Hosted",
          value: "10+",
          icon: "ri-calendar-event-line",
          bgColor: "bg-blue-500/10",
          textColor: "text-blue-500",
        },
      ],
      buttonColor: "bg-blue-500",
      buttonText: "View Full Profile",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Community Spotlights
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Learn about the inspiring stories and achievements of Cameroon's
            leading tech communities.
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
