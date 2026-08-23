import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { INITIAL_TOOLS, ToolItem } from '../data/toolsData';

interface ToolsSectionProps {
  embedded?: boolean;
}

export const ToolsSection: React.FC<ToolsSectionProps> = ({ embedded = false }) => {
  const [tools] = useState<ToolItem[]>(INITIAL_TOOLS);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const pauseTimeoutRef = useRef<number | null>(null);

  // Smooth auto-scroll loop (delta-time based, frame-rate independent), pauses on hover or manual nav
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const speed = 120; // pixels per second
    let lastTime = performance.now();

    const step = (time: number) => {
      const dt = Math.min(50, time - lastTime);
      lastTime = time;
      if (!isHovered && !isPausedRef.current && container) {
        container.scrollLeft += (speed * dt) / 1000;
        // Seamless infinite wrap when reaching halfway through duplicated list
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (pauseTimeoutRef.current) {
        window.clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, [isHovered]);

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    // Pause autoplay so the smooth jump is not fought by the auto-scroll loop
    isPausedRef.current = true;
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => {
      isPausedRef.current = false;
    }, 2000);
    const cardWidth = 250;
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Duplicate tools array for infinite marquee flow
  const duplicatedTools = [...tools, ...tools];

  const content = (
    <div className="bg-black/40 backdrop-blur-md border border-neutral-800/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative w-full">
      {/* Header Center */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-12 space-y-3">
        {/* Pill Indicator: Dual Dot + "My Favorite Tools" */}
        <div className="flex items-center gap-2.5">
          <div className="flex items-center -space-x-1.5">
            <span className="w-3.5 h-3.5 rounded-full bg-white inline-block shadow-sm" />
            <span className="w-3.5 h-3.5 rounded-full bg-[#FFA800] inline-block shadow-sm" />
          </div>
          <span className="text-sm sm:text-base font-medium tracking-wide text-neutral-100">
            My Favorite Tools
          </span>
        </div>

        {/* Headline */}
        <div className="relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight [text-shadow:0_2px_14px_rgba(0,0,0,0.9)]">
            <span className="text-[#FFA800]">Tools </span>
            <span className="text-white">Behind My Creations</span>
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
      </div>

      {/* Slider Viewport with Overlay Prev/Next Buttons */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Overlay Prev Button (left edge of the thumb) */}
        <button
          id="tool-slider-prev-btn"
          onClick={() => handleScroll('left')}
          aria-label="Previous tools"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-[#FFA800] text-white hover:text-black border border-neutral-700/80 hover:border-amber-400 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer backdrop-blur-sm"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Overlay Next Button (right edge of the thumb) */}
        <button
          id="tool-slider-next-btn"
          onClick={() => handleScroll('right')}
          aria-label="Next tools"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-[#FFA800] text-white hover:text-black border border-neutral-700/80 hover:border-amber-400 flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-lg cursor-pointer backdrop-blur-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Left Vignette Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-r from-black/40 to-transparent z-10 pointer-events-none" />

        {/* Right Vignette Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-12 bg-gradient-to-l from-black/40 to-transparent z-10 pointer-events-none" />

        {/* Scrollable Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto py-2 px-2 scrollbar-none select-none scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {duplicatedTools.map((tool, idx) => (
            <div
              key={`${tool.id}-${idx}`}
              id={`tool-card-${tool.id}-${idx}`}
              className="flex-shrink-0 w-[210px] sm:w-[230px] md:w-[245px] relative bg-[#141414] border border-neutral-800/90 rounded-2xl p-5 hover:border-amber-500/50 hover:bg-[#181818] transition-all duration-300 group flex flex-col justify-between shadow-lg cursor-grab active:cursor-grabbing hover:-translate-y-1"
            >
              {/* Top Row: Category + Percentage Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-medium text-neutral-400 truncate max-w-[110px]">
                  {tool.category || 'Tool'}
                </span>
                <span
                  id={`tool-badge-${tool.id}-${idx}`}
                  className="px-2.5 py-0.5 rounded-full bg-[#1C1C1C] border border-neutral-700/60 text-neutral-300 text-xs font-semibold tracking-tight shadow-sm"
                >
                  {tool.percentage}
                </span>
              </div>

              {/* Card Center: Icon + Tool Name */}
              <div className="flex items-center gap-3.5 my-2">
                <div className="w-11 h-11 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-500/30 transition-all duration-300 flex-shrink-0 shadow-inner">
                  {tool.iconSvg}
                </div>
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white truncate">
                    {tool.name}
                  </h3>
                  <p className="text-xs text-neutral-400 truncate mt-0.5">
                    {tool.description}
                  </p>
                </div>
              </div>

              {/* Bottom Amber Progress Bar */}
              <div className="mt-5 pt-1">
                <div className="w-full h-1.5 bg-neutral-800/90 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#FFA800] rounded-full transition-all duration-500 group-hover:bg-[#ffb426] shadow-[0_0_8px_rgba(255,168,0,0.6)]"
                    style={{ width: `${tool.percentNum}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (embedded) {
    return <div id="tools" className="w-full">{content}</div>;
  }

  return (
    <section
      id="tools"
      className="w-full bg-black text-white py-16 sm:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {content}
      </div>
    </section>
  );
};
