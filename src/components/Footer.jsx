import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="py-6 text-center text-gray-400"
    >
      © {new Date().getFullYear()} Your Name
    </motion.footer>
  );
}
