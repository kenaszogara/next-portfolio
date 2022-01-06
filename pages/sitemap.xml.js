import fs from "fs";
import { getAllPostPagesPath } from "../src/lib/posts";

export default function Sitemap() {}

export async function getServerSideProps({ res }) {
  const baseUrl = `https://kenaszogara.vercel.app`;

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "_app.js",
        "_document.js",
        "_error.js",
        "posts",
        "api",
        "sitemap.xml.js",
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace(".js", "")}`;
    });

  const postPages = getAllPostPagesPath();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
      ${postPages.map((item) => {
        return `
          <url>
            <loc>${baseUrl}/${item}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>1.0</priority>
          </url>
        `;
      })}
    </urlset>
  `;

  res.setHeader("Content-Type", "application/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
