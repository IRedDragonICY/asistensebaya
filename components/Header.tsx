import React, { useState } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Page } from '../App';

// FIX: Explicitly typed NavLink as a React.FC to resolve a TypeScript error where the 'children' prop was incorrectly reported as missing.
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  mobile?: boolean;
  delay?: number;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children, mobile = false, delay = 0 }) => {
  const linkContent = (
    <a
      href={href}
      className="text-gray-300 hover:text-orange-accent transition-all duration-300 text-sm md:text-base relative group"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-accent group-hover:w-full transition-all duration-300"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </a>
  );

  if (mobile) {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay }}
      >
        {linkContent}
      </motion.div>
    );
  }

  return linkContent;
};

type HeaderProps = {
  navigate: (page: Page) => void;
};

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, page: Page) => {
    e.preventDefault();
    setIsOpen(false); // Close mobile menu on navigation
    navigate(page);
  };

  return (
    <motion.header
      className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-sm shadow-neumorphic-out-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.a
          href="#"
          onClick={(e) => handleNavigate(e, 'home')}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <BrainCircuit className="w-8 h-8 text-orange-accent" />
          </motion.div>
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Asisten<span className="text-orange-accent">Sebaya</span>
          </span>
        </motion.a>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Layanan</NavLink>
          <NavLink href="#testimonials">Testimoni</NavLink>
          <NavLink href="#affiliate">Jadi Tutor</NavLink>
          <motion.a
            href="#"
            onClick={(e) => handleNavigate(e, 'login')}
            className="bg-orange-accent text-white font-semibold py-2 px-5 rounded-full shadow-neumorphic-out-sm"
            whileHover={{
              scale: 1.05,
              boxShadow: "inset 8px 8px 16px #1a1c20, inset -4px -4px 8px #22242a"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Mulai Kerjakan
          </motion.a>
        </nav>
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-dark-bg-secondary pb-4 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col items-center gap-4 pt-4">
              <NavLink href="#features" mobile delay={0.1}>Layanan</NavLink>
              <NavLink href="#testimonials" mobile delay={0.15}>Testimoni</NavLink>
              <NavLink href="#affiliate" mobile delay={0.2}>Jadi Tutor</NavLink>
              <motion.a
                href="#"
                onClick={(e) => handleNavigate(e, 'login')}
                className="bg-orange-accent text-white font-semibold py-2 px-5 rounded-full shadow-neumorphic-out-sm mt-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.25 }}
                whileTap={{ scale: 0.95 }}
              >
                Mulai Kerjakan
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;