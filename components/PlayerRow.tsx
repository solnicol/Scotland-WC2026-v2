"use client";

import { useRef, useState, useCallback } from "react";
import { CLUB_COLOURS, EGGS, type Player } from "@/lib/data";
import { useEgg } from "@/lib/egg-context";
import { usePointerMotion } from "@/lib/use-pointer-motion";

const LONG_PRESS_MS = 620;

export function PlayerRow({ player }: { player: Player }) {
  const [open, setOpen] = useState(false);
  const [charging, setCharging] = useState(false);
  const firedRef = useRef(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const { motionRef, motionHandlers } = usePointerMotion<HTMLDivElement>();
  const { open: openEgg } = useEgg();

  const egg = EGGS[player.name];

  const startPress = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      firedRef.current = false;
      if (!egg) return;
      if (e.cancelable) e.preventDefault();
      setCharging(true);
      timerRef.current = setTimeout(() => {
        firedRef.current = true;
        if (typeof navigator !== "undefined" && "vibrate" in navigator) {
          (navigator as Navigator).vibrate?.(12);
        }
        openEgg(egg);
        setCharging(false);
      }, LONG_PRESS_MS);
    },
    [egg, openEgg]
  );

  const endPress = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = null;
    setCharging(false);
  }, []);

  const handleClick = useCallback(() => {
    if (firedRef.current) {
      firedRef.current = false;
      return;
    }
    setOpen((o) => !o);
  }, []);

  const handlePointerCancel = useCallback(() => {
    endPress();
    motionHandlers.onPointerCancel();
  }, [endPress, motionHandlers]);

  const handlePointerLeave = useCallback(() => {
    endPress();
    motionHandlers.onPointerLeave();
  }, [endPress, motionHandlers]);

  return (
    <div
      className={[
        "relative grid grid-cols-[28px_1fr_auto] items-center gap-3 px-3 py-2.5 cursor-pointer no-callout overflow-hidden",
        "transition-[transform,background-color] duration-[250ms] ease-[cubic-bezier(.22,1,.36,1)] will-change-transform",
        "border-b border-line-soft last:border-b-0",
        player.captain ? "bg-navy-850/40" : "",
        charging ? "bg-navy-850" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      ref={motionRef}
      style={{
        ...(egg ? { touchAction: "none" as const } : {}),
        background: "oklch(0.12 0.04 264 / var(--proximity-tint, 0))",
        transform:
          "rotate(var(--velocity-rotate, 0deg)) scaleX(var(--velocity-scale-x, 1)) scale(var(--proximity-scale, 1))",
      }}
      onClick={handleClick}
      onPointerDown={startPress}
      onPointerUp={endPress}
      onPointerCancel={handlePointerCancel}
      onPointerLeave={handlePointerLeave}
      onPointerMove={motionHandlers.onPointerMove}
      onContextMenu={egg ? (e) => e.preventDefault() : undefined}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background: CLUB_COLOURS[player.clubKey],
          opacity: open ? 1 : 0,
        }}
      />
      <span className="relative z-10 text-[11px] font-semibold text-gold tabular-nums">
        {player.num}
      </span>
      <span
        className={[
          "relative z-10 text-[14px] tracking-[-0.01em]",
          player.captain ? "text-paper font-semibold" : "text-navy-200 font-medium",
        ].join(" ")}
      >
        {player.name}
        {player.captain && (
          <span className="ml-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-gold align-middle">
            Captain
          </span>
        )}
      </span>
      <span className="relative z-10 text-[10.5px] font-light text-navy-400 text-right">
        {player.club}
      </span>
      {egg && (
        <span
          aria-hidden="true"
          className="absolute left-0 bottom-0 h-[2px] bg-gold z-20 transition-[width] duration-[620ms] ease-linear"
          style={{ width: charging ? "100%" : "0%" }}
        />
      )}
    </div>
  );
}
