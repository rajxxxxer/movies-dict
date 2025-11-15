// utils/getGenres.ts
import movies from "@/app/data/movies.json";

export function getGenres() {
  const allGenres = new Set<string>();

  movies.forEach((m) => {
    m.genres.forEach((g) => allGenres.add(g.toLowerCase()));
  });

  return Array.from(allGenres);
}
