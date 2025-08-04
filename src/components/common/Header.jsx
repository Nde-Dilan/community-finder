import React, { useState } from 'react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            
            <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" className="text-2xl font-['Pacifico'] text-[var(--primary)]">CTCs</a>
                
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="#communities" className="text-gray-700 hover:text-[var(--primary)] font-medium">Communities</a>
                    <a href="#events" className="text-gray-700 hover:text-[var(--primary)] font-medium">Events</a>
                    <a href="#map" className="text-gray-700 hover:text-[var(--primary)] font-medium">Map</a>
                    <a href="#news" className="text-gray-700 hover:text-[var(--primary)] font-medium">News</a>
                    <a href="#contact" className="text-gray-700 hover:text-[var(--primary)] font-medium">Contact</a>
                </nav>
                
                <div className="flex items-center space-x-4">
                    <a href='/local-gems' className="hidden md:flex items-center justify-center px-4 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition duration-300 rounded-button whitespace-nowrap">
                        Local Gems
                    </a>
                    <button className="hidden md:flex items-center justify-center px-4 py-2 bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition duration-300 rounded-button whitespace-nowrap">
                        <a href="#add-community"> Add Community</a>
                       
                    </button>
                    <div 
                        className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 cursor-pointer" 
                        onClick={toggleMobileMenu}
                    >
                        <i className="ri-menu-line ri-lg"></i>
                    </div>
                </div>
            </div>
            
            {/* Mobile Menu */}
            <div className={`md:hidden bg-white w-full ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
                    <a href="#communities" className="text-gray-700 hover:text-[var(--primary)] font-medium py-2 border-b border-gray-100" onClick={closeMobileMenu}>Communities</a>
                    <a href="#events" className="text-gray-700 hover:text-[var(--primary)] font-medium py-2 border-b border-gray-100" onClick={closeMobileMenu}>Events</a>
                    <a href="#map" className="text-gray-700 hover:text-[var(--primary)] font-medium py-2 border-b border-gray-100" onClick={closeMobileMenu}>Map</a>
                    <a href="#news" className="text-gray-700 hover:text-[var(--primary)] font-medium py-2 border-b border-gray-100" onClick={closeMobileMenu}>News</a>
                    <a href="#contact" className="text-gray-700 hover:text-[var(--primary)] font-medium py-2 border-b border-gray-100" onClick={closeMobileMenu}>Contact</a>
                    <div className="flex space-x-3 py-2">
                        <button className="flex-1 px-4 py-2 border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition duration-300 rounded-button whitespace-nowrap" onClick={closeMobileMenu}>
                            Sign In
                        </button>
                        <button className="flex-1 px-4 py-2 bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90 transition duration-300 rounded-button whitespace-nowrap" onClick={closeMobileMenu}>
                            Join
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;