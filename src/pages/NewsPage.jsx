import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { fetchNews } from '../services/api';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { NEWS_CATEGORIES } from '../utils/constants';

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');

  const { data, loading, error } = useApi(fetchNews, []);

  const news = data?.news || [];

  const filteredNews = news.filter(article => {
    const matchesCategory = selectedCategory === 'All Categories' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Tech Community News</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and announcements from Cameroon's tech ecosystem.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-lg mb-4">Filter News</h3>
                
                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Search News</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search news..."
                      className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/20"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <select
                    className="w-full border border-gray-300 rounded-lg px-3 py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="All Categories">All Categories</option>
                    {NEWS_CATEGORIES.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            {loading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="large" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">Error loading news: {error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredNews.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
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
                ))}
              </div>
            )}

            {filteredNews.length === 0 && !loading && (
              <div className="text-center py-12">
                <i className="ri-newspaper-line ri-3x text-gray-400 mb-4"></i>
                <p className="text-gray-600">No news articles found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;