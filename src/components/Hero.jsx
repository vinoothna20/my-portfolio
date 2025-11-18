import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const text = "Hi, I'm Proane Poitier";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, 80); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        className="pointer-events-none fixed inset-0"
        animate={{ opacity: 1 }}
      >
        <div className="absolute w-80 h-80 rounded-full bg-purple-500/20 blur-[120px]" />
      </motion.div>

      {/* Typewriter + Fade */}
      <motion.h1
        className="text-4xl md:text-7xl font-extrabold text-white tracking-wide text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayText}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg text-gray-300 max-w-xl text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        A passionate Frontend Developer crafting beautiful digital experiences.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition-transform"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-white/10 backdrop-blur-lg text-white border border-white/20 rounded-xl hover:scale-105 transition-transform"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}
