import { useState, useEffect } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ["home", "portfolio", "about", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Work", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-true-black/90 backdrop-blur-xl border-b border-brand-purple/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo with Accent */}
            <motion.a
              href="#home"
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-display text-pure-white tracking-normal leading-none">
                    PETRA NEŠIĆ
                  </span>
                  <div className="flex items-center gap-2 mt-1">
                    <motion.div
                      className="h-[2px] bg-brand-purple"
                      initial={{ width: 0 }}
                      animate={{ width: isScrolled ? "40px" : "50px" }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-[10px] text-brand-purple/70 tracking-[0.2em] uppercase font-medium">
                      Sports Graphics
                    </span>
                  </div>
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="relative px-5 py-2 text-pure-white/80 hover:text-pure-white transition-colors duration-300 font-display text-lg group"
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Active/Hover Indicator */}
                    <motion.div
                      className="absolute inset-0 bg-brand-purple/10 rounded-lg"
                      initial={false}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="absolute inset-0 bg-brand-purple/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    {/* Bottom Accent Line */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-purple"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                );
              })}

              {/* Hire CTA */}
              <a
                href="#contact"
                className="ml-4 px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-purple/80 text-pure-white rounded-lg hover:shadow-lg hover:shadow-brand-purple/50 hover:from-light-purple hover:to-brand-purple transition-all duration-200 flex items-center gap-2 font-display text-lg relative overflow-hidden group"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <span className="relative z-10">Hire Me</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-pure-white"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-true-black/95 backdrop-blur-xl z-40 md:hidden overflow-hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Animated Background Elements */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-64 h-64 bg-brand-purple/20 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <nav className="relative flex flex-col items-center justify-center h-full gap-8 px-6">
              {/* Mobile Nav Items */}
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(false);
                  }}
                  className="relative group"
                >
                  <span className="text-5xl font-display text-pure-white group-hover:text-brand-purple transition-colors duration-300">
                    {item.label}
                  </span>
                  <motion.div
                    className="absolute -bottom-2 left-0 h-1 bg-brand-purple"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Mobile Hire Me Button */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: navItems.length * 0.1 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }}
                className="px-10 py-4 bg-gradient-to-r from-brand-purple to-brand-purple/80 text-pure-white rounded-lg text-xl font-display shadow-lg shadow-brand-purple/50 relative overflow-hidden group"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pure-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
                <span className="relative z-10">Hire Me</span>
              </motion.a>

              {/* Close hint */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-12 text-pure-white/40 text-sm"
              >
                Tap anywhere to close
              </motion.p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
