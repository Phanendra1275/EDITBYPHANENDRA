import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Sparkles, Brain, Cpu, MessageSquare } from 'lucide-react';
import phanendraAvatar from '../assets/phanendra_avatar.png';
import shortfilmEditingImg from '../assets/shortfilm_editing.jpg';
import reelsEditingImg from '../assets/reels_editing.png';
import podcastEditingImg from '../assets/podcast_editing.png';
import posterDesigningImg from '../assets/poster_designing.png';
import heroBg from '../assets/hero_bg.png';

const mockCards = [
  {
    id: 1,
    title: "Psychological Pacing",
    tagline: "Mental Framing",
    image: shortfilmEditingImg,
    overlay: (
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
        {/* Glow Circuit Brain Silhouette */}
        <div className="absolute top-4 right-4 text-accent animate-pulse">
          <Brain size={28} className="drop-shadow-[0_0_10px_rgba(255,229,0,0.8)]" />
        </div>
        <div className="border-l-2 border-accent pl-3 text-left">
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block">Core Focus</span>
          <span className="text-xs text-white font-bold">Shortflim editing</span>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Retention Retention",
    tagline: "Interactive Overlays",
    image: reelsEditingImg,
    overlay: (
      <div className="absolute inset-0 bg-black/35 flex flex-col justify-between p-4">
        {/* Message Bubble Overlay */}
        <div className="space-y-2 mt-4 text-left">
          <motion.div 
            animate={{ x: [-10, 0] }}
            className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 text-[8px] font-semibold text-white w-fit max-w-[120px]"
          >
            "How is the pacing this clean? 🤯"
          </motion.div>
          <motion.div 
            animate={{ x: [10, 0] }}
            className="bg-accent/20 backdrop-blur-md border border-accent/20 rounded-full px-3 py-1 text-[8px] font-semibold text-accent w-fit max-w-[120px] ml-auto"
          >
            "Surgical SFX design!"
          </motion.div>
        </div>
        <div className="border-l-2 border-accent pl-3 text-left">
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block font-mono">Micro Hook</span>
          <span className="text-xs text-white font-bold">Reels Editing</span>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Surgical Post-Prod",
    tagline: "Timeline Mock",
    image: podcastEditingImg,
    overlay: (
      <div className="absolute inset-0 bg-black/45 flex flex-col justify-between p-4">
        {/* Mock OS Frame */}
        <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1 rounded w-full text-[7px] font-mono text-white/50 justify-between">
          <div className="flex gap-1 items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          </div>
          <span>timeline_v3.prproj</span>
          <span>100s of cuts</span>
        </div>
        <div className="border-l-2 border-accent pl-3 text-left">
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block">Workflow</span>
          <span className="text-xs text-white font-bold">Podcast Editing</span>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "AI Co-pilot Integration",
    tagline: "Neural Mesh",
    image: posterDesigningImg,
    overlay: (
      <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-4">
        <div className="absolute top-4 right-4 text-accent/80 animate-pulse">
          <Sparkles size={24} />
        </div>
        <div className="border-l-2 border-accent pl-3 text-left">
          <span className="text-[9px] font-bold text-accent uppercase tracking-widest block">Graphic Design</span>
          <span className="text-xs text-white font-bold">Poster Designing</span>
        </div>
      </div>
    )
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 md:px-12 pt-28 pb-16 overflow-hidden bg-bg-darkest">
      
      {/* Blurred Cinematic Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={heroBg} 
          alt="Cinematic Background" 
          className="w-full h-full object-cover filter blur-[4px] opacity-[0.20] scale-110" 
        />
        {/* Dark overlays to blend image into the page background */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg-darkest/10 via-bg-darkest/50 to-bg-darkest" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#030406_85%)] opacity-75" />
        <div className="absolute inset-0 bg-bg-darkest/35" />
      </div>

      {/* Background Lights */}
      <div className="glow-element w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent top-[5%] left-[10%] opacity-5" />
      <div className="glow-element w-[250px] h-[250px] md:w-[500px] md:h-[500px] bg-white top-[35%] right-[5%] opacity-[0.03]" />

      <div className="max-w-7xl mx-auto text-center z-10 flex flex-col items-center w-full">
        
        {/* Presenter Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-md mb-6 hover:border-accent/20 transition-all duration-300"
        >
          {/* Mock Avatar */}
          <div className="w-5 h-5 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center font-display text-[9px] font-bold text-accent overflow-hidden">
            <img src={phanendraAvatar} alt="Phanendra" className="w-full h-full object-cover" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary flex items-center gap-1.5">
            Edit By Phanendra <span className="text-accent/60 font-light lowercase">presents</span>
          </span>
        </motion.div>

        {/* Serif Italic tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif-italic text-2xl sm:text-4xl text-white/90 tracking-wide mb-1"
        >
          not just a
        </motion.div>

        {/* Big Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-azonix text-5xl sm:text-7xl md:text-9xl leading-[0.9] text-accent text-glow uppercase tracking-normal"
        >
          Video Editor
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl font-body font-light leading-relaxed"
        >
          the ultimate post-production creative partner, now powered with <span className="text-white font-normal">high-velocity pacing</span> and <span className="text-white font-normal">industry-grade sound design</span> workflows.
        </motion.p>

        {/* Row of Featured Video Mockup Cards - Smooth Infinite Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="w-full mt-12 overflow-hidden relative mask-gradient py-4"
        >
          <div className="flex gap-4 px-4 w-max animate-marquee">
            {[...mockCards, ...mockCards, ...mockCards].map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="relative w-[280px] sm:w-[320px] aspect-[4/3] rounded-custom overflow-hidden border border-white/10 bg-bg-card shadow-lg hover:border-accent/40 hover:shadow-[0_0_20px_rgba(255,229,0,0.15)] transition-all duration-500 ease-out group shrink-0"
              >
                {/* Card Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover filter brightness-[0.7] group-hover:scale-105 transition-transform duration-700"
                />
                {/* Custom Overlay content */}
                {card.overlay}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Lime Yellow Button CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full bg-accent text-bg-darkest font-extrabold uppercase text-xs tracking-[0.15em] hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl shadow-accent/25"
          >
            {/* Ambient Pulse Glow behind button */}
            <div className="absolute inset-0 rounded-full bg-accent/20 blur-md group-hover:bg-accent/45 transition-all duration-300 -z-10 animate-pulse" />
            <Play size={12} className="fill-current" />
            Join / View Work
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
