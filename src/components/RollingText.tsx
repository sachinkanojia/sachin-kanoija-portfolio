import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface RollingTextProps {
  className?: string;
}

const phrases = [
  'UI/UX Designer',
  'AI-Assisted Designer',
  'Frontend Developer',
  'Product Designer',
  'UX Engineer',
  'Creative Developer',
  'Product Designer',
  'React Developer',
];

export const RollingText: React.FC<RollingTextProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const startDelay = 6000;

    const startInterval = () => {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
      }, 2500);
      return interval;
    };

    const timer = setTimeout(() => {
      startInterval();
    }, startDelay);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.span
      className={className}
      key={currentIndex}
      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
      transition={{
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{
        color: '#E5E5E5',
        textShadow: '0 1px 8px rgba(0,0,0,0.8)',
        whiteSpace: 'nowrap',
        fontSize: 'inherit',
        fontWeight: 500,
      }}
    >
      {phrases[currentIndex]}
    </motion.span>
  );
};