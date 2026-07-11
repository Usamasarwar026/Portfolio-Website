import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import Button from "../../components/button/Button"; // adjust path if your file lives elsewhere
import { PROJECTS } from "../../constant/constant"; // adjust path if your file lives elsewhere

/* ---------- small pieces (self-contained, same visual language as Projects section) ---------- */

function TechTags({ stack }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {stack.map((tech) => (
        <span
          key={tech}
          className="font-mono text-[10px] sm:text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[#D8C7CE]"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.05, ease: "easeOut" }}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-[#2DD4BF]/40 transition-all duration-300 hover:-translate-y-1.5"
    >
      {/* image / browser mockup */}
      <div className="relative overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-[#170d13] border-b border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]" />
        </div>
        <div className="relative aspect-video bg-gradient-to-br from-[#3a1d30] to-[#1f1119] overflow-hidden">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-mono text-4xl text-[#2DD4BF]/30">
                {"{ }"}
              </span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#170d13] via-transparent to-transparent opacity-70" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">
        <p className="font-mono text-[10px] sm:text-xs tracking-widest text-[#2DD4BF] mb-2">
          {project.category}
        </p>
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#F5E9DE] mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-[#B79AA8] text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="mt-auto">
          <TechTags stack={project.stack} />

          <div className="flex items-center gap-3">
            <Button
              href={project.live}
              variant="solid"
              size="sm"
              className="!px-4 !py-2 !text-xs sm:!text-sm flex-1 text-center"
            >
              View Project
            </Button>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-white/15 text-[#F5E9DE] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors shrink-0"
            >
              <FiGithub size={16} />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live demo"
              className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg border border-white/15 text-[#F5E9DE] hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors shrink-0"
            >
              <FiExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ---------- main page ---------- */

export default function AllProjects() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen w-full bg-[#291522]"
    >
      {/* top nav */}
      <div className="sticky top-0 z-20 backdrop-blur-md bg-[#291522]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-[#F5E9DE] hover:text-[#2DD4BF] transition-colors font-mono text-sm"
          >
            <FiArrowLeft size={18} />
            Back to Home
          </Link>

          {/* replace this with your logo component if you have one */}
          <Link
            to="/"
            className="font-extrabold text-[#F5E9DE] text-lg tracking-tight"
          >
            U<span className="text-[#2DD4BF]">sama</span>
          </Link>
        </div>
      </div>

      {/* header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-8 text-center">
        <p className="font-mono text-xs tracking-widest text-[#2DD4BF] mb-3">
          PORTFOLIO
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#F5E9DE] mb-4">
          All Projects
        </h1>
        <p className="text-[#B79AA8] text-sm sm:text-base max-w-xl mx-auto">
          A complete collection of everything I&apos;ve built — full stack apps,
          mobile apps, and frontend designs.
        </p>
      </div>

      {/* category filters */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-10">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs sm:text-sm px-4 py-2 rounded-full border transition-colors ${
                activeCategory === cat
                  ? "bg-[#2DD4BF] text-[#170d13] border-[#2DD4BF] font-semibold"
                  : "border-white/15 text-[#B79AA8] hover:border-[#2DD4BF] hover:text-[#2DD4BF]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pb-24">
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#B79AA8] mt-16">
            No projects found in this category.
          </p>
        )}
      </div>
    </motion.main>
  );
}
