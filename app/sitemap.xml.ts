import { NextRequest, NextResponse } from "next/server";
import movies from "./data/movies.json";
import { Movie } from "./types/movie";

const getGenres = () => {
  const genres = new Set<string>();
  (movies as Movie[]).forEach((movie) => {
    movie.genres.forEach((g) => genres.add(g.toLowerCase()));
  });
  return Array.from(genres);
};

const BASE_URL = "https://example.com";

export async function GET(req: NextRequest) {
  const urls: string[] = [];

  urls.push(`${BASE_URL}/`);
  urls.push(`${BASE_URL}/shows`);
  urls.push(`${BASE_URL}/categories`);

  (movies as Movie[]).forEach((movie) => {
    urls.push(`${BASE_URL}/shows/${movie.id}`);
  });

  const genres = getGenres();
  genres.forEach((genre) => {
    urls.push(`${BASE_URL}/categories/${genre}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `,
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
