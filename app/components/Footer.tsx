export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-neutral-900 border-t border-gray-200 dark:border-neutral-800 py-8 mt-16">
      <div className="max-w-6xl mx-auto text-center text-gray-600 dark:text-gray-300 text-sm">
        <p>Built with Watchmode API + OMDB API · Next.js SSG / ISR</p>
        <p className="mt-2">© {new Date().getFullYear()} Movie Directory</p>
      </div>
    </footer>
  );
}
