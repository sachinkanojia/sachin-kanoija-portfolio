import React from 'react';
import {
  PenTool,
  Monitor,
  Code2,
  Smartphone,
  Layers,
  Star,
  Cpu,
} from 'lucide-react';
import { ToolsSection } from './ToolsSection';

export const ExpertiseSection: React.FC = () => {
  const services = [
    {
      id: 'uiux',
      icon: PenTool,
      title: 'UI/UX Design',
      description:
        'User research, wireframes, prototypes and design systems that solve real user problems.',
    },
    {
      id: 'webdesign',
      icon: Monitor,
      title: 'AI-Assisted Development',
      description:
        'I use AI-assisted coding to accelerate development, explore solutions faster, and write cleaner, more efficient code.',
    },
    {
      id: 'frontend',
      icon: Code2,
      title: 'Front-End Development',
      description:
        'Building fast, clean and scalable interfaces using HTML5, CSS3, JavaScript and ReactJS.',
    },
    {
      id: 'responsive',
      icon: Smartphone,
      title: 'Responsive Development',
      description:
        'Creating seamless experiences across all devices and screen sizes.',
    },
  ];

  const techStack = [
    {
      name: 'HTML5',
      icon: (
        <svg viewBox="0 0 512 512" className="w-5 h-5 fill-[#E34F26]">
          <path d="M71 460L30 0h452l-41 460-185 52z" />
          <path fill="#EF652A" d="M256 472l149-41 35-391H256v432z" />
          <path fill="#ECECEC" d="M256 176h79l-6 63h-73v62h67l-7 78-60 17v65l120-33 17-189h-237z" />
          <path fill="#fff" d="M256 64H116l6 64h134v-64zm0 112h-74l6 63h68v-63zm0 125l-59-16-4-47h-64l7 98 120 33v-68z" />
        </svg>
      ),
    },
    {
      name: 'CSS3',
      icon: (
        <svg viewBox="0 0 512 512" className="w-5 h-5 fill-[#1572B6]">
          <path d="M71 460L30 0h452l-41 460-185 52z" />
          <path fill="#33A9DC" d="M256 472l149-41 35-391H256v432z" />
          <path fill="#ECECEC" d="M256 176h79l-6 63h-73v62h67l-7 78-60 17v65l120-33 17-189h-237z" />
          <path fill="#fff" d="M256 64H116l6 64h134v-64zm0 112h-74l6 63h68v-63zm0 125l-59-16-4-47h-64l7 98 120 33v-68z" />
        </svg>
      ),
    },
    {
      name: 'JavaScript',
      icon: (
        <div className="w-5 h-5 rounded-md bg-[#F7DF1E] text-black font-black text-[11px] flex items-end justify-end p-0.5 leading-none">
          JS
        </div>
      ),
    },
    {
      name: 'ReactJS',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-5 h-5 text-[#61DAFB] fill-none animate-[spin_10s_linear_infinite]">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
          <g stroke="#61DAFB" strokeWidth="1">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      ),
    },
    {
      name: 'Tailwind CSS',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#38BDF8]">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
        </svg>
      ),
    },
    {
      name: 'AngularJS',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#DD0031]">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.521 17.34l-4.479-2.643-3.07 5.298H6.662l3.067-5.299L6.479 4.66h4.53l3.073 5.297h1.812l-3.065 5.298z" />
        </svg>
      ),
    },
    {
      name: 'Figma',
      icon: (
        <svg viewBox="0 0 38 57" className="w-3.5 h-5 fill-current">
          <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE" />
          <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0ACF83" />
          <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#FF7262" />
          <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E" />
          <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF" />
        </svg>
      ),
    },
    {
      name: 'Adobe Photoshop',
      icon: (
        <div className="w-5 h-5 rounded-md bg-[#001E36] border border-[#31A8FF]/50 flex items-center justify-center font-bold text-[#31A8FF] text-[10px] tracking-tighter shadow-sm">
          Ps
        </div>
      ),
    },
    {
      name: 'Git',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#F05032]">
          <path d="M21.62 10.74L13.26 2.38a1.69 1.69 0 0 0-2.39 0l-1.9 1.9 2.52 2.52c.6-.2 1.3-.06 1.78.42.48.48.62 1.18.42 1.78l2.43 2.43c.6-.2 1.3-.06 1.78.42.66.66.66 1.73 0 2.39s-1.73.66-2.39 0a1.69 1.69 0 0 1-.42-1.78l-2.43-2.43c-.2.06-.41.09-.62.09s-.42-.03-.62-.09l-2.43 2.43c.2.6.06 1.3-.42 1.78-.66.66-1.73.66-2.39 0s-.66-1.73 0-2.39c.48-.48 1.18-.62 1.78-.42l2.43-2.43a1.69 1.69 0 0 1-.09-.62c0-.21.03-.42.09-.62L6.8 4.88 2.38 9.3a1.69 1.69 0 0 0 0 2.39l8.36 8.36a1.69 1.69 0 0 0 2.39 0l8.49-8.49a1.69 1.69 0 0 0 0-2.82z" />
        </svg>
      ),
    },
    {
      name: 'VS Code',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5">
          <path
            d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.227a1 1 0 0 0-.006 1.42l3.92 3.683-3.92 3.68a1 1 0 0 0 .006 1.42l1.322 1.168a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.6V3.93a1.5 1.5 0 0 0-.85-1.343zM18 17.587l-6.863-5.25L18 7.087v10.5z"
            fill="#007ACC"
          />
        </svg>
      ),
    },
    {
      name: 'API Integration',
      icon: <Cpu className="w-5 h-5 text-[#FFA800]" />,
    },
    {
      name: 'GitHub',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  const coreStrengths = [
    { name: 'UI/UX Design', percentage: '95%', value: 95 },
    { name: 'Front-End Development', percentage: '90%', value: 90 },
    { name: 'Responsive Design', percentage: '90%', value: 90 },
    { name: 'Design Systems', percentage: '85%', value: 85 },
    { name: 'Problem Solving', percentage: '90%', value: 90 },
  ];

  return (
    <section
      id="expertise"
      className="w-full bg-black/40 text-white pt-8 sm:pt-12 pb-16 sm:pb-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* 2-Column Layout with 30% Gap between columns: Left (Offerings) | Right (Tech Stack & Strengths) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[30%] items-start mb-16 sm:mb-20">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: Header + What I Do Best + 5 Core Offerings */}
          {/* ========================================================= */}
          <div className="flex flex-col space-y-6 bg-black/40 backdrop-blur-md border border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            
            {/* Pill Indicator: Dual Dot + "Expertise" */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center -space-x-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
              </div>
              <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-100">
                Expertise
              </span>
            </div>

            {/* Headline: STRICTLY ONE LINE TEXT */}
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white whitespace-nowrap [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
                What I Do <span className="text-[#FFA800]">Best</span>
                {/* 3-Petal Sparkle Accent */}
                <span className="inline-block ml-2.5 align-top text-[#FFA800]">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C12.5 5.5 15.5 8.5 19 9C15.5 9.5 12.5 12.5 12 16C11.5 12.5 8.5 9.5 5 9C8.5 8.5 11.5 5.5 12 2Z" />
                    <circle cx="19" cy="4" r="1.5" />
                    <circle cx="21" cy="9" r="1" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Subtitle Bio paragraph */}
            <p className="text-neutral-200 text-sm sm:text-base font-normal leading-relaxed max-w-xl [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
              I combine design thinking with clean code to build digital experiences that are{' '}
              <strong className="text-[#FFA800] font-semibold">intuitive</strong>,{' '}
              <strong className="text-[#FFA800] font-semibold">engaging</strong> and impactful.
            </p>

            {/* Amber accent line */}
            <div className="w-12 h-1 bg-[#FFA800] rounded-full shadow-[0_0_8px_rgba(255,168,0,0.8)] my-1" />

            {/* 5 Services List */}
            <div className="flex flex-col space-y-4 pt-1">
              {services.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    id={`service-${item.id}`}
                    className="flex items-start gap-4 p-3 rounded-2xl transition-all duration-200 hover:bg-[#0E0E0E] border border-transparent hover:border-neutral-800/80 group cursor-default"
                  >
                    {/* Icon in dark rounded box with amber accent */}
                    <div className="w-12 h-12 rounded-2xl bg-[#141414] border border-neutral-800 group-hover:border-amber-500/50 flex items-center justify-center text-[#FFA800] flex-shrink-0 transition-colors shadow-inner">
                      <IconComp className="w-5 h-5" />
                    </div>

                    {/* Text Details */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight group-hover:text-[#FFA800] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mt-0.5 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Tech Stack + Core Strengths + 7+ Yrs Badge */}
          {/* ========================================================= */}
          <div className="flex flex-col space-y-9">
            
            {/* 1. Tech Stack Subsection */}
            <div className="space-y-4">
              
              {/* Header Indicator */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center -space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
                </div>
                <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-300">
                  Tech Stack
                </span>
              </div>

              {/* 2-Column Pill Buttons Grid */}
              <div className="grid grid-cols-2 gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    id={`tech-badge-${tech.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                    className="bg-[#121212] hover:bg-[#1A1A1A] border border-neutral-800/90 hover:border-neutral-700 rounded-2xl px-4 py-3 flex items-center gap-3 transition-all duration-200 group shadow-md"
                  >
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {tech.icon}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white truncate">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* 2. Core Strengths Subsection */}
            <div className="space-y-4 pt-1">
              
              {/* Header Indicator */}
              <div className="flex items-center gap-2.5">
                <div className="flex items-center -space-x-1.5">
                  <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
                </div>
                <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-300">
                  Core Strengths
                </span>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                {coreStrengths.map((item) => (
                  <div key={item.name} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="font-semibold text-neutral-300">{item.name}</span>
                      <span className="font-extrabold text-[#FFA800]">{item.percentage}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800/90 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#FFA800] rounded-full shadow-[0_0_8px_rgba(255,168,0,0.7)] transition-all duration-500"
                        style={{ width: `${item.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* 3. 7+ Years of Experience Highlight Card */}
            <div
              id="experience-highlight-card"
              className="bg-[#0C0C0C] border border-neutral-800/90 rounded-2xl p-5 sm:p-6 flex items-center gap-5 shadow-xl hover:border-amber-500/30 transition-all duration-200"
            >
              {/* Star Badge */}
              <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#FFA800] flex-shrink-0 shadow-inner">
                <Star className="w-7 h-7 fill-current" />
              </div>

              {/* Text info */}
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight">
                  <span className="text-[#FFA800]">7+ Years</span> of Experience
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                  Delivering creative and impactful digital solutions.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* FAVORITE TOOLS SUBSECTION (Part of Expertise)             */}
        {/* ========================================================= */}
        <div className="w-full pt-4">
          <ToolsSection embedded />
        </div>

      </div>
    </section>
  );
};
