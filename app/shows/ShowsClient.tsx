"use client";

import { useState } from "react";
import { Movie } from "@/app/types/movie";

import Filters from "../components/Filters";
import SearchBar from "../components/SearchBar";
import ShowCard from "../components/ShowCard";

interface Props {
  movies: Movie[];
  genres: string[];
}

export default function ShowsClient({ movies, genres }: Props) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  // Handle: string | number | null
  const num = (v: string | number | null) => {
    if (v === null) return 0;
    const n = Number(v);
    return isNaN(n) ? 0 : n;
  };

  // SEARCH FILTER
  let filtered = movies.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  // SORT HANDLING
  if (sort === "rating") {
    filtered = [...filtered].sort(
      (a, b) => num(b.rating) - num(a.rating)
    );
  } else if (sort === "year") {
    filtered = [...filtered].sort(
      (a, b) => num(b.year) - num(a.year)
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Browse Shows</h1>

      <SearchBar value={search} onChange={setSearch} />

      <Filters
        genres={genres}
        selectedGenre=""
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
