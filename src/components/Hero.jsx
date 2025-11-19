import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "Hi, I'm Vinoothna Ande";
  const [displayText, setDisplayText] = useState("");
  const [typingDone, setTypingDone] = useState(false);

  // Detect mobile screen
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* === Animated Background === */}

      {/* Particle Field — optimized for mobile */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        {Array.from({ length: isMobile ? 20 : 50 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute block w-[3px] h-[3px] bg-white/40 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              willChange: "transform", // performance optimization
            }}
            animate={{ y: [0, -30, 0], opacity: [0.2, 1, 0.2] }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="pointer-events-none fixed inset-0">
        {/* Floating Purple Blob */}
        <motion.div
          className="absolute left-10 top-20 w-96 h-96 rounded-full bg-purple-500/20 blur-[150px]"
          style={{ willChange: "transform" }}
          animate={{ y: [0, -50, 0], x: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Blue Blob */}
        <motion.div
          className="absolute right-10 bottom-20 w-80 h-80 rounded-full bg-blue-500/20 blur-[150px]"
          style={{ willChange: "transform" }}
          animate={{ y: [0, 60, 0], x: [0, -35, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Rotating Soft Gradient Ring */}
        <motion.div
          className="absolute inset-0 m-auto w-[550px] h-[550px] rounded-full 
                     bg-linear-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 
                     blur-[120px]"
          style={{ borderRadius: "50%", willChange: "transform" }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* === Heading with Cursor === */}
      <motion.h1
        className="text-4xl md:text-7xl font-extrabold text-white tracking-wide text-center flex"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {displayText}

        {!typingDone && (
          <motion.span
            className="text-purple-400 ml-1"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            |
          </motion.span>
        )}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        A passionate Frontend Developer crafting beautiful digital experiences.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.08 }}
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg transition-transform"
        >
          View Projects
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.08 }}
          className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-xl transition-transform"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-white/70"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-sm tracking-wider mb-1">Scroll</span>

        {/* Arrow */}
        <motion.span
          className="text-2xl"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↓
        </motion.span>
      </motion.div>
    </section>
  );
}
