import React from 'react';
import { motion } from 'motion/react';
import { SocialIcons } from './SocialIcons';
import { TestimonialTags } from './TestimonialTags';
import { RollingText } from './RollingText';
import ShutterName from './ShutterName';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact: _onOpenContact }) => {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-100px)] flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 md:py-20"
    >
      {/* Top / Center Main Hero Typography */}
      <div className="flex flex-col items-center justify-center text-center my-auto pt-6 pb-12 sm:pb-20">
        <h1
          id="hero-main-title"
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[108px] font-extrabold tracking-tight leading-none text-center select-none [text-shadow:0_2px_16px_rgba(0,0,0,0.9),0_0_40px_rgba(0,0,0,0.6)]"
        >
          <ShutterName />
        </h1>

        <motion.div
          id="hero-subtitle"
          initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 3.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-5 sm:mt-7 inline-flex items-center gap-3 sm:gap-3.5 rounded-full bg-black/45 backdrop-blur-md border border-neutral-700/70 shadow-[0_8px_30px_rgba(0,0,0,0.5)] px-5 sm:px-8 py-2.5 sm:py-3.5"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFA800] shadow-[0_0_10px_#FFA800] animate-pulse" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium tracking-wide whitespace-nowrap" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <RollingText />
            <span className="text-[#FFA800]">•</span>
            <span className="text-[#FFA800] font-semibold">7+ Years</span> of Experience
          </p>
        </motion.div>
      </div>

      {/* Bottom Grid: Left (Socials + Reviews) & Right (Testimonial + Tags) */}
      <div
        id="hero-bottom-grid"
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end justify-between pt-6 sm:pt-10"
      >
        {/* Bottom Left Column */}
        <div className="flex flex-col items-start space-y-8 sm:space-y-12">
          {/* Follow Me On + Social Circles */}
          <div className="space-y-4">
            <h2 className="text-base sm:text-lg md:text-xl font-medium text-white tracking-normal">
              Follow Me On
            </h2>
            <SocialIcons />
          </div>

          {/* Stats / Highlights */}
          <div id="highlights-block" className="space-y-1">
            <div className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight">
              <span className="text-[#FFA800]">50+ Projects </span>
              <span className="text-white font-semibold">Delivered</span>
            </div>
            <p className="text-neutral-400 text-sm sm:text-base font-normal tracking-wide">
              Web Apps • Mobile Apps • Design Systems
            </p>
          </div>
        </div>

        {/* Bottom Right Column */}
        <div className="flex justify-start lg:justify-end">
          <TestimonialTags />
        </div>
      </div>
    </section>
  );
};
