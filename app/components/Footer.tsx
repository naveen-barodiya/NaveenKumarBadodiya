"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/40">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-7xl mx-auto px-6 md:px-20 py-10 flex flex-col md:flex-row
        items-center justify-between gap-6"
            >
                {/* LEFT */}
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-semibold">
                        Naveen <span className="text-blue-400">Barodiya</span>
                    </h3>
                    <p className="text-sm text-gray-400">
                        Full-Stack Web Developer
                    </p>
                </div>

                {/* CENTER - SOCIAL LINKS */}
                <div className="flex gap-5">
                    <motion.a
                        whileHover={{ scale: 1.15 }}
                        href="https://github.com/naveen-barodiya"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Github size={20} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.15 }}
                        href="https://www.linkedin.com/in/naveen-barodiya-60a19a2ba"
                        target="_blank"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Linkedin size={20} />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.15 }}
                        href="mailto:nk143barodiya@gmail.com"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Mail size={20} />
                    </motion.a>
                </div>

                {/* RIGHT */}
                <div className="text-sm text-gray-400 text-center md:text-right">
                    © {new Date().getFullYear()} Naveen Barodiya
                    <br />
                    All rights reserved.
                </div>
            </motion.div>
        </footer>
    );
}
