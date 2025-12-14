"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full bg-white rounded-b-3xl shadow-md px-6 py-4 flex items-center justify-between"
        >
            <div className="relative inline-block h-14 flex items-center">
                {/* Yellow Skewed Background */}
                <div className="absolute inset-0 flex gap-2 items-center">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-yellow-300 w-16 h-18 transform -skew-x-12"
                        />
                    ))}
                </div>

                {/* Text */}
                <span className="relative z-10 text-4xl font-poppins font-extrabold text-black pl-2">
                    Sundaram
                </span>
            </div>




            <div className="hidden md:flex gap-10 font-semibold text-gray-700">
                {[
                    { name: "Home", id: "home" },
                    { name: "Projects", id: "projects" },
                    { name: "Skills", id: "skills" },
                    { name: "Highlights", id: "highlights" },
                    { name: "Contact", id: "contact" },
                ].map((item, i) => (
                    <motion.a
                        key={i}
                        href={`#${item.id}`}
                        whileHover={{ scale: 1.1, color: "#2563EB" }}
                        className="cursor-pointer text-xl font-poppins"
                    >
                        {item.name}
                    </motion.a>
                ))}
            </div>

            <div className="md:hidden text-3xl cursor-pointer" onClick={() => setOpen(!open)}>
                {open ? <HiX /> : <HiMenu />}
            </div>

            {open && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-20 left-0 w-full bg-white shadow-lg rounded-b-2xl p-6 flex flex-col gap-6 md:hidden"
                >
                    {["Home", "About", "Projects", "Highlights", "Contact"].map((item, i) => (
                        <motion.h2
                            key={i}
                            whileTap={{ scale: 0.95 }}
                            className="text-lg font-semibold text-gray-700"
                        >
                            {item}
                        </motion.h2>
                    ))}

                    <div className="flex gap-6 text-3xl mt-4">
                        <FaFacebook className="cursor-pointer hover:text-blue-600" />
                        <FaInstagram className="cursor-pointer hover:text-pink-500" />
                        <FaWhatsapp className="cursor-pointer hover:text-green-500" />
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}
