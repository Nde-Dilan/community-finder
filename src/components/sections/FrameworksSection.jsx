import React from "react";
import { Code2, Zap, Shield, Globe, ExternalLink, Github } from "lucide-react";

const FrameworksSection = () => {
  const frameworks = [
    {
      id: 1,
      name: "Rasengan.js",
      tagline: "Modern React Framework",
      description:
        "A modern, high-performance React framework based on modern tools. Rasengan.js helps you create high-quality web applications with the benefit of React components and optimized performance.",
      features: [
        "High-Performance Architecture",
        "Modern Development Tools",
        "React Component Based",
        "Optimized Build System",
      ],
      tech: ["React", "TypeScript", "Vite"],
      developer: "Dilane3",
      company: "Rasengan Dev Team",
      version: "v1.0.0",
      downloads: "2.1k",
      stars: 156,
      github: "https://github.com/rasengan-dev/rasenganjs",
      website: "https://www.rasengan.dev/",
      color: "from-blue-500 to-indigo-600",
      icon: Code2,
    },
    {
      id: 2,
      name: "MeyeProtect",
      tagline: "First African Antivirus",
      description:
        "The first African antivirus solution providing optimal protection against malware and cyber threats. Designed specifically for African users with localized threat intelligence and security features.",
      features: [
        "Real-time Malware Protection",
        "African Threat Intelligence",
        "Lightweight Performance",
        "Local Support & Updates",
      ],
      tech: ["C++", "Python", "Windows API"],
      developer: "MeyeProtect Dev Team",
      company: "MeyeProtect Security",
      version: "v2.5.1",
      downloads: "15.8k",
      stars: 234,
      github: "#",
      website: "https://www.meyeprotect.com/",
      color: "from-[#08ED8A] to-[#010113]",
      icon: Shield,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code2 className="w-4 h-4" />
            Local Frameworks
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frameworks Built for Africa
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful frameworks developed by Cameroonian developers, designed to
            address the unique challenges and opportunities of the African tech
            landscape.
          </p>
        </div>

        {/* Frameworks Grid */}
        <div className="space-y-8">
          {frameworks.map((framework, index) => (
            <div
              key={framework.id}
              className={`bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="lg:flex">
                {/* Framework Info */}
                <div className="lg:w-2/3 p-8 lg:p-12">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${framework.color} rounded-xl flex items-center justify-center`}
                        >
                          <framework.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {framework.name}
                          </h3>
                          <p className="text-gray-500 font-medium">
                            {framework.tagline}
                          </p>
                        </div>
                      </div>
                    </div>
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm font-medium">
                      {framework.version}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {framework.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {framework.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {framework.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-100 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Developer Info & Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-6 border-t border-gray-100">
                    <div className="mb-4 sm:mb-0">
                      <div className="font-semibold text-gray-900">
                        {framework.developer}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {framework.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{framework.downloads} downloads</span>
                        <span>★ {framework.stars}</span>
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={framework.github}
                          className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-xl flex items-center justify-center transition-colors"
                        >
                          <Github className="w-5 h-5 text-white" />
                        </a>
                        <a
                          href={framework.website}
                          className={`w-10 h-10 bg-gradient-to-br ${framework.color} hover:opacity-90 rounded-xl flex items-center justify-center transition-opacity`}
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visual Element */}
                <div className="lg:w-1/3 p-8 lg:p-12 flex items-center justify-center">
                  <div
                    className={`w-full max-w-sm aspect-square bg-gradient-to-br ${framework.color} rounded-3xl flex items-center justify-center relative overflow-hidden`}
                  >
                    <div className="text-center text-white">
                      <framework.icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
                      <div className="text-xl font-bold">{framework.name}</div>
                      <div className="text-sm opacity-80">
                        {framework.version}
                      </div>
                    </div>

                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30l-15-15h30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: "60px 60px",
                        }}
                      />
                    </div>
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

export default FrameworksSection;
