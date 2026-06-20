import type { Metadata } from "next";

const resolveMetadataBase = (): URL => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return new URL(process.env.NEXT_PUBLIC_APP_URL);
  }

  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}`);
  }

  // eslint-disable-next-line compat/compat
  return new URL(`http://localhost:3000`);
};

const metadataBase = resolveMetadataBase();

export const baseMetadata: Metadata = {
  applicationName: "Nestwork",
  authors: [{ name: "Nestwork" }],
  category: "Project Management & Collaboration",
  creator: "Nestwork-XYZ",
  description:
    "A project and workplace management platform designed to streamline collaboration, task tracking, and team productivity.",
  icons: {
    apple: [{ sizes: "180x180", url: "/apple-icon.png" }],
    icon: [
      { sizes: "any", type: "image/x-icon", url: "/favicon.ico" },
      { sizes: "any", type: "image/svg+xml", url: "/icon.svg" },
      { sizes: "192x192", type: "image/png", url: "/icon-192.png" },
      { sizes: "512x512", type: "image/png", url: "/icon-512.png" },
    ],
  },
  keywords: [
    "Nestwork",
    "Nestwork XYZ",
    "project management",
    "task tracking",
    "team collaboration",
    "workflow automation",
    "productivity",
    "workplace tools",
  ],
  manifest: "/manifest.webmanifest",
  metadataBase,
  openGraph: {
    description:
      "Plan projects, track tasks, and collaborate with your team in one powerful workspace with Nestwork.",
    images: [
      {
        alt: "Nestwork — Invite everyone, tracking everything",
        height: 630,
        url: "/og-image.png",
        width: 1200,
      },
    ],
    locale: "en_US",
    siteName: "Nestwork",
    title: "Nestwork — Project & Team Management Platform",
    type: "website",
    url: "https://nestwork.xyz",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: "Nestwork",
    template: "%s | Nestwork",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@nestwork_xyz",
    description:
      "Manage projects, track tasks, and collaborate seamlessly with Nestwork.",
    images: ["/og-image.png"],
    title: "Nestwork — Project & Team Management Platform",
  },
};

export const createMetadata = (overrides: Metadata = {}): Metadata => ({
  ...baseMetadata,
  ...overrides,
  openGraph: {
    ...baseMetadata.openGraph,
    ...overrides.openGraph,
  },
  title: overrides.title
    ? { default: overrides.title as string, template: "%s | Nestwork" }
    : baseMetadata.title,
  twitter: {
    ...baseMetadata.twitter,
    ...overrides.twitter,
  },
});

export const authMetadata = (title: string) =>
  createMetadata({
    robots: {
      follow: false,
      index: false,
    },
    title,
  });
