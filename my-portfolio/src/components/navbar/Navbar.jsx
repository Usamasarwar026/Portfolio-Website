/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { HiOutlineClipboardList } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../../constant/image";
import Button from "../../components/button/Button"; // adjust this path to wherever Button.jsx lives

const sections = [
  { id: "hero", label: "Home", icon: <AiOutlineHome size={18} /> },
  { id: "about", label: "About", icon: <FaUserAlt size={18} /> },
  { id: "skills", label: "Skills", icon: <SiSkillshare size={18} /> },
  {
    id: "experience",
    label: "Experience",
    icon: <HiOutlineClipboardList size={18} />,
  },
  { id: "projects", label: "Projects", icon: <MdWork size={18} /> },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      [...sections, { id: "contact" }].forEach((s) => {
        const el = document.getElementById(s.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <AnimatePresence>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50"
      >
        {/* GLASS BAR */}
        <div className="backdrop-blur-xl border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* LOGO */}
            <div className="flex items-center gap-2 cursor-pointer group">
              <img
                src={IMAGES.LOGO}
                alt="Usama Logo"
                className="w-10 h-10 object-contain
               transition-all duration-300
               group-hover:scale-110
               group-hover:drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
              />

              <div
                className="text-2xl font-bold text-white hidden sm:block
               transition-all duration-300
               opacity-0 -translate-x-2
               group-hover:opacity-100 group-hover:translate-x-0 "
              >
                Usama
              </div>
            </div>

            {/* DESKTOP MENU */}
            <ul className="hidden md:flex items-center gap-6 ">
              {sections.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="relative cursor-pointer group flex items-center gap-2"
                >
                  {/* ICON */}
                  <span
                    className={`transition-colors duration-300
          ${
            active === item.id
              ? "text-[#1CD8D2]"
              : "text-white/80 group-hover:text-white"
          }`}
                  >
                    {item.icon}
                  </span>

                  {/* LABEL */}
                  <span
                    className={`text-sm font-medium transition-colors duration-300
          ${
            active === item.id
              ? "text-[#1CD8D2]"
              : "text-white/80 group-hover:text-white"
          }`}
                  >
                    {item.label}
                  </span>

                  {/* UNDERLINE */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#1CD8D2] transition-all duration-300 ease-out
          ${active === item.id ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </li>
              ))}

              {/* Simple glow button, no bounce animation / blur overlay */}
              <Button
                onClick={() => scrollTo("contact")}
                variant="glowStatic"
                size="sm"
              >
                Contact Us
              </Button>
            </ul>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-8 h-6 flex flex-col justify-between items-center z-50"
            >
              {/* Top line */}
              <span
                className={`block h-0.5 w-full bg-white rounded transition-transform duration-500 ease-in-out origin-center
                  ${open ? "rotate-360" : "rotate-0"}`}
              />
              {/* Middle line */}
              <span
                className={`block h-0.5 w-full bg-white rounded transition-transform duration-500 ease-in-out origin-center
                   ${open ? "rotate-180" : "rotate-0"}`}
              />
              {/* Bottom line */}
              <span
                className={`block h-0.5 w-full bg-white rounded transition-transform duration-500 ease-in-out origin-center
                  ${open ? "-rotate-360" : "rotate-0"}`}
              />
            </button>
          </div>

          {/* MOBILE MENU (SMOOTH + GLASS) */}
          <div
            className={`
            md:hidden overflow-hidden
            transition-all duration-1000 ease-in-out
            ${open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}
          `}
          >
            <div className="px-10 py-6 space-y-5 backdrop-blur-xl bg-black/40">
              {sections.map((item) => (
                <div
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`text-sm cursor-pointer flex items-center gap-6 transition-colors duration-300
             ${active === item.id ? "text-sky-400" : "text-white/80 hover:text-white"}`}
                >
                  {item.icon} {item.label}
                </div>
              ))}

              {/* MOBILE CONTACT BUTTON: same shared glow button, full width */}
              <Button
                onClick={() => scrollTo("contact")}
                variant="glow"
                fullWidth
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
}
