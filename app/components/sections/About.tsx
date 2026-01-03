"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen px-6 md:px-20 py-24 flex items-center"
        >
            <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6"
                >

                    <h2 className="text-3xl md:text-4xl font-semibold">
                        About <span className="text-blue-400">Me</span>
                    </h2>

                    <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                        I’m a passionate{" "}
                        <span className="text-white font-medium">Full-Stack Web Developer</span>{" "}
                        who loves building modern, scalable, and high-performance web
                        applications. My focus is on writing clean, maintainable code and
                        crafting user experiences that feel smooth and intuitive.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I primarily work with technologies like{" "}
                        <span className="text-white">React</span>,{" "}
                        <span className="text-white">Express</span>,{" "}
                        <span className="text-white">Next.js</span>,{" "}
                        <span className="text-white">Tailwind CSS</span>,{" "}
                        and modern JavaScript. On the backend side, I enjoy working with{" "}
                        <span className="text-white">Node.js</span> and databases like{" "}
                        <span className="text-white">MongoDB</span>.
                    </p>

                    <p className="text-gray-400 leading-relaxed">
                        I’m constantly learning and experimenting with new tools and
                        architectures to improve my workflow and build better products.
                    </p>

                </motion.div>

                {/* RIGHT SIDE – STATS / CARDS */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="grid sm:grid-cols-2 gap-6"
                >

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                        <h3 className="text-2xl font-bold text-blue-400">10+</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Projects Completed
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                        <h3 className="text-2xl font-bold text-blue-400">3 Months</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Experience
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">
                            What I Do
                        </h3>
                        <ul className="text-gray-400 space-y-1 text-sm">
                            <li>• React & Next.js Apps</li>
                            <li>• MERN Stack WebPages</li>
                            <li>• Responsive UI Design</li>
                            <li>• Full-Stack Development</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                        <h3 className="text-lg font-semibold text-white mb-2">
                            My Focus
                        </h3>
                        <ul className="text-gray-400 space-y-1 text-sm">
                            <li>• Clean Architecture</li>
                            <li>• Performance</li>
                            <li>• Security</li>
                            <li>• Learning & Growth</li>
                        </ul>
                    </motion.div>

                </motion.div>

            </div>
        </section>
    );
}
