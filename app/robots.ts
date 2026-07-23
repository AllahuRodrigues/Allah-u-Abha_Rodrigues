import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://allahurodrigues.com/sitemap.xml",
    host: "https://allahurodrigues.com",
  };
}
