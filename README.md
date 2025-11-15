🎬 Movie Explorer – Next.js Internship Assessment

A modern movie discovery app built with Next.js 16 (App Router + Turbopack) featuring browsing, searching, sorting, trailers, categories, and show detail pages with a clean UI.

This project demonstrates full-stack thinking: data scraping, data shaping, SSG, client interactivity, modular UI, and API integrations.

🚀 Features

Browse 100+ movies with rating, year, cast, and genres

Category-based movie filtering

Search + sorting (rating/year)

Individual show detail page

Trailer button on each movie card

Static site generation (SSG) with extremely fast load times

Fully responsive UI

Clean folder structure and reusable components

📦 5. Dataset Used + Source URL

This project uses a custom dataset combining:

1. Watchmode API (Primary Metadata)

Used for:
→ Title, poster image, ratings, release year, genres, runtime, plot

Source:
https://watchmode.com/api/

2. OMDB API (Extra Enrichment)

Used for:
→ IMDb rating, actors, director, country

Source:
https://www.omdbapi.com/

🛠 6. How the Dataset Was Scraped / Generated

The dataset is auto-generated via a custom TypeScript script located at:

app/data/generate.ts

Process

Script loads a list of movie IDs.

For each ID, it calls Watchmode API:

/title/{id}/details/

/title/{id}/sources/

Then calls OMDB API with IMDb ID for enrichment.

Merges the responses into a single uniform JSON object.

Adds pagination support inside the script (+ local caching).

Writes the final dataset to:

app/data/movies.json

Run Command
npm run generate:data


This automatically regenerates the movies.json dataset.

🛠 7. Tech Stack + Design Inspiration
Frontend

Next.js 16 (App Router)

React 19

TailwindCSS 4

Framer Motion (animations)

Tools

TypeScript

Prettier (formatting)

ESLint (linting)

Design Inspiration

The UI is inspired by:

Netflix browsing layout

Prime Video card structure

Modern minimalist dashboards (clean spacing + sharp typography)

I kept the UI:

Extremely fast

Highly readable

Mobile-friendly

🤖 8. AI Prompts Used (2–3 examples)
Prompt 1 – Data Formatting

“Convert this Watchmode + OMDB merged response into a clean Movie object with name, year, rating, runtime, trailer_url, genres, and cast arrays. Make it consistent for 100+ movies.”

Prompt 2 – UI Component Design

“Give me a Netflix-style movie card component using TailwindCSS + Framer Motion with hover animation, space-efficient design, and a trailer button.”

Prompt 3 – Optimization

“Optimize my Next.js App Router code so that the page stays SSR, but search/sort remains client-side. Split it into server component + client component.”

🔮 9. What I Would Improve With 2 More Days
1️⃣ Add Incremental Static Regeneration (ISR)

Right now SSG builds all movies at build time.
With ISR:

New movies auto-update

No need to rebuild the whole app

Faster deployment cycles

2️⃣ Recently Watched System

Using localStorage:

Track last 10 watched movies

Add a “Continue Watching” section on home page

3️⃣ Better Trailer Integration

YouTube / TMDB fallback

Auto-play mini preview on hover (like Netflix)

4️⃣ Global Search Across Categories

A universal search bar with:

Title

Cast

Year

Genre

5️⃣ Add infinite scrolling

Instead of rendering everything at once → smooth Netflix-like infinite rows.

📁 Folder Structure
app/
 ├─ data/
 │   ├─ movies.json
 │   └─ generate.ts
 ├─ shows/
 │   ├─ page.tsx (SSR)
 │   └─ ShowsClient.tsx (client)
 ├─ components/
 │   ├─ SearchBar.tsx
 │   ├─ Filters.tsx
 │   └─ ShowCard.tsx
 └─ categories/
     └─ [genre]/

▶️ How to Run the Project
Install:
npm install

Generate dataset (optional):
npm run generate:data

Run dev:
npm run dev

Build:
npm run build
