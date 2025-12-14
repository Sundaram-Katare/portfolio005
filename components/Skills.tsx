"use client";

import { motion } from "framer-motion";
import { DiMongodb } from "react-icons/di";
import { FaJsSquare, FaNode, FaReact, FaGitAlt, FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiTypescript, SiPostgresql, SiDocker, SiPostman, SiMysql } from "react-icons/si";

const skills = [
  { id: 1, name: "Javascript", logo: <FaJsSquare /> },
  { id: 2, name: "Typescript", logo: <SiTypescript /> },
  { id: 3, name: "React", logo: <FaReact /> },
  { id: 4, name: "Next JS", logo: <RiNextjsFill /> },
  { id: 5, name: "Node JS", logo: <FaNode /> },
  { id: 6, name: "Express JS", logo: <SiExpress /> },
  { id: 7, name: "MongoDB", logo: <DiMongodb /> },
  { id: 8, name: "PostgreSQL", logo: <SiPostgresql /> },
  { id: 9, name: "Tailwind CSS", logo: <RiTailwindCssFill /> },
  { id: 10, name: "HTML", logo: <FaHtml5 /> },
  { id: 11, name: "CSS", logo: <FaCss3Alt /> },
  { id: 12, name: "Git", logo: <FaGitAlt /> },
  { id: 13, name: "Docker", logo: <SiDocker /> },
  { id: 14, name: "Postman", logo: <SiPostman /> },
  { id: 15, name: "MySQL", logo: <SiMysql /> },
  { id: 16, name: "Java", logo: <FaJava /> },
];

export default function Skills() {
  return (
    <div className="relative w-full py-20 flex justify-center items-center">
      <img src="/grid.png" alt="grid" className="absolute inset-0 w-full h-full object-cover opacity-40" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 w-full px-8 max-w-6xl"
      >
        <div className="flex flex-row gap-1 ">
          <img src="https://cdn-icons-gif.flaticon.com/15370/15370735.gif" className="h-10" alt="" />
          <h1 className="text-4xl font-bold font-poppins mb-10 text-blue-900">Skills & Technologies</h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              whileHover={{ scale: 1.07 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-6"
            >
              <div className="text-5xl text-orange-500 mb-3">{skill.logo}</div>
              <h2 className="text-lg font-semibold text-gray-700">{skill.name}</h2>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
