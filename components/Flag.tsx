import type { Fixture } from "@/lib/data";

export function Flag({ kind }: { kind: Fixture["flag"] }) {
  if (kind === "ht") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid slice">
        <rect width="120" height="40" fill="var(--color-ht-blue)" />
        <rect y="40" width="120" height="40" fill="var(--color-ht-red)" />
        <rect x="46" y="28" width="28" height="24" fill="var(--color-paper)" opacity="0.9" />
        <circle cx="60" cy="40" r="6" fill="none" stroke="var(--color-ma-green)" strokeWidth="1.4" />
      </svg>
    );
  }
  if (kind === "ma") {
    return (
      <svg width="100%" height="100%" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid slice">
        <rect width="120" height="80" fill="var(--color-ma-red)" />
        <path
          d="M60 30 l4.7 14.4 -12.3-8.9h15.2l-12.3 8.9z"
          fill="none"
          stroke="var(--color-ma-green)"
          strokeWidth="2.2"
          strokeLinejoin="round"
          transform="scale(1.5) translate(-20 -12)"
        />
      </svg>
    );
  }
  return (
    <svg width="100%" height="100%" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid slice">
      <rect width="120" height="80" fill="var(--color-br-green)" />
      <path d="M60 14 L104 40 L60 66 L16 40 Z" fill="var(--color-br-yellow)" />
      <circle cx="60" cy="40" r="15" fill="var(--color-br-blue)" />
      <path
        d="M45 37 Q60 31 75 38"
        fill="none"
        stroke="var(--color-paper)"
        strokeWidth="1.6"
        opacity="0.85"
      />
    </svg>
  );
}
