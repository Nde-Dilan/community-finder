import React, { useState } from 'react';
import { subscribeNewsletter } from '../../services/api';
import LoadingSpinner from './LoadingSpinner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await subscribeNewsletter(email);
      setSubmitStatus({ type: 'success', message: 'Successfully subscribed!' });
      setEmail('');
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to subscribe. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 bg-[var(--primary)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-white/80">Subscribe to our newsletter for the latest tech community news and events.</p>
          </div>
          
          <div className="w-full md:w-1/2 max-w-md">
            <form onSubmit={handleSubmit} className="flex">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full px-4 py-3 rounded-l-lg focus:outline-none border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-white text-[var(--primary)] font-medium rounded-r-lg whitespace-nowrap hover:bg-gray-100 transition flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? <LoadingSpinner size="small" /> : 'Subscribe'}
              </button>
            </form>
            {submitStatus && (
              <div className={`mt-2 text-sm ${
                submitStatus.type === 'success' 
                  ? 'text-green-200' 
                  : 'text-red-200'
              }`}>
                {submitStatus.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;