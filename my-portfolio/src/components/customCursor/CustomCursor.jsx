import React, { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      target.current.x = e.clientX - 40;
      target.current.y = e.clientY - 40;
    };

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.15;
      current.current.y += (target.current.y - current.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }

      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("mousemove", moveHandler);

    // Hover effect
    const addHover = () => cursorRef.current.classList.add("scale-150");
    const removeHover = () => cursorRef.current.classList.remove("scale-150");

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // Click pulse
    const clickEffect = () => {
      cursorRef.current.classList.add("scale-75");
      setTimeout(() => {
        cursorRef.current.classList.remove("scale-75");
      }, 150);
    };

    window.addEventListener("mousedown", clickEffect);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mousedown", clickEffect);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-9999 transition-transform duration-150"
    >
      <div className="w-20 h-20 rounded-full bg-linear-to-r from-pink-500 to-blue-500 blur-3xl opacity-80"></div>
    </div>
  );
}
