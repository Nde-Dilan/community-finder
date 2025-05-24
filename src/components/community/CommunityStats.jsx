import React from 'react';

const CommunityStats = ({ community }) => {
  const stats = [
    {
      label: 'Total Members',
      value: community.members?.toLocaleString() || '0',
      icon: 'ri-user-line',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Events Hosted',
      value: community.eventsHosted || '24',
      icon: 'ri-calendar-event-line',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Active Projects',
      value: community.activeProjects || '8',
      icon: 'ri-code-line',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      label: 'Partnerships',
      value: community.partnerships || '12',
      icon: 'ri-handshake-line',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-6">Community Stats</h3>
      
      <div className="space-y-4">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center">
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center mr-4`}>
              <i className={`${stat.icon} ${stat.color} text-xl`}></i>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Growth Chart */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="font-semibold mb-4">Member Growth</h4>
        <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-center p-4">
          <div className="text-sm text-gray-500">Growth chart visualization would go here</div>
        </div>
      </div>
      
      {/* Quick Actions */}
      <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
        <button className="w-full px-4 py-2 bg-[var(--primary)] text-white rounded-button font-medium">
          <i className="ri-mail-line mr-2"></i>
          Contact Community
        </button>
        <button className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-button font-medium hover:bg-gray-50">
          <i className="ri-flag-line mr-2"></i>
          Report Issue
        </button>
      </div>
    </div>
  );
};

export default CommunityStats;