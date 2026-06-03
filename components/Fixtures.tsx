import { FIXTURES } from "@/lib/data";
import { FixtureCard } from "@/components/FixtureCard";

export function Fixtures() {
  return (
    <>
      <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold mt-[clamp(48px,11vw,64px)] mb-2">
        <span>Fixtures</span>
        <span className="flex-1 h-px bg-gold/50" />
      </div>
      <section className="border-t border-line">
        {FIXTURES.map((fx) => (
          <FixtureCard key={fx.no} fx={fx} />
        ))}
      </section>
    </>
  );
}
