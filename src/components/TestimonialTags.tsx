import React from 'react';

export const TestimonialTags: React.FC = () => {
  return (
    <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-lg">
      {/* Amber Double Quotes Icon */}
      <div className="w-full flex justify-start lg:justify-end mb-2">
        <svg
          className="w-10 h-8 text-[#FFA800] fill-current opacity-90"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      {/* Quote / Tagline Statement */}
      <h2 className="text-xl sm:text-2xl md:text-[28px] font-medium leading-[1.3] tracking-tight text-white mb-8">
        Design with purpose
        <br />
        <span className="font-semibold">Develop with precision!</span>
      </h2>

      {/* Pill Tags Matrix */}
      <div className="flex flex-col gap-3 w-full items-start lg:items-end">
        {/* Row 1: Prototype + Dashboard */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            id="tag-prototype"
            className="px-6 py-2.5 rounded-full bg-black border border-white text-white font-medium text-sm sm:text-base tracking-wide hover:border-[#FFA800] hover:text-[#FFA800] transition-colors cursor-default select-none shadow-sm"
          >
            UI/UX Design
          </span>
          <span
            id="tag-dashboard"
            className="px-6 py-2.5 rounded-full bg-[#FFA800] text-black font-bold text-sm sm:text-base tracking-wide hover:bg-[#ffb426] transition-colors cursor-default select-none shadow-md shadow-[#FFA800]/20"
          >
            Front-End Development
          </span>
        </div>

        {/* Row 2: Spark Icon + Mobile App Design */}
        <div className="flex flex-wrap items-center gap-3">          
          <span
            id="tag-website"
            className="px-6 py-2.5 rounded-full bg-black border border-white text-white font-medium text-sm sm:text-base tracking-wide hover:border-[#FFA800] hover:text-[#FFA800] transition-colors cursor-default select-none shadow-sm"
          >
            Prototype
          </span>
          <span
            id="tag-mobile-app-design"
            className="px-6 py-2.5 rounded-full bg-black border border-white text-white font-medium text-sm sm:text-base tracking-wide hover:border-[#FFA800] hover:text-[#FFA800] transition-colors cursor-default select-none shadow-sm"
          >
            Wireframes
          </span>
        </div>

        {/* Row 3: Website + Design System */}
        <div className="flex flex-wrap items-center gap-3">
          <span
            id="tag-website"
            className="px-6 py-2.5 rounded-full bg-black border border-white text-white font-medium text-sm sm:text-base tracking-wide hover:border-[#FFA800] hover:text-[#FFA800] transition-colors cursor-default select-none shadow-sm"
          >
            Web Design
          </span>
          <span
            id="tag-design-system"
            className="px-6 py-2.5 rounded-full bg-[#FFA800] text-black font-bold text-sm sm:text-base tracking-wide hover:bg-[#ffb426] transition-colors cursor-default select-none shadow-md shadow-[#FFA800]/20"
          >
            Responsive Interfaces
          </span>
        </div>
      </div>
    </div>
  );
};
