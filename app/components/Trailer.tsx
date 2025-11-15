// app/components/Trailer.tsx
"use client";

type TrailerProps = {
  trailerUrl?: string | null; // allow null
  onClose: () => void;
};

// Helper to extract YouTube video ID
const getYouTubeID = (url: string) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/,
  );
  return match ? match[1] : null;
};

export default function Trailer({ trailerUrl, onClose }: TrailerProps) {
  if (!trailerUrl) return null;

  const videoId = getYouTubeID(trailerUrl);
  if (!videoId) return <p className="text-white">Invalid YouTube link</p>;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 bg-red-600 text-white px-3 py-2 rounded hover:bg-red-700"
      >
        Back
      </button>

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
