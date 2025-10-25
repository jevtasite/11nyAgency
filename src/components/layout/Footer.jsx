import { Instagram, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-deep-charcoal border-t border-brand-purple/30 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
            <h3 className="text-2xl font-display text-brand-purple mb-2">
              PETRA NEŠIĆ
            </h3>
            <p className="text-pure-white/70 text-sm">
              Creating explosive sports graphics that bring athletic energy to life
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display text-pure-white mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <a href="#home" className="text-pure-white/70 hover:text-light-purple transition-colors">
                Home
              </a>
              <a href="#portfolio" className="text-pure-white/70 hover:text-light-purple transition-colors">
                Portfolio
              </a>
              <a href="#about" className="text-pure-white/70 hover:text-light-purple transition-colors">
                About
              </a>
              <a href="#contact" className="text-pure-white/70 hover:text-light-purple transition-colors">
                Contact
              </a>
            </nav>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-lg font-display text-pure-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com/petragfx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center hover:bg-brand-purple transition-all hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contact@petranesic.com"
                className="w-10 h-10 rounded-full bg-brand-purple/20 flex items-center justify-center hover:bg-brand-purple transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-pure-white/50 text-sm">
              Usually responds within 24 hours
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-brand-purple/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-pure-white/50 text-sm">
            © 2025 Petra Nešić. All rights reserved.
          </p>
          <p className="text-pure-white/50 text-sm">
            Designed with energy and passion
          </p>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-purple-gradient flex items-center justify-center shadow-purple-glow hover:shadow-purple-glow-lg transition-all"
        aria-label="Back to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </footer>
  );
};

export default Footer;
