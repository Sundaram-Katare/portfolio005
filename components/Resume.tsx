"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";

export default function Resume() {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold font-poppins text-blue-900">
            Resume
          </h1>
          <h2 className="text-4xl font-bold text-orange-500">
            Know Me Better
          </h2>

          <p className="text-gray-600 max-w-md leading-relaxed">
            A concise overview of my experience, skills, achievements, and
            projects. This resume highlights my journey as a full-stack
            developer, problem solver, and continuous learner.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://drive.google.com/file/d/1Qlhz9FSxLEML7ND3ZihPqRrPeypVDwDJ/view?usp=drive_link"
              target="_blank"
              className="flex items-center gap-3 bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition"
            >
              <FaEye />
              View Resume
            </a>

            <a
              href="https://drive.google.com/file/d/1Qlhz9FSxLEML7ND3ZihPqRrPeypVDwDJ/view?usp=drive_link"
              download
              className="flex items-center gap-3 border-2 border-orange-500 text-orange-600 px-6 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition"
            >
              <FaDownload />
              Download
            </a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[340px] h-[440px] rounded-3xl bg-orange-200 scale-105"></div>

          <div className="relative w-[320px] h-[420px] bg-white rounded-3xl shadow-2xl flex items-center justify-center text-center px-6">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Sundaram Katare
              </h3>
              <p className="text-gray-600 mb-4">
                Full Stack Developer
              </p>
              <p className="text-sm text-gray-500">
                React • Next.js • Node.js • SQL • MongoDB • DSA
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
