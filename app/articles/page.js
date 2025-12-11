import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="my">
      <h1>Articles Page</h1>
      <Link href="/posts">
        <button>Go to Posts Page</button>
      </Link>
    </div>
  );
}
