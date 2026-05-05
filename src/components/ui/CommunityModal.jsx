import React from "react";
import { Icons } from "../../utils/icons";

const CommunityModal = ({ community, onClose, isOpen }) => {
  if (!isOpen || !community) return null;

  const socialMediaIcons = {
    linkedin: Icons.linkedin,
    twitter: Icons.x,
    telegram: Icons.telegram,
    discord: Icons.discord,
    facebook: Icons.facebook,
    whatsapp: Icons.whatsapp,
    github: Icons.github,
    youtube: Icons.youtube,
  };

  const socialMediaNames = {
    linkedin: "LinkedIn",
    twitter: "Twitter",
    telegram: "Telegram",
    discord: "Discord",
    facebook: "Facebook",
    whatsapp: "WhatsApp",
    github: "GitHub",
    youtube: "YouTube",
  };

  const hasSocialLinks =
    community.socialLinks && Object.keys(community.socialLinks).length > 0;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="flex justify-between items-start p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">{community.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Community Logo */}
        <div className="p-6 flex justify-center bg-gray-50">
          {community.logo ? (
            <img
              src={community.logo}
              alt={community.name}
              className="h-40 object-contain"
            />
          ) : (
            <div className="h-40 w-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">No Image</span>
            </div>
          )}
        </div>

        {/* Social Media Links */}
        {hasSocialLinks && (
          <div className="p-6 border-t">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Connect with us
            </h3>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(community.socialLinks).map(([platform, url]) => {
                const IconComponent = socialMediaIcons[platform];
                if (!IconComponent) return null;

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={socialMediaNames[platform] || platform}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gray-100 hover:bg-[var(--primary)] text-gray-700 hover:text-white transition-colors"
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        )}

        {/* Close button */}
        <div className="p-6 border-t">
          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityModal;
