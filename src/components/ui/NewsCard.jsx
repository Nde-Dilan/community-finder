import React from 'react';
import { useApi } from '../../hooks/useApi';
import { fetchNews } from '../../services/api';
import LoadingSpinner from '../common/LoadingSpinner';

const NewsCard = ({ article }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
    <img 
      src={article.image} 
      alt={article.title} 
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    <div className="p-5">
      <div className="flex items-center text-gray-500 mb-3">
        <i className="ri-calendar-line mr-1"></i>
        <span className="text-sm">{article.date}</span>
      </div>
      <h3 className="font-bold text-xl mb-3">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex items-center text-[var(--primary)] cursor-pointer">
        <span className="font-medium">Read More</span>
        <i className="ri-arrow-right-line ml-1"></i>
      </div>
    </div>
  </div>
);

const NewsFeed = () => {
  const { data, loading, error } = useApi(fetchNews);

  if (loading) {
    return (
      <section id="news" className="py-16 cameroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Community News</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Stay updated with the latest happenings, achievements, and announcements from Cameroon's tech ecosystem.</p>
          </div>
          <LoadingSpinner size="large" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="news" className="py-16 cameroon-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Community News</h2>
            <p className="text-red-600">Error loading news: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="news" className="py-16 cameroon-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Community News</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements from Cameroon's tech ecosystem.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.news?.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
        
        <div className="mt-10 flex justify-center">
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-button whitespace-nowrap flex items-center justify-center hover:bg-gray-50">
            <i className="ri-newspaper-line ri-lg mr-2"></i>
            View All News
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsFeed;