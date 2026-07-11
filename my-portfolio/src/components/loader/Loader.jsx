// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import ParticlesBackground from "../particlesBackground/ParticlesBackground";

// const circles = Array.from({ length: 12 });
// const dots = [0, 1, 2];

// const Loader = () => {
//   return (
//     <motion.div
//       className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black"
//       initial={{ opacity: 1 }}
//       animate={{ opacity: 1 }} 
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.5, ease: "easeInOut" }}
//     >
//       {/* Background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-[#300126] via-[#5f0e54] to-[#2e072b] animate-gradient" />
//       <ParticlesBackground />
//       {/* 3D Globe */}
//       <div className="relative z-10 w-56 h-56 perspective-[1200px]">
//         {circles.map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute inset-0 rounded-full border border-[#0FB9AE]
// "
//             style={{
//               transformStyle: "preserve-3d",
//               transform: `rotateY(${i * 30}deg) rotateX(${i * 15}deg) translateZ(${Math.sin(i) * 60}px)`,
//             }}
//             animate={{ rotateY: 360, rotateX: 360 }}
//             transition={{
//               duration: 1.5 + i * 0.5,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Bouncing Dots */}
//       <div className="absolute bottom-[20%] flex gap-3 z-10">
//         {dots.map((i) => (
//           <motion.span
//             key={i}
//             className="w-3 h-3 rounded-full bg-[#0FB9AE]"
//             animate={{
//               y: [0, -12, 0],
//               opacity: [0.3, 1, 0.3],
//               scale: [1, 1.3, 1],
//             }}
//             transition={{
//               duration: 0.8,
//               repeat: Infinity,
//               delay: i * 0.2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Animated Name */}
//       <motion.div
//         className="absolute bottom-[12%] flex gap-3 z-10 font-bold font-mono text-white text-xl"
//         animate={{
//           opacity: [0, 1, 1, 0],
//           scale: [0.8, 1, 1, 0.8],
//           y: [10, 0, 0, 10],
//         }}
//         transition={{
//           duration: 2.8,
//           repeat: Infinity,
//           repeatDelay: 0.2,
//           ease: "easeInOut",
//         }}
//       >
//         Usama Sarwar
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Loader;






import React, { useEffect, useRef, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import ParticlesBackground from "../particlesBackground/ParticlesBackground";

const BOOT_LINES = [
  "initializing environment",
  "loading assets",
  "compiling components",
  "rendering interface",
];

const NAME = "M. USAMA SARWAR";
const GLITCH_CHARS = "!@#$%^&*<>[]{}01#$%_/\\";

/* Hacker-style decode effect: scrambles characters then resolves them
   one-by-one into the real name, left to right. */
function useDecodeText(target, start) {
  const [display, setDisplay] = useState(() => target.split("").map(() => " "));
  const iterationRef = useRef(0);

  useEffect(() => {
    if (!start) return undefined;

    iterationRef.current = 0;
    const totalIterations = target.length * 3 + 10;

    const interval = setInterval(() => {
      const iterations = iterationRef.current;

      setDisplay(
        target.split("").map((char, i) => {
          if (char === " ") return " ";
          const revealAt = i * 2.2;
          if (iterations >= revealAt + 5) return char;
          if (iterations >= revealAt) {
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          }
          return " ";
        })
      );

      iterationRef.current += 1;
      if (iterationRef.current > totalIterations) clearInterval(interval);
    }, 40);

    return () => clearInterval(interval);
  }, [start, target]);

  return display.join("");
}

// total time the loader stays on screen before calling onFinish.
// change this ONE number to speed up / slow down the whole sequence —
// everything else (lines, decode, progress bar) scales off it.
const TOTAL_DURATION = 2800;
const LINE_INTERVAL = Math.floor((TOTAL_DURATION * 0.42) / BOOT_LINES.length);
const HOLD_AFTER_DECODE = 500;

const Loader = ({ onFinish }) => {
  const [visibleLines, setVisibleLines] = useState(0);
  const [percent, setPercent] = useState(0);
  const nameStart = visibleLines >= BOOT_LINES.length;
  const decodedName = useDecodeText(NAME, nameStart);

  // reveal boot lines one by one
  useEffect(() => {
    if (visibleLines >= BOOT_LINES.length) return undefined;
    const timeout = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, LINE_INTERVAL);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  // progress counter synced to TOTAL_DURATION
  useEffect(() => {
    const stepTime = 20;
    const steps = TOTAL_DURATION / stepTime;
    let current = 0;

    const interval = setInterval(() => {
      current += 1;
      const next = Math.min(100, Math.round((current / steps) * 100));
      setPercent(next);
      if (next >= 100) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // tell the parent exactly when the full sequence has finished playing,
  // instead of the parent guessing a fixed timeout.
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (onFinish) onFinish();
    }, TOTAL_DURATION + HOLD_AFTER_DECODE);
    return () => clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-black"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <span className="sr-only">Loading, please wait...</span>

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#300126] via-[#170d13] to-[#0a0508]" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(#0FB9AE 1px, transparent 1px), linear-gradient(90deg, #0FB9AE 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
      <ParticlesBackground />

      {/* Terminal window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-[90vw] max-w-md rounded-xl overflow-hidden border border-[#0FB9AE]/30 bg-[#0d0710]/90 shadow-[0_0_60px_-10px_rgba(15,185,174,0.35)] backdrop-blur-sm"
      >
        {/* title bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#170d13] border-b border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="flex-1 text-center font-mono text-[11px] text-[#B79AA8] tracking-wide">
            usama@portfolio — zsh
          </span>
        </div>

        {/* body */}
        <div className="px-5 py-6 font-mono text-[13px] sm:text-sm min-h-[220px] flex flex-col">
          <div className="space-y-1.5 flex-1">
            {BOOT_LINES.map((line, i) => {
              const done = i < visibleLines;
              const active = i === visibleLines;
              if (!done && !active) return null;
              return (
                <motion.div
                  key={line}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2 text-[#D8C7CE]"
                >
                  <span className={done ? "text-[#2DD4BF]" : "text-[#B79AA8]"}>
                    {done ? "✓" : "…"}
                  </span>
                  <span className="text-[#B79AA8]">$</span>
                  <span>{line}</span>
                </motion.div>
              );
            })}
          </div>

          {/* decoded name reveal */}
          <div className="mt-5 min-h-[2.5rem] flex items-center">
            <AnimatePresence>
              {nameStart && (
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl sm:text-2xl font-extrabold tracking-[0.15em] text-[#F5E9DE]"
                >
                  {decodedName}
                  <span className="inline-block w-[2px] h-5 sm:h-6 bg-[#2DD4BF] ml-1 align-middle animate-pulse" />
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* progress bar */}
          <div className="mt-4">
            <div className="flex justify-between font-mono text-[10px] text-[#B79AA8] mb-1.5">
              <span>booting</span>
              <span>{percent}%</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#2DD4BF] to-[#0FB9AE]"
                initial={{ width: "0%" }}
                animate={{ width: `${percent}%` }}
                transition={{ ease: "linear", duration: 0.02 }}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;