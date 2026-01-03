"use client";

import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen px-6 md:px-20 py-24"
        >
            <div className="max-w-5xl mx-auto">

                {/* SECTION TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-semibold mb-12"
                >
                    Experience
                </motion.h2>

                {/* TIMELINE */}
                <div className="relative border-l border-white/20 pl-8 space-y-12">

                    {/* EXPERIENCE ITEM 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        {/* DOT */}
                        <span className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-400 rounded-full" />

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 transition"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                <h3 className="text-lg font-semibold">
                                    Web Developer Intern
                                </h3>
                                <span className="text-sm text-gray-400">
                                    2024 – Present
                                </span>
                            </div>

                            <p className="text-gray-400 text-sm mt-1">
                                CODE ALPHA · Internship
                            </p>

                            <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
                                <li>
                                    Developed responsive user interfaces using React and Tailwind CSS.
                                </li>
                                <li>
                                    Built and maintained Next.js applications following modern best practices.
                                </li>
                                <li>
                                    Integrated REST APIs and managed client-side state efficiently.
                                </li>
                                <li>
                                    Optimized UI performance and improved accessibility standards.
                                </li>
                                <li>
                                    Collaborated with mentors to understand real-world development workflows.
                                </li>
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {["React", "Next.js", "Tailwind CSS", "APIs", "Git"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* EXPERIENCE ITEM 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative opacity-90"
                    >
                        <span className="absolute -left-[9px] top-2 w-4 h-4 bg-white/30 rounded-full" />

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-6 transition"
                        >
                            <h3 className="text-lg font-semibold">
                                Personal & Freelance Projects
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">
                                Food Corner Webpage | Ecommerce Page | Admin Dashborad panel ....etc
                            </p>

                            <ul className="mt-4 space-y-2 text-sm text-gray-400 list-disc list-inside">
                                <li>
                                    Built multiple frontend and full-stack projects to strengthen core concepts.
                                </li>
                                <li>
                                    Created portfolio websites, admin dashboards, and productivity tools.
                                </li>
                                <li>
                                    Practiced clean code principles and scalable project structure.
                                </li>
                                <li>
                                    Continuously explored new libraries, tools, and UI patterns.
                                </li>
                            </ul>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {["React", "Next.js", "JavaScript", "Express", "NodeJs", "MongoDB" ,"Learning"].map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 text-xs bg-white/10 text-gray-300 rounded-full"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
