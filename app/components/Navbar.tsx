"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  { name: "Shows", href: "/shows" },
  { name: "Categories", href: "/categories" },
];

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="w-full bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-semibold">
          🎬 MovieDirectory
        </Link>

        <div className="flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm ${
                path === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-500"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
