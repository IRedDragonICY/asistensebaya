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
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import CareerPage from './components/CareerPage';
import ContactPage from './components/ContactPage';
import TermsPage from './components/TermsPage';
import PrivacyPage from './components/PrivacyPage';

export type Page = 'home' | 'login' | 'register' | 'services' | 'about' | 'career' | 'contact' | 'terms' | 'privacy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const navigate = (page: Page) => setCurrentPage(page);

  if (currentPage === 'login') {
    return <LoginPage navigate={navigate} />;
  }

  if (currentPage === 'register') {
    return <RegisterPage navigate={navigate} />;
  }

  if (currentPage === 'services') {
    return (
      <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
        <ServicesPage navigate={navigate} />
        <Footer navigate={navigate} />
        <ChatWidget />
      </div>
    );
  }

  if (currentPage === 'about') {
    return (
      <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
        <AboutPage navigate={navigate} />
        <Footer navigate={navigate} />
        <ChatWidget />
      </div>
    );
  }

  if (currentPage === 'career') {
    return (
      <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
        <CareerPage navigate={navigate} />
        <Footer navigate={navigate} />
        <ChatWidget />
      </div>
    );
  }

  if (currentPage === 'contact') {
    return (
      <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
        <ContactPage navigate={navigate} />
        <Footer navigate={navigate} />
        <ChatWidget />
      </div>
    );
  }

  if (currentPage === 'terms') {
    return (
      <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
        <TermsPage navigate={navigate} />
        <Footer navigate={navigate} />
        <ChatWidget />
      </div>
    );
  }

  if (currentPage === 'privacy') {
    return (
      <div className="bg-dark-bg text-gray-300 font-sans overflow-x-hidden">
        <PrivacyPage navigate={navigate} />
        <Footer navigate={navigate} />
        <ChatWidget />
      </div>
    );
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
      <Footer navigate={navigate} />
      <PurchaseNotification />
      <ChatWidget />
    </div>
  );
}