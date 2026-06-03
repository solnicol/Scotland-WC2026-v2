"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Egg } from "@/lib/data";

type Ctx = {
  active: Egg | null;
  open: (egg: Egg) => void;
  close: () => void;
};

const EggContext = createContext<Ctx | null>(null);

export function EggProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Egg | null>(null);
  const open = useCallback((egg: Egg) => setActive(egg), []);
  const close = useCallback(() => setActive(null), []);
  return (
    <EggContext.Provider value={{ active, open, close }}>
      {children}
    </EggContext.Provider>
  );
}

export function useEgg() {
  const ctx = useContext(EggContext);
  if (!ctx) throw new Error("useEgg must be used inside <EggProvider>");
  return ctx;
}
