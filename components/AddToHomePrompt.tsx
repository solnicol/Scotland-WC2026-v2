"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

const DISMISS_KEY = "scotland-wc2026:add-to-home-dismissed";

function shouldShowPrompt() {
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone);
  if (isStandalone) return false;

  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);

  return isIOS && isSafari;
}

export function AddToHomePrompt() {
  const [eligible, setEligible] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(DISMISS_KEY) || !shouldShowPrompt()) return;

    const timer = window.setTimeout(() => {
      setEligible(true);
      setShow(true);
    }, 1200);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = () => {
    window.localStorage.setItem(DISMISS_KEY, "1");
    setShow(false);
  };

  if (!eligible) return null;

  return (
    <motion.aside
      aria-label="Add to Home Screen"
      aria-hidden={!show}
      className="fixed z-50 left-0 right-0 mx-auto max-w-[540px] px-[clamp(16px,5vw,24px)] pointer-events-none"
      style={{ bottom: "max(18px, env(safe-area-inset-bottom))" }}
      initial={false}
      animate={
        show
          ? { opacity: 1, y: 0, pointerEvents: "auto" }
          : { opacity: 0, y: 14, pointerEvents: "none" }
      }
      transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
    >
      <div
        className="flex items-center gap-3 rounded-[8px] border border-line px-4 py-3 shadow-[0_18px_50px_oklch(0.08_0.03_264_/_0.45)] backdrop-blur-md"
        style={{ background: "oklch(0.21 0.06 264 / 0.92)" }}
      >
        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-[7px] border border-gold/45 bg-navy-950 text-gold">
          <svg
            aria-hidden="true"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 13V3" />
            <path d="M6.5 6.5 10 3l3.5 3.5" />
            <path d="M5 9v6.5A1.5 1.5 0 0 0 6.5 17h7a1.5 1.5 0 0 0 1.5-1.5V9" />
          </svg>
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
            Keep it handy
          </div>
          <div className="mt-0.5 text-[13px] leading-snug text-navy-200">
            Tap Share, then Add to Home Screen.
          </div>
        </div>

        <button
          type="button"
          aria-label="Dismiss"
          onClick={dismiss}
          tabIndex={show ? 0 : -1}
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-navy-400 transition-colors hover:text-gold"
        >
          <svg
            aria-hidden="true"
            width="16"
            height="16"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          >
            <path d="m5 5 10 10M15 5 5 15" />
          </svg>
        </button>
      </div>
    </motion.aside>
  );
}
