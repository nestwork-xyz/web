import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: "#121216",
    categories: [
      "project management",
      "task tracking",
      "team collaboration",
      "workflow automation",
      "productivity",
      "workplace tools",
    ],
    description:
      "A project and workplace management platform designed to streamline collaboration, task tracking, and team productivity.",
    display: "standalone",
    icons: [
      {
        purpose: "maskable",
        sizes: "192x192",
        src: "/icon-192.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "/icon-512.png",
        type: "image/png",
      },
      {
        sizes: "180x180",
        src: "/apple-icon.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "any",
        src: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    name: "Nestwork",
    orientation: "portrait-primary",
    screenshots: [
      {
        form_factor: "wide",
        label: "Nestwork dashboard — kanban board view",
        sizes: "1280x800",

        src: "/screenshots/dashboard.png",
        type: "image/png",
      },
      {
        form_factor: "narrow",
        label: "Nestwork on mobile",
        sizes: "390x844",

        src: "/screenshots/mobile.png",
        type: "image/png",
      },
    ],
    short_name: "Nestwork",
    start_url: "/",
    theme_color: "#00067F",
  };
}
