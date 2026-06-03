import { PlayerRow } from "@/components/PlayerRow";
import type { Player, UnitName } from "@/lib/data";

export function Unit({ unit, players }: { unit: UnitName; players: Player[] }) {
  return (
    <div className="mt-7 first:mt-1">
      <div className="flex items-baseline gap-2.5 mb-3">
        <h3 className="text-[13px] font-semibold tracking-[0.02em] text-paper">{unit}</h3>
        <span className="text-[10px] font-semibold tracking-[0.14em] text-navy-500">
          {players.length}
        </span>
      </div>
      <div className="border-t border-line-soft">
        {players.map((p) => (
          <PlayerRow key={`${p.num}-${p.name}`} player={p} />
        ))}
      </div>
    </div>
  );
}
