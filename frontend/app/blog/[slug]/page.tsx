export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <article className="container-pro py-10">
      <h1 className="text-3xl font-semibold">{params.slug.replaceAll("-", " ")}</h1>
      <p className="mt-3">SEO article detail template.</p>
    </article>
  );
}
