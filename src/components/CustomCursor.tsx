"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hover, setHover]     = useState(false);
  const [mounted, setMounted] = useState(false);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 450, damping: 30, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 450, damping: 30, mass: 0.4 });

  useEffect(() => {
    setMounted(true);
    const move = (e: MouseEvent) => { rawX.set(e.clientX); rawY.set(e.clientY); };
    const enter = () => setHover(true);
    const leave = () => setHover(false);

    window.addEventListener("mousemove", move, { passive: true });
    const els = document.querySelectorAll("a, button, [data-cursor]");
    els.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });

    return () => {
      window.removeEventListener("mousemove", move);
      els.forEach((el) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0, left: 0,
          x, y,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          width: hover ? 40 : 32,
          height: hover ? 40 : 32,
          borderRadius: "50%",
          border: `1px solid ${hover ? "rgba(34,211,238,0.7)" : "rgba(255,255,255,0.25)"}`,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="hidden md:block"
        style={{
          position: "fixed",
          top: 0, left: 0,
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
          pointerEvents: "none",
          zIndex: 9999,
          width: hover ? 6 : 5,
          height: hover ? 6 : 5,
          borderRadius: "50%",
          background: hover ? "var(--cyan)" : "rgba(255,255,255,0.7)",
          transition: "background 0.2s, width 0.2s, height 0.2s",
        }}
      />
    </>
  );
}
