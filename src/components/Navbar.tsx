import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeNav: string;
  setActiveNav: (nav: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

const navItems = [
  'Home',
  'About',
  'Expertise',
  'Projects',
  'Contact',
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeNav,
  setActiveNav,
  isDarkMode,
  setIsDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full pt-4 md:pt-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <nav
          id="main-navigation"
          className="w-full bg-[#121212]/90 backdrop-blur-md border border-neutral-800/90 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between shadow-2xl transition-all"
        >
          {/* Brand Logo */}
          <a
            id="brand-logo-btn"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setActiveNav('Home');
              const el = document.getElementById('home');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group cursor-pointer select-none"
          >
            {/* Orange circle with SK monogram */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFA800] flex items-center justify-center shadow-lg shadow-[#FFA800]/20 transition-transform group-hover:scale-105">
              <span className="text-black font-extrabold text-sm sm:text-base leading-none tracking-tight">
                SK
              </span>
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
              Sachin<span className="text-[#FFA800]">.</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium">
            {navItems.map((item) => {
              const isActive = activeNav === item;
              return (
                <li key={item}>
                  <button
                    id={`nav-link-${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    onClick={() => {
                      setActiveNav(item);
                      if (item === 'Home') {
                        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (item === 'About') {
                        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (item === 'Expertise') {
                        document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (item === 'Projects') {
                        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                      } else if (item === 'Contact') {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`relative py-1 transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#FFA800] font-semibold'
                        : 'text-neutral-300 hover:text-white'
                    }`}
                  >
                    {item}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#FFA800] rounded-full animate-fadeIn" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* High Contrast Let's Talk CTA */}
            <button
              id="lets-talk-btn"
              onClick={onOpenContact}
              className="bg-white text-black font-semibold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-md shadow-white/10 flex items-center gap-1.5 cursor-pointer"
            >
              Let's Talk
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
              className="lg:hidden w-9 h-9 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-neutral-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden mt-3 p-4 bg-[#141414] border border-neutral-800 rounded-2xl shadow-2xl animate-fadeIn"
          >
            <ul className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeNav === item;
                return (
                  <li key={item}>
                    <button
                      id={`mobile-nav-${item.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      onClick={() => {
                        setActiveNav(item);
                        setMobileMenuOpen(false);
                        if (item === 'Home') {
                          document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (item === 'About') {
                          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (item === 'Expertise') {
                          document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (item === 'Projects') {
                          document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (item === 'Contact') {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#FFA800]/10 text-[#FFA800] font-semibold'
                          : 'text-neutral-300 hover:bg-neutral-900 hover:text-white'
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
