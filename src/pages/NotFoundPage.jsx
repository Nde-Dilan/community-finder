import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center"></div>
                <div className="mb-8">
                    <i className="ri-search-line text-6xl text-gray-300 mb-4"></i>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        The page you're looking for doesn't exist or may have been moved.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link 
                        to="/"
                        className="inline-block px-8 py-3 bg-[var(--primary)] text-white rounded-button font-medium hover:bg-[var(--primary)]/90 transition-colors"
                    >
                        <i className="ri-home-line mr-2"></i>
                        Back to Home
                    </Link>
                    
                    <div className="text-sm text-gray-500">
                        Or try searching for communities in our{' '}
                        <Link to="/#communities-directory" className="text-[var(--primary)] hover:underline">
                            directory
                        </Link>
                    </div>
                </div>
            </div>
       
    );
};

export default NotFoundPage;
