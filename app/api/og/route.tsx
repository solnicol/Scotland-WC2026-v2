import { ImageResponse } from "next/og";
import { FIXTURES } from "@/lib/data";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const dynamic = "force-static";

// OKLCH values map to these for Satori's hex/oklch support across runtimes.
const NAVY_950 = "#15182a";
const NAVY_900 = "#1c2034";
const NAVY_700 = "#3d4661";
const NAVY_400 = "#929aae";
const GOLD = "#d4b16b";
const PAPER = "#f3f4f8";
const GEIST_FONT_PATH = join(
  process.cwd(),
  "node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf"
);
const GEIST_WEIGHTS = [300, 400, 500, 600, 700] as const;

export async function GET() {
  const geist = await readFile(GEIST_FONT_PATH);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "80px 100px",
          background: `radial-gradient(at top, ${NAVY_900} 0%, ${NAVY_950} 70%)`,
          fontFamily: "Geist",
        }}
      >
        {/* kicker */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: 5,
            textTransform: "uppercase",
            color: NAVY_400,
          }}
        >
          <span
            style={{
              display: "block",
              width: 10,
              height: 10,
              borderRadius: 5,
              background: GOLD,
            }}
          />
          <span>FIFA World Cup 2026</span>
          <span
            style={{
              flexGrow: 1,
              height: 1,
              background: NAVY_700,
              opacity: 0.6,
            }}
          />
        </div>

        {/* SCOTLAND wordmark */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 60,
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              fontSize: 240,
              fontWeight: 700,
              letterSpacing: -10,
              color: GOLD,
              lineHeight: 0.9,
            }}
          >
            Scotland
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 38,
              fontWeight: 300,
              letterSpacing: -0.5,
              color: GOLD,
              marginTop: 24,
              opacity: 0.85,
            }}
          >
            Group C · the Finals
          </div>
        </div>

        {/* fixtures footer */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 50,
            paddingTop: 30,
            borderTop: `1px solid ${NAVY_700}`,
          }}
        >
          {FIXTURES.map((fx) => (
            <div
              key={fx.no}
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 16,
                fontSize: 24,
                color: PAPER,
                fontWeight: 500,
              }}
            >
              <span
                style={{
                  color: GOLD,
                  fontSize: 18,
                  fontWeight: 600,
                  letterSpacing: 3,
                  minWidth: 32,
                }}
              >
                {fx.no}
              </span>
              <span>
                {fx.tie.left}{" "}
                <span style={{ color: NAVY_400, fontWeight: 300 }}>v</span>{" "}
                {fx.tie.right}
              </span>
              <span style={{ color: NAVY_400, fontSize: 20, marginLeft: "auto" }}>
                {fx.fallback.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: GEIST_WEIGHTS.map((weight) => ({
        name: "Geist",
        data: geist,
        weight,
        style: "normal",
      })),
    }
  );
}
