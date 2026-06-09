import { motion } from 'framer-motion';
import { Award, Clock } from 'lucide-react';

const stats = [
  { icon: <Clock className="text-accent" size={20} />, value: '1 Year', label: 'Experience' },
  { icon: <Award className="text-accent" size={20} />, value: '30', label: 'Projects Completed' },
];

const tools = [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'CapCut PC',
  'Figma',
  'Topaz AI',
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12 bg-bg-darker overflow-hidden border-t border-white/[0.02]">
      
      {/* Background ambient glow */}
      <div className="glow-element w-[350px] h-[350px] bg-accent/5 bottom-[10%] right-[5%] blur-[120px]" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Creative Vision & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-accent text-xs font-bold uppercase tracking-widest block mb-4"
              >
                Philosophy
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight"
              >
                Pacing is everything. <br />
                Sound is half the picture. <br />
                Storytelling is <span className="text-accent">the soul.</span>
              </motion.h2>
            </div>

            {/* Stat Counters Grid */}
            <div className="grid grid-cols-2 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-5 rounded-custom flex flex-col justify-between hover:border-accent/20 hover:scale-[1.03] hover:shadow-[0_15px_30px_rgba(255,229,0,0.05)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-white/[0.02] flex items-center justify-center border border-white/5 mb-4">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] md:text-xs font-semibold text-text-secondary uppercase tracking-wider mt-1">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side: Professional Narrative & Software Suite */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-text-secondary font-body font-light text-base md:text-lg leading-relaxed"
            >
              <p>
                I am a visual video editor specializing in high-retention pacing, surgical sound design, and seamless color grading. 
                I collaborate directly with creators and brands to elevate raw footage into scroll-stopping cinematic stories.
              </p>
            </motion.div>

            {/* Editing Software Suite */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 pt-10 border-t border-white/[0.04]"
            >
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                Post-Production Pipeline Tools
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full text-xs font-semibold bg-white/[0.02] border border-white/5 hover:border-accent/20 hover:bg-accent/5 hover:scale-105 transition-all duration-300 text-text-secondary hover:text-accent cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
