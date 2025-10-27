'use client';
// import React, { useState } from "react";

// type FooterProps = {
//     brand?: string;
//     year?: number;
// };

// const NAV = [
//     { label: "Home", href: "/" },
//     { label: "Products", href: "/products" },
//     { label: "Pricing", href: "/pricing" },
//     { label: "Help", href: "/help" },
//     { label: "Blog", href: "/blog" },
// ];

// export default function Footer({ brand = "Dinku", year = new Date().getFullYear() }: FooterProps) {
//     const [email, setEmail] = useState("");
//     const [status, setStatus] = useState<null | "ok" | "error">(null);

//     function isValidEmail(v: string) {
//         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
//     }

//     function handleSubscribe(e: React.FormEvent) {
//         e.preventDefault();
//         if (!isValidEmail(email)) {
//             setStatus("error");
//             return;
//         }
//         setStatus(null);
//         setTimeout(() => {
//             setStatus("ok");
//             setEmail("");
//         }, 700);
//     }

//     return (
//         <footer className="bg-slate-900 text-slate-100 dark:bg-white dark:text-slate-900">
//             <h2 className="sr-only">Site footer</h2>

//             <div className="container mx-auto px-6 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
//                     {/* Brand */}
//                     <div className="flex items-start gap-4">
//                         <div className="flex-shrink-0 w-12 h-12 rounded-lg shadow-lg overflow-hidden">
//                             <svg className="w-full h-full" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
//                                 <defs>
//                                     <linearGradient id="g" x1="0" x2="1">
//                                         <stop offset="0" stopColor="#5B8DEF" />
//                                         <stop offset="1" stopColor="#7BE0C6" />
//                                     </linearGradient>
//                                 </defs>
//                                 <rect width="44" height="44" rx="10" fill="url(#g)" />
//                                 <path d="M12 13c6 0 11 0 11 9s-5 9-11 9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
//                             </svg>
//                         </div>
//                         <div>
//                             <div className="font-semibold text-lg">{brand}</div>
//                             <div className="text-sm text-slate-400 dark:text-slate-500 mt-1">Modern UI, human-centered experience</div>
//                         </div>
//                     </div>

//                     {/* Nav */}
//                     <nav className="flex flex-wrap gap-3 justify-start md:justify-center items-center">
//                         {NAV.map((item) => (
//                             <a
//                                 key={item.href}
//                                 href={item.href}
//                                 className="text-slate-200 hover:text-white px-3 py-1 rounded-lg transition transform hover:-translate-y-1"
//                             >
//                                 {item.label}
//                             </a>
//                         ))}
//                     </nav>

//                     {/* Subscribe / Contact */}
//                     <div className="flex flex-col items-stretch gap-4">
//                         <form onSubmit={handleSubscribe} aria-label="Subscribe to newsletter" className="min-w-0">
//                             <label htmlFor="email" className="block text-sm font-medium text-slate-100 mb-2">
//                                 Get product updates
//                             </label>
//                             <div className="flex gap-2">
//                                 <input
//                                     id="email"
//                                     name="email"
//                                     type="email"
//                                     placeholder="you@company.com"
//                                     value={email}
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     className={`flex-1 px-3 py-2 rounded-lg bg-slate-800 border border-slate-800 placeholder-slate-400 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-400 transition ${
//                                         status === "error" ? "ring-2 ring-red-300" : ""
//                                     }`}
//                                     aria-invalid={status === "error"}
//                                     required
//                                 />
//                                 <button
//                                     type="submit"
//                                     aria-label="Subscribe"
//                                     className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-300 text-slate-900 font-semibold rounded-lg shadow-md hover:scale-105 transition"
//                                 >
//                                     Subscribe
//                                 </button>
//                             </div>
//                             <p className={`mt-2 text-sm ${status === "error" ? "text-red-300" : "text-slate-400"}`}>
//                                 {status === "error"
//                                     ? "Please enter a valid email."
//                                     : status === "ok"
//                                     ? "Subscribed — check your inbox!"
//                                     : "No spam. Unsubscribe anytime."}
//                             </p>
//                         </form>

//                         <div className="flex flex-wrap items-center gap-3 mt-1">
//                             <a href="mailto:hello@example.com" className="text-sm text-slate-400 hover:text-slate-200">
//                                 hello@example.com
//                             </a>

//                             <div className="flex items-center gap-2 ml-auto md:ml-0">
//                                 <a href="#" aria-label="Twitter" className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition">
//                                     <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
//                                         <path d="M8 19c7.732 0 11.966-6.408 11.966-11.966 0-.182 0-.363-.012-.543A8.556 8.556 0 0 0 22 4.348a8.29 8.29 0 0 1-2.357.646 4.106 4.106 0 0 0 1.803-2.27 8.214 8.214 0 0 1-2.605.996A4.103 4.103 0 0 0 12.15 7.03 11.64 11.64 0 0 1 3.15 3.18a4.103 4.103 0 0 0 1.27 5.478A4.073 4.073 0 0 1 2.8 8.46v.052a4.103 4.103 0 0 0 3.29 4.02 4.095 4.095 0 0 1-1.852.07 4.104 4.104 0 0 0 3.832 2.847A8.233 8.233 0 0 1 2 17.54a11.617 11.617 0 0 0 6.29 1.84" />
//                                     </svg>
//                                 </a>
//                                 <a href="#" aria-label="GitHub" className="w-9 h-9 inline-flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 transition">
//                                     <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
//                                         <path d="M12 2C6.477 2 2 6.485 2 12.02c0 4.428 2.867 8.185 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.455-1.157-1.111-1.466-1.111-1.466-.909-.621.069-.609.069-.609 1.005.072 1.534 1.034 1.534 1.034.893 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.112-4.555-4.944 0-1.091.39-1.984 1.03-2.683-.104-.254-.447-1.277.098-2.66 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.747-1.025 2.747-1.025.547 1.383.204 2.406.1 2.66.642.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.567 4.934.36.311.682.925.682 1.866 0 1.347-.012 2.434-.012 2.765 0 .269.18.58.688.482A10.013 10.013 0 0 0 22 12.02C22 6.485 17.523 2 12 2z" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                  <div className="mt-8 border-t border-slate-800 dark:border-slate-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
//                      <div>
//                          &copy; {year} {brand}. All rights reserved.
//                      </div>
//                      <div className="flex gap-3">
//                          <a href="/terms" className="hover:text-slate-200">
//                              Terms
//                          </a>
//                          <a href="/privacy" className="hover:text-slate-200">
//                              Privacy
//                          </a>
//                      </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }


// "use client";

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
                    <div className="flex items-start gap-4">
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
                        {/* <div>
                            <div className="font-semibold text-lg">{brand}</div>
                            <div className="text-sm text-slate-400 dark:text-slate-500 mt-1">Modern UI, human-centered experience</div>
                        </div> */}
                    </div>

                    <h3 className="text-white text-2xl font-bold my-4">{data.companyName}</h3>
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
