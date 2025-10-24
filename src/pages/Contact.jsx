import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSent(false);
    setError(false);

    emailjs
      .sendForm(
        "service_f9xr2sr", // ✅ Your EmailJS Service ID
        "template_djl65pd", // ✅ Your EmailJS Template ID
        form.current,
        "TwyDS-pTH3k0D3fEE" // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setIsSending(false);
          setError(true);
        }
      );
  };

  return (
    <section className="w-full min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 opacity-80"></div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-4xl md:text-5xl font-extrabold text-white text-center"
        >
          Get In Touch
        </motion.h1>
      </div>

      {/* Contact Form + Info */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 bg-white p-8 rounded-2xl shadow-lg"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            disabled={isSending}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg transition-all"
          >
            {isSending ? "Sending..." : "Send Message"}
          </motion.button>

          {sent && <p className="text-green-600 mt-2">✅ Message sent successfully!</p>}
          {error && <p className="text-red-600 mt-2">❌ Something went wrong. Please try again.</p>}
        </motion.form>

        {/* Contact Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Reach Me At</h2>
          <p className="text-gray-700 text-lg">
            <strong>Email:</strong>{" "}
            <a href="mailto:martinkihungi2@gmail.com" className="text-indigo-600 hover:underline">
              martinkihungi2@gmail.com
            </a>
          </p>
          <p className="text-gray-700 text-lg">
            <strong>Phone:</strong>{" "}
            <a href="tel:+254768129982" className="text-indigo-600 hover:underline">
              +254 768 129982
            </a>
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 mt-6">
            <motion.a
              href="https://linkedin.com/in/martinkihungi"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-blue-600 text-white text-2xl hover:bg-blue-500 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/martinkihungi"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-gray-800 text-white text-2xl hover:bg-gray-700 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="https://instagram.com/martinkihungi"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-pink-600 text-white text-2xl hover:bg-pink-500 transition"
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://twitter.com/martinkihungi"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-blue-400 text-white text-2xl hover:bg-blue-300 transition"
            >
              <FaTwitter />
            </motion.a>

            <motion.a
              href="https://wa.me/254768129982"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2 }}
              className="p-3 rounded-full bg-green-500 text-white text-2xl hover:bg-green-400 transition"
            >
              <FaWhatsapp />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
