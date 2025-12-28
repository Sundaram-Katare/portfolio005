"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { RiLiveLine } from "react-icons/ri";

const data = [
  {
    id: 0,
    title: "Stellar",
    description: "A code review tool which reviews your code and find bugs, suggest improvements and return the rewritten code.",
    imageUrl: "./stellar.png",
    gutHub: "https://github.com/Sundaram-Katare/stellar",
    live: "https://stellar-seven-topaz.vercel.app/",
  },
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
    id: 6, 
    title: "Nike Shoe Store",
    description: "This is a Shoe store's website landing page built using pure HTML, CSS and JavaScript.",
    imageUrl: "/nike.png",
    gitHub: "https://github.com/Sundaram-Katare/Nike-Shoe-Store",
    live: "https://nike-shoe-store-nu.vercel.app/"
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
    const cardWidth = sliderRef.current.querySelector('div')?.offsetWidth || 320;
    const gap = 24;
    const amount = direction === "left" ? -(cardWidth + gap) : (cardWidth + gap);
    sliderRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 py-12 sm:py-16 lg:py-20">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:w-1/3 font-poppins"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold leading-tight">
            Built it, Shipped it
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-orange-500 leading-tight">
            Here's the proof.
          </h1>

          <div className="hidden lg:flex mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={() => scroll("left")}
              className="px-4 sm:px-5 py-2.5 sm:py-3 bg-orange-500 text-white rounded-xl text-base sm:text-lg font-medium hover:bg-orange-600 transition-colors"
              aria-label="Previous project"
            >
              Prev
            </button>
            <button
              onClick={() => scroll("right")}
              className="px-4 sm:px-5 py-2.5 sm:py-3 border-2 border-orange-600 text-orange-600 rounded-xl text-base sm:text-lg font-medium hover:bg-orange-50 transition-colors"
              aria-label="Next project"
            >
              Next
            </button>
          </div>
        </motion.div>

        <div className="lg:w-2/3">
          {/* Mobile: Vertical Stack */}
          <div className="flex lg:hidden flex-col gap-6">
            {data.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="w-full bg-white rounded-2xl shadow-xl p-5 flex flex-col"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-xl mb-4 h-48 w-full object-cover"
                />

                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-4 justify-end">
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <RiLiveLine size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Horizontal Slider */}
          <div
            ref={sliderRef}
            className="hidden lg:flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {data.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
                className="snap-start shrink-0 w-[320px] xl:w-[340px] bg-white rounded-2xl shadow-xl p-6 flex flex-col"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="rounded-xl mb-4 h-40 w-full object-cover"
                />

                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {project.title}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed mb-12">
                  {project.description}
                </p>

                <div className="mt-auto flex gap-4 justify-end">
                  <a
                    href={project.gitHub}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-orange-500 transition-colors"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <RiLiveLine size={24} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
