'use client';

import { useState } from "react";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: React.ElementType;
}

interface FooterData {
  companyName: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  socials: SocialLink[];
  links: { name: string; href: string }[];
  services: string[];
}

type FooterProps = {
    brand?: string;
    year?: number;
};

const data: FooterData = {
  companyName: "Electric Co.",
  description:
    "Delivering reliable electrical infrastructure, automation, and power distribution solutions with innovation at the core.",
  address: "123 Powerline Street, Energy City, Country",
  phone: "+123 456 7890",
  email: "info@electricco.com",
  socials: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Instagram", href: "#", icon: Instagram },
  ],
  links: [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Team", href: "#team" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    "Substation Construction",
    "High Power Tower Installation",
    "15kV/33kV Distribution Systems",
    "Industrial Automation",
    "Renewable Integration",
  ],
};

export default function Footer({ brand = "Dinku", year = new Date().getFullYear() }: FooterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
//   const [data, setData] = useState(fallbackData);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      // Example: send to your API route
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else throw new Error("Failed");
    } catch {
      setStatus("error");
    }
  }

  return (
    <footer className="bg-gray-900 text-gray-300 lg:pt-16 pb-8">
        <div className="container mx-auto px-6">
            {/* Grid */}
            <div className="hidden lg:grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10 mb-12">
                {/* Company Info */}
                <div>
                    {/* Brand */}
                    {/* <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg shadow-lg overflow-hidden">
                            <svg className="w-full h-full" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                                <defs>
                                    <linearGradient id="g" x1="0" x2="1">
                                        <stop offset="0" stopColor="#ff7617" />
                                        <stop offset="1" stopColor="#f3ae0dff" />
                                    </linearGradient>
                                </defs>
                                <rect width="44" height="44" rx="10" fill="url(#g)" />
                                <path d="M12 13c6 0 11 0 11 9s-5 9-11 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div> */}

                    <img src="/logo.png" alt="Latern Lights" className="w-20 bg-gray-400 rounded-lg mb-2" />
                    <h3 className="text-white text-2xl font-bold mb-4">{data.companyName}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">{data.description}</p>

                    {/* Socials */}
                    <div className="flex space-x-4">
                    {data.socials.map((s) => (
                        <Link
                        key={s.name}
                        href={s.href}
                        aria-label={s.name}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-orange-500 transition"
                        >
                        <s.icon className="w-4 h-4 text-white" />
                        </Link>
                    ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                    {data.links.map((link) => (
                        <li key={link.href}>
                        <Link href={link.href} className="hover:text-primary/60 transition">
                            {link.name}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 className="text-white text-lg font-semibold mb-4">Our Expertise</h4>
                    <ul className="space-y-3 text-sm">
                    {data.services.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white text-lg font-semibold mb-4">Stay Updated</h4>
                    <p className="text-sm text-gray-400 mb-4">
                        Subscribe to our newsletter for project updates and energy insights.
                    </p>

                    <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center sm:items-stretch">
                        <input
                            type="email"
                            placeholder="Your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full sm:flex-1 px-4 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="mt-3 sm:mt-0 sm:ml-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 rounded-md font-semibold text-white transition disabled:opacity-50"
                        >
                            {status === "loading" ? "..." : "Subscribe"}
                        </button>
                    </form>

                    {status === "success" && (
                        <p className="text-green-400 text-sm mt-3">Thanks for subscribing!</p>
                    )}
                    {status === "error" && (
                        <p className="text-red-400 text-sm mt-3">Subscription failed. Try again.</p>
                    )}
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 pt-10 lg:pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                <p>© {new Date().getFullYear()} {data.companyName}. All rights reserved.</p>
                <div className="mt-3 md:mt-0 space-x-4">
                    <Link href="#" className="hover:text-orange-500 transition">
                    Privacy Policy
                    </Link>
                    <Link href="#" className="hover:text-orange-500 transition">
                    Terms of Service
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
