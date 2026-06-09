import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, Globe, ArrowUpRight } from 'lucide-react';

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/phanendra.films', handle: '@phanendra.films' },
  { name: 'YouTube', href: 'https://youtube.com', handle: 'Phanendra / Editing' },
  { name: 'Twitter / X', href: 'https://x.com', handle: '@phanendra_edit' },
  { name: 'LinkedIn', href: 'https://linkedin.com', handle: 'Phanendra Post-Prod' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Reel Editing',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: 'Reel Editing', message: '' });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 md:px-12 bg-bg-darker overflow-hidden border-t border-white/[0.02]">
      
      {/* Background ambient light leakage */}
      <div className="glow-element w-[400px] h-[400px] bg-accent/5 bottom-[-10%] right-[-5%] blur-[140px]" />
      <div className="glow-element w-[300px] h-[300px] bg-white/[0.02] top-[-10%] left-[-5%] blur-[120px]" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact info & Socials */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-accent text-xs font-bold uppercase tracking-widest block mb-4"
              >
                Inquiries
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight"
              >
                Let's frame your <br />
                <span className="accent-gradient text-glow">next project.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-text-secondary font-body font-light text-base mt-6 max-w-sm"
              >
                Have raw footage that needs post-production? Or a creative concept you want to develop? Drop me a line.
              </motion.p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-4 border-t border-white/[0.04]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest block">Direct Mail</span>
                  <a href="mailto:hello@phanendrafilms.com" className="text-white hover:text-accent font-mono text-sm transition-colors duration-300">
                    hello@phanendrafilms.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent">
                  <Globe size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-text-muted font-bold uppercase tracking-widest block">Location</span>
                  <span className="text-white text-sm font-semibold">
                    Cheepurupalli, Vzm Dist, Andhra Pradesh, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="pt-6 border-t border-white/[0.04]">
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                Connect Elsewhere
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-col p-4 rounded-custom bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-accent/20 transition-all duration-300 group"
                  >
                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
                      {social.name}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="text-xs text-white/80 font-mono mt-1">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-custom relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="e.g. Liam Parker"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] focus:bg-white/[0.04] transition-all duration-300"
                        />
                      </div>
                      
                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="e.g. liam@example.com"
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] focus:bg-white/[0.04] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-bg-card border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] transition-all duration-300 cursor-pointer"
                      >
                        <option value="Short Film Editing" className="bg-bg-card text-white">Short Film Editing</option>
                        <option value="Podcast Editing" className="bg-bg-card text-white">Podcast Editing</option>
                        <option value="Reel Editing" className="bg-bg-card text-white">Reel Editing</option>
                        <option value="Poster Designing" className="bg-bg-card text-white">Poster Designing</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-text-secondary">
                        Project Outline
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project, timeline, and footage details..."
                        className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] focus:bg-white/[0.04] transition-all duration-300 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full relative flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-accent text-bg-darkest font-bold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-accent/10"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-bg-darkest border-t-transparent rounded-full animate-spin" />
                          Sending Brief...
                        </>
                      ) : (
                        <>
                          <Send size={14} />
                          Send Production Brief
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle size={56} className="text-accent animate-bounce mb-6" />
                    <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-2">
                      Brief Logged Successfully
                    </h3>
                    <p className="text-text-secondary font-body font-light text-sm max-w-sm mb-8 leading-relaxed">
                      Thank you! I have received your post-production brief. I will review the scope and reply within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-accent/30 text-xs font-semibold text-text-secondary hover:text-accent transition-colors duration-300"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
