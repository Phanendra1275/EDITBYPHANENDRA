import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 px-6 md:px-12 bg-bg-darkest border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-xs font-mono text-text-muted uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Edit By Phanendra. All rights reserved.
          </p>
          <p className="text-[10px] text-text-muted/60 mt-1 uppercase tracking-widest font-sans">
            Creative Post-Production & Video Editing
          </p>
        </div>

        {/* Center: Quote Signature */}
        <div className="hidden lg:block">
          <span className="text-[10px] font-mono text-text-muted/40 uppercase tracking-[0.25em]">
            // SPLICED WITH INTENTION
          </span>
        </div>

        {/* Right: Back to Top */}
        <button
          onClick={scrollToTop}
          className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-secondary hover:text-accent transition-colors duration-300"
          aria-label="Scroll to top"
        >
          Back To Top
          <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent/30 group-hover:bg-white/[0.02] transition-all duration-300">
            <ArrowUp size={10} className="group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </button>

      </div>
    </footer>
  );
}
