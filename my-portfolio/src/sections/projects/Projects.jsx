"use client";
import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowDown } from "react-icons/fi";
import Button from "../../components/button/Button";
import { IMAGES } from "../../constant/image";
import { PROJECTS } from "../../constant/constant";
import { Link } from "react-router-dom";

function TechTags({ stack }) {
  return (
    <div className="relative flex flex-wrap gap-2 mb-6">
      {stack.map((tech) => (
        <span
          key={tech}
          className="font-mono text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[#D8C7CE]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectLinks({ project }) {
  return (
    <div className="relative flex items-center gap-3 sm:gap-4">
      <Button
        href={project.live}
        variant="solid"
        size="md"
        className="!px-5 sm:!px-6 !py-2.5 sm:!py-3 !text-sm"
      >
        View Project
      </Button>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub repository"
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg border border-white/15 text-[#F5E9DE] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors shrink-0"
      >
        <FiGithub size={18} />
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        aria-label="Live demo"
        className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg border border-white/15 text-[#F5E9DE] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors shrink-0"
      >
        <FiExternalLink size={18} />
      </a>
    </div>
  );
}

function BrowserMockup({ project, compact = false }) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1f1119] shadow-2xl">
      <div className="flex items-center gap-3 px-4 py-2 sm:py-2.5 bg-[#170d13] border-b border-white/5">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 mx-2 px-3 py-1 rounded-md bg-white/5 font-mono text-[10px] sm:text-[11px] text-[#B79AA8] truncate">
          {project.live}
        </div>
      </div>
      <div
        className={`${
          compact ? "aspect-video" : "aspect-video"
        } bg-gradient-to-br from-[#3a1d30] to-[#1f1119] flex items-center justify-center`}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="font-mono text-4xl sm:text-5xl text-[#2DD4BF]/30">
            {"{ }"}
          </span>
        )}
      </div>
    </div>
  );
}

/* Desktop / tablet version: pinned scroll storytelling (md and up)    */

function ProjectPanel({ project, index, total, scrollYProgress }) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const fadeIn = start + seg * 0.15;
  const fadeOutStart = end - seg * 0.15;

  const isFirst = index === 0;
  const isLast = index === total - 1;

  const range = isFirst
    ? [0, fadeOutStart, end]
    : isLast
      ? [start, fadeIn, end]
      : [start, fadeIn, fadeOutStart, end];

  const opacity = useTransform(
    scrollYProgress,
    range,
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );

  const textX = useTransform(
    scrollYProgress,
    range,
    isFirst ? [0, 0, -50] : isLast ? [-50, 0, 0] : [-50, 0, 0, -50],
  );

  const imageX = useTransform(
    scrollYProgress,
    range,
    isFirst ? [0, 0, 50] : isLast ? [50, 0, 0] : [50, 0, 0, 50],
  );
  const imageScale = useTransform(
    scrollYProgress,
    range,
    isFirst ? [1, 1, 0.94] : isLast ? [0.94, 1, 1] : [0.94, 1, 1, 0.94],
  );

  return (
    <motion.div
      style={{ opacity, pointerEvents: "none" }}
      className="absolute inset-0 flex items-center px-8 lg:px-16"
    >
      <ActivePanelContent
        project={project}
        index={index}
        textX={textX}
        imageX={imageX}
        imageScale={imageScale}
      />
    </motion.div>
  );
}

function ActivePanelContent({ project, index, textX, imageX, imageScale }) {
  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center pointer-events-auto">
      {/* LEFT: text content */}
      <motion.div
        style={{ x: textX }}
        className="relative z-10 order-2 md:order-1"
      >
        <span className="absolute -top-8 lg:-top-10 -left-2 font-mono text-6xl lg:text-8xl font-extrabold text-white/5 select-none -z-10">
          {String(index + 1).padStart(2, "0")}
        </span>

        <p className="relative font-mono text-xs tracking-widest text-[#2DD4BF] mb-3">
          {project.category}
        </p>

        <h3 className="relative text-3xl lg:text-4xl font-extrabold text-[#F5E9DE] mb-4">
          {project.title}
        </h3>

        <p className="relative text-[#B79AA8] text-sm lg:text-base leading-relaxed mb-5 max-w-md">
          {project.description}
        </p>

        <TechTags stack={project.stack} />
        <ProjectLinks project={project} />
      </motion.div>

      <motion.div
        style={{ x: imageX, scale: imageScale }}
        className="relative z-0 order-1 md:order-2 md:-ml-6 lg:-ml-10"
      >
        <BrowserMockup project={project} />
      </motion.div>
    </div>
  );
}

function DesktopScrollProjects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const total = PROJECTS.length;

  const activeDotOpacity = PROJECTS.map((_, i) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(
      scrollYProgress,
      [i / total, (i + 0.5) / total, (i + 1) / total],
      [0.3, 1, 0.3],
    ),
  );

  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${total * 120}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        <div className="pt-24 pb-2 shrink-0">
          <div className="relative flex items-center justify-center px-6 lg:px-16">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-[#F5E9DE]">
              My Work
            </h2>
            <Button
              variant="outline"
              href="/projects"
              size="sm"
              className="!px-6 !py-2.5 !text-sm absolute right-6 lg:right-16 top-1/2 -translate-y-1/2"
            >
              View All Projects
            </Button>
          </div>
        </div>

        <div className="relative flex-1">
          {PROJECTS.map((project, i) => (
            <ProjectPanel
              key={project.title}
              project={project}
              index={i}
              total={total}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>

        <div className="hidden lg:flex flex-col gap-3 absolute right-8 top-1/2 -translate-y-1/2">
          {PROJECTS.map((_, i) => (
            <motion.span
              key={i}
              style={{ opacity: activeDotOpacity[i] }}
              className="w-2 h-2 rounded-full bg-[#2DD4BF]"
            />
          ))}
        </div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#B79AA8]"
        >
          <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
          <FiArrowDown size={14} />
        </motion.div>
      </div>
    </div>
  );
}

function MobileProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative px-5 sm:px-8 py-10"
    >
      <span className="absolute top-2 left-3 font-mono text-6xl font-extrabold text-white/5 select-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10 mb-5">
        <BrowserMockup project={project} compact />
      </div>

      <div className="relative z-10">
        <p className="font-mono text-xs tracking-widest text-[#2DD4BF] mb-2">
          {project.category}
        </p>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F5E9DE] mb-3">
          {project.title}
        </h3>
        <p className="text-[#B79AA8] text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <TechTags stack={project.stack} />
        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
}

function MobileProjects() {
  return (
    <div className="w-full">
      <div className="pt-16 pb-2 text-center">
        <h2 className="text-3xl font-extrabold text-[#F5E9DE]">My Work</h2>
      </div>
      <div className="divide-y divide-white/5">
        {PROJECTS.map((project, i) => (
          <MobileProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Projects({ id }) {
  return (
    <section id={id} className="relative w-full bg-[#291522]">
      <div className="md:hidden overflow-hidden">
        <MobileProjects />
      </div>
      <div className="hidden md:block">
        <DesktopScrollProjects />
      </div>
    </section>
  );
}
