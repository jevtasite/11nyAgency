import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { portfolioProjects, categories } from '../../data/portfolio';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = (() => {
    if (activeCategory === 'all') return portfolioProjects;
    if (activeCategory === 'featured') return portfolioProjects.filter(p => p.featured);
    if (activeCategory === 'recent') return portfolioProjects.slice(0, 4); // First 4 as recent
    return portfolioProjects;
  })();

  const openLightbox = (project, index) => {
    setLightboxImage(project);
    setCurrentImageIndex(index);
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % filteredProjects.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredProjects[nextIndex]);
  };

  const goToPrevious = () => {
    const prevIndex = (currentImageIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredProjects[prevIndex]);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxImage) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'Escape') setLightboxImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, currentImageIndex, filteredProjects]);

  return (
    <section id="portfolio" className="py-20 px-6 bg-deep-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Integrated Filters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-8">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-display mb-3">
                SELECTED <span className="text-brand-purple">WORK</span>
              </h2>
              <p className="text-sm md:text-base lg:text-lg text-pure-white/60 max-w-xl mx-auto lg:mx-0">
                A curated collection of high-impact sports graphics
              </p>
            </div>

            {/* Minimal Filter Pills */}
            <div className="flex gap-2 bg-true-black/50 p-2 rounded-2xl backdrop-blur-sm border border-brand-purple/20 mx-auto lg:mx-0">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`group relative px-6 py-2.5 rounded-xl font-display text-sm transition-all duration-200 overflow-hidden ${
                    activeCategory === category.id
                      ? 'bg-brand-purple text-pure-white shadow-lg shadow-brand-purple/30'
                      : 'text-pure-white/60 hover:text-pure-white hover:bg-brand-purple/20'
                  }`}
                >
                  {/* Shine effect on hover (only for inactive buttons) */}
                  {activeCategory !== category.id && (
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Divider Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => openLightbox(project, index)}
                className="group relative overflow-hidden rounded-lg bg-true-black cursor-pointer hover:-translate-y-2 transition-transform duration-200"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Overlay with Icon */}
                  <div className="absolute inset-0 bg-true-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-brand-purple flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                      <Maximize2 size={32} className="text-pure-white" />
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-light-purple text-true-black px-3 py-1 rounded-md text-xs font-display">
                      FEATURED
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-pure-white/50 font-display">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-true-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-purple hover:bg-light-purple flex items-center justify-center transition-colors duration-200 z-10"
              aria-label="Close lightbox"
            >
              <X size={28} className="text-pure-white" />
            </motion.button>

            {/* Previous Button - Desktop Only */}
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-purple hover:bg-light-purple items-center justify-center transition-colors duration-200 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} className="text-pure-white" />
            </motion.button>

            {/* Next Button - Desktop Only */}
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-brand-purple hover:bg-light-purple items-center justify-center transition-colors duration-200 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} className="text-pure-white" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              key={currentImageIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full mb-4 md:mb-0"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="w-full h-auto max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Mobile Navigation Bar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="md:hidden fixed bottom-0 left-0 right-0 bg-true-black/90 backdrop-blur-lg border-t border-brand-purple/20 p-4 flex items-center justify-between"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="w-12 h-12 rounded-full bg-brand-purple hover:bg-light-purple flex items-center justify-center transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} className="text-pure-white" />
              </button>

              <div className="px-4 py-2 bg-brand-purple/80 backdrop-blur-sm rounded-full">
                <span className="text-pure-white font-display text-sm">
                  {currentImageIndex + 1} / {filteredProjects.length}
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="w-12 h-12 rounded-full bg-brand-purple hover:bg-light-purple flex items-center justify-center transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={24} className="text-pure-white" />
              </button>
            </motion.div>

            {/* Desktop Image Counter */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hidden md:block absolute top-8 left-1/2 -translate-x-1/2 px-4 py-2 bg-brand-purple/80 backdrop-blur-sm rounded-full"
            >
              <span className="text-pure-white font-display text-sm">
                {currentImageIndex + 1} / {filteredProjects.length}
              </span>
            </motion.div>

            {/* Desktop Hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="hidden md:block absolute bottom-16 left-1/2 -translate-x-1/2 text-pure-white/40 text-sm text-center whitespace-nowrap"
            >
              Use arrow keys or buttons to navigate • Click anywhere to close
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
