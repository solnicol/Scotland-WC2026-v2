import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Scotland WC2026",
    short_name: "Scotland",
    description: "Scotland's FIFA World Cup 2026 fixtures and squad.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#15182a",
    theme_color: "#15182a",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
