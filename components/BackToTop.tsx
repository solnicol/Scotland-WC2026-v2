"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShow(window.scrollY > 200);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed z-40 w-11 h-11 flex items-center justify-center rounded-full border border-line text-navy-200 backdrop-blur-md transition-colors hover:text-gold hover:border-gold/50"
      style={{
        bottom: "max(20px, env(safe-area-inset-bottom))",
        right: "max(20px, env(safe-area-inset-right))",
        background: "oklch(0.21 0.06 264 / 0.85)",
      }}
      initial={false}
      animate={
        show
          ? { opacity: 1, y: 0, pointerEvents: "auto" }
          : { opacity: 0, y: 8, pointerEvents: "none" }
      }
      transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 15V6M6 10l4-4 4 4" />
      </svg>
    </motion.button>
  );
}
