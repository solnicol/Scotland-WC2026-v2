"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEgg } from "@/lib/egg-context";

export function BicycleOverlay() {
  const { active, close } = useEgg();

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="bike"
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[oklch(0.15_0.05_264/0.92)] backdrop-blur-md"
          style={{
            padding:
              "max(24px, env(safe-area-inset-top)) 0 max(24px, env(safe-area-inset-bottom))",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
          onClick={close}
          onContextMenu={(e) => e.preventDefault()}
          aria-hidden="true"
        >
          <motion.div
            className="relative w-[min(86vw,380px)]"
            initial={{ scale: 0.97 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <motion.div
              className="relative rounded-[14px] overflow-hidden aspect-[9/16]"
              style={{
                boxShadow:
                  "0 30px 80px oklch(0.10 0.04 264 / 0.7), 0 0 0 1px oklch(0.80 0.115 85 / 0.5), inset 0 0 0 1px oklch(0.97 0.01 264 / 0.06)",
              }}
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              exit={{ clipPath: "inset(0 100% 0 0)" }}
              transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1], delay: 0.15 }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${active.video}?autoplay=1&mute=1&playsinline=1`}
                className="block w-full h-full absolute inset-0"
                title={`${active.big} — ${active.moment}`}
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              />
            </motion.div>

            <motion.div
              className="mt-5 text-center"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1], delay: 1.3 }}
            >
              <div className="font-bold uppercase tracking-[0.04em] text-paper text-[clamp(22px,7vw,30px)]">
                {active.big}
              </div>
              <div className="mt-2 font-semibold uppercase tracking-[0.16em] text-gold text-[clamp(13px,3.8vw,15px)]">
                {active.moment}
              </div>
              <div className="mt-2.5 font-medium uppercase tracking-[0.22em] text-navy-400 text-[10.5px]">
                {active.sub}
              </div>
            </motion.div>

            <motion.div
              className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-navy-500"
              style={{ paddingBottom: "max(4px, env(safe-area-inset-bottom))" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: 2.0 }}
            >
              Tap anywhere to close
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
