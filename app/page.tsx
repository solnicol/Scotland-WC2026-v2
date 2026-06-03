import { Masthead } from "@/components/Masthead";

export default function Home() {
  return (
    <main className="max-w-[540px] mx-auto pt-[max(40px,env(safe-area-inset-top))] px-[clamp(20px,6vw,32px)] pb-18">
      <Masthead />
    </main>
  );
}
