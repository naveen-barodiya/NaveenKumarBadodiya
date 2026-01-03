"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
    {
        title: "CustomTech Lab ",
        tech: "React • Tailwind CSS",
        desc: "A modern portfolio website with smooth scrolling and Light UI.",
        image: "/custom.png",
        live: "https://custom-tech.vercel.app",
        code: "https://github.com/naveen-barodiya/customTech",
    },
    {
        title: "Admin Dashboard",
        tech: "Next.js • Tailwind UI",
        desc: "A responsive admin dashboard UI with clean layout and modern design.",
        image: "/admin.png",
        live: "https://adminpannel-dashboard.vercel.app",
        code: "#",
    },
    {
        title: "Paste App",
        tech: "React • LocalStorage",
        desc: "A simple paste-sharing application built with React and browser storage.",
        image: "/paste.webp",
        live: "https://paste-app-liart-pi.vercel.app",
        code: "https://github.com/naveen-barodiya/PasteApp",
    },
    {
        title: "Delhi Food Corner",
        tech: "React • LocalStorage",
        desc: "A simple paste-sharing application built with React and browser storage.",
        image: "/delhi.png",
        live: "https://delhi-food-corner.vercel.app",
        code: "https://github.com/naveen-barodiya/delhi_food_corner",
    },
    {
        title: "E-commerce Store",
        tech: "React • LocalStorage",
        desc: "A simple paste-sharing application built with React and browser storage.",
        image: "/ecom.avif",
        live: "https://shop-ease-xi-ten.vercel.app",
        code: "https://github.com/naveen-barodiya/shop-ease",
    },
];

export default function Portfolio() {
    return (
        <section
            id="portfolio"
            className="min-h-screen px-6 md:px-20 py-24"
        >
            <div className="max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-4xl font-semibold mb-3">
                        Portfolio
                    </h2>
                    <p className="text-gray-400 max-w-2xl mb-10">
                        A selection of projects that showcase my skills in frontend,
                        full-stack development, and modern UI design.
                    </p>
                </motion.div>

                {/* PROJECT GRID */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -6 }}
                            className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden
              hover:border-blue-400/40 transition"
                        >
                            {/* IMAGE (SMALLER HEIGHT) */}
                            <div className="relative h-40 overflow-hidden">
                                <Image
                                    src={p.image}
                                    alt={p.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-300"
                                />
                            </div>

                            {/* CONTENT (COMPACT) */}
                            <div className="p-4 space-y-2">
                                <h3 className="text-lg font-semibold">
                                    {p.title}
                                </h3>

                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {p.desc}
                                </p>

                                <p className="text-xs text-blue-400">
                                    {p.tech}
                                </p>

                                {/* BUTTONS */}
                                <div className="flex gap-3 pt-2">
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        className="px-3 py-1.5 text-xs bg-blue-500 text-black rounded-full
                    hover:bg-blue-400 transition"
                                    >
                                        Live
                                    </a>

                                    <a
                                        href={p.code}
                                        target="_blank"
                                        className="px-3 py-1.5 text-xs border border-white/20 rounded-full
                    hover:border-blue-400 hover:text-blue-400 transition"
                                    >
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
