import React from "react";
import { Code, Wrench, Lightbulb, Users } from "lucide-react";

const LocalGemsHero = () => {
  const stats = [
    {
      icon: Code,
      label: "Open Source Tools",
      value: "25+",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Wrench,
      label: "Local Frameworks",
      value: "3+",
      color: "from-red-500 to-red-600",
    },
    {
      icon: Lightbulb,
      label: "Featured Projects",
      value: "40+",
      color: "from-yellow-500 to-amber-600",
    },
    {
      icon: Users,
      label: "Contributing Developers",
      value: "150+",
      color: "from-green-600 to-emerald-600",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-green-900 via-red-900 to-yellow-900 text-white py-20">
      {/* Background Pattern with Cameroon colors */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Cameroon flag inspired accent stripes */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full flex">
          <div className="w-1/3 bg-gradient-to-b from-green-500/20 to-transparent"></div>
          <div className="w-1/3 bg-gradient-to-b from-red-500/20 to-transparent"></div>
          <div className="w-1/3 bg-gradient-to-b from-yellow-500/20 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-green-400/30">
            <Code className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Made in Cameroon</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-green-200 bg-clip-text text-transparent">
            Local Dev Tools & Projects
          </h1>

          <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
            Discover amazing tools, frameworks, and projects built by talented
            Cameroonian developers. From innovative solutions to creative
            experiments, explore what our local tech community is building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-green-400/30">
              <a href="#tools"> Explore Tools</a>
            </button>
            <button className="border-2 border-yellow-400/50 hover:border-yellow-400/70 px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-yellow-500/10 text-yellow-100 hover:text-white">
              <a href="#add-project"> Submit Your Project</a>
            </button>
          </div>
        </div>

        {/* Stats Grid with Cameroon flag colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalGemsHero;
