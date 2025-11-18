import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#0A0D14]">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <div key={p.title} className="relative h-80 cursor-pointer group">
            {/* ⭐ Invisible hover catcher */}
            <motion.div
              className="absolute inset-0 z-50" // sits on top
              whileHover="hovered" // hover trigger
            />

            {/* BACK CARD */}
            <motion.div
              variants={{
                initial: { y: 30, opacity: 0, zIndex: 0 },
                hovered: { y: -10, opacity: 1, zIndex: 20 },
              }}
              initial="initial"
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="
                absolute inset-0 w-[92%] mx-auto rounded-xl bg-[#11141A]
                border border-white/10 p-6 shadow-lg
              "
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed mt-2">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.techList?.map((t) => (
                  <span
                    key={t}
                    className="
                      text-xs px-3 py-1 rounded-full 
                      border border-cyan-400/40 text-cyan-300 
                      bg-cyan-500/10
                    "
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  className="
                    mt-6 block text-center w-full py-2 rounded-md 
                    bg-cyan-600/20 text-cyan-300 border border-cyan-500/20
                    hover:bg-cyan-600/30 transition font-medium
                  "
                >
                  Access
                </a>
              )}
            </motion.div>

            {/* FRONT CARD */}
            <motion.div
              variants={{
                initial: { y: 0, zIndex: 10 },
                hovered: { y: -25, zIndex: 0 },
              }}
              initial="initial"
              transition={{ type: "spring", stiffness: 150, damping: 14 }}
              className="
                relative h-full w-[92%] mx-auto rounded-xl overflow-hidden
                bg-[#11141A] border border-white/10 shadow-lg
              "
            >
              <div className="h-48 overflow-hidden rounded-t-xl">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-1 line-clamp-2 leading-snug">
                  {p.smallDesc}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
