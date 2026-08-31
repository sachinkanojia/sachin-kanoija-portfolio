import React from 'react';
import {
  ArrowRight,
  Download,
  Code2,
  Globe,
  Smartphone,
  MousePointerClick,
  LayoutGrid,
  Layers,
  PenTool,
  Briefcase,
  Users,
  Smile,
  Star,
} from 'lucide-react';
import portraitImg from '../assets/images/myself.png';

interface AboutSectionProps {
  onDownloadCV?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onDownloadCV }) => {
  const stats = [
    {
      icon: Briefcase,
      value: '250+',
      label: 'Successful Projects',
    },
    {
      icon: Users,
      value: '25+',
      label: 'Industries Served',
    },
    {
      icon: Smile,
      value: '150+',
      label: 'Happy Clients',
    },
    {
      icon: Star,
      value: '7+',
      label: 'Years of Experience',
    },
  ];

  const handleDownload = () => {
    window.open(
      'https://drive.google.com/uc?export=download&id=1XFQGpgJ0K9wLgMXRhLcwY1QAkIJps0HP',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="about"
      className="w-full bg-black/40 text-white pt-8 sm:pt-12 pb-16 sm:pb-20 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Main 2-Column About Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Portrait Card with Glow Border & Floating Tags */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[420px] rounded-[32px] border border-amber-500/40 p-2 sm:p-2.5 bg-neutral-950/80 shadow-[0_0_35px_rgba(255,168,0,0.18)] select-none">
              
              {/* Inner Image Container with Arch and Dark Gradient */}
              <div className="relative w-full aspect-[0.92] rounded-[26px] overflow-hidden bg-[#1A140B]">
                
                {/* Amber/Gold Arched Architectural Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF9500]/20 via-[#FFA800]/30 to-[#FFC400]/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 rounded-t-full bg-gradient-to-b from-[#FFA800]/40 to-[#120F0D]/80 blur-sm pointer-events-none" />

                {/* Sachin's Portrait */}
                <img
                  src={portraitImg}
                  alt="Sachin Kanojia UI/UX Designer & Front-End Developer"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover object-top scale-100 transition-transform duration-500 hover:scale-105"
                />

                {/* Subtle dark vignette on bottom */}
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
              </div>

              {/* Floating Pill Tags Layer precisely arranged as in screenshot */}
              <div className="absolute inset-0 pointer-events-none flex flex-col justify-end p-3.5 pb-5 sm:p-4 sm:pb-6">
                <div className="flex flex-col gap-2.5 w-full">
                  
                  {/* Row 1: UI/UX Design (outline) + Front-End Development (amber) */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      id="about-badge-uiux"
                      className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 text-white border border-neutral-700 text-xs sm:text-[13px] font-semibold backdrop-blur-md hover:border-amber-400 transition-all hover:scale-105 shadow-lg"
                    >
                      <PenTool className="w-3.5 h-3.5 text-[#FFA800]" />
                      UI/UX Design
                    </span>

                    <span
                      id="about-badge-frontend"
                      className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFA800] text-black text-xs sm:text-[13px] font-extrabold shadow-lg shadow-[#FFA800]/25 hover:bg-[#ffb526] transition-all hover:scale-105"
                    >
                      <Code2 className="w-4 h-4 stroke-[2.5]" />
                      Front-End Development
                    </span>
                  </div>

                  {/* Row 2: Web Design (amber) + Responsive Interfaces (outline) */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      id="about-badge-webdesign"
                      className="pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FFA800] text-black text-xs sm:text-[13px] font-extrabold shadow-lg shadow-[#FFA800]/25 hover:bg-[#ffb526] transition-all hover:scale-105"
                    >
                      <Globe className="w-3.5 h-3.5 stroke-[2.5]" />
                      Web Design
                    </span>

                    <span
                      id="about-badge-responsive"
                      className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 text-white border border-neutral-700 text-xs sm:text-[13px] font-semibold backdrop-blur-md hover:border-amber-400 transition-all hover:scale-105 shadow-lg"
                    >
                      <Smartphone className="w-3.5 h-3.5 text-[#FFA800]" />
                      Responsive Interfaces
                    </span>
                  </div>

                  {/* Row 3: Prototyping (outline) + Wireframes (outline) */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      id="about-badge-prototyping"
                      className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 text-white border border-neutral-700 text-xs sm:text-[13px] font-semibold backdrop-blur-md hover:border-amber-400 transition-all hover:scale-105 shadow-lg"
                    >
                      <MousePointerClick className="w-3.5 h-3.5 text-[#FFA800]" />
                      Prototyping
                    </span>

                    <span
                      id="about-badge-wireframes"
                      className="pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/90 text-white border border-neutral-700 text-xs sm:text-[13px] font-semibold backdrop-blur-md hover:border-amber-400 transition-all hover:scale-105 shadow-lg"
                    >
                      <LayoutGrid className="w-3.5 h-3.5 text-[#FFA800]" />
                      Wireframes
                    </span>
                  </div>

                  {/* Row 4: Design Systems (outline, centered) */}
                  <div className="flex justify-center">
                    <span
                      id="about-badge-designsystems"
                      className="pointer-events-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-black/90 text-white border border-neutral-700 text-xs sm:text-[13px] font-semibold backdrop-blur-md hover:border-amber-400 transition-all hover:scale-105 shadow-lg"
                    >
                      <Layers className="w-3.5 h-3.5 text-[#FFA800]" />
                      Design Systems
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Who is Sachin Kanojia? */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-7 bg-black/40 backdrop-blur-md border border-neutral-800/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            
            {/* Pill Indicator: Dual Dot + "About Me" */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center -space-x-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
              </div>
              <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-100">
                About Me
              </span>
            </div>

            {/* Main Headline with Highlight and Spark Icon */}
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl md:text-[54px] font-extrabold tracking-tight leading-[1.12] text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
                Who is <span className="text-[#FFA800]">Sachin Kanojia?</span>
                {/* 3-Petal Sparkle Accent */}
                <span className="inline-block ml-1 align-top text-[#FFA800]">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C12.5 5.5 15.5 8.5 19 9C15.5 9.5 12.5 12.5 12 16C11.5 12.5 8.5 9.5 5 9C8.5 8.5 11.5 5.5 12 2Z" />
                    <circle cx="19" cy="4" r="1.5" />
                    <circle cx="21" cy="9" r="1" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Bio Paragraphs */}
            <div className="mt-2 sm:mt-0 -mt-12 lg:-mt-16 space-y-4 text-neutral-200 text-base sm:text-lg font-normal leading-relaxed max-w-2xl [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              <p>
                I'm a Senior UI/UX Designer, Product Designer, and Frontend Developer with{' '}
                <strong className="text-[#FFA800] font-semibold">15+ years</strong> of professional experience,
               including <strong className="text-[#FFA800] font-semibold"> 7+ years</strong> specializing in UI/UX design and frontend development.
              </p>
              <p>
                I combine design thinking, user experience, and modern frontend technologies to turn ideas and complex requirements into intuitive, accessible, and engaging digital products. I work across the complete design-to-development journey — from research, wireframes, and prototypes to design systems, responsive interfaces, and functional web applications.
              </p>
              <p>
                I also leverage modern AI-assisted design and development workflows to explore ideas faster, improve productivity, and build better digital experiences.
              </p>
            </div>

            {/* CTA: Download CV + Handwritten Signature */}
            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-6 sm:gap-10">
              
              {/* Download CV Button */}
              <button
                id="download-cv-btn"
                onClick={handleDownload}
                className="group flex items-center bg-[#141414] hover:bg-[#1C1C1C] border border-neutral-700/80 hover:border-neutral-500 rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl cursor-pointer"
              >
                <Download className="w-4 h-4 text-amber-400 mr-2" />
                <span className="text-white font-bold text-sm sm:text-base mr-3 tracking-wide">
                  Download CV
                </span>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFA800] group-hover:bg-[#ffb426] text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5 shadow-md shadow-[#FFA800]/30">
                  <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              {/* Handwritten Signature */}
              <div className="text-white text-3xl sm:text-4xl md:text-5xl font-normal font-['Caveat',cursive] select-none tracking-wider -rotate-2 hover:text-[#FFA800] transition-colors">
                Sachin Kanojia
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Statistics Card Container */}
        <div
          id="stats-container"
          className="mt-16 sm:mt-20 bg-[#0C0C0C] border border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
            {stats.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <React.Fragment key={stat.label}>
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center gap-4">
                      {/* Icon in dark amber-tinted circle */}
                      <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-[#FFA800] shadow-inner flex-shrink-0">
                        <IconComp className="w-5 h-5 fill-current" />
                      </div>
                      
                      {/* Text info */}
                      <div>
                        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs sm:text-sm text-neutral-400 font-medium whitespace-nowrap">
                          {stat.label}
                        </div>
                      </div>
                    </div>

                    {/* Dot Separator */}
                    {idx < stats.length - 1 && (
                      <div className="hidden lg:flex items-center justify-center pl-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#FFA800] shadow-[0_0_8px_rgba(255,168,0,0.8)]" />
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
