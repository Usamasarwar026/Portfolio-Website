import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, SKILLS } from "../../constant/constant";

function SkillCard({ skill }) {
  const Icon = skill.icon;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col items-center justify-center gap-3 py-6 px-4 rounded-xl bg-white/[0.03] border border-white/10 overflow-hidden"
    >
      {/* glow on hover, tinted with the skill's own brand color */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at 50% 0%, ${skill.color}33 0%, transparent 70%)`,
        }}
      />
      <div
        className="relative w-12 h-12 flex items-center justify-center rounded-lg border border-white/10 bg-[#1f1119] transition-transform duration-300 group-hover:scale-110"
        style={{ boxShadow: `0 0 0 0 ${skill.color}00` }}
      >
        <Icon size={26} color={skill.color} />
      </div>
      <span className="relative font-mono text-xs text-[#D8C7CE] group-hover:text-[#F5E9DE] transition-colors text-center">
        {skill.name}
      </span>
    </motion.div>
  );
}

function SkillsMarquee({ skills, direction = "left", speedPerItem = 1.6 }) {
  // Duplicate the array so translating by -50% loops seamlessly.
  const track = [...skills, ...skills];
  const duration = skills.length * speedPerItem;

  const animate =
    direction === "left" ? { x: ["0%", "-50%"] } : { x: ["-50%", "0%"] };

  return (
    <div
      className="relative w-full mt-24 overflow-hidden"
      // fade the edges so icons don't hard-cut at the container border
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <motion.div
        className="flex items-center gap-10 w-max"
        animate={animate}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {track.map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-2 shrink-0 px-4 py-2 rounded-lg border border-white/10 bg-white/[0.03]"
            >
              <Icon size={20} color={skill.color} />
              <span className="font-mono text-xs text-[#D8C7CE] whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default function Skills({ id }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section
      id={id}
      className="w-full min-h-screen py-24 bg-[#291522] relative overflow-hidden"
    >
      {/* ambient glow, consistent with rest of the site */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 right-0 w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
        style={{
          background: "radial-gradient(circle, #F0A868 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5E9DE] mb-10"
        >
          Skills
        </motion.h2>

        {/* category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative cursor-pointer px-4 py-2 rounded-full font-mono text-sm text-[#D8C7CE] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A868]"
            >
              {active === cat && (
                <motion.span
                  layoutId="active-tab"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  className="absolute inset-0 rounded-[13px] bg-[#1ac7c1] shadow-[0_0_16px_rgba(45,212,191,0.5)] cursor-pointer"
                />
              )}
              <span
                className={`relative z-10 ${active === cat ? "text-[#291522] font-semibold" : ""}`}
              >
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* skills grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <SkillsMarquee skills={SKILLS} direction="left" />
    </section>
  );
}
