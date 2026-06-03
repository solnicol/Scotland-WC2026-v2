import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Scotland WC2026";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
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
        }}
      >
        <div
          style={{
            width: 330,
            height: 330,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "18px solid #d4b16b",
            borderRadius: 96,
            color: "#d4b16b",
            fontSize: 170,
            fontWeight: 700,
            fontFamily: "Geist, Arial, sans-serif",
          }}
        >
          SCO
        </div>
      </div>
    ),
    size
  );
}
