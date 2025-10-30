import React, { useState } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import type { Page } from '../App';

// FIX: Explicitly typed NavLink as a React.FC to resolve a TypeScript error where the 'children' prop was incorrectly reported as missing.
type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-300 hover:text-orange-accent transition-all duration-300 text-sm md:text-base"
  >
    {children}
  </a>
);

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
    <header className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-sm shadow-neumorphic-out-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" onClick={(e) => handleNavigate(e, 'home')} className="flex items-center gap-2">
          <BrainCircuit className="w-8 h-8 text-orange-accent" />
          <span className="text-xl md:text-2xl font-bold text-white tracking-tight">
            Asisten<span className="text-orange-accent">Sebaya</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#features">Layanan</NavLink>
          <NavLink href="#testimonials">Testimoni</NavLink>
          <NavLink href="#affiliate">Jadi Tutor</NavLink>
          <a
            href="#"
            onClick={(e) => handleNavigate(e, 'login')}
            className="bg-orange-accent text-white font-semibold py-2 px-5 rounded-full shadow-neumorphic-out-sm hover:bg-orange-accent-hover hover:shadow-neumorphic-in-sm transition-all duration-300"
          >
            Mulai Kerjakan
          </a>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-dark-bg-secondary pb-4">
          <nav className="flex flex-col items-center gap-4">
            <NavLink href="#features">Layanan</NavLink>
            <NavLink href="#testimonials">Testimoni</NavLink>
            <NavLink href="#affiliate">Jadi Tutor</NavLink>
            <a
              href="#"
              onClick={(e) => handleNavigate(e, 'login')}
              className="bg-orange-accent text-white font-semibold py-2 px-5 rounded-full shadow-neumorphic-out-sm hover:bg-orange-accent-hover hover:shadow-neumorphic-in-sm transition-all duration-300 mt-2"
            >
              Mulai Kerjakan
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;