"use client";

import { useCallback, useEffect, useRef } from "react";

const SETTLE_MS = 140;
const MAX_VELOCITY = 1.1;
const PROXIMITY_RADIUS = 150;

type MotionTarget = HTMLElement;

function clamp(value: number, max: number) {
  return Math.max(-max, Math.min(max, value));
}

function resetVelocity(el: MotionTarget) {
  el.style.setProperty("--velocity-rotate", "0deg");
  el.style.setProperty("--velocity-scale-x", "1");
}

function resetProximity(el: MotionTarget) {
  el.style.setProperty("--proximity-scale", "1");
  el.style.setProperty("--proximity-tint", "0");
}

export function usePointerMotion<T extends MotionTarget>() {
  const ref = useRef<T | null>(null);
  const lastRef = useRef<{ x: number; t: number } | null>(null);
  const resetRef = useRef<number | null>(null);

  const reset = useCallback(() => {
    if (resetRef.current) window.clearTimeout(resetRef.current);
    resetRef.current = null;
    lastRef.current = null;
    if (ref.current) resetVelocity(ref.current);
  }, []);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const now = performance.now();
    const last = lastRef.current;
    lastRef.current = { x: e.clientX, t: now };
    if (!last) return;

    const elapsed = Math.max(now - last.t, 8);
    const velocity = clamp((e.clientX - last.x) / elapsed, MAX_VELOCITY);
    const stretch = 1 + Math.abs(velocity) * 0.055;

    if (ref.current) {
      ref.current.style.setProperty("--velocity-rotate", `${velocity * 2.6}deg`);
      ref.current.style.setProperty("--velocity-scale-x", String(stretch));
    }

    if (resetRef.current) window.clearTimeout(resetRef.current);
    resetRef.current = window.setTimeout(reset, SETTLE_MS);
  }, [reset]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      resetProximity(el);
      return;
    }

    let frame = 0;

    const updateProximity = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;

      if (frame) window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const distance = Math.hypot(e.clientX - x, e.clientY - y);
        const strength = Math.max(0, 1 - distance / PROXIMITY_RADIUS);

        el.style.setProperty("--proximity-scale", String(1 + strength * 0.018));
        el.style.setProperty("--proximity-tint", String(strength * 0.16));
      });
    };

    const clearProximity = () => {
      if (frame) window.cancelAnimationFrame(frame);
      frame = 0;
      resetProximity(el);
    };

    window.addEventListener("pointermove", updateProximity, { passive: true });
    window.addEventListener("pointerleave", clearProximity);
    window.addEventListener("blur", clearProximity);

    return () => {
      window.removeEventListener("pointermove", updateProximity);
      window.removeEventListener("pointerleave", clearProximity);
      window.removeEventListener("blur", clearProximity);
      clearProximity();
    };
  }, []);

  return {
    motionRef: ref,
    motionHandlers: {
      onPointerMove,
      onPointerLeave: reset,
      onPointerCancel: reset,
    },
  };
}
