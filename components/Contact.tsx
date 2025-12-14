"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-white rounded-3xl shadow-2xl p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
      >
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold font-poppins text-blue-900">
            Let’s Build Something
          </h1>
          <h1 className="text-4xl font-bold text-orange-500 mt-1">
            Amazing Together
          </h1>

          <p className="text-gray-600 mt-6 max-w-md">
            Have an idea, project, or opportunity in mind? Feel free to reach
            out. I’m always open to discussing new projects, collaborations, or
            internships.
          </p>

          <div className="flex gap-6 mt-8 text-2xl">
            <a
              href="mailto:sundaram@example.com"
              className="bg-orange-500 text-white p-4 rounded-xl hover:scale-105 transition"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/sundaram-katare5/"
              target="_blank"
              className="bg-blue-600 text-white p-4 rounded-xl hover:scale-105 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Sundaram-Katare"
              target="_blank"
              className="bg-black text-white p-4 rounded-xl hover:scale-105 transition"
            >
              <FaGithub />
            </a>

            <a href="https://x.com/sundaramkatare"
               target="_blank"
                className="bg-blue-400 text-white p-4 rounded-xl hover:scale-105 transition"
            >
                <FaTwitter />
            </a>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500"
          />

          <textarea
            placeholder="Your Message"
            rows={5}
            className="border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:border-orange-500 resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg"
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
}
