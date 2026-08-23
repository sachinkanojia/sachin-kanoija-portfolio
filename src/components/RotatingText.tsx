import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface RotatingTextProps {
  className?: string;
}

const phrases = [
  'UI/UX Designer',
  'Front-End Developer',
  'React Specialist',
  'TypeScript Expert',
  'Design Systems',
  'Product Designer',
];

export const RotatingText: React.FC<RotatingTextProps> = ({ className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const cycle = async () => {
      setIsExiting(true);
      await new Promise(r => setTimeout(r, 500));
      
      setCurrentIndex((prev) => (prev + 1) % phrases.length);
      setIsExiting(false);
      setIsVisible(true);
      
      await new Promise(r => setTimeout(r, 4000));
      setIsVisible(false);
    };

    const timer = setTimeout(cycle, 100);
    return () => clearTimeout(timer);
  }, [currentIndex, isVisible, isExiting]);

  return (
    <motion.span
      className={className}
      key={currentIndex}
      initial={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
      animate={{ opacity: isVisible && !isExiting ? 1 : 0, y: isExiting ? 30 : 0, filter: isExiting ? 'blur(8px)' : 'blur(0px)' }}
      exit={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      transition={{
        duration: isExiting ? 0.5 : 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      style={{ 
        whiteSpace: 'nowrap',
        color: '#E5E5E5',
        textShadow: '0 1px 8px rgba(0,0,0,0.8)',
      }}
    >
      {phrases[currentIndex]}
    </motion.span>
  );
};