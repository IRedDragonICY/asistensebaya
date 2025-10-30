import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AffiliateSection from './components/AffiliateSection';
import Footer from './components/Footer';
import PurchaseNotification from './components/PurchaseNotification';
import ChatWidget from './components/ChatWidget';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';

export type Page = 'home' | 'login' | 'register';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const navigate = (page: Page) => setCurrentPage(page);

  if (currentPage === 'login') {
    return <LoginPage navigate={navigate} />;
  }

  if (currentPage === 'register') {
    return <RegisterPage navigate={navigate} />;
  }
  
  return (
    <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
      <Header navigate={navigate} />
      <main>
        <HeroSection navigate={navigate} />
        <StatsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <AffiliateSection />
      </main>
      <Footer />
      <PurchaseNotification />
      <ChatWidget />
    </div>
  );
}