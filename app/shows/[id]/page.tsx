import TrailerButton from "@/app/components/TrailerButton";
import movies from "@/app/data/movies.json";
import Image from "next/image";
import { Metadata } from "next";

type Props = { params: { id: string } };

// Metadata generation for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params; // ✅ unwrap the Promise
  const show = movies.find((s) => s.id.toString() === resolvedParams.id);
  return {
    title: show ? `${show.name} | Movies & TV Shows` : "Show Not Found",
    description: show?.overview || "Explore details of this movie or TV show.",
  };
}

export default async function ShowDetail({ params }: Props) {
  const resolvedParams = await params;
  const show = movies.find((s) => s.id.toString() === resolvedParams.id);

  if (!show)
    return (
      <div className="text-center mt-20 text-xl font-semibold">
        ❌ Show not found.
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 bg-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-xl border border-white/10">
        {/* LEFT SIDE — POSTER */}
        <div className="flex-shrink-0">
          <Image
            src={show.image || "/placeholder.png"}
            alt={show.name}
            width={400}
            height={600}
            className="rounded-xl shadow-2xl border border-white/10"
          />
        </div>

        {/* RIGHT SIDE — DETAILS */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4 text-white tracking-tight">
              {show.name}
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              {show.overview || "No description available."}
            </p>

            <div className="space-y-2 text-gray-200">
              <p>
                <span className="font-semibold text-white">Year:</span>{" "}
                {show.year || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-white">Rating:</span>{" "}
                {show.rating || "N/A"}
              </p>
              {show.genres && (
                <p>
                  <span className="font-semibold text-white">Genres:</span>{" "}
                  {show.genres.join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* TRAILER BUTTON */}
          {show.trailerUrl && <TrailerButton trailerUrl={show.trailerUrl} />}
        </div>
      </div>
    </main>
  );
}
