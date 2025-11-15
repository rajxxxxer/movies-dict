"use client";

import { useRouter } from "next/navigation";

type Props = {
  genres: string[];
  selectedGenre: string;
  sort: string;
  onSortChange: (s: string) => void;
};

export default function Filters({
  genres,
  selectedGenre,
  sort,
  onSortChange,
}: Props) {
  const router = useRouter();

  return (
    <div className="flex gap-4 mt-6">
      {/* Genre Filter */}
      <select
        value={selectedGenre}
        onChange={(e) =>
          router.push(
            e.target.value ? `/categories/${e.target.value.toLowerCase()}` : "/shows"
          )
        }
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      {/* Sort Filter */}
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-gray-800 text-white px-4 py-2 rounded"
      >
        <option value="">Sort</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
}
