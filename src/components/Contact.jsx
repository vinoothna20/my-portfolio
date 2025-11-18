import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center px-6">
      <motion.div
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="text-gray-300 mb-6">
          Want to work together? Let’s connect.
        </p>

        <a
          href="mailto:your-email@gmail.com"
          className="px-8 py-3 bg-blue-600 rounded-xl inline-block"
        >
          Email Me
        </a>
      </motion.div>
    </section>
  );
}
