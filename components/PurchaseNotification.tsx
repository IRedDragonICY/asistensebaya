
import React, { useState, useEffect } from 'react';
import { ShoppingCart, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50 flex items-center gap-4 bg-dark-bg-secondary p-4 rounded-2xl shadow-neumorphic-out"
          initial={{ x: -400, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          exit={{ x: -400, opacity: 0, scale: 0.8 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 25
          }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200
            }}
          >
            <img
              src={currentNotification.avatar}
              alt={currentNotification.name}
              className="w-12 h-12 rounded-full border-2 border-orange-accent"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <div className="flex items-center gap-2">
              <p className="font-semibold text-white text-sm">
                {currentNotification.name} dari {currentNotification.origin}
              </p>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <CheckCircle className="w-4 h-4 text-green-400" />
              </motion.div>
            </div>
            <p className="text-gray-400 text-xs">
              Telah menggunakan Asisten Sebaya, {formatDate(new Date())}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PurchaseNotification;
