const url =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  author: "Nestwork",
  creator: "@nestwork_xyz",
  description: "Work flows here.",
  links: {
    github: "https://github.com/nestwork-xyz",
    repository: "https://github.com/nestwork-xyz/web",
  },
  name: "Nestwork",
  ogImage: `${url}/og-image.png`,
  url,
} as const;

export type SiteConfig = typeof siteConfig;
