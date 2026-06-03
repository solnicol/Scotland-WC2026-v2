import { SQUAD } from "@/lib/data";
import { Unit } from "@/components/Unit";

export function Squad() {
  return (
    <>
      <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold mt-[clamp(48px,11vw,64px)] mb-2">
        <span>The Squad</span>
        <span className="flex-1 h-px bg-gold/50" />
      </div>
      <section>
        {SQUAD.map((group) => (
          <Unit key={group.unit} unit={group.unit} players={group.players} />
        ))}
      </section>
    </>
  );
}
