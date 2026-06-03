// ============================================================
// SQUAD, FIXTURES, EGGS, CLUB COLOUR WASHES
//
// All colour washes are OKLCH gradients built from each club's
// primary (and where it reads well, secondary) hue. Numbers are
// chosen for accent — not exact brand-bible accuracy — and tuned
// so every row reads cleanly on the navy background.
// ============================================================

export type ClubKey =
  | "hearts" | "forest" | "rangers" | "hibs" | "ettifaq"
  | "brentford" | "wrexham" | "dinamo" | "everton" | "celtic"
  | "spurs" | "bournemouth" | "kilmarnock" | "bologna" | "napoli"
  | "villa" | "norwich" | "torino" | "charlton" | "ipswich"
  | "soton" | "manutd";

export const CLUB_COLOURS: Record<ClubKey, string> = {
  hearts:    "linear-gradient(90deg, oklch(0.45 0.17 18/0.55), transparent 78%)",
  forest:    "linear-gradient(90deg, oklch(0.48 0.20 22/0.55), transparent 78%)",
  rangers:   "linear-gradient(90deg, oklch(0.42 0.16 262/0.55), transparent 78%)",
  hibs:      "linear-gradient(90deg, oklch(0.52 0.15 152/0.55), transparent 78%)",
  ettifaq:   "linear-gradient(90deg, oklch(0.50 0.14 158/0.55), transparent 78%)",
  brentford: "linear-gradient(90deg, oklch(0.52 0.20 25/0.55), transparent 78%)",
  wrexham:   "linear-gradient(90deg, oklch(0.55 0.16 22/0.55), transparent 78%)",
  dinamo:    "linear-gradient(90deg, oklch(0.52 0.18 255/0.55), transparent 78%)",
  everton:   "linear-gradient(90deg, oklch(0.42 0.15 262/0.55), transparent 78%)",
  celtic:    "linear-gradient(90deg, oklch(0.55 0.15 150/0.55), transparent 78%)",
  spurs:     "linear-gradient(90deg, oklch(0.55 0.04 262/0.55), transparent 78%)",
  bournemouth:"linear-gradient(90deg, oklch(0.48 0.18 18/0.55), transparent 78%)",
  kilmarnock:"linear-gradient(90deg, oklch(0.45 0.13 262/0.55), transparent 78%)",
  bologna:   "linear-gradient(90deg, oklch(0.45 0.16 18/0.55), transparent 78%)",
  napoli:    "linear-gradient(90deg, oklch(0.62 0.14 230/0.55), transparent 78%)",
  villa:     "linear-gradient(90deg, oklch(0.42 0.12 350/0.55), transparent 78%)",
  norwich:   "linear-gradient(90deg, oklch(0.82 0.16 95/0.55), transparent 78%)",
  torino:    "linear-gradient(90deg, oklch(0.40 0.11 30/0.55), transparent 78%)",
  charlton:  "linear-gradient(90deg, oklch(0.52 0.20 25/0.55), transparent 78%)",
  ipswich:   "linear-gradient(90deg, oklch(0.52 0.16 255/0.55), transparent 78%)",
  soton:     "linear-gradient(90deg, oklch(0.52 0.20 22/0.55), transparent 78%)",
  manutd:    "linear-gradient(90deg, oklch(0.48 0.22 25/0.55), transparent 78%)",
};

export type Player = {
  num: number;
  name: string;
  club: string;
  clubKey: ClubKey;
  captain?: boolean;
};

export type UnitName = "Goalkeepers" | "Defenders" | "Midfielders" | "Forwards";

export const SQUAD: Array<{ unit: UnitName; players: Player[] }> = [
  {
    unit: "Goalkeepers",
    players: [
      { num: 1,  name: "Craig Gordon",   club: "Heart of Midlothian", clubKey: "hearts" },
      { num: 12, name: "Angus Gunn",     club: "Nottingham Forest",   clubKey: "forest" },
      { num: 23, name: "Cieran Slicker", club: "Ipswich Town",        clubKey: "ipswich" },
    ],
  },
  {
    unit: "Defenders",
    players: [
      { num: 6,  name: "Andy Robertson",     club: "Tottenham Hotspur", clubKey: "spurs", captain: true },
      { num: 2,  name: "Aaron Hickey",       club: "Brentford",          clubKey: "brentford" },
      { num: 3,  name: "Greg Taylor",        club: "Rangers",            clubKey: "rangers" },
      { num: 4,  name: "Scott McKenna",      club: "Wrexham",            clubKey: "wrexham" },
      { num: 5,  name: "Grant Hanley",       club: "Norwich City",       clubKey: "norwich" },
      { num: 14, name: "Jack Hendry",        club: "Al-Ettifaq",         clubKey: "ettifaq" },
      { num: 15, name: "Anthony Ralston",    club: "Celtic",             clubKey: "celtic" },
      { num: 18, name: "Max Johnston",       club: "Dinamo Zagreb",      clubKey: "dinamo" },
      { num: 19, name: "Kieran Tierney",     club: "Celtic",             clubKey: "celtic" },
      { num: 21, name: "Ross McCrorie",      club: "Hibernian",          clubKey: "hibs" },
    ],
  },
  {
    unit: "Midfielders",
    players: [
      { num: 11, name: "Ryan Christie",      club: "Bournemouth",        clubKey: "bournemouth" },
      { num: 24, name: "Findlay Curtis",     club: "Kilmarnock",         clubKey: "kilmarnock" },
      { num: 8,  name: "Lewis Ferguson",     club: "Bologna",            clubKey: "bologna" },
      { num: 20, name: "Ben Gannon-Doak",    club: "Bournemouth",        clubKey: "bournemouth" },
      { num: 16, name: "Tyler Fletcher",     club: "Manchester United",  clubKey: "manutd" },
      { num: 7,  name: "John McGinn",        club: "Aston Villa",        clubKey: "villa" },
      { num: 10, name: "Kenny McLean",       club: "Norwich City",       clubKey: "norwich" },
      { num: 17, name: "Scott McTominay",    club: "Napoli",             clubKey: "napoli" },
    ],
  },
  {
    unit: "Forwards",
    players: [
      { num: 9,  name: "Che Adams",          club: "Torino",             clubKey: "torino" },
      { num: 22, name: "Lyndon Dykes",       club: "Charlton Athletic",  clubKey: "charlton" },
      { num: 25, name: "George Hirst",       club: "Ipswich Town",       clubKey: "ipswich" },
      { num: 13, name: "Lawrence Shankland", club: "Rangers",            clubKey: "rangers" },
      { num: 26, name: "Ross Stewart",       club: "Southampton",        clubKey: "soton" },
    ],
  },
];

// ============================================================
// FIXTURES
// utc:    canonical kickoff in UTC (ISO 8601)
// icsHref:link to the static .ics file in public/
// venue:  display name + Google Maps satellite link
// flag:   identifier for the SVG renderer
// ============================================================

export type Fixture = {
  no: string;
  tie: { left: string; right: string };
  fallback: { clock: string; zone: string; date: string };
  utc: string;
  venue: { name: string; href: string };
  icsHref: string;
  flag: "ht" | "ma" | "br";
  opponentName: string;
};

export const FIXTURES: Fixture[] = [
  {
    no: "01",
    tie: { left: "Haiti", right: "Scotland" },
    fallback: { clock: "02:00", zone: "BST", date: "Sun 14 June" },
    utc: "2026-06-14T01:00:00Z",
    venue: {
      name: "Gillette Stadium, Foxborough",
      href: "https://www.google.com/maps/@42.0910,-71.2639,400m/data=!3m1!1e3",
    },
    icsHref: "/haiti-v-scotland.ics",
    flag: "ht",
    opponentName: "Haiti",
  },
  {
    no: "02",
    tie: { left: "Scotland", right: "Morocco" },
    fallback: { clock: "23:00", zone: "BST", date: "Fri 19 June" },
    utc: "2026-06-19T22:00:00Z",
    venue: {
      name: "Gillette Stadium, Foxborough",
      href: "https://www.google.com/maps/@42.0910,-71.2639,400m/data=!3m1!1e3",
    },
    icsHref: "/scotland-v-morocco.ics",
    flag: "ma",
    opponentName: "Morocco",
  },
  {
    no: "03",
    tie: { left: "Scotland", right: "Brazil" },
    fallback: { clock: "23:00", zone: "BST", date: "Wed 24 June" },
    utc: "2026-06-24T22:00:00Z",
    venue: {
      name: "Hard Rock Stadium, Miami",
      href: "https://www.google.com/maps/@25.9579,-80.2389,400m/data=!3m1!1e3",
    },
    icsHref: "/scotland-v-brazil.ics",
    flag: "br",
    opponentName: "Brazil",
  },
];

// ============================================================
// EASTER EGGS
// keyed by exact player name; long-press the row to fire.
// ============================================================

export type Egg = { video: string; big: string; moment: string; sub: string };

export const EGGS: Record<string, Egg> = {
  "Scott McTominay": {
    video:  "s7vQvRVcUAA",
    big:    "McTominay",
    moment: "Bicycle Kick",
    sub:    "Scotland v Denmark · Hampden Park",
  },
  "Kenny McLean": {
    video:  "g4ws51aUhNw",
    big:    "McLean",
    moment: "Halfway Line",
    sub:    "Scotland v Denmark · Hampden Park",
  },
  "Kieran Tierney": {
    video:  "VyHzF3F_2ro",
    big:    "Tierney",
    moment: "Wonder Strike",
    sub:    "Scotland v Denmark · Hampden Park",
  },
};
