"use client";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies or shows..."
      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-neutral-900 border border-gray-300 dark:border-neutral-700 focus:ring-2 focus:ring-blue-500 outline-none"
    />
  );
}
