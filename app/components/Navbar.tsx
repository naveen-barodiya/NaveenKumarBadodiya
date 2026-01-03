"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(e => e.isIntersecting && setActive(e.target.id));
            },
            { threshold: 0.6 }
        );

        links.forEach(l => {
            const el = document.getElementById(l.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        setOpen(false); // close menu on click
    };

    return (
        <>
            {/* DESKTOP NAV */}
            <nav
                className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50
        bg-white/10 backdrop-blur-xl border border-white/10
        rounded-full px-8 py-3 gap-6"
            >
                {links.map(l => (
                    <button
                        key={l.id}
                        onClick={() => scrollTo(l.id)}
                        className={`text-sm transition ${active === l.id
                                ? "text-blue-400 cursor-pointer"
                                : "text-gray-300 hover:text-white cursor-pointer"
                            }`}
                    >
                        {l.label}
                    </button>
                ))}
            </nav>

            {/* MOBILE NAV */}
            <div className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setOpen(!open)}
                    className="p-3 rounded-xl bg-white/10 backdrop-blur border border-white/10"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            {open && (
                <div
                    className="md:hidden fixed top-20 left-1/2 -translate-x-1/2 z-40
          w-[90%] bg-black/90 backdrop-blur-xl border border-white/10
          rounded-2xl p-6"
                >
                    <ul className="flex flex-col gap-4 text-center">
                        {links.map(l => (
                            <li key={l.id}>
                                <button
                                    onClick={() => scrollTo(l.id)}
                                    className={`w-full py-2 rounded-lg transition ${active === l.id
                                            ? "text-blue-400"
                                            : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
}
