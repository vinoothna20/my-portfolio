import { motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#05070D] bg-[linear-gradient(to_bottom,#05070D,#0A0F18)] relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[60px_60px]"></div>
      <div className="absolute top-40 right-1/4 w-[900px] h-[900px] bg-cyan-500/10 blur-[230px] rounded-full"></div>

      <h2 className="text-4xl font-bold mb-12 text-center text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((p, i) => {
          const [hovered, setHovered] = useState(false);

          return (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative h-[330px] group"
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
            >
              {/* BACK CARD */}
              <motion.div
                animate={
                  hovered
                    ? { y: -10, scaleX: 0.92, opacity: 1 }
                    : { y: 30, scaleX: 1, opacity: 0 }
                }
                transition={{ type: "spring", stiffness: 120, damping: 16 }}
                className={`absolute inset-0 w-[92%] mx-auto rounded-xl bg-[#11141A] border border-white/10 p-6 z-10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]
    ${hovered ? "pointer-events-auto" : "pointer-events-none"}`}
              >
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed mt-2">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.techList?.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border border-cyan-400/40 text-cyan-300 bg-cyan-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-6">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-md bg-cyan-600/20 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-600/30 transition font-medium cursor-pointer"
                    >
                      Live
                    </a>
                  )}

                  {p.code && (
                    <a
                      href={p.code}
                      target="_blank"
                      className="flex-1 text-center py-2 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/20 hover:bg-purple-600/30 transition font-medium cursor-pointer"
                    >
                      Code
                    </a>
                  )}
                </div>
              </motion.div>

              {/* FRONT CARD */}
              <motion.div className="relative h-full w-[92%] mx-auto rounded-xl overflow-hidden bg-[#11141A] border border-white/10 shadow-lg">
                <div className="h-52 overflow-hidden rounded-t-xl">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-1 line-clamp-2 leading-snug">
                    {p.smallDesc}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
