"use client";
import { useState } from "react";
import Trailer from "./Trailer";

type Props = {
  trailerUrl?: string | null; // ✅ fix type
};

export default function TrailerButton({ trailerUrl }: Props) {
  const [open, setOpen] = useState(false);

  if (!trailerUrl) return null;

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow font-semibold"
      >
        🎬 Watch Trailer
      </button>

      {open && (
        <Trailer trailerUrl={trailerUrl} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
