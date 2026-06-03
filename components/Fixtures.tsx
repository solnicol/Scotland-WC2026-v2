import { FIXTURES } from "@/lib/data";
import { FixtureCard } from "@/components/FixtureCard";
import { SectionLabel } from "@/components/SectionLabel";
import { StaggerList } from "@/components/StaggerList";

export function Fixtures() {
  return (
    <>
      <SectionLabel>Fixtures</SectionLabel>
      <StaggerList className="border-t border-line">
        {FIXTURES.map((fx) => (
          <FixtureCard key={fx.no} fx={fx} />
        ))}
      </StaggerList>
    </>
  );
}
