import React from 'react';
import { Plus, Upload, Users, MessageSquare, GitBranch, Heart } from 'lucide-react';

const ContributeSection = () => {
  const contributeOptions = [
    {
      icon: Plus,
      title: "Submit Your Project",
      description: "Share your amazing projects with the community. Get feedback, find collaborators, and inspire others.",
      action: "Submit Project",
      color: "from-green-500 to-green-600",
      border: "border-green-400/30"
    },
    {
      icon: Upload,
      title: "Share Your Tool",
      description: "Built something useful? Add your tool or library to our showcase and help other developers.",
      action: "Add Tool",
      color: "from-red-500 to-red-600",
      border: "border-red-400/30"
    },
    {
      icon: GitBranch,
      title: "Contribute to Open Source",
      description: "Help improve existing projects. Find issues to work on and make meaningful contributions.",
      action: "Find Issues",
      color: "from-yellow-500 to-amber-600",
      border: "border-yellow-400/30"
    },
    {
      icon: MessageSquare,
      title: "Join Discussions",
      description: "Share ideas, ask questions, and help other developers. Be part of our growing community.",
      action: "Start Discussion",
      color: "from-green-600 to-emerald-600",
      border: "border-green-400/30"
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-green-900 via-red-900 to-yellow-900 text-white">
      {/* Cameroon flag inspired background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M40 40l-20-20h40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Flag color accent overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full flex">
          <div className="w-1/3 bg-gradient-to-t from-green-500/20 to-transparent"></div>
          <div className="w-1/3 bg-gradient-to-t from-red-500/20 to-transparent"></div>
          <div className="w-1/3 bg-gradient-to-t from-yellow-500/20 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-red-400/30">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm font-medium">Community Driven</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-green-200 bg-clip-text text-transparent">
            Help Build Our Ecosystem
          </h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Our platform thrives because of amazing developers like you. Contribute your 
            projects, tools, and expertise to help our community grow stronger together.
          </p>
        </div>

        {/* Contribute Options with Cameroon colors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contributeOptions.map((option, index) => (
            <div 
              key={index}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group border ${option.border} hover:border-white/30`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <option.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-3">{option.title}</h3>
              <p className="text-gray-100 text-sm mb-6 leading-relaxed">
                {option.description}
              </p>
              
              <button className={`w-full bg-white/20 hover:bg-white/30 border ${option.border} hover:border-white/40 rounded-xl py-3 px-4 font-medium transition-all duration-300 text-sm`}>
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* Community Stats with Cameroon flag inspired design */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-16 border border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-200 to-green-200 bg-clip-text text-transparent">
              Growing Together
            </h3>
            <p className="text-gray-100">Our community impact in numbers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-3xl font-bold mb-2 text-green-300 group-hover:text-green-200 transition-colors">150+</div>
              <div className="text-gray-200 text-sm">Active Contributors</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold mb-2 text-red-300 group-hover:text-red-200 transition-colors">75+</div>
              <div className="text-gray-200 text-sm">Open Source Projects</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold mb-2 text-yellow-300 group-hover:text-yellow-200 transition-colors">25k+</div>
              <div className="text-gray-200 text-sm">Downloads</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl font-bold mb-2 text-green-300 group-hover:text-green-200 transition-colors">500+</div>
              <div className="text-gray-200 text-sm">Community Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;