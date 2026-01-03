"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
    const [status, setStatus] = useState("");

    return (
        <section
            id="contact"
            className="min-h-screen px-6 md:px-20 py-24"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="space-y-6"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold">
                        Contact <span className="text-blue-400">Me</span>
                    </h2>

                    <p className="text-gray-400 max-w-md leading-relaxed">
                        Have a project in mind, want to collaborate, or just say hello?
                        I’m always open to discussing new ideas, creative projects,
                        or opportunities to be part of something meaningful.
                    </p>

                    {/* CONTACT INFO */}
                    <div className="space-y-2 text-sm text-gray-300">
                        <p>
                            📧 <span className="text-white">nk143barodiya@gmail.com</span>
                        </p>
                        <p>
                            📍 <span className="text-white">India</span>
                        </p>
                        <p>
                            ⏱️ <span className="text-white">Usually replies within 24 hours</span>
                        </p>
                    </div>

                  
                    
                </motion.div>

                {/* FORM */}
                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    action="https://getform.io/f/axoovmkb"
                    method="POST"
                    onSubmit={() => setStatus("Message sent successfully ✅")}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4"
                >
                    <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        name="name"
                        required
                        placeholder="Full Name"
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none"
                    />

                    <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        name="email"
                        required
                        placeholder="Email Address"
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none"
                    />

                    <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        name="message"
                        required
                        rows={4}
                        placeholder="Your Message"
                        className="w-full bg-black/40 border border-white/10 rounded-lg p-3 focus:outline-none"
                    />

                    {/* Anti-spam */}
                    <input type="hidden" name="_gotcha" />

                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-black font-semibold rounded-lg hover:bg-blue-400 transition"
                    >
                        Send Message
                    </motion.button>

                    {status && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center text-sm text-gray-300"
                        >
                            {status}
                        </motion.p>
                    )}
                </motion.form>

            </div>
        </section>
    );
}
