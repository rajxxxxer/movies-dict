const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch"); // npm i node-fetch@2

const WATCHMODE_API_KEY = "wELWo199Jk3y3qxHHo7nqnBr6kKF1iO2ew0HHFDD";
const OMDB_API_KEY = "790abeb5";

const WATCHMODE_BASE = "https://api.watchmode.com/v1";
const OMDB_BASE = "https://www.omdbapi.com/";

async function fetchJson(url) {
  console.log("🔹 Fetching:", url);
  const res = await fetch(url);
  const text = await res.text();
  console.log("🔹 Status:", res.status);
  try {
    const json = JSON.parse(text);
    return json;
  } catch (e) {
    console.error("❌ Failed to parse JSON:", text);
    throw new Error(`Invalid JSON from ${url}`);
  }
}

async function run() {
  console.log("⏳ Fetching Watchmode list with pagination...");
  const movies = [];
  const limit = 50; // 50 per page
  let fetchedCount = 0;
  let page = 1;

  while (fetchedCount < 100) { // stop after 100 movies
    let list;
    try {
      list = await fetchJson(`${WATCHMODE_BASE}/list-titles/?apiKey=${WATCHMODE_API_KEY}&types=tv_series&limit=${limit}&page=${page}`);
    } catch (err) {
      console.error("❌ Failed to fetch list from Watchmode:", err.message || err);
      break;
    }

    const items = list.titles ?? list.results ?? list;
    if (!Array.isArray(items) || items.length === 0) {
      console.warn("⚠️ No more items on page", page);
      break;
    }

    for (const show of items) {
      try {
        console.log("➡️ Processing show:", show.title ?? show.name, "id:", show.id);

        if (!show.imdb_id) {
          try {
            const det = await fetchJson(`${WATCHMODE_BASE}/title/${show.id}/details/?apiKey=${WATCHMODE_API_KEY}`);
            show.imdb_id = det.imdb_id ?? null;
          } catch {
            show.imdb_id = null;
          }
        }

        let omdb = {};
        if (show.imdb_id) {
          try {
            omdb = await fetchJson(`${OMDB_BASE}?apikey=${OMDB_API_KEY}&i=${show.imdb_id}`);
          } catch (e) {
            console.warn("⚠️ OMDB data missing for:", show.imdb_id);
            omdb = {};
          }
        }

        let details = {};
        try {
          details = await fetchJson(`${WATCHMODE_BASE}/title/${show.id}/details/?apiKey=${WATCHMODE_API_KEY}`);
        } catch {
          details = {};
        }

        movies.push({
          id: show.id,
          name: omdb.Title ?? show.title ?? show.name ?? "Unknown",
          imdb_id: show.imdb_id ?? null,
          image: omdb.Poster && omdb.Poster !== "N/A" ? omdb.Poster : null,
          year: omdb.Year ?? show.year ?? null,
          rating: omdb.imdbRating ?? null,
          trailerUrl: details.trailer ?? null,
          overview: omdb.Plot ?? null,
          genres: omdb.Genre ? omdb.Genre.split(",").map(x => x.trim()) : [],
          runtime: omdb.Runtime && omdb.Runtime !== "N/A" ? parseInt(omdb.Runtime.split(" ")[0]) : null,
        });

        console.log("✅ Added:", omdb.Title ?? show.title ?? show.name);
        fetchedCount++;
        if (fetchedCount >= 100) break;

        await new Promise(r => setTimeout(r, 200)); // avoid rate limits
      } catch (err) {
        console.error("⚠️ Error processing show id:", show.id, err.message || err);
      }
    }

    page++;
  }

  const outDir = path.join(__dirname);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "movies.json"), JSON.stringify(movies, null, 2));

  console.log("🎉 Saved:", movies.length, "movies to movies.json");
}

run();
