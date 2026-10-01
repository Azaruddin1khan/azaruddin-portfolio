import { MetadataRoute } from "next";
import { portfolioContent } from "@/data/content";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = portfolioContent.metadata.siteUrl;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
