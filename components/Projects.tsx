"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    title: "Weave",
    description:
      "AI powered Job cover letter generator based on job descriptions and user profiles.",
    imageUrl: "/weave.png",
    gitHub: "https://github.com/Sundaram-Katare/Weave",
    live: "https://weaves-xi.vercel.app/"
  },
  {
    id: 2,
    title: "Lumin",
    description:
      "Online quiz platform with progress tracking and topic based quizzes.",
    imageUrl: "/lumin.png",
    gitHub: "https://github.com/Sundaram-Katare/Lumin",
    live: "https://lumin-alpha.vercel.app/"
  },
  {
    id: 3,
    title: "Liluxe",
    description:
      "Clothing brand landing page with modern UI and animations.",
    imageUrl: "/liluxe.png",
    gitHub: "https://github.com/Sundaram-Katare/Liluxe",
    live: "https://stylespot-orpin.vercel.app/"
  },
  {
    id: 4,
    title: "Learnzo",
    description:
      "E-learning platform for structured topic based learning.",
    imageUrl: "/learnzo.png",
    gitHub: "https://github.com/Sundaram-Katare/Learnzo",
    live: "https://e-learning-rosy-gamma.vercel.app/"
  },
  {
    id: 5,
    title: "S2T",
    description: "This is a real-time speech-to-text web application built using pure HTML, CSS, and JavaScript. It uses the Web Speech API to convert spoken words into text and features a live audio visualizer using the Web Audio API.",
    imageUrl: "/s2t.png",
    gitHub: "https://github.com/Sundaram-Katare/Speech-to-text",
    live: "https://speech-to-text-nine-plum.vercel.app/"
  },
];

export default function Projects() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const amount = direction === "left" ? -360 : 360;
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-6 lg:px-16 py-20">
      <div className="flex flex-col lg:flex-row gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/3 font-poppins text-4xl font-bold"
        >
          <h1>Built it, Shipped it</h1>
          <h1 className="text-orange-500">Here's the proof.</h1>

          <div className="flex mt-8 gap-4">
            <button
              onClick={() => scroll("left")}
              className="px-5 py-3 bg-orange-500 text-white rounded-xl text-lg"
            >
              Prev
            </button>
            <button
              onClick={() => scroll("right")}
              className="px-5 py-3 border-2 border-orange-600 text-orange-600 rounded-xl text-lg"
            >
              Next
            </button>
          </div>
        </motion.div>

        <div
          ref={sliderRef}
          className="lg:w-2/3 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {data.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.03 }}
              className="snap-start shrink-0 w-[85%] sm:w-[320px] bg-white rounded-2xl shadow-xl p-6 relative"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-xl mb-4 h-36 w-full object-cover"
              />

              <h2 className="text-xl font-bold text-blue-800 mb-2">
                {project.title}
              </h2>

              <p className="text-gray-600 text-sm">
                {project.description}
              </p>

              <div className="absolute bottom-4 right-4 flex gap-3">
                <FaGithub size={22} className="cursor-pointer" onClick={() => window.open(project.gitHub, "_blank")} />
                <RiLiveLine size={22} className="cursor-pointer" onClick={() => window.open(project.live, "_blank")} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
