"use client";

import { useState } from "react";
import moviesData from "@/app/data/movies.json";
import { Movie } from "@/app/types/movie";

import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import ShowCard from "../components/ShowCard";

export default function ShowsPage() {
  const movies: Movie[] = moviesData as Movie[];

  const [search, setSearch] = useState<string>("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [sort, setSort] = useState<string>("");

  const genres: string[] = [...new Set(movies.flatMap((m) => m.genres))];

  let filtered = movies
    .filter((m) =>
      m.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((m) =>
      selectedGenre
        ? m.genres.some(
            (g) => g.toLowerCase() === selectedGenre.toLowerCase()
          )
        : true
    );

  if (sort === "rating") {
    filtered = filtered.sort(
      (a, b) => Number(b.rating) - Number(a.rating)
    );
  } else if (sort === "year") {
    filtered = filtered.sort((a, b) => Number(b.year) - Number(a.year));
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Browse Shows</h1>

      <SearchBar value={search} onChange={setSearch} />

      <Filters
        genres={genres}
        selectedGenre={selectedGenre}
        onGenreChange={setSelectedGenre}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
        {filtered.map((show) => (
          <ShowCard key={show.id} movie={show} />
        ))}
      </div>
    </main>
  );
}
