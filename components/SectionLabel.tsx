"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold mt-[clamp(48px,11vw,64px)] mb-2">
      <span>{children}</span>
      <motion.span
        aria-hidden="true"
        className="flex-1 h-px bg-gold/50"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
      />
    </div>
  );
}
