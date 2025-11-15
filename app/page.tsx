import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Movies & TV Shows Directory
        </h1>

        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Explore trending movies & TV shows powered by the Watchmode API + OMDB API.
          This directory provides detailed information including posters, ratings,
          release years, genres, and trailers — all fetched using ISR/SSG with Next.js.
        </p>

        <Link
          href="/shows"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white text-lg font-medium hover:bg-blue-700 transition"
        >
          Browse Shows
        </Link>
      </section>

      {/* Dataset Section */}
      <section className="bg-white dark:bg-neutral-900 py-16 px-6 border-t border-gray-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            About This Dataset
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            This project uses two external APIs:{" "}
            <span className="font-semibold">Watchmode API</span> for fetching TV
            show & movie metadata (title, trailer, genre, runtime), and{" "}
            <span className="font-semibold">OMDB API</span> for enhanced poster
            images, IMDB ratings, and plot summaries.
          </p>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>✔ Trending Movies & TV Shows</li>
            <li>✔ Genre-based filtering & search options</li>
            <li>✔ Individual detailed pages for each show</li>
            <li>✔ Trailer links from Watchmode</li>
            <li>✔ Static Generation (SSG) + Incremental Static Regeneration (ISR)</li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-10 text-gray-900 dark:text-white">
          Site Features
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[
            {
              title: "Search & Filters",
              desc: "Find movies & shows instantly using categories, genres, and ratings."
            },
            {
              title: "Detail Pages",
              desc: "Every title has its own dedicated detail page with rich metadata."
            },
            {
              title: "SEO Optimized",
              desc: "Metadata, dynamic OG images, and sitemap included."
            },
            {
              title: "Dark Mode Ready",
              desc: "Beautiful design with full dark/light theme support."
            },
            {
              title: "Static Generation",
              desc: "Pages built using SSG & regenerated efficiently using ISR."
            },
            {
              title: "Built with AI",
              desc: "Dataset cleaning, design inspiration, and scaffolding assisted by AI tools."
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="text-center py-20">
        <Link
          href="/shows"
          className="px-8 py-4 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
        >
          Start Exploring →
        </Link>
      </section>
    </main>
  );
}
