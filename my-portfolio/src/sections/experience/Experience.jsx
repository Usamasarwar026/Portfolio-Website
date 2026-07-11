import React, { useRef } from "react";
import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { EXPERIENCE } from "../../constant/constant";

function ExperienceCard({ item, index }) {
  const reduceMotion = useReducedMotion();
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex md:justify-center">
      {/* dot on the timeline */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-4 md:left-1/2 top-6 md:-translate-x-1/2 z-20 w-4 h-4 rounded-full bg-[#2DD4BF] shadow-[0_0_12px_#2DD4BF] border-4 border-[#291522]"
      />

      {/* card */}
      <motion.div
        initial={{
          opacity: 0,
          x: reduceMotion ? 0 : isLeft ? -60 : 60,
          y: reduceMotion ? 0 : 20,
        }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`
          w-full pl-12 md:pl-0
          md:w-[44%]
          ${isLeft ? "md:mr-auto md:pr-10 " : "md:ml-auto md:pl-10"}
        `}
      >
        <div className="rounded-xl border border-white/10 bg-[#1f1119] hover:border-[#2DD4BF]/40 transition-colors duration-300 p-6 shadow-xl">
          <h3 className="text-lg md:text-xl font-bold text-[#F5E9DE]">
            {item.role}
          </h3>
          <p className="text-sm text-[#2DD4BF] font-mono mt-1 mb-3">
            {item.company} | {item.duration}
          </p>
          <p className="text-[#B79AA8] text-sm leading-relaxed text-justify">
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Experience({ id }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id={id}
      ref={containerRef}
      className="w-full min-h-screen py-24 bg-[#291522] relative overflow-hidden"
    >
      {/* ambient glow, teal this time */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, #2DD4BF 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F5E9DE] text-center mb-20"
        >
          Experience
        </motion.h2>

        {/* timeline wrapper */}
        <div className="relative">
          {/* track line (static, faint) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/10" />

          {/* fill line (animated with scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] bg-gradient-to-b from-[#2DD4BF] to-[#2DD4BF]/40 shadow-[0_0_8px_#2DD4BF]"
          />

          <div className="flex flex-col gap-14 md:gap-20">
            {EXPERIENCE.map((item, i) => (
              <ExperienceCard
                key={item.role + item.duration}
                item={item}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
