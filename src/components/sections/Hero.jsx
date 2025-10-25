import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

// Behance icon component (lucide-react doesn't have Behance, so we'll use a custom SVG)
const BehanceIcon = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z"/>
  </svg>
);

const Hero = () => {
  // Portfolio showcase images - just 3 for performance
  const portfolioShowcase = [
    '/images/hero/showcase1.jpg',
    '/images/hero/showcase2.jpg',
    '/images/hero/showcase3.jpg',
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayEnabled, setIsAutoplayEnabled] = useState(true);

  // Auto-rotate only if autoplay is enabled
  useEffect(() => {
    if (!isAutoplayEnabled) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % portfolioShowcase.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoplayEnabled]);

  // Disable autoplay on user interaction
  const handleUserInteraction = (index) => {
    setIsAutoplayEnabled(false);
    setActiveIndex(index);
  };

  return (
    <section id="home" className="relative min-h-screen bg-true-black overflow-hidden">
      {/* Unique Animated Background - Diagonal Stripes */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[2px] w-full bg-brand-purple origin-left"
              style={{
                top: `${i * 7}%`,
                transform: 'rotate(-45deg) translateX(-50%)',
              }}
              animate={{
                x: ['0%', '100%'],
              }}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </div>

        {/* Organic Blob Gradients */}
        <motion.div
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 order-1 text-center lg:text-left"
            >
              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display mb-8 leading-[0.85] tracking-normal">
                <motion.span
                  className="block text-pure-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  VISUALS
                </motion.span>
                <motion.span
                  className="block text-pure-white"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                >
                  THAT
                </motion.span>
                <motion.span
                  className="block text-brand-purple relative inline-block"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  DOMINATE
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-brand-purple"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </motion.span>
              </h1>

              <motion.p
                className="text-base md:text-xl lg:text-2xl text-pure-white/70 mb-10 max-w-2xl font-body leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Creating bold, high-impact graphics for sports teams and athletes who refuse to blend in
              </motion.p>


              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 px-8 md:px-10 py-4 md:py-5 bg-brand-purple text-pure-white font-display text-sm md:text-base rounded-lg hover:shadow-lg hover:shadow-brand-purple/50 hover:bg-light-purple transition-all duration-200 relative overflow-hidden"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                  <span className="relative z-10">EXPLORE WORK</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                </a>

                {/* Social Icons */}
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/petragfx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-pure-white/10 border-2 border-pure-white/20 text-pure-white rounded-lg hover:bg-brand-purple/30 hover:border-brand-purple transition-all duration-200 relative overflow-hidden"
                    aria-label="Follow on Instagram"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <Instagram size={22} className="relative z-10" />
                  </a>
                  <a
                    href="https://www.behance.net/petragfx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-pure-white/10 border-2 border-pure-white/20 text-pure-white rounded-lg hover:bg-brand-purple/30 hover:border-brand-purple transition-all duration-200 relative overflow-hidden"
                    aria-label="Follow on Behance"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                    <BehanceIcon size={22} className="relative z-10" />
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Simple Elegant Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-2"
            >
              <div className="relative w-full flex items-center justify-center">

                {/* Main Graphic Display - 4:5 Portrait Ratio Container */}
                <div className="relative w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]" style={{ aspectRatio: '4/5' }}>

                  {/* Glow Effect Behind */}
                  <motion.div
                    className="absolute inset-0 bg-brand-purple/40 blur-[80px] rounded-3xl"
                    animate={{
                      opacity: [0.4, 0.6, 0.4],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Image Card with AnimatePresence */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-brand-purple/40 shadow-2xl bg-true-black">
                    <AnimatePresence initial={false}>
                      <motion.div
                        key={activeIndex}
                        initial={{
                          opacity: 0,
                          x: 100,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        exit={{
                          opacity: 0,
                          x: -100,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className="absolute inset-0"
                      >
                        <img
                          src={portfolioShowcase[activeIndex]}
                          alt="Featured work"
                          className="w-full h-full object-cover"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-true-black/80 via-transparent to-transparent" />

                        {/* Elegant Counter */}
                        <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 flex items-baseline gap-2">
                          <span className="text-4xl md:text-5xl lg:text-6xl font-display text-pure-white">
                            {String(activeIndex + 1).padStart(2, '0')}
                          </span>
                          <span className="text-xl md:text-2xl font-display text-pure-white/40">
                            / {String(portfolioShowcase.length).padStart(2, '0')}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Simple Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-pure-white/10 z-10">
                      <motion.div
                        className="h-full bg-brand-purple"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((activeIndex + 1) / portfolioShowcase.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* Navigation Dots with Labels */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <div className="flex gap-3">
                      {portfolioShowcase.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => handleUserInteraction(index)}
                          className={`transition-all duration-300 rounded-full cursor-pointer ${
                            index === activeIndex
                              ? 'w-8 h-2 bg-brand-purple shadow-lg shadow-brand-purple/50'
                              : 'w-2 h-2 bg-pure-white/30 hover:bg-brand-purple/60'
                          }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`View graphic ${index + 1}`}
                        />
                      ))}
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-xs text-pure-white/40 font-medium tracking-wider uppercase"
                    >
                      Click to explore
                    </motion.p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
