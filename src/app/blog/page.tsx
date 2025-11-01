"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { useRouter } from "next/navigation";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  slug: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Fallback data (for development or when no API data found)
  const fallbackPosts: BlogPost[] = [
    {
      id: 1,
      title: "Powering the Future: Smart Energy Systems",
      excerpt:
        "Explore how automation, IoT, and renewables are transforming how industries manage power.",
      author: "Admin",
      date: "October 10, 2025",
      category: "Energy",
      image: "/images/4.jpg",
      slug: "smart-energy-systems",
    },
    {
      id: 2,
      title: "5 Key Benefits of Industrial Automation",
      excerpt:
        "Learn how automation improves efficiency, safety, and cost-effectiveness across modern infrastructure.",
      author: "Engineering Team",
      date: "October 12, 2025",
      category: "Automation",
      image: "/images/sub.jpg",
      slug: "industrial-automation-benefits",
    },
    {
      id: 3,
      title: "Renewable Energy Projects to Watch in 2025",
      excerpt:
        "A look into the latest solar, wind, and hybrid energy projects shaping the next generation of sustainability.",
      author: "Green Future",
      date: "October 20, 2025",
      category: "Renewables",
      image: "/images/3.jpg",
      slug: "renewable-projects-2025",
    },
  ];

  // Example fetch — replace with your CMS or API later
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/blog");
        if (!res.ok) throw new Error("No data found");
        const data = await res.json();
        setPosts(data.length ? data : fallbackPosts);
      } catch {
        setPosts(fallbackPosts);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <main className="bg-gray-50 min-h-screen">
        <section className="relative bg-gradient-to-r from-primary to-black pt-30 pb-68 overflow-hidden text-white">
            <section className="container mx-auto px-6 relative z-10">
                <button
                    onClick={() => router.back()} // go back to previous page
                    className="flex items-center text-white font-semibold hover:opacity-60 transition"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                </button>
            </section>

            <div className="container mx-auto px-6 py-4 text-center relative z-10">
                <h1 className="text-5xl font-bold mb-4">Insights & Innovations</h1>
                <p className="text-orange-100 max-w-2xl mx-auto text-lg">
                Explore our latest thoughts on technology, automation, and sustainable power.
                </p>
            </div>

            {/* Slanted divider */}
            <svg
                className="absolute bottom-0 left-0 w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
            >
                <path
                    fill="#f9fafb"
                    d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320Z"
                />
            </svg>
        </section>

        {/* Blog Grid */}
        <section className="container mx-auto px-6 pb-16">
            {loading ? (
            <p className="text-center text-gray-500">Loading posts...</p>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 group"
                        >
                            {/* <Link href={`/blog/${post.id}`}> */}
                                {/* Thumbnail */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute top-3 left-3 bg-primary text-white text-xs px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors">
                                        {/* <Link href={`/blog/${post.id}`}>{post.title}</Link> */}
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-gray-400 text-xs">
                                        <User className="w-4 h-4 mr-1" /> {post.author}
                                        <Calendar className="w-4 h-4 ml-4 mr-1" /> {post.date}
                                    </div>
                                </div>
                            {/* </Link> */}
                        </article>
                    ))}
                </div>
            )}
        </section>
    </main>
  );
}
