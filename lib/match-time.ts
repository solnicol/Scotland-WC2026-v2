"use client";

import { useEffect, useState } from "react";

export type MatchPhase = "upcoming" | "today" | "live" | "finished";
export type MatchTime = { phase: MatchPhase; label: string };

const MIN = 60_000;
const HOUR = 60 * MIN;
const DAY = 24 * HOUR;

/** Pure function — no React. Easy to test. */
export function matchTime(now: number, kickoffMs: number): MatchTime {
  const diff = kickoffMs - now; // ms until kickoff (negative if past)
  const elapsed = -diff;

  // Live window: kickoff to +120 min
  if (elapsed >= 0 && elapsed < 120 * MIN) {
    return { phase: "live", label: "Live" };
  }

  // After full time
  if (elapsed >= 120 * MIN) {
    return { phase: "finished", label: "Full time" };
  }

  // Same local calendar day (and not yet kicked) — "Today"
  if (isSameLocalDay(now, kickoffMs)) {
    if (diff < HOUR) return { phase: "today", label: `in ${Math.max(1, Math.round(diff / MIN))} min` };
    return { phase: "today", label: `today · in ${Math.round(diff / HOUR)}h` };
  }

  // Future
  if (diff < DAY) return { phase: "upcoming", label: `in ${Math.round(diff / HOUR)} hours` };
  if (diff < 14 * DAY) return { phase: "upcoming", label: `in ${Math.round(diff / DAY)} days` };
  const weeks = Math.round(diff / (7 * DAY));
  return { phase: "upcoming", label: `in ${weeks} ${weeks === 1 ? "week" : "weeks"}` };
}

function isSameLocalDay(a: number, b: number): boolean {
  const da = new Date(a);
  const db = new Date(b);
  return (
    da.getFullYear() === db.getFullYear() &&
    da.getMonth() === db.getMonth() &&
    da.getDate() === db.getDate()
  );
}

/** Reactive hook — re-ticks every minute. */
export function useMatchTime(utc: string): MatchTime {
  const kickoffMs = new Date(utc).getTime();
  // SSR-safe default so the server-rendered fallback matches the original "Kick-off" tone.
  const [state, setState] = useState<MatchTime>({ phase: "upcoming", label: "Kick-off" });

  useEffect(() => {
    const tick = () => setState(matchTime(Date.now(), kickoffMs));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [kickoffMs]);

  return state;
}
