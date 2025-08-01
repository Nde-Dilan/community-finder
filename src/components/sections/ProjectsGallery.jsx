import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Heart, MessageCircle, Calendar } from 'lucide-react';

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'social', label: 'Social Impact' }
  ];

  const projects = [
    {
      id: 1,
      title: "EduConnect Cameroon",
      description: "Platform connecting students with tutors across Cameroon, featuring video calls, payment integration, and progress tracking.",
      category: 'web',
      developer: "Sarah Fontem",
      team: "EduTech CM",
      location: "Bamenda",
      image: "/images/projects/educonnect.jpg",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      featured: true,
      views: 2845,
      likes: 186,
      comments: 34,
      date: "March 2025",
      status: "Live",
      github: "https://github.com/educonnect/platform",
      demo: "https://educonnect.cm",
      type: "Open Source"
    },
    {
      id: 2,
      title: "FarmTrack Pro",
      description: "IoT-powered agricultural monitoring system helping Cameroonian farmers optimize crop yields through real-time data analytics.",
      category: 'ai',
      developer: "David Mbarga",
      team: "AgriTech Solutions",
      location: "Douala",
      image: "/images/projects/farmtrack.jpg",
      technologies: ["Python", "TensorFlow", "IoT", "React"],
      featured: true,
      views: 1923,
      likes: 142,
      comments: 28,
      date: "February 2025",
      status: "Beta",
      github: "https://github.com/farmtrack/pro",
      demo: "https://farmtrack.pro",
      type: "Commercial"
    },
    {
      id: 3,
      title: "Cameroon Taxi",
      description: "Ride-sharing app designed specifically for Cameroon with local payment methods, offline maps, and multi-language support.",
      category: 'mobile',
      developer: "Patrick Ndi",
      team: "MobiliTech",
      location: "Yaounde",
      image: "/images/projects/cameroon-taxi.jpg",
      technologies: ["React Native", "Node.js", "PostgreSQL"],
      featured: false,
      views: 3156,
      likes: 234,
      comments: 45,
      date: "January 2025",
      status: "Live",
      github: null,
      demo: "https://cameroontaxi.app",
      type: "Commercial"
    },
    {
      id: 4,
      title: "Local Marketplace",
      description: "E-commerce platform promoting local Cameroonian products with integrated logistics and mobile money payments.",
      category: 'web',
      developer: "Grace Ayuk",
      team: "Commerce CM",
      location: "Buea",
      image: "/images/projects/local-marketplace.jpg",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      featured: false,
      views: 2672,
      likes: 198,
      comments: 52,
      date: "March 2025",
      status: "Live",
      github: "https://github.com/localmarket/platform",
      demo: "https://localmarket.cm",
      type: "Open Source"
    },
    {
      id: 5,
      title: "HealthAssist AI",
      description: "AI-powered health diagnostic tool trained on local health data to provide preliminary health assessments in multiple local languages.",
      category: 'ai',
      developer: "Dr. Emmanuel Tabi",
      team: "HealthTech CM",
      location: "Douala",
      image: "/images/projects/health-assist.jpg",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      featured: true,
      views: 4521,
      likes: 345,
      comments: 67,
      date: "April 2025",
      status: "Research",
      github: "https://github.com/healthassist/ai",
      demo: "https://healthassist.cm",
      type: "Research"
    },
    {
      id: 6,
      title: "MicroFinance Manager",
      description: "Digital platform for managing microfinance operations, designed for local cooperatives and savings groups (tontines).",
      category: 'fintech',
      developer: "Rose Tamfu",
      team: "FinInclude",
      location: "Bamenda",
      image: "/images/projects/microfinance.jpg",
      technologies: ["Angular", "Spring Boot", "PostgreSQL"],
      featured: false,
      views: 1834,
      likes: 127,
      comments: 23,
      date: "February 2025",
      status: "Beta",
      github: "https://github.com/microfinance/manager",
      demo: "https://microfinance.cm",
      type: "Commercial"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Community Projects Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Amazing projects built by our local developer community. From social impact solutions 
            to cutting-edge tech innovations, discover what's being built in Cameroon.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Heart className="w-6 h-6 text-red-500" />
            Featured Projects
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-500 text-white' :
                      project.status === 'Beta' ? 'bg-yellow-500 text-white' :
                      'bg-blue-500 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Developer Info */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-900">{project.developer}</div>
                    <div className="text-xs text-gray-500">{project.team} • {project.location}</div>
                  </div>

                  {/* Stats & Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{project.comments}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <a 
                          href={project.github}
                          className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                        >
                          <Github className="w-4 h-4 text-gray-600" />
                        </a>
                      )}
                      <a 
                        href={project.demo}
                        className="w-8 h-8 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-2xl p-2 shadow-sm">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-500 text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-blue-500 hover:bg-blue-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Project Image */}
              <div className="h-40 bg-gradient-to-br from-gray-200 to-gray-300 relative">
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Live' ? 'bg-green-500 text-white' :
                    project.status === 'Beta' ? 'bg-yellow-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 2).map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div>
                    <div className="font-medium text-gray-900">{project.developer}</div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        className="w-7 h-7 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <Github className="w-3 h-3 text-gray-600" />
                      </a>
                    )}
                    <a 
                      href={project.demo}
                      className="w-7 h-7 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <ExternalLink className="w-3 h-3 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;