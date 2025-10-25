import { Instagram, Mail, ArrowUp, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/petragfx',
      label: 'Instagram',
      handle: '@petragfx'
    },
    {
      icon: Mail,
      href: 'mailto:contact@petranesic.com',
      label: 'Email',
      handle: 'contact@petranesic.com'
    },
  ];

  return (
    <footer className="bg-true-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-accent-pink/5 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          {/* Left Side - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Logo */}
            <div>
              <h3 className="text-4xl md:text-5xl font-display text-brand-purple mb-4 tracking-normal">
                PETRA NEŠIĆ
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-light-purple rounded-full mb-6" />
              <p className="text-pure-white/80 text-base md:text-lg leading-relaxed max-w-md">
                Sports graphic designer specializing in creating explosive visuals that bring athletic energy to life.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Links & Social */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-xl font-display text-pure-white mb-6 flex items-center gap-2">
                <Sparkles size={18} className="text-brand-purple" />
                Navigate
              </h4>
              <nav className="flex flex-col gap-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    className="text-pure-white/70 hover:text-brand-purple transition-colors duration-200 text-base w-fit relative group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-brand-purple group-hover:w-6 transition-all duration-300" />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Social Connect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-xl font-display text-pure-white mb-6">Connect</h4>
              <div className="space-y-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.href.startsWith('http') ? '_blank' : undefined}
                      rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-3 rounded-xl bg-brand-purple/5 border border-brand-purple/20 hover:border-brand-purple hover:bg-brand-purple/10 transition-all duration-200 relative overflow-hidden"
                    >
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </div>

                      <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple transition-all duration-200 relative z-10">
                        <Icon size={18} className="text-brand-purple group-hover:text-pure-white transition-colors duration-200" />
                      </div>

                      <div className="flex-1 min-w-0 relative z-10">
                        <div className="text-pure-white/90 text-sm font-medium group-hover:text-pure-white transition-colors duration-200">
                          {social.label}
                        </div>
                        <div className="text-pure-white/50 text-xs group-hover:text-brand-purple transition-colors duration-200 truncate">
                          {social.handle}
                        </div>
                      </div>

                      {social.href.startsWith('http') && (
                        <ExternalLink size={14} className="text-pure-white/30 group-hover:text-brand-purple transition-colors duration-200 relative z-10" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-brand-purple/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-pure-white/40 text-sm text-center md:text-left">
              © 2025 Petra Nešić. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <span className="text-pure-white/40">Crafted with passion</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
                <span className="text-pure-white/40 text-xs">Available for projects</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-brand-purple flex items-center justify-center shadow-lg shadow-brand-purple/50 hover:shadow-xl hover:shadow-brand-purple/70 transition-all border-2 border-brand-purple/30 backdrop-blur-sm z-50"
            aria-label="Back to top"
          >
            <ArrowUp size={24} className="text-pure-white" strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
