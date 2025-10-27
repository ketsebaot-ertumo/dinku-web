import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  date: string;
  author: string;
  content: string;
  image: string;
}

const fallbackPosts: Record<string, BlogPost> = {
  "smart-energy-systems": {
    title: "Powering the Future: Smart Energy Systems",
    date: "October 10, 2025",
    author: "Admin",
    content: `
      <p>Smart energy systems are transforming how we consume and distribute power...</p>
      <p>Through IoT and automation, the efficiency of power grids is increasing dramatically.</p>
    `,
    image: "/images/4.jpg",
  },
  // add more fallback posts
};

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const post = fallbackPosts[params.slug];

  if (!post) return notFound();

  return (
    <article className="container mx-auto px-6 py-16 max-w-3xl">
      <img
        src={post.image}
        alt={post.title}
        className="rounded-xl mb-8 w-full h-80 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-8">
        By {post.author} — {post.date}
      </p>
      <div
        className="prose prose-lg text-gray-700"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </article>
  );
}
