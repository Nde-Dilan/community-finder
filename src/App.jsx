import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import BackToTop from './components/common/BackToTop';
import Newsletter from './components/common/Newsletter';
import HomePage from './pages/HomePage';
import CommunityProfilePage from './pages/CommunityProfilePage';
import EventsTimeline from './components/sections/EventsTimeline';
import EventsPage from './pages/EventsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import './styles/index.css';

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/community/:id" element={<CommunityProfilePage />} />
             <Route path="/events" element={<EventsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} /> 
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <EventsTimeline/>
        <Newsletter />
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
}

export default App;