import React, { useState, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Button from "../../components/button/Button";
import { ROLES } from "../../constant/constant";

const SKILLS = [
  "Java",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
];

export default function About({ id, name = "  Usama Sarwar", photo = null }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section
      id={id}
      className="w-full min-h-screen pt-[90px] bg-[#291522] relative overflow-hidden"
    >
      {/* ambient background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, #7C3F63 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #F0A868 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5E9DE] mb-14"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 lg:gap-16 items-start">
          {/* LEFT: editor-window styled photo */}
          <motion.div
            initial={{ opacity: 0, x: reduceMotion ? 0 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto lg:mx-0 w-full max-w-[340px]"
          >
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1f1119] shadow-2xl">
              {/* fake title bar */}
              <div className="flex items-center gap-2 px-4 py-2.5 bg-[#170d13] border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="ml-3 font-mono text-xs text-[#B79AA8]">
                  profile Picture
                </span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-[#3a1d30] to-[#1f1119] flex items-center justify-center">
                {photo ? (
                  <img
                    src={photo}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-mono text-6xl text-[#F0A868]/40">
                    {"{ }"}
                  </span>
                )}
              </div>
            </div>

            {/* floating availability badge */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-4 bg-[#1f1119] border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#28c840] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#28c840]" />
              </span>
              <span className="font-mono text-xs text-[#F5E9DE]">
                Available for work
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT: content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-[#F5E9DE] mb-2"
            >
              {name}
            </motion.h3>

            {/* animated rotating role */}
            <motion.div
              variants={itemVariants}
              className="h-7 mb-5 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={ROLES[roleIndex]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="font-mono text-teal-500 text-base"
                >
                  {ROLES[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-[#D8C7CE] leading-relaxed mb-4 max-w-xl"
            >
              I'm a Software Engineer and Full Stack Developer, passionate about
              building modern web and mobile applications, solving real-world
              problems, and creating scalable, user-focused solutions.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="text-[#D8C7CE] leading-relaxed mb-8 max-w-xl"
            >
              I love turning ideas into scalable, user-friendly applications
              that solve real-world problems and deliver meaningful experiences.
            </motion.p>

            {/* code-style stats instead of generic boxes */}
            <motion.div
              variants={itemVariants}
              className="font-mono text-sm bg-[#1f1119] border border-white/10 rounded-lg p-5 mb-8 max-w-xl"
            >
              <p className="text-[#B79AA8]">
                <span className="text-[#F0A868]">const</span> experience ={" "}
                <span className="text-[#8fd19e]">"1+ years"</span>;
              </p>
              <p className="text-[#B79AA8]">
                <span className="text-[#F0A868]">const</span> specialty ={" "}
                <span className="text-[#8fd19e]">"Full Stack"</span>;
              </p>
              <p className="text-[#B79AA8]">
                <span className="text-[#F0A868]">const</span> focus ={" "}
                <span className="text-[#8fd19e]">"Performance & UX"</span>;
              </p>
            </motion.div>

            {/* skill chips */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-2 mb-9"
            >
              {SKILLS.map((skill) => (
                <motion.span
                  key={skill}
                  whileHover={
                    reduceMotion ? {} : { y: -3, borderColor: "#26a1a1" }
                  }
                  className="font-mono text-xs px-3 py-1.5 rounded-full border border-white/10 text-[#D8C7CE] bg-white/5"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTAs — now the shared Button component: one glow (primary),
                one outline (secondary) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button href="#projects" variant="glow" size="md">
                View Projects
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
