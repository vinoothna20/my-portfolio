import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full backdrop-blur-xl bg-white/10 text-white z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">Vinoothna Ande</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group hover:text-blue-300 transition-colors"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {/* Hamburger → X animation */}
          <motion.span
            initial={false}
            animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
            className="block w-6 h-0.5 bg-white mb-1"
          />
          <motion.span
            initial={false}
            animate={{ opacity: open ? 0 : 1 }}
            className="block w-6 h-0.5 bg-white mb-1"
          />
          <motion.span
            initial={false}
            animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
            className="block w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/60 backdrop-blur-xl mt-4 rounded-lg p-4 space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block text-lg ripple px-2 py-2 rounded-lg transition active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
