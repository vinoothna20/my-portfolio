import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJavascript,
  SiReact,
  SiPython,
  SiMysql,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Python", icon: <SiPython /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git & GitHub", icon: <SiGithub /> },
  { name: "API Integration", icon: <SiPostman /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 text-white relative overflow-hidden bg-[#0A0D14]"
    >
      {/* Glow Background */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-blue-500/10 blur-[150px]"></div>
      <div className="absolute -bottom-32 right-0 w-96 h-96 bg-purple-500/10 blur-[150px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12"
        >
          Skills
        </motion.h2>

        {/* Skill Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
            gap-6 place-items-center
          "
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={{
                hidden: { opacity: 0, scale: 0.7, y: 20 },
                show: { opacity: 1, scale: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="
                group w-40 h-40
                bg-white/5 border border-white/10 
                rounded-2xl backdrop-blur-xl 
                flex flex-col items-center justify-center gap-3
                hover:bg-white/10 
                hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                hover:-translate-y-2 
                transition-all duration-300
              "
            >
              <div className="text-4xl text-gray-300 group-hover:text-white transition">
                {skill.icon}
              </div>

              <p className="text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
