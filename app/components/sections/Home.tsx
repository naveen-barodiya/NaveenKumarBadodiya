"use client";

import Image from "next/image";
import profilePic from "@/public/naveenprofile.jpg";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center px-6 md:px-20 py-24"
        >
            <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <Image
                        src={profilePic}
                        alt="Naveen Barodiya"
                        width={300}
                        height={300}
                        priority
                        className="rounded-2xl border border-white/10 shadow-xl"
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    className="space-y-6 text-center md:text-left"
                >

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-4xl md:text-6xl font-bold leading-tight"
                    >
                        Hi, I’m{" "}
                        <span className="text-blue-400">Naveen Barodiya</span>
                    </motion.h1>

                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-xl md:text-2xl text-gray-300"
                    >
                        Full-Stack Web Developer
                    </motion.h2>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0"
                    >
                        I design and build modern, responsive, and scalable web applications
                        using technologies like React, Next.js, Node.js, and MongoDB.
                        I love turning complex problems into simple, elegant solutions
                        with clean UI and strong performance.
                    </motion.p>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="text-gray-500 text-sm max-w-xl mx-auto md:mx-0"
                    >
                        Currently focused on building full-stack projects, improving UI/UX,
                        and learning advanced backend architectures.
                    </motion.p>

                    {/* CTA BUTTONS */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                document
                                    .getElementById("portfolio")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-7 py-3 bg-blue-500 text-black font-semibold rounded-full
              hover:bg-blue-400 transition"
                        >
                            View My Work
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() =>
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="px-7 py-3 border border-white/20 rounded-full
              hover:border-blue-400 hover:text-blue-400 transition"
                        >
                            Contact Me
                        </motion.button>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
