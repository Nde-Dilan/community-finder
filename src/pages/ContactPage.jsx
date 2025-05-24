import React from 'react';
import ContactHub from '../components/sections/ContactHub';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Have questions about tech communities in Cameroon? Want to list your community? We're here to help connect and grow the tech ecosystem.
          </p>
        </div>
        
        <ContactHub />
        
        {/* Additional Contact Information */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-map-pin-line ri-2x"></i>
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm">
                Silicon Mountain<br />
                Buea, South West Region<br />
                Cameroon
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line ri-2x"></i>
              </div>
              <h3 className="font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 text-sm">
                +237 6XX XXX XXX<br />
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)]/10 text-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line ri-2x"></i>
              </div>
              <h3 className="font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">
                hello@techcommunities.cm<br />
                We'll respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;