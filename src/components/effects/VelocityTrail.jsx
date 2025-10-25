import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const VelocityTrail = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 100);
      cursorY.set(e.clientY - 100);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed w-[250px] h-[250px] rounded-full pointer-events-none z-50 hidden md:block"
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        background: 'radial-gradient(circle, rgba(120, 82, 169, 0.4) 0%, rgba(255, 51, 102, 0.2) 50%, transparent 70%)',
        filter: 'blur(60px)',
        mixBlendMode: 'screen',
        opacity: 0.5,
      }}
    />
  );
};

export default VelocityTrail;
