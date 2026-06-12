import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Clapperboard } from 'lucide-react';

const navLinks = [
  { name: 'Work', href: '#work' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      if (window.scrollY < 120) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);

    const sections = ['work', 'about', 'services', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -45% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl transition-all duration-300"
      >
        <div className={`w-full rounded-2xl border transition-all duration-300 flex items-center justify-between ${
          isScrolled 
            ? 'py-3 px-6 md:px-8 bg-bg-darkest/55 border-white/10 shadow-2xl backdrop-blur-2xl' 
            : 'py-4 px-6 md:px-8 bg-bg-darkest/20 border-white/[0.04] shadow-lg backdrop-blur-xl'
        }`}>
          {/* Left: Brand/Logo */}
          <a href="#" className="flex items-center gap-2 group flex-1 justify-start">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
              <Clapperboard size={14} className="text-bg-darkest fill-current" />
            </div>
            <span className="font-display font-bold text-lg tracking-wider text-white uppercase group-hover:text-accent transition-colors duration-300">
              Edit By Phanendra
            </span>
          </a>

          {/* Center: Desktop Navigation Links */}
          <div className="hidden md:flex items-center justify-center gap-2 bg-white/[0.02] border border-white/5 p-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative font-body text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive ? 'text-accent' : 'text-text-secondary hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavHighlight"
                      className="absolute inset-0 bg-white/[0.05] border border-white/10 rounded-full -z-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right: CTA Button & Mobile Toggle */}
          <div className="flex items-center justify-end gap-4 flex-1">
            <a
              href="#contact"
              className="hidden md:inline-block px-5 py-2.5 rounded-full bg-accent text-bg-darkest hover:bg-white text-xs font-extrabold uppercase tracking-widest transition-all duration-300 shadow-md shadow-accent/15"
            >
              Let's Create
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-text-secondary hover:text-white transition-colors p-1 z-50 relative cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-center">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.href;
                return (
                  <motion.a
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: idx * 0.08, ease: 'easeOut' }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-3xl font-bold transition-colors duration-300 ${
                      isActive ? 'text-accent text-glow' : 'text-text-secondary hover:text-white'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ delay: navLinks.length * 0.08, ease: 'easeOut' }}
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-3 rounded-full bg-accent text-bg-darkest font-semibold uppercase text-sm tracking-widest hover:bg-white transition-all duration-300 shadow-lg shadow-accent/20"
              >
                Let's Create
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
