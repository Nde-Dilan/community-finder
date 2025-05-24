import React, { useState } from 'react';

const CommunityInfo = ({ community }) => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About', icon: 'ri-information-line' },
    { id: 'mission', label: 'Mission & Vision', icon: 'ri-target-line' },
    { id: 'activities', label: 'Activities', icon: 'ri-calendar-event-line' },
    { id: 'achievements', label: 'Achievements', icon: 'ri-trophy-line' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-[var(--primary)] text-[var(--primary)]'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <i className={`${tab.icon} mr-2`}></i>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">About {community.name}</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {community.fullDescription || community.description}
              </p>
            </div>
            
            {community.specialties && (
              <div>
                <h4 className="text-lg font-semibold mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {community.specialties.map((specialty, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {community.focusAreas && (
              <div>
                <h4 className="text-lg font-semibold mb-3">Focus Areas</h4>
                <ul className="space-y-2">
                  {community.focusAreas.map((area, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <i className="ri-check-line text-[var(--primary)] mr-3"></i>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === 'mission' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                {community.mission || "To foster innovation and collaboration within Cameroon's tech ecosystem while building solutions that address local challenges and opportunities."}
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                {community.vision || "To be the leading tech community that empowers local talent and drives digital transformation across Cameroon and beyond."}
              </p>
            </div>
            
            {community.values && (
              <div>
                <h3 className="text-xl font-bold mb-4">Core Values</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {community.values.map((value, index) => (
                    <div key={index} className="flex items-start">
                      <i className="ri-heart-fill text-[var(--primary)] mr-3 mt-1"></i>
                      <span className="text-gray-700">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'activities' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Regular Activities</h3>
            {community.activities ? (
              <div className="space-y-4">
                {community.activities.map((activity, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-lg mb-2">{activity.name}</h4>
                    <p className="text-gray-600 mb-3">{activity.description}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <i className="ri-time-line mr-2"></i>
                      <span>{activity.frequency}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Monthly Meetups</h4>
                  <p className="text-gray-600">Regular networking and knowledge sharing sessions</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Workshops</h4>
                  <p className="text-gray-600">Hands-on training sessions on latest technologies</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Hackathons</h4>
                  <p className="text-gray-600">Quarterly coding competitions and innovation challenges</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-lg mb-2">Mentorship Programs</h4>
                  <p className="text-gray-600">Pairing experienced developers with newcomers</p>
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-4">Key Achievements</h3>
            {community.achievements ? (
              <div className="space-y-4">
                {community.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <i className="ri-trophy-fill text-yellow-500 mr-4 mt-1 text-xl"></i>
                    <div>
                      <h4 className="font-semibold mb-1">{achievement.title}</h4>
                      <p className="text-gray-600 text-sm">{achievement.description}</p>
                      {achievement.date && (
                        <span className="text-xs text-gray-500">{achievement.date}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <i className="ri-trophy-fill text-yellow-500 mr-4 mt-1 text-xl"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Community Growth</h4>
                    <p className="text-gray-600 text-sm">Grown from 50 to {community.members}+ active members</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <i className="ri-trophy-fill text-yellow-500 mr-4 mt-1 text-xl"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Successful Projects</h4>
                    <p className="text-gray-600 text-sm">Launched 15+ community-driven projects</p>
                  </div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                  <i className="ri-trophy-fill text-yellow-500 mr-4 mt-1 text-xl"></i>
                  <div>
                    <h4 className="font-semibold mb-1">Industry Recognition</h4>
                    <p className="text-gray-600 text-sm">Featured in major tech publications and conferences</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityInfo;