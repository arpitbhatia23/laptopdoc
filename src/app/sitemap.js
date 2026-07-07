import { services } from "@/data/services/data";
import { blogs } from "@/data/blogs/data";

const siteUrl = "https://laptopdoc.in";

export default async function sitemap() {
  const staticRoutes = [
    "/",
    "/services",
    "/blogs",
    "/contact",
    "/used-laptops",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const serviceRoutes = Array.isArray(services)
    ? services.map((s) => ({
        url: `${siteUrl}/${s.slug}`,
        lastModified: new Date().toISOString(),
      }))
    : [];

  const blogRoutes = Array.isArray(blogs)
    ? blogs.map((b) => ({
        url: `${siteUrl}/blogs/${b.slug}`,
        lastModified: b.updatedAt || b.publishedAt || new Date().toISOString(),
      }))
    : [];

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes];
}
