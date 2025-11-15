import movies from "@/app/data/movies.json";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  return movies.map((m) => ({ id: m.id.toString() }));
}

export default function ShowDetail({ params }: Props) {
  const show = movies.find((s) => s.id.toString() === params.id);

  if (!show) return <div>Show not found.</div>;

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold">{show.name}</h1>

      {/* eslint-disable-next-line @next/next/no-img-element */}
     <Image
  src={show.image || "/placeholder.png"}
  alt={show.name}
  width={400}
  height={600}
  className="rounded-xl my-6 shadow-lg"
/>
     

      <p className="text-lg text-gray-300 mb-4">{show.overview}</p>

      <p>
        <b>Year:</b> {show.year}
      </p>
      <p>
        <b>Rating:</b> {show.rating}
      </p>

      {show.trailerUrl && (
        <a
          href={show.trailerUrl}
          className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Watch Trailer →
        </a>
      )}
    </main>
  );
}
