
import React, { useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';

const notifications = [
    { name: 'Andi P.', origin: 'Jakarta', avatar: 'https://picsum.photos/id/1005/50/50' },
    { name: 'Rina S.', origin: 'Surabaya', avatar: 'https://picsum.photos/id/1011/50/50' },
    { name: 'Eko W.', origin: 'Bandung', avatar: 'https://picsum.photos/id/1012/50/50' },
    { name: 'Siti A.', origin: 'Yogyakarta', avatar: 'https://picsum.photos/id/1027/50/50' },
];

const PurchaseNotification: React.FC = () => {
  const [currentNotification, setCurrentNotification] = useState(notifications[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // visible for 5 seconds
    };

    const notificationInterval = setInterval(() => {
        setCurrentNotification(notifications[Math.floor(Math.random() * notifications.length)]);
        showNotification();
    }, 10000); // new notification every 10 seconds

    // Initial notification
    setTimeout(showNotification, 3000);
    
    return () => clearInterval(notificationInterval);
  }, []);
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
  }

  if (!currentNotification) return null;

  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-4 bg-dark-bg-secondary p-4 rounded-2xl shadow-neumorphic-out transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <img src={currentNotification.avatar} alt={currentNotification.name} className="w-12 h-12 rounded-full border-2 border-orange-accent" />
      <div>
        <p className="font-semibold text-white text-sm">{currentNotification.name} dari {currentNotification.origin}</p>
        <p className="text-gray-400 text-xs">Telah menggunakan Asisten Sebaya, {formatDate(new Date())}</p>
      </div>
    </div>
  );
};

export default PurchaseNotification;
