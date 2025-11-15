import moviesData from "@/app/data/movies.json";
import { Movie } from "@/app/types/movie";
import ShowsClient from "./ShowsClient";
 // Client component

export default function ShowsPage() {
  
  const movies: Movie[] = moviesData as Movie[];

  
  const genres: string[] = [...new Set(movies.flatMap((m) => m.genres))];

  return (
    <ShowsClient movies={movies} genres={genres} />
  );
}
