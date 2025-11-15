import Link from "next/link";
import { Movie } from "../types/movie";


type Props = {
  movie: Movie;
};

export default function ShowCard({ movie }: Props) {
  return (
    <Link href={`/shows/${movie.id}`}>
      <div className="bg-gray-900 p-4 rounded-xl shadow hover:scale-105 transition">
        <img
          src={movie.image || "/fallback.jpg"}
          alt={movie.name}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />

        <h2 className="text-xl font-semibold">{movie.name}</h2>
        <p className="text-gray-400 text-sm">{movie.year}</p>
      </div>
    </Link>
  );
}
