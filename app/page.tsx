import { Masthead } from "@/components/Masthead";
import { Fixtures } from "@/components/Fixtures";
import { Squad } from "@/components/Squad";
import { BicycleOverlay } from "@/components/BicycleOverlay";
import { BackToTop } from "@/components/BackToTop";
import { EggProvider } from "@/lib/egg-context";

export default function Home() {
  return (
    <EggProvider>
      <main className="max-w-[540px] mx-auto px-[clamp(20px,6vw,32px)] pb-18" style={{ paddingTop: "max(40px, env(safe-area-inset-top))" }}>
        <Masthead />
        <Fixtures />
        <Squad />
        <footer className="mt-[clamp(48px,11vw,64px)] pt-6 border-t border-line-soft flex items-baseline justify-between text-[10px] font-medium uppercase tracking-[0.18em]">
          <div className="text-paper font-semibold tracking-[0.2em]">Wha&apos;s like us.</div>
          <div className="text-navy-500 text-right leading-snug">
            Group C<br />Tartan Army &middot; 2026
          </div>
        </footer>
      </main>
      <BicycleOverlay />
      <BackToTop />
    </EggProvider>
  );
}
