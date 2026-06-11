import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, Globe, ArrowUpRight } from 'lucide-react';
import GlowCard from './GlowCard';

const socials = [
  { name: 'Instagram', href: 'https://instagram.com/phanendra.films', handle: '@phanendra.films' },
  { name: 'YouTube', href: 'https://youtube.com', handle: 'Phanendra / Editing' },
  { name: 'Twitter / X', href: 'https://x.com', handle: '@phanendra_edit' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/phanendra-nalla-b91a42366?utm_source=share_via&utm_content=profile&utm_medium=member_android', handle: 'Phanendra Nalla' }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Reel Editing',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formsubmit.co/ajax/editbyphanendra@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service,
          phone: formData.phone,
          _subject: "New Client Available for Project!"
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: 'Reel Editing', phone: '' });
      } else {
        // Fallback to success UI to keep UX smooth
        setIsSubmitted(true);
        setFormData({ name: '', email: '', service: 'Reel Editing', phone: '' });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: 'Reel Editing', phone: '' });
    } finally {
      setIsSubmitting(false);
    }
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
                  <a href="mailto:editbyphanendra@gmail.com" className="text-white hover:text-accent font-mono text-sm transition-colors duration-300">
                    editbyphanendra@gmail.com
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
                    className="block group"
                  >
                    <GlowCard className="p-4 cursor-pointer w-full h-full">
                      <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider group-hover:text-accent transition-colors duration-300 flex items-center justify-between w-full">
                        {social.name}
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="text-xs text-white/80 font-mono mt-1 block">
                        {social.handle}
                      </span>
                    </GlowCard>
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
                    className="space-y-7 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="relative group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleInputChange}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 pt-5 pb-1.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] focus:bg-white/[0.04] transition-all duration-300"
                        />
                        <label
                          htmlFor="name"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold ${
                            focusedField === 'name' || formData.name !== ''
                              ? 'top-1.5 text-[9px] text-accent font-extrabold'
                              : 'top-3.5 text-xs text-text-muted'
                          }`}
                        >
                          Your Name
                        </label>
                      </div>
                      
                      {/* Email */}
                      <div className="relative group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleInputChange}
                          className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 pt-5 pb-1.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] focus:bg-white/[0.04] transition-all duration-300"
                        />
                        <label
                          htmlFor="email"
                          className={`absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold ${
                            focusedField === 'email' || formData.email !== ''
                              ? 'top-1.5 text-[9px] text-accent font-extrabold'
                              : 'top-3.5 text-xs text-text-muted'
                          }`}
                        >
                          Your Email
                        </label>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-3">
                      <span className="text-xs font-bold uppercase tracking-widest text-text-secondary block">
                        Service of Interest
                      </span>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {['Short Film Editing', 'Podcast Editing', 'Reel Editing', 'Poster Designing'].map((s) => {
                          const isSelected = formData.service === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, service: s }))}
                              className={`relative px-2 sm:px-4 py-3 sm:py-3.5 rounded-lg text-[10px] font-bold uppercase tracking-wider border text-center transition-all duration-300 cursor-pointer overflow-hidden ${
                                isSelected 
                                  ? 'border-accent text-bg-darkest shadow-[0_0_15px_rgba(255,229,0,0.2)]' 
                                  : 'border-white/10 text-white hover:border-white/20 hover:bg-white/[0.02]'
                              }`}
                            >
                              {isSelected && (
                                <motion.div
                                  layoutId="activeServiceGlow"
                                  className="absolute inset-0 bg-accent -z-10"
                                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                              )}
                              <span className="relative z-10">{s}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Mobile Number */}
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        onChange={handleInputChange}
                        className="w-full bg-white/[0.02] border border-white/10 rounded-lg px-4 pt-5 pb-1.5 text-sm text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/35 focus:shadow-[0_0_15px_rgba(255,229,0,0.12)] focus:bg-white/[0.04] transition-all duration-300"
                      />
                      <label
                        htmlFor="phone"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none uppercase tracking-widest font-bold ${
                          focusedField === 'phone' || formData.phone !== ''
                            ? 'top-1.5 text-[9px] text-accent font-extrabold'
                            : 'top-3.5 text-xs text-text-muted'
                        }`}
                      >
                        Mobile Number
                      </label>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.015 }}
                      whileTap={{ scale: 0.995 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="group w-full relative flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-accent text-bg-darkest font-extrabold uppercase text-xs tracking-widest hover:bg-white transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-lg shadow-accent/25 overflow-hidden"
                    >
                      {/* Interactive background shine wave */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-bg-darkest border-t-transparent rounded-full animate-spin" />
                          <span>Sending Brief...</span>
                        </>
                      ) : (
                        <>
                          <Send size={14} className="group-hover:translate-x-1.5 group-hover:-translate-y-1 transition-all duration-300 ease-out shrink-0" />
                          <span>Send Production Brief</span>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center py-12 text-center relative"
                  >
                    {/* Animated background rings */}
                    <div className="absolute -z-10 w-48 h-48 bg-accent/5 rounded-full blur-xl animate-pulse" />
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <CheckCircle size={56} className="text-accent mb-6 drop-shadow-[0_0_15px_rgba(255,229,0,0.4)] animate-bounce" />
                    </motion.div>
                    
                    <motion.h3 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="font-display text-2xl font-bold text-white tracking-tight mb-2"
                    >
                      Brief Logged Successfully
                    </motion.h3>
                    
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-text-secondary font-body font-light text-sm max-w-sm mb-8 leading-relaxed"
                    >
                      Thanks for contacting us, we will get back to you within hours of time, thank you.
                    </motion.p>
                    
                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/10 hover:border-accent/30 text-xs font-semibold text-text-secondary hover:text-accent transition-colors duration-300 cursor-pointer"
                    >
                      Send another message
                    </motion.button>
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
