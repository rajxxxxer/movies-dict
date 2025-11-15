import movies from "@/app/data/movies.json";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

// Static params
export async function generateStaticParams() {
  return movies.map((m) => ({ id: m.id.toString() }));
}
// generateMetadata
export async function generateMetadata({ params }: Props) {
  const Params = await params;
  const id = Params?.id?.toString(); // safe

  const show = movies.find((s) => s.id.toString() === id);

  return {
    title: show ? `${show.name} | Movies & TV Shows` : "Show Not Found",
    description: show?.overview || "Explore details of this movie or TV show.",
  };
}


export default async function ShowDetail({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams.id.toString();

  const show = movies.find((s) => s.id.toString() === id);
  if (!show) return <div>Show not found.</div>;

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black text-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 bg-white/5 p-8 rounded-2xl backdrop-blur-xl shadow-xl border border-white/10">

        {/* LEFT SIDE — POSTER */}
        <div className="shrink-0">
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
                  <span className="font-semibold text-white">Genre:</span>{" "}
                  {show.genres.join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* TRAILER BUTTON */}
          {show.trailerUrl && (
            <a
              href={show.trailerUrl}
              target="_blank"
              className="mt-8 inline-block text-center bg-blue-600 hover:bg-blue-700 transition-colors text-white px-6 py-3 rounded-xl shadow-lg font-semibold"
            >
              🎬 Watch Trailer
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
