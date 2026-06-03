export function Masthead() {
  return (
    <header>
      <div className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.26em] text-navy-400 mb-2">
        <span className="text-gold">&#10022;</span>
        <span>FIFA World Cup 2026</span>
        <span className="flex-1 h-px bg-line-soft" />
      </div>
      <div className="text-[9.5px] font-medium uppercase tracking-[0.22em] text-navy-500 mb-[22px]">
        USA &middot; Canada &middot; Mexico
      </div>

      <h1 className="font-semibold leading-[0.9] tracking-[-0.045em] text-paper text-[clamp(52px,16vw,80px)]">
        <span className="hero-name">Scotland</span>
        <em className="block not-italic font-light text-[clamp(20px,6vw,28px)] tracking-[-0.01em] text-gold mt-3.5">
          Group C &middot; the Finals
        </em>
      </h1>

      <p className="mt-[22px] font-light text-[15px] leading-[1.55] text-navy-400 max-w-[42ch]">
        Kick-offs shown in <b className="text-navy-200 font-medium">your local time</b>.
      </p>

      <ul className="list-none mt-[18px] flex flex-col gap-1.5 text-[10.5px] font-medium uppercase tracking-[0.14em] text-navy-500">
        <li className="flex items-baseline gap-2">
          <span className="text-gold text-[14px] leading-none">&#183;</span>
          Tap a fixture for the opponent&apos;s colours
        </li>
        <li className="flex items-baseline gap-2">
          <span className="text-gold text-[14px] leading-none">&#183;</span>
          Tap a player for their club
        </li>
        <li className="flex items-baseline gap-2">
          <span className="text-gold text-[14px] leading-none">&#183;</span>
          Tap &amp; hold McTominay, McLean &amp; Tierney &#x26BD;
        </li>
      </ul>
    </header>
  );
}
