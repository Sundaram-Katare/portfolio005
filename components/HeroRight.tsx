"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroRight() {
  return (
    <div className="relative flex items-center justify-center w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-[380px] h-[380px] md:w-[440px] md:h-[440px]"
      >
        <div className="absolute inset-0 rounded-full bg-orange-500"></div>

        <div className="absolute inset-0 rounded-full scale-125 bg-orange-200 opacity-50"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 flex items-center justify-center "
        >
          <Image
            src="/myFace.png"
            alt="Sundaram"
            width={280}
            height={280}
            className="object-contain border-b-rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
