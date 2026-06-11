import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';

export default function GlowCard({ children, className = '', onClick = null }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`group relative overflow-hidden rounded-custom border border-white/10 bg-bg-card/40 backdrop-blur-md transition-all duration-500 ease-out hover:border-accent/30 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-custom opacity-0 group-hover:opacity-100 transition duration-500"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 229, 0, 0.12),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 w-full h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
}
