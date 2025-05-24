import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-['Pacifico'] text-white mb-6">CTCs</h3>
            <p className="text-gray-400 mb-6">
              Connecting and empowering tech communities across Cameroon to foster innovation, collaboration, and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-twitter-x-line ri-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-facebook-fill ri-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-linkedin-fill ri-lg"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="ri-instagram-line ri-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#communities" className="text-gray-400 hover:text-white transition">Communities</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition">Events</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-white transition">Map</a></li>
              <li><a href="#news" className="text-gray-400 hover:text-white transition">News</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Communities</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Software Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">AI & Data Science</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Startup Ecosystem</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Design & UX</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Blockchain</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Women in Tech</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="ri-map-pin-line text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">Akwa, Douala, Cameroon</span>
              </li>
              <li className="flex items-start">
                <i className="ri-mail-line text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">ndedilan504@gmail.com</span>
              </li>
              <li className="flex items-start">
                <i className="ri-phone-line text-gray-400 mt-1 mr-3"></i>
                <span className="text-gray-400">+237 694 525 931</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">© 2025 Tech Communities Finder. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;