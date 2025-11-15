"use client";

type Props = {
  genres: string[];
  selectedGenre: string;
  onGenreChange: (g: string) => void;
  sort: string;
  onSortChange: (s: string) => void;
};

export default function Filters({
  genres,
  selectedGenre,
  onGenreChange,
  sort,
  onSortChange,
}: Props) {
  return (
    <div className="flex gap-4 mt-6">
      {/* Genre Filter */}
      <select
        value={selectedGenre}
        onChange={(e) => onGenreChange(e.target.value)}
        className="bg-gray-800 px-4 py-2 rounded"
      >
        <option value="">All Genres</option>
        {genres.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value)}
        className="bg-gray-800 px-4 py-2 rounded"
      >
        <option value="">Sort</option>
        <option value="rating">Rating</option>
        <option value="year">Year</option>
      </select>
    </div>
  );
}
