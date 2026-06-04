"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Flag } from "@/components/Flag";
import { item } from "@/components/StaggerList";
import { useMatchTime } from "@/lib/match-time";
import type { Fixture } from "@/lib/data";

function useLocalKickoff(fx: Fixture) {
  const [local, setLocal] = useState<{ clock: string; zone: string; date: string } | null>(
    null
  );
  useEffect(() => {
    const d = new Date(fx.utc);
    const h = d.getHours().toString().padStart(2, "0");
    const m = d.getMinutes().toString().padStart(2, "0");
    const tzParts = new Intl.DateTimeFormat([], { timeZoneName: "short" }).formatToParts(d);
    const zone = tzParts.find((p) => p.type === "timeZoneName")?.value ?? "";
    const date = d.toLocaleDateString("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "long",
    });
    setLocal({ clock: `${h}:${m}`, zone, date });
  }, [fx.utc]);
  return local ?? fx.fallback;
}

export function FixtureCard({ fx }: { fx: Fixture }) {
  const [open, setOpen] = useState(false);
  const { clock, zone, date } = useLocalKickoff(fx);
  const time = useMatchTime(fx.utc);

  const isMatchday = time.phase === "today" || time.phase === "live";
  const isLive = time.phase === "live";

  const subtitleTone =
    time.phase === "live"
      ? "text-gold font-semibold tracking-[0.18em] uppercase animate-pulse"
      : time.phase === "today"
        ? "text-gold font-semibold tracking-[0.14em] uppercase"
        : time.phase === "finished"
          ? "text-paper font-medium tracking-[0.1em]"
          : "text-navy-400 font-light";

  return (
    <motion.article
      variants={item}
      className={[
        "relative block py-[22px] pb-5 overflow-hidden cursor-pointer no-callout",
        "border-b last:border-b-0",
        isMatchday ? "border-gold/40" : "border-line-soft",
      ].join(" ")}
      onClick={() => setOpen((o) => !o)}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      {/* Flag wash (revealed on open) */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        initial={false}
        animate={open ? { opacity: 0.22, x: 0 } : { opacity: 0, x: "8%" }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <Flag kind={fx.flag} />
      </motion.div>

      {/* Gradient overlay on the left when open */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(90deg, var(--color-navy-950) 22%, transparent 80%)",
        }}
        initial={false}
        animate={{ opacity: open ? 1 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
      />

      {/* Gold left edge when open */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-gold z-[3] origin-top"
        initial={false}
        animate={{ scaleY: open ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      />

      <motion.div
        className="relative z-[2]"
        initial={false}
        animate={{ paddingLeft: open ? 12 : 0 }}
        transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <div className="flex items-center gap-2.5 mb-2">
          <div className="text-[10.5px] font-semibold tracking-[0.18em] text-navy-500">
            {fx.no}
          </div>
          {isLive && (
            <span className="text-[9.5px] font-semibold tracking-[0.18em] uppercase text-gold flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              Live
            </span>
          )}
        </div>

        <div className="font-semibold leading-[1.05] tracking-[-0.03em] text-paper text-[clamp(26px,8vw,32px)] mb-3.5">
          {fx.tie.left}
          <span className="text-navy-500 font-light px-[0.3em]">v</span>
          {fx.tie.right}
        </div>

        <div className="flex items-baseline gap-3.5 flex-wrap">
          <span className="font-medium text-[clamp(34px,10vw,42px)] leading-none tracking-[-0.03em] text-gold tabular-nums">
            {clock}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-navy-400">
            {zone}
          </span>
          <span className="ml-auto text-right text-[12.5px] font-light text-navy-400">
            <b className="block text-navy-200 font-medium text-[13px]">{date}</b>
            <span className={["text-[10.5px] block mt-0.5", subtitleTone].join(" ")}>
              {time.label}
            </span>
          </span>
        </div>

        <div className="mt-2.5 text-[11.5px] font-light text-navy-500">
          <a
            href={fx.venue.href}
            target="_blank"
            rel="noopener"
            className="text-inherit no-underline border-b border-[oklch(0.55_0.06_264/0.35)] transition-colors hover:text-gold hover:border-gold/50"
            onClick={(e) => e.stopPropagation()}
          >
            {fx.venue.name}
          </a>
        </div>

        <a
          href={fx.icsHref}
          aria-label="Add to calendar"
          className="relative z-[3] inline-flex items-center gap-1.5 mt-3 px-2.5 pr-2.5 py-1.5 pl-2 border border-line rounded text-[10.5px] font-medium tracking-[0.06em] text-navy-400 no-underline transition-colors hover:border-gold/50 hover:text-gold"
          onClick={(e) => e.stopPropagation()}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
            <rect x="1" y="2" width="10" height="9" rx="1.5" />
            <path d="M1 5h10M4 1v2M8 1v2" />
          </svg>
          Add to calendar
        </a>
      </motion.div>

      <motion.div
        className="relative z-[2] mt-3.5 text-[10px] font-medium uppercase tracking-[0.14em] text-navy-500"
        initial={false}
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
      >
        Tap to reveal &mdash; {fx.opponentName}
      </motion.div>
    </motion.article>
  );
}
