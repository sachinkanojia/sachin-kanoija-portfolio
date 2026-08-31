import { useState, useEffect } from 'react';
import { ScrollAnimationBackground } from './components/ScrollAnimationBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { ContactModal } from './components/ContactModal';
import { useSEO } from './hooks/useSEO';

export default function App() {
  const [activeNav, setActiveNav] = useState('Home');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useSEO({
    title: 'Sachin Kanojia - UI/UX Designer & Front-End Developer',
    description: 'Senior UI/UX Designer & Frontend Developer with 15+ years experience. Expert in design systems, responsive interfaces, React, TypeScript, and modern frontend technologies. 250+ projects delivered across 25+ industries.',
    url: 'https://sachinkanojia.com',
  });

  // Auto-track active navigation tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const homeEl = document.getElementById('home');
      const aboutEl = document.getElementById('about');
      const expertiseEl = document.getElementById('expertise');
      const projectsEl = document.getElementById('projects');
      const contactEl = document.getElementById('contact');

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveNav('Contact');
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveNav('Projects');
      } else if (expertiseEl && scrollPosition >= expertiseEl.offsetTop) {
        setActiveNav('Expertise');
      } else if (aboutEl && scrollPosition >= aboutEl.offsetTop) {
        setActiveNav('About');
      } else if (homeEl) {
        setActiveNav('Home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen w-full transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-white' : 'bg-neutral-950 text-neutral-100'
      } flex flex-col justify-between overflow-x-hidden selection:bg-[#FFA800] selection:text-black`}
    >
      {/* Background subtle radial ambient gradient */}
      <ScrollAnimationBackground />

      {/* Background subtle radial ambient gradient */}
      <div className="fixed inset-0 pointer-events-none opacity-20 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#FFA800]/10 via-transparent to-transparent blur-3xl rounded-full" />
      </div>

      {/* Floating Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          onOpenContact={() => setIsContactOpen(true)}
          activeNav={activeNav}
          setActiveNav={setActiveNav}
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
      </div>

      {/* Main Content Sections */}
      <main className="flex-1 flex flex-col relative z-10 pt-[100px]">
        {/* Hero Section */}
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />

        {/* About Section */}
        <AboutSection onDownloadCV={() => setIsContactOpen(true)} />

        {/* What I Do Best / Expertise Section (including My Favorite Tools) */}
        <ExpertiseSection />

        {/* Projects / Portfolio Section */}
        <ProjectsSection onViewAllProjects={() => setIsContactOpen(true)} />

        {/* Contact Page Section */}
        <ContactSection />
      </main>

      {/* Contact Let's Talk Modal Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
