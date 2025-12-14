"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = ["Full Stack Developer", "Backend Developer", "Frontend Developer"];

export default function HeroLeft() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-xl space-y-4 px-4 font-poppins">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-orange-500 text-lg font-poppins font-semibold"
      >
        Hi I'm
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl font-bold text-gray-900"
      >
        Sundaram
      </motion.h1>

      <motion.h2
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-3xl font-bold text-blue-900 h-10"
      >
        {roles[index]}
      </motion.h2>

      <p className="text-gray-600 leading-relaxed">
        Experienced developer proficient in full-stack technologies, creating visually stunning and high-performance applications. Passionate about seamless user experiences and staying up-to-date with modern trends.
      </p>

      <div className="flex gap-4 mt-4">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="#projects"
          whileTap={{ scale: 0.95 }}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold shadow"
        >
          View Projects
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="border border-orange-300 px-6 py-3 rounded-xl font-semibold text-orange-600"
        >
          Contact
        </motion.a>
      </div>
    </div>
  );
}
