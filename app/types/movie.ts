export interface Movie {
  id: number;
  name: string;
  imdb_id: string;
  image: string | null;
  year: string | number;
  rating: string | number | null;
  trailerUrl: string | null; // ← FIX
  overview: string | null;
  genres: string[];
  runtime: number | null;
}
