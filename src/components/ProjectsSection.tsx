import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  LayoutGrid,
  PenTool,
  Monitor,
  Code2,
  User,
  MonitorSmartphone,
  Rocket,
} from 'lucide-react';
import educationalImg from '../assets/images/educational.jpg';
import neuroflowImg from '../assets/images/neuroflow.jpg';
import ignouImg from '../assets/images/ignou.png';
import egyankoshImg from '../assets/images/egyankosh.png';
import spliveImg from '../assets/images/splive.png';
import iopIgnouImg from '../assets/images/iop_ignou.png';

interface ProjectsSectionProps {
  onViewAllProjects?: () => void;
  onSelectProject?: (title: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onViewAllProjects,
  onSelectProject,
}) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', count: '08+ Projects', icon: LayoutGrid },
    { id: 'uiux', name: 'UI/UX Design', count: '04+ Projects', icon: PenTool },
    { id: 'web', name: 'Web Design', count: '03+ Projects', icon: Monitor },
    { id: 'frontend', name: 'Front-End Development', count: '06+ Projects', icon: Code2 },
  ];

  const allProjectsList = [
    {
      id: 'ignou-platform',
      title: 'IGNOU Digital Learning Platform',
      category: ['all', 'frontend', 'uiux', 'dashboard'],
      tags: ['EdTech', 'Learning Portal', 'React'],
      description:
        'A comprehensive digital learning platform for IGNOU students with course management, virtual classrooms, assignment tracking, and automated grading systems.',
      image: ignouImg,
      imageAlt: 'IGNOU Digital Learning Platform dashboard mockup',
    },
    {
      id: 'education-website',
      title: 'Education Website',
      category: ['all', 'web'],
      tags: ['UI/UX', 'Web Design', 'Education'],
      description:
        'A comprehensive education platform with course management, student dashboards, interactive learning modules, and progress tracking.',
      image: educationalImg,
      imageAlt: 'Education Website platform mockup screens',
    },
    {
      id: 'neuroflow',
      title: 'Neuroflow AI-Powered Analytics Platform',
      category: ['all', 'web', 'dashboard'],
      tags: ['AI/ML', 'Dashboard', 'Data Viz'],
      description:
        'An intelligent analytics platform leveraging machine learning for predictive insights, real-time data processing, and automated anomaly detection across enterprise systems.',
      image: neuroflowImg,
      imageAlt: 'Neuroflow AI Analytics Platform dashboard mockup',
    },
    {
      id: 'egyankosh',
      title: 'eGyanKosh Digital Knowledge Repository',
      category: ['all', 'dashboard', 'frontend', 'uiux'],
      tags: ['EdTech', 'Digital Library', 'Knowledge Base'],
      description:
        'A vast open-access digital repository for IGNOU with multimedia learning resources, searchable archives, and seamless content delivery for distance education.',
      image: egyankoshImg,
      imageAlt: 'eGyanKosh Digital Knowledge Repository mockup',
    },
    {
      id: 'splive',
      title: 'SPLive Real-Time Streaming Platform',
      category: ['all', 'web', 'frontend', 'mobile'],
      tags: ['Live Streaming', 'Real-time', 'WebRTC'],
      description:
        'A high-performance live streaming platform with ultra-low latency, adaptive bitrate streaming, and interactive chat for seamless broadcast experiences.',
      image: spliveImg,
      imageAlt: 'SPLive Real-Time Streaming Platform mockup',
    },
    {
      id: 'iop-ignou',
      title: 'IOP IGNOU International Student Portal',
      category: ['all', 'frontend', 'uiux', 'mobile'],
      tags: ['EdTech', 'International', 'Student Portal'],
      description:
        'A dedicated portal for IGNOU overseas students offering multi-currency fee payment, visa guidance, localized course access, and 24/7 cross-timezone support.',
      image: iopIgnouImg,
      imageAlt: 'IOP IGNOU International Student Portal mockup',
    },
  ];

  const filteredProjects = allProjectsList.filter((p) =>
    p.category.includes(activeCategory)
  );

  const valuePillars = [
    {
      icon: User,
      title: 'User Focused',
      description: 'Designing experiences that are intuitive, engaging and useful.',
    },
    {
      icon: Code2,
      title: 'Modern & Scalable',
      description: 'Building clean, scalable and performance optimized solutions.',
    },
    {
      icon: MonitorSmartphone,
      title: 'Responsive',
      description: 'Creating seamless experiences across all devices.',
    },
    {
      icon: Rocket,
      title: 'Innovation Driven',
      description: 'Using modern tools and creative thinking to solve real problems.',
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-black/40 text-white pt-8 sm:pt-12 pb-16 sm:pb-24 relative overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* ========================================================= */}
        {/* TOP HEADER: Pill + Title + View All Button                */}
        {/* ========================================================= */}
<div className="flex-col mb-12 sm:mb-16">
           
           {/* Left Title Block */}
           <div className="space-y-4 w-full bg-black/40 backdrop-blur-md border border-neutral-800/80 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            
            {/* Pill Indicator: Dual Dot + "My Work" */}
            <div className="flex items-center gap-2.5">
              <div className="flex items-center -space-x-1.5">
                <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
                <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
              </div>
              <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-100">
                My Work
              </span>
            </div>

            {/* Headline */}
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight leading-[1.12] [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
                <span className="text-white">Projects That </span>
                <span className="text-[#FFA800] relative inline-block">
                  Create Impact
                  {/* 3-Petal Sparkle Accent */}
                  <span className="inline-block ml-1.5 -top-2 align-top text-[#FFA800]">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C12.5 5.5 15.5 8.5 19 9C15.5 9.5 12.5 12.5 12 16C11.5 12.5 8.5 9.5 5 9C8.5 8.5 11.5 5.5 12 2Z" />
                      <circle cx="19" cy="4" r="1.5" />
                      <circle cx="21" cy="9" r="1" />
                    </svg>
                  </span>
                </span>
              </h2>
            </div>

            {/* Subtitle Bio paragraph */}
            <p className="text-neutral-100 text-base sm:text-lg font-normal leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.9)]">
              A collection of selected projects where design meets technology to deliver meaningful digital experiences.
            </p>

          </div>

        </div>

        {/* ========================================================= */}
        {/* MAIN BODY: 2-Column Side-by-Side (Left Menu | Right Projects) */}
        {/* ========================================================= */}
        <div className="relative mb-16 sm:mb-20">
          
          {/* Grid Layout: Left Menu | 25% Gap | Right Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[25%] items-start relative z-10">
            
            {/* --------------------------------------------------------- */}
            {/* LEFT COLUMN: Categories Menu                             */}
            {/* --------------------------------------------------------- */}
            <div className="w-full flex flex-col space-y-2.5 lg:sticky lg:top-24">
              <div className="flex items-center gap-2 mb-4 px-1">
                <span className="w-2 h-2 rounded-full bg-[#FFA800] inline-block shadow-[0_0_6px_rgba(255,168,0,0.8)]" />
                <span className="text-xs sm:text-sm font-semibold text-neutral-400 uppercase tracking-wider">
                  Select Category
                </span>
              </div>

              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    id={`category-btn-${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`group relative w-full flex items-center gap-3.5 p-3 sm:p-3.5 rounded-2xl transition-all duration-300 text-left cursor-pointer overflow-hidden ${
                      isActive
                        ? 'bg-[#0E0E0E] border border-[#FFA800] shadow-[0_0_22px_rgba(255,168,0,0.25)] scale-[1.02]'
                        : 'bg-[#080808]/90 hover:bg-[#0E0E0E] border border-neutral-800/80 hover:border-[#FFA800] hover:shadow-[0_0_22px_rgba(255,168,0,0.25)] hover:scale-[1.02] active:scale-[0.99]'
                    }`}
                  >
                    {/* Top-Left Amber Accent Bar (Present on active and on hover) */}
                    <div
                      className={`absolute top-0 left-4 w-8 h-[2.5px] bg-[#FFA800] rounded-full shadow-[0_0_8px_#FFA800] transition-all duration-300 ${
                        isActive
                          ? 'opacity-100'
                          : 'opacity-0 group-hover:opacity-100'
                      }`}
                    />

                    {/* Icon Box */}
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-amber-500/15 border border-amber-500/60 text-[#FFA800] shadow-inner'
                          : 'bg-[#121212] border border-neutral-800 text-neutral-400 group-hover:text-[#FFA800] group-hover:border-amber-500/50 group-hover:bg-amber-500/10'
                      }`}
                    >
                      <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    {/* Category Details */}
                    <div className="flex-1 min-w-0">
                      <div
                        className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors duration-200 ${
                          isActive ? 'text-white' : 'text-neutral-200 group-hover:text-white'
                        }`}
                      >
                        {cat.name}
                      </div>
                      <div
                        className={`text-xs font-semibold mt-0.5 transition-colors duration-200 ${
                          isActive
                            ? 'text-[#FFA800]'
                            : 'text-neutral-500 group-hover:text-[#FFA800]'
                        }`}
                      >
                        {cat.count}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* --------------------------------------------------------- */}
            {/* RIGHT COLUMN: Filtered Projects Showcase on the Right     */}
            {/* --------------------------------------------------------- */}
            <div className="w-full flex flex-col space-y-4">
              
              {/* Header: Bullet + Featured Projects Title + Count */}
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFA800] inline-block shadow-[0_0_6px_rgba(255,168,0,0.8)]" />
                  <span className="text-sm sm:text-base font-semibold text-neutral-200 tracking-wide">
                    Featured Projects
                  </span>
                </div>
                <span className="text-xs font-semibold text-[#FFA800] bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                  Showing {filteredProjects.length} results
                </span>
              </div>

              {/* Stacked Project Cards with vertical scrolling */}
              <div className="flex flex-col space-y-4 max-h-[520px] lg:max-h-[560px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    id={`featured-project-${project.id}`}
                    onClick={() => onSelectProject?.(project.title)}
                    className="group relative bg-[#0C0C0C]/95 backdrop-blur-md border border-neutral-800/90 hover:border-amber-500/50 rounded-2xl p-4 sm:p-5 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(255,168,0,0.15)] cursor-pointer flex-shrink-0"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-center">
                      
                      {/* Left: Project Visual Thumbnail */}
                      <div 
                        className="sm:col-span-5 relative overflow-hidden rounded-xl bg-[#141414] border border-neutral-800 aspect-[4/3] sm:aspect-square flex items-center justify-center group-hover:border-amber-500/30 transition-all cursor-zoom-in"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.image, '_blank', 'noopener,noreferrer');
                        }}
                      >
<img
                           src={project.image}
                           alt={project.imageAlt}
                           referrerPolicy="no-referrer"
                           loading="lazy"
                           className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
                         />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Right: Project Information */}
                      <div className="sm:col-span-7 flex flex-col items-start space-y-2.5">
                        
                        {/* Tags */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-full bg-[#FFA800] text-black font-extrabold text-[11px] tracking-tight shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Title */}
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug group-hover:text-[#FFA800] transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-neutral-400 text-xs sm:text-[13px] leading-relaxed line-clamp-2">
                          {project.description}
                        </p>

                        {/* View Case Study Link */}
                        <div 
                          className="pt-1 flex items-center gap-1 text-[#FFA800] font-bold text-xs sm:text-sm group/link cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.image, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          <span className="group-hover/link:underline">View Project</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                        </div>

                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {filteredProjects.length === 0 && (
                <div className="p-8 text-center bg-[#0C0C0C] border border-neutral-800 rounded-2xl text-neutral-400 text-sm">
                  No projects found for this category.
                </div>
              )}

            </div>

          </div>

        </div>

        {/* ========================================================= */}
        {/* BOTTOM SECTION: 4 Value Pillars with Vertical Dividers    */}
        {/* ========================================================= */}
        <div
          id="value-pillars-container"
          className="w-full pt-10 border-t border-neutral-800/80"
        >
          <div className="w-full bg-black/40 backdrop-blur-md border border-neutral-800/80 rounded-3xl p-6 sm:p-8 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-neutral-800">
              {valuePillars.map((pillar, idx) => {
                const PillarIcon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    id={`value-pillar-${idx + 1}`}
                    className="flex items-start gap-4 px-0 lg:px-6 xl:px-8 group"
                  >
                    {/* Amber Circular Icon Container */}
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[#FFA800] flex-shrink-0 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300 shadow-inner">
                      <PillarIcon className="w-5 h-5" />
                    </div>

                    {/* Pillar Text */}
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white tracking-tight group-hover:text-[#FFA800] transition-colors">
                        {pillar.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
