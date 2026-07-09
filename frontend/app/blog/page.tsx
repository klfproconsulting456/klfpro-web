import Link from "next/link";

export default function BlogListPage() {
  return (
    <div className="container-pro py-10">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <ul className="mt-4 list-disc pl-5">
        <li>
          <Link href="/blog/home-loan-rates-2026">Home loan rates 2026</Link>
        </li>
      </ul>
    </div>
  );
}
