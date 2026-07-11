import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiArrowUp,
  FiMail,
} from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { NAV_LINKS, SOCIALS, EMAIL_ADDRESS } from "../../constant/constant";

function scrollToId(e, href) {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#1f1119] border-t border-white/10 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
        style={{
          background: "radial-gradient(circle, #2DD4BF 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 pb-12 border-b border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-widest text-[#2DD4BF] mb-2">
              &lt;/ Usama Sarwar&gt;
            </p>
            <p className="text-[#B79AA8] text-sm leading-relaxed max-w-xs">
              Full Stack Developer crafting clean, scalable web experiences with
              modern tools.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="font-mono text-xs tracking-widest text-[#F5E9DE] mb-4">
              QUICK LINKS
            </p>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToId(e, link.href)}
                    className="text-[#B79AA8] text-sm hover:text-[#2DD4BF] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="font-mono text-xs tracking-widest text-[#F5E9DE] mb-4">
              GET IN TOUCH
            </p>
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="flex items-center gap-2 text-[#B79AA8] text-sm hover:text-[#2DD4BF] transition-colors mb-5"
            >
              <FiMail size={15} />
              {EMAIL_ADDRESS}
            </a>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, Icon, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{
                    y: -4,
                    borderColor: "#2DD4BF",
                    color: "#2DD4BF",
                  }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 text-[#D8C7CE] transition-colors"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-4 pt-6">
          <p className="font-mono text-xs text-[#2DD4BF] text-center sm:text-left">
            &copy; {year} Usama Sarwar. All rights reserved.
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-[#D8C7CE] text-xs font-mono hover:border-[#2DD4BF] hover:text-[#2DD4BF] transition-colors"
          >
            Back to top <FiArrowUp size={13} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
