import { motion } from 'motion/react';

interface AnimatedNameProps {
  className?: string;
}

const SLICE_COUNT = 8;

export const AnimatedName: React.FC<AnimatedNameProps> = ({ className = '' }) => {
  const name = 'Sachin Kanojia';
  const chars = name.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const charVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: 0,
      },
    },
  };

  const sliceVariants = {
    hidden: {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0,
    },
    visible: (i: number) => ({
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const flickerVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0, 1, 0, 1],
      transition: {
        duration: 0.4,
        delay: 0.5 + i * 0.05,
        ease: 'easeInOut',
        times: [0, 0.15, 0.3, 0.5, 0.7, 1],
      },
    }),
  };

  return (
    <span className={className} style={{ display: 'inline-block' }}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'inline-flex',
          color: '#FFA800',
          fontWeight: 800,
          fontSize: '0.7em',
          lineHeight: 1.2,
          textShadow: '0 0 30px rgba(255,168,0,0.8), 0 0 60px rgba(255,168,0,0.5), 0 2px 10px rgba(0,0,0,0.5)',
          background: 'rgba(0, 0, 0, 0.6)',
          padding: '4px 14px 6px 14px',
          borderRadius: '10px',
          backdropFilter: 'blur(6px)',
          border: '1px solid rgba(255, 168, 0, 0.4)',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 168, 0, 0.15)',
          letterSpacing: '0.02em',
        }}
      >
        {chars.map((char, charIndex) => (
          <motion.span
            key={charIndex}
            variants={charVariants}
            style={{
              display: 'inline-block',
              whiteSpace: 'pre',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Base character */}
            <span style={{ display: 'inline-block', position: 'relative', zIndex: 1 }}>
              {char === ' ' ? '\u00A0' : char}
            </span>

            {/* Shutter slices */}
            <span style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', zIndex: 2 }}>
              {Array.from({ length: SLICE_COUNT }).map((_, sliceIndex) => (
                <motion.span
                  key={sliceIndex}
                  variants={sliceVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    width: `${100 / SLICE_COUNT}%`,
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.6)',
                    borderRight: sliceIndex < SLICE_COUNT - 1 ? '1px solid rgba(255, 168, 0, 0.2)' : 'none',
                  }}
                />
              ))}
            </span>

            {/* Flicker overlay */}
            <motion.span
              variants={flickerVariants}
              initial="hidden"
              animate="visible"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,168,0,0.4) 50%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 3,
              }}
            />
          </motion.span>
        ))}
      </motion.span>
    </span>
  );
};