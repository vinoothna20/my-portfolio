import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-black text-white relative overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-600/30 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          About Me
        </motion.h2>

        {/* Text Content */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg leading-8 text-gray-300 text-center"
        >
          I’m a Frontend Developer with{" "}
          <span className="text-white font-semibold">11+ months</span> of
          experience helping clients build{" "}
          <span className="text-purple-300 font-semibold">
            modern, responsive, and high-quality
          </span>{" "}
          websites.
          <br />
          <br />I specialize in{" "}
          <span className="text-blue-300 font-semibold">
            React, JavaScript, HTML, CSS, Tailwind, and Bootstrap.
          </span>{" "}
          Over the past year, I’ve completed{" "}
          <span className="text-white font-semibold">15+ real projects</span> —
          including landing pages, Figma-to-code conversions, interactive
          JavaScript apps, and UI clones like{" "}
          <span className="text-red-400 font-semibold">Netflix (FreeFlix)</span>
          .
          <br />
          <br />
          My focus is on delivering{" "}
          <span className="text-purple-300 font-semibold">clean UI</span>,{" "}
          <span className="text-blue-300 font-semibold">smooth animations</span>
          , and{" "}
          <span className="text-white font-semibold">
            user-friendly experiences
          </span>
          — while writing maintainable code that helps businesses{" "}
          <span className="text-green-300 font-semibold">
            stand out and grow online.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
