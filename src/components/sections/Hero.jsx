import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

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
    <section className="relative min-h-screen bg-true-black overflow-hidden">
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
          className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-accent-pink/10 rounded-full blur-[100px]"
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
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-display mb-8 leading-[0.85] tracking-tighter">
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
                    className="absolute -bottom-2 left-0 h-1 bg-accent-pink"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </motion.span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-pure-white/70 mb-10 max-w-2xl font-body leading-relaxed mx-auto lg:mx-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Creating bold, high-impact graphics for sports teams and athletes who refuse to blend in
              </motion.p>


              {/* CTAs */}
              <motion.div
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 bg-brand-purple text-pure-white font-display text-lg rounded-lg hover:shadow-purple-glow-lg transition-all duration-300"
                >
                  EXPLORE WORK
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/petragfx"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-10 py-5 border-2 border-pure-white/20 text-pure-white font-display text-lg rounded-lg hover:bg-pure-white/5 hover:border-pure-white/40 transition-all duration-300"
                >
                  <Instagram size={22} />
                  FOLLOW
                </motion.a>
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

                  {/* Image Card */}
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-brand-purple/40 shadow-2xl bg-true-black"
                  >
                    <img
                      src={portfolioShowcase[activeIndex]}
                      alt="Featured work"
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-true-black/80 via-transparent to-transparent" />

                    {/* Elegant Counter */}
                    <div className="absolute bottom-6 left-6 flex items-baseline gap-2">
                      <span className="text-6xl font-display text-pure-white">
                        {String(activeIndex + 1).padStart(2, '0')}
                      </span>
                      <span className="text-2xl font-display text-pure-white/40">
                        / {String(portfolioShowcase.length).padStart(2, '0')}
                      </span>
                    </div>

                    {/* Simple Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-pure-white/10">
                      <motion.div
                        className="h-full bg-brand-purple"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((activeIndex + 1) / portfolioShowcase.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>

                  {/* Minimal Dot Navigation */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                    {portfolioShowcase.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleUserInteraction(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === activeIndex
                            ? 'w-8 h-2 bg-brand-purple'
                            : 'w-2 h-2 bg-pure-white/20 hover:bg-pure-white/40'
                        }`}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
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
