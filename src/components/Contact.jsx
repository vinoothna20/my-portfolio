import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCheckCircle } from "react-icons/fi";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastColor, setToastColor] = useState("bg-green-600");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(form.name.trim())) {
      newErrors.name = "Name can contain only letters and spaces";
    }

    // Email validation
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Message validation
    if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE, // Your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE, // Your Template ID
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          subject: `Portfolio Contact from ${form.name}`,
        },
        import.meta.env.VITE_EMAILJS_KEY // Your Public Key
      )
      .then(() => {
        setToastMessage("Message sent successfully!");
        setToastColor("bg-green-600");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setToastMessage("Something went wrong. Please try again!");
        setToastColor("bg-red-600");
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      })
      .finally(() => {
        setLoading(false); // reset loading
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#05070D] text-center relative overflow-hidden"
    >
      {/* Gradient Waves */}
      <div className="absolute -top-20 left-0 w-full h-64 bg-linear-to-r from-cyan-500/30 to-transparent blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-full h-64 bg-linear-to-l from-purple-500/30 to-transparent blur-[100px]" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-3">Let's Work Together</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-10">
          Open to{" "}
          <span className="text-white font-medium">freelance projects</span>,
          <span className="text-white font-medium"> full-time roles</span>, and{" "}
          <span className="text-white font-medium">
            creative collaborations
          </span>
          . Feel free to reach out anytime.
        </p>
      </motion.div>

      {/* Clean New Form Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-xl mx-auto sm:p-10 p-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm text-left">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 text-white border 
              ${errors.name ? "border-red-500" : "border-white/20"} 
              outline-none focus:border-blue-400 transition`}
              placeholder="Enter your name"
            />
            {errors.name && (
              <span className="text-sm text-red-400">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm text-left">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-xl bg-white/5 text-white border 
              ${errors.email ? "border-red-500" : "border-white/20"} 
              outline-none focus:border-blue-400 transition`}
              placeholder="Enter your email"
            />
            {errors.email && (
              <span className="text-sm text-red-400">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-300 text-sm text-left">
              Your Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className={`w-full px-4 py-3 rounded-xl bg-white/5 text-white border 
              ${errors.message ? "border-red-500" : "border-white/20"} 
              outline-none focus:border-blue-400 transition`}
            ></textarea>
            {errors.message && (
              <span className="text-sm text-red-400">{errors.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`group py-4 mt-4 rounded-xl font-semibold tracking-wide 
    bg-linear-to-r from-cyan-500/30 to-purple-500/30 text-white border border-white/20 relative overflow-hidden transition-all duration-500
    ${
      loading
        ? "opacity-50 cursor-not-allowed pointer-events-none" // disable hover & clicks
        : "cursor-pointer"
    }`}
          >
            {/* Button Text */}
            <span
              className={`relative z-10 flex items-center justify-center gap-2 transition-colors duration-500 ${
                loading ? "" : "group-hover:text-black"
              }`}
            >
              {loading && (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              {loading ? "Sending..." : "Send Message"}
            </span>

            {/* Sliding Gradient Background */}
            <div
              className={`absolute inset-0 bg-linear-to-r from-cyan-400 to-purple-500 -translate-x-full transition-transform duration-500 ease-out ${
                loading ? "" : "group-hover:translate-x-0"
              }`}
            ></div>

            {/* Inner Subtle Shadow */}
            <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_8px_rgba(255,255,255,0.12)] pointer-events-none"></div>
          </motion.button>
        </form>

        {/* Social Icons */}
        <div className="mt-10 flex justify-center gap-6 text-gray-300">
          <a
            href="mailto:vinoothnaande20@gmail.com"
            className="text-2xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <FiMail />
          </a>
          <a
            href="https://github.com/vinoothna20"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/vinoothnaande/"
            target="_blank"
            className="text-2xl text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
          >
            <FiLinkedin />
          </a>
        </div>
      </motion.div>

      {/* SUCCESS TOAST */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed bottom-8 right-8 ${toastColor} text-white px-6 py-4 rounded-xl flex items-center gap-2 shadow-xl`}
        >
          <FiCheckCircle size={20} /> {toastMessage}
        </motion.div>
      )}
    </section>
  );
}
