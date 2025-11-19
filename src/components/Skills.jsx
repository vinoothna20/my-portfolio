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
      className="py-16 px-4 sm:px-6 md:px-12 text-white relative overflow-hidden bg-[#0A0D14]"
    >
      {/* Glow Background */}
      <div className="absolute -top-32 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/10 blur-[150px]"></div>
      <div className="absolute -bottom-32 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 blur-[150px]"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12"
        >
          Skills
        </motion.h2>

        {/* Skill Grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="
            grid grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            gap-4 sm:gap-6 md:gap-8 
            place-items-center
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
                group w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40
                bg-white/5 border border-white/10 
                rounded-2xl backdrop-blur-xl 
                flex flex-col items-center justify-center gap-2 sm:gap-3
                hover:bg-white/10 
                hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]
                hover:-translate-y-2 
                transition-all duration-300
              "
            >
              <div className="text-3xl sm:text-4xl md:text-5xl text-gray-300 group-hover:text-white transition">
                {skill.icon}
              </div>

              <p className="text-sm sm:text-base md:text-lg font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
