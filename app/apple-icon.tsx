import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Scotland WC2026";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#15182a",
          color: "#d4b16b",
          fontSize: 74,
          fontWeight: 700,
          fontFamily: "Geist, Arial, sans-serif",
        }}
      >
        SCO
      </div>
    ),
    size
  );
}
