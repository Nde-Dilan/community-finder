import React, { useState } from 'react';
import { ExternalLink, Github, Star, Download, Filter } from 'lucide-react';

const ToolsShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Tools' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' },
    { id: 'api', label: 'APIs & Backend' },
    { id: 'utility', label: 'Utilities' },
    { id: 'design', label: 'Design Tools' }
  ];

 const tools = [
    {
      id: 1,
      name: "NotchPay",
      description: "Complete payment solution for businesses in Africa with support for Mobile Money, Orange Money, and international cards.",
      category: 'api',
      developer: "NotchPay Dev Team",
      location: "Cameroon",
      stars: 245,
      downloads: "8.5k",
      language: "API",
      tags: ["Payment", "Mobile Money", "Orange Money", "Cards"],
      github: "#",
      website: "https://www.notchpay.co/",
      image: "/images/tools/notchpay.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Monetbil",
      description: "Leading mobile payment platform in Central Africa supporting all major mobile money operators.",
      category: 'api',
      developer: "Monetbil Dev Team",
      location: "Cameroon",
      stars: 189,
      downloads: "6.2k",
      language: "API",
      tags: ["Mobile Money", "Payment", "SMS", "USSD"],
      github: "#",
      website: "https://fr.monetbil.com/",
      image: "/images/tools/monetbil.jpg",
      featured: true
    },
    {
      id: 3,
      name: "CinetPay",
      description: "Pan-African payment gateway offering seamless integration for mobile money and card payments across Africa.",
      category: 'api',
      developer: "CinetPay Dev Team",
      location: "Ivory Coast",
      stars: 167,
      downloads: "4.8k",
      language: "API",
      tags: ["Payment Gateway", "Mobile Money", "Cards", "Africa"],
      github: "#",
      website: "https://docs.cinetpay.com/",
      image: "/images/tools/cinetpay.jpg",
      featured: false
    },
    {
      id: 4,
      name: "MaxiCash",
      description: "Digital payment solution designed for African markets with focus on mobile money integration.",
      category: 'api',
      developer: "MaxiCash Dev Team",
      location: "Cameroon",
      stars: 134,
      downloads: "3.1k",
      language: "API",
      tags: ["Digital Payment", "Mobile Money", "Africa"],
      github: "#",
      website: "https://maxicash.co/fr/",
      image: "/images/tools/maxicash.jpg",
      featured: false
    },
    {
      id: 5,
      name: "FedaPay",
      description: "Modern payment infrastructure for businesses in West Africa with comprehensive API documentation.",
      category: 'api',
      developer: "FedaPay Dev Team",
      location: "Benin",
      stars: 198,
      downloads: "5.7k",
      language: "API",
      tags: ["Payment Infrastructure", "West Africa", "API"],
      github: "#",
      website: "https://www.fedapay.com/",
      image: "/images/tools/fedapay.jpg",
      featured: false
    },
    {
      id: 6,
      name: "Flutterwave",
      description: "Global payment technology company with strong presence in Africa, supporting multiple payment methods.",
      category: 'api',
      developer: "Flutterwave Dev Team",
      location: "Nigeria",
      stars: 312,
      downloads: "12.3k",
      language: "API",
      tags: ["Global Payments", "Mobile Money", "Cards", "Banking"],
      github: "#",
      website: "https://flutterwave.com/cm/",
      image: "/images/tools/flutterwave.jpg",
      featured: false
    },
    {
      id: 7,
      name: "CoolPay",
      description: "Innovative payment solution offering easy integration for mobile money and digital wallet services.",
      category: 'api',
      developer: "CoolPay Dev Team",
      location: "Cameroon",
      stars: 89,
      downloads: "2.4k",
      language: "API",
      tags: ["Mobile Money", "Digital Wallet", "Innovation"],
      github: "#",
      website: "https://my-coolpay.com/",
      image: "/images/tools/coolpay.jpg",
      featured: false
    },
    {
      id: 8,
      name: "Tranzak",
      description: "Secure payment platform providing comprehensive financial services for businesses across Africa.",
      category: 'api',
      developer: "Tranzak Dev Team",
      location: "Cameroon",
      stars: 156,
      downloads: "4.2k",
      language: "API",
      tags: ["Financial Services", "Security", "Business"],
      github: "#",
      website: "https://tranzak.net/",
      image: "/images/tools/tranzak.jpg",
      featured: false
    },
    {
      id: 9,
      name: "Campay",
      description: "Developer-friendly payment API supporting all major mobile money operators in Cameroon and beyond.",
      category: 'api',
      developer: "Campay Dev Team",
      location: "Cameroon",
      stars: 203,
      downloads: "6.8k",
      language: "API",
      tags: ["Developer API", "Mobile Money", "Cameroon"],
      github: "#",
      website: "https://www.campay.net/en/",
      image: "/images/tools/campay.jpg",
      featured: true
    },
    {
      id: 10,
      name: "NoKash",
      description: "Next-generation payment platform designed for seamless mobile money integration in Central Africa.",
      category: 'api',
      developer: "NoKash Dev Team",
      location: "Cameroon",
      stars: 78,
      downloads: "1.9k",
      language: "API",
      tags: ["Next-gen", "Mobile Money", "Central Africa"],
      github: "#",
      website: "https://nokash.co/",
      image: "/images/tools/nokash.jpg",
      featured: false
    },
    {
      id: 11,
      name: "AdwaPay",
      description: "Comprehensive payment solution offering multiple payment channels for African businesses.",
      category: 'api',
      developer: "AdwaPay Dev Team",
      location: "Ghana",
      stars: 124,
      downloads: "3.5k",
      language: "API",
      tags: ["Multi-channel", "African Business", "Payment"],
      github: "#",
      website: "https://www.adwapay.com/",
      image: "/images/tools/adwapay.jpg",
      featured: false
    },
    {
      id: 12,
      name: "PayOugo",
      description: "Smart payment platform enabling businesses to accept payments through various mobile money services.",
      category: 'api',
      developer: "PayOugo Dev Team",
      location: "Cameroon",
      stars: 95,
      downloads: "2.7k",
      language: "API",
      tags: ["Smart Payment", "Business", "Mobile Services"],
      github: "#",
      website: "https://payougo.com/",
      image: "/images/tools/payougo.jpg",
      featured: false
    },
    {
      id: 13,
      name: "CleanPay",
      description: "Clean and simple payment API focused on providing reliable mobile money services across Africa.",
      category: 'api',
      developer: "CleanPay Dev Team",
      location: "Nigeria",
      stars: 112,
      downloads: "3.8k",
      language: "API",
      tags: ["Clean API", "Reliable", "Africa"],
      github: "#",
      website: "https://www.cleanpay.africa/",
      image: "/images/tools/cleanpay.jpg",
      featured: false
    },
    {
      id: 14,
      name: "PawaPay",
      description: "Infrastructure platform connecting businesses to mobile money networks across Africa with real-time processing.",
      category: 'api',
      developer: "PawaPay Dev Team",
      location: "Uganda",
      stars: 267,
      downloads: "9.1k",
      language: "API",
      tags: ["Infrastructure", "Real-time", "Mobile Networks"],
      github: "#",
      website: "https://pawapay.io/",
      image: "/images/tools/pawapay.jpg",
      featured: false
    },
      
  ];
 
  const filteredTools = activeFilter === 'all' 
    ? tools 
    : tools.filter(tool => tool.category === activeFilter);

  const featuredTools = tools.filter(tool => tool.featured);

  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Developer Tools & Libraries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover and use powerful tools and libraries created by our local developer community. 
            Each tool is battle-tested and designed to solve real problems.
          </p>
        </div>

        {/* Featured Tools Banner */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Star className="w-6 h-6 text-yellow-500" />
            Featured Tools
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <div 
                key={tool.id}
                className="bg-gradient-to-br from-green-900 via-red-900 to-yellow-900 rounded-2xl p-6 text-white relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {tool.language}
                    </span>
                    <div className="flex items-center gap-1 text-yellow-300">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm">{tool.stars}</span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-2">{tool.name}</h4>
                  <p className="text-blue-100 text-sm mb-4 line-clamp-2">
                    {tool.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs">
                      <div className="font-medium">{tool.developer}</div>
                      <div className="text-blue-200">{tool.location}</div>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={tool.github}
                                                target='_blank'

                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a 
                        href={tool.website}
                        target='_blank'
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20l-10-10h20z'/%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-2xl p-2 shadow-sm">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[var(--primary)] text-white shadow-md transform scale-105'
                  : 'text-gray-600 hover:text-[var(--primary)] hover:[var(--primary)]-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div 
              key={tool.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-[var(--primary)]-200"
            >
              {/* Tool Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span>{tool.developer}</span>
                    <span>•</span>
                    <span>{tool.location}</span>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                  {tool.language}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-3">
                {tool.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tool.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    <span>{tool.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    <span>{tool.downloads}</span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <a 
                    href={tool.github}
                    className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>
                  <a 
                    href={tool.website}
                    className="w-9 h-9 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsShowcase;