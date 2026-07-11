/* eslint-disable no-unused-vars */
import React from "react";
import ParticlesBackground from "../../components/particlesBackground/ParticlesBackground";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { IMAGES } from "../../constant/image";
import { SiLeetcode } from "react-icons/si";
import Button from "../../components/button/Button";
import { DESCRIPTION, ROLES, SOCIALS } from "../../constant/constant";

export default function Hero({ id }) {
  const glowVariants = {
    initial: {
      scale: 1,
      y: 0,
      filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
    },
    hover: {
      scale: 1.25,
      y: -4,
      filter:
        "drop-shadow(0 0 10px rgba(13, 148, 136, 0.9)) drop-shadow(0 0 22px rgba(56, 189, 248, 0.8))",
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.08 },
    },
  };

  return (
    <section
      id={id}
      className="w-full min-h-screen relative bg-[#250a1c] overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        {/* Top-left floating blur */}
        <div
          className="absolute -top-24 -left-24
                        w-[60vw] sm:w-[45vw] md:w-[35vw]
                        h-[60vw] sm:h-[45vw] md:h-[35vw]
                        max-w-[450px] max-h-[450px]
                        rounded-full
                        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                        opacity-25 sm:opacity-15 md:opacity-10
                        blur-[90px] sm:blur-[120px] md:blur-[140px]
                        animate-pulse"
        ></div>

        {/* Bottom-right floating blur */}
        <div
          className="absolute -bottom-16 -right-16
                        w-[50vw] sm:w-[35vw] md:w-[25vw]
                        h-[50vw] sm:h-[35vw] md:h-[25vw]
                        max-w-[350px] max-h-[350px]
                        rounded-full
                        bg-gradient-to-r from-[#302b63] via-[#00bf8f] to-[#1cd8d2]
                        opacity-20 sm:opacity-10 md:opacity-5
                        blur-[90px] sm:blur-[120px] md:blur-[140px]
                        animate-pulse delay-500"
        ></div>
      </div>
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-4 lg:px-20 pt-36 grid grid-cols-1 md:grid-cols-5">
        <div className="flex flex-col justify-center pt-7 md:pr-8 md:col-span-3 h-full text-center md:text-left relative">
          <div className="w-full mx-auto max-w-[48rem] ">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font fw-semibold text-white tracking-wide min-h-[1,6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-3 text-lg sm:text-xl md:text-xl lg:text-2xl font-semibold text-white tracking-wide min-h-[1em]">
                I am a{" "}
                <span className="text-cyan-400">
                  <Typewriter
                    words={ROLES}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={100}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </span>
            </motion.div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello I'm <br />
              <span className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap ">
                Usama Sarwar
              </span>
            </motion.h1>
            <motion.p
              className="mt-3 text-base sm:text-lg md:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {DESCRIPTION}
            </motion.p>
            <motion.div
              className="mt-4 flex flex-wrap items-center justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button href="#projects" variant="glow" size="md">
                My Work
              </Button>
              <Button
                href="/Resume.pdf"
                target="_blank"
                variant="outline"
                size="md"
              >
                View
              </Button>
              <Button href="/Resume.pdf" download variant="outline" size="md">
                Download
              </Button>
            </motion.div>

            <motion.div
              className="mt-5 flex gap-4 text-lg justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              {SOCIALS.map(({ Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className="p-3 rounded-full text-gray-300 
                 bg-white/5 backdrop-blur-md 
                 border border-transparent
                 hover:text-[#1CD8D2] hover:bg-[#1CD8D2]/10 hover:border-[#1CD8D2]/40
                 transition-colors duration-300"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        <motion.div
          className="relative my-16 w-72 h-72 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute inset-0
               rounded-full border-4 border-transparent border-t-[#ccbbbb] border-r-[#a9ccc3] border-b-[#5baf93] border-l-[#058d6b] shadow-[0_0_60px_rgba(28,216,210,0.7)]"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          ></motion.div>

          <div className="absolute inset-1 rounded-full overflow-hidden bg-[#291522]">
            <img
              src={IMAGES.PROFILEPIC}
              alt="Usama"
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
