import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const VARIANT_STYLES = {
  glow:
    "text-[#0b1f1c] bg-[#1ac7c1] border-2 border-[#1ac7c1] " +
    "shadow-[0_0_16px_rgba(45,212,191,0.5)] " +
    "hover:bg-transparent hover:text-[#1ac7c1] " +
    "hover:shadow-[0_0_22px_rgba(45,212,191,0.65)]",

  glowStatic:
    "text-[#2DD4BF] bg-transparent border-2 border-[#2DD4BF] " +
    "shadow-[0_0_16px_rgba(45,212,191,0.5)] " +
    "hover:shadow-[0_0_22px_rgba(45,212,191,0.65)]",

  outline:
    "text-white bg-transparent border-2 border-white/25 shadow-none " +
    "hover:border-[#2DD4BF] hover:text-[#2DD4BF] " +
    "hover:shadow-[0_0_16px_rgba(45,212,191,0.4)]",

  purple:
    "text-[#f3f3f3] bg-transparent border-2 border-[#5f1649] shadow-none " +
    "hover:bg-[#a54364] hover:text-white " +
    "hover:shadow-[0_0_18px_rgba(109,91,208,0.55)]",
};

const SIZE_STYLES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "glow",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  fullWidth = false,
  download,
  target,
  rel,
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[13px] font-medium " +
    "transition-all duration-300 select-none whitespace-nowrap";

  const classes = [
    base,
    VARIANT_STYLES[variant] ?? VARIANT_STYLES.glow,
    SIZE_STYLES[size] ?? SIZE_STYLES.md,
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//.test(href);
    return (
      <motion.a
        href={href}
        onClick={onClick}
        download={download}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
        className={classes}
        {...motionProps}
        {...rest}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      {...motionProps}
      {...rest}
    >
      {content}
    </motion.button>
  );
}
