import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioProjects, categories } from '../../data/portfolio';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = (() => {
    if (activeCategory === 'all') return portfolioProjects;
    if (activeCategory === 'featured') return portfolioProjects.filter(p => p.featured);
    if (activeCategory === 'recent') return portfolioProjects.slice(0, 4); // First 4 as recent
    return portfolioProjects;
  })();

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
              <h2 className="text-4xl md:text-6xl font-display mb-3">
                SELECTED <span className="text-brand-purple">WORK</span>
              </h2>
              <p className="text-lg text-pure-white/60 max-w-xl mx-auto lg:mx-0">
                A curated collection of high-impact sports graphics
              </p>
            </div>

            {/* Minimal Filter Pills */}
            <div className="flex gap-2 bg-true-black/50 p-2 rounded-2xl backdrop-blur-sm border border-brand-purple/20 mx-auto lg:mx-0">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2.5 rounded-xl font-display text-sm transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-brand-purple text-pure-white shadow-lg shadow-brand-purple/30'
                      : 'text-pure-white/60 hover:text-pure-white hover:bg-pure-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category.label}
                </motion.button>
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-lg bg-true-black cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-true-black via-true-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 bg-brand-purple text-pure-white text-xs font-display rounded-md mb-3 uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-display text-pure-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-pure-white/80 mb-2">
                        {project.client}
                      </p>
                      <p className="text-sm text-pure-white/60 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="mt-4 flex items-center text-light-purple">
                        <span className="text-sm font-display">VIEW PROJECT</span>
                        <svg
                          className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-light-purple text-true-black px-3 py-1 rounded-md text-xs font-display">
                      FEATURED
                    </div>
                  )}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 shadow-purple-glow-lg rounded-lg" />
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
    </section>
  );
};

export default Portfolio;
