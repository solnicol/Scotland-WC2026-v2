import { SQUAD } from "@/lib/data";
import { Unit } from "@/components/Unit";
import { SectionLabel } from "@/components/SectionLabel";
import { StaggerList } from "@/components/StaggerList";

export function Squad() {
  return (
    <>
      <SectionLabel>The Squad</SectionLabel>
      <StaggerList>
        {SQUAD.map((group) => (
          <Unit key={group.unit} unit={group.unit} players={group.players} />
        ))}
      </StaggerList>
    </>
  );
}
