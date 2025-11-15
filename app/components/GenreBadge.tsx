type Props = {
  genre: string;
};

export default function GenreBadge({ genre }: Props) {
  return (
    <span className="px-3 py-1 text-xs rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
      {genre}
    </span>
  );
}
