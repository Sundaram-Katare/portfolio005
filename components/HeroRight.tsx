"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center w-full px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px]"
      >
        {/* Main orange circle */}
        <div className="absolute inset-0 rounded-full bg-orange-500"></div>

        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full scale-125 bg-orange-200 opacity-50 blur-sm"></div>

        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Image
            src="/myFace.png"
            alt="Sundaram Katare"
            width={280}
            height={280}
            className="object-contain w-100 h-100 lg:w-120 lg:h-120"
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
