import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
  return (
    <nav className="bg-white border-b border-gray-200 py-3">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <i className="ri-arrow-right-s-line text-gray-400 mx-2"></i>
              )}
              {item.current ? (
                <span className="text-gray-900 font-medium">{item.label}</span>
              ) : (
                <Link 
                  to={item.href} 
                  className="text-[var(--primary)] hover:text-[var(--primary)]/80 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;