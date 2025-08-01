import React from 'react';
import { MapPin, Github, Linkedin, Globe, Award } from 'lucide-react';

const DeveloperSpotlight = () => {
  const developers = [
    {
      id: 1,
      name: "Olivia Mballa",
      title: "Full-Stack Developer & Open Source Advocate",
      location: "Douala, Cameroon",
      avatar: "/images/developers/olivia-mballa.jpg",
      bio: "Building tools that solve real African problems. Passionate about education technology and financial inclusion.",
      achievements: [
        "Created 5 open source libraries",
        "Google Developer Expert",
        "Speaker at 15+ conferences"
      ],
      technologies: ["React", "Node.js", "Python", "AWS"],
      projects: 23,
      contributions: 1250,
      followers: 3400,
      github: "https://github.com/oliviamballa",
      linkedin: "https://linkedin.com/in/oliviamballa",
      website: "https://oliviamballa.dev"
    },
    {
      id: 2,
      name: "Jean-Claude Foka",
      title: "AI/ML Engineer & Researcher",
      location: "Yaounde, Cameroon",
      avatar: "/images/developers/jean-claude-foka.jpg",
      bio: "Researching AI applications in agriculture and healthcare. Building machine learning solutions for African markets.",
      achievements: [
        "Published 12 research papers",
        "Winner of AI4Good Challenge 2024",
        "Mentor at Google AI"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "GCP"],
      projects: 18,
      contributions: 892,
      followers: 2100,
      github: "https://github.com/jcfoka",
      linkedin: "https://linkedin.com/in/jcfoka",
      website: "https://jcfoka.research.dev"
    },
    {
      id: 3,
      name: "Patience Ngwa",
      title: "Mobile App Developer & UX Designer",
      location: "Buea, Cameroon",
      avatar: "/images/developers/patience-ngwa.jpg",
      bio: "Creating beautiful and functional mobile experiences. Focused on accessibility and inclusive design for African users.",
      achievements: [
        "15+ apps in production",
        "Design Systems Expert",
        "Women in Tech Leader"
      ],
      technologies: ["React Native", "Flutter", "Figma", "Swift"],
      projects: 31,
      contributions: 654,
      followers: 1800,
      github: "https://github.com/patiencengwa",
      linkedin: "https://linkedin.com/in/patiencengwa",
      website: "https://patiencengwa.design"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Developer Spotlight
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Amazing Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating the talented developers in our community who are building 
            incredible tools and making a real impact in Cameroon and beyond.
          </p>
        </div>

        {/* Developers Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {developers.map((developer) => (
            <div 
              key={developer.id}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Developer Avatar & Info */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {developer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {developer.name}
                </h3>
                <p className="text-gray-600 text-sm mb-2">{developer.title}</p>
                <div className="flex items-center justify-center gap-1 text-gray-500 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{developer.location}</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {developer.bio}
              </p>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Achievements:</h4>
                <ul className="space-y-1">
                  {developer.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3 text-sm">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {developer.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{developer.projects}</div>
                  <div className="text-xs text-gray-500">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{developer.contributions}</div>
                  <div className="text-xs text-gray-500">Contributions</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">{developer.followers}</div>
                  <div className="text-xs text-gray-500">Followers</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a 
                  href={developer.github}
                  className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Github className="w-5 h-5 text-white" />
                </a>
                <a 
                  href={developer.linkedin}
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href={developer.website}
                  className="w-10 h-10 bg-purple-600 hover:bg-purple-700 rounded-xl flex items-center justify-center transition-colors"
                >
                  <Globe className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeveloperSpotlight;