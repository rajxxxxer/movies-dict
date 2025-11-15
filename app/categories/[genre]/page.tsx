import movies from "@/app/data/movies.json";
import ShowCard from "@/app/components/ShowCard";
import { getGenres } from "@/app/utils/getGenres";


export async function generateStaticParams() {
  const genres = getGenres()
  return genres.map((g) => ({ genre: g }));
}

export default function GenrePage({ params }: { params: { genre: string } }) {
  const genre = params.genre.toLowerCase();

  const filteredMovies = movies.filter((m) =>
    m.genres.some((g) => g.toLowerCase() === genre)
  );

  const pageTitle = genre.charAt(0).toUpperCase() + genre.slice(1);

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">{pageTitle} Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <ShowCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}
