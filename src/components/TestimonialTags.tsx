import React from 'react';

export const TestimonialTags: React.FC = () => {
  return (
    <div className="flex flex-col items-start lg:items-end text-left lg:text-right max-w-lg">
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
