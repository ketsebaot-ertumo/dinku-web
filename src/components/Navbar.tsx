"use client";
import { useState } from "react";
import Link from "next/link";
// import { navLinks } from "@/data/navLinks";
import { Menu, X, ChevronDown, Search, Headphones } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  {
    name: "Blog", href: "/blog"
    // dropdown: [
    //   { name: "Blog", href: "/blog" },
    //   { name: "Blog Detail", href: "/blog/detail" },
    // ],
  },
  {
    name: "Pages",
    dropdown: [
      { name: "Team", href: "/team" },
      { name: "Pricing", href: "/pricing" },
      { name: "Appointment", href: "/appointment" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];


export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-foreground text-white shadow-md sticky top-0 z-50 border-b border-primary">
        <div className="container mx-auto flex justify-between items-center px-6 py-8">
            {/* Logo */}
            <Link href="/" className="flex items-center text-4xl font-bold">
              <span className="text-orange-500 mr-2">💡</span> Electrician
            </Link>

            {/* Mobile Toggle */}
            <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
            </button>

            {/* Nav Items */}
            <ul
                className={`${
                    open ? "block" : "hidden"
                } absolute lg:static top-14 left-0 w-full lg:w-auto lg:flex gap-6`}
            >
                {navLinks.map((link, idx) =>
                    link.dropdown ? (
                    <li key={idx} className="relative group px-4 py-2 md:py-0 text-xl">
                      <span className="flex items-center cursor-pointer">
                          {link.name} <ChevronDown className="ml-1 w-4 h-4" />
                      </span>
                      <ul className="absolute hidden group-hover:block bg-white text-gray-900 rounded-md shadow-lg mt-2">
                        {link.dropdown.map((item, i) => (
                            <li key={i} className="px-4 py-2 hover:bg-gray-200 whitespace-nowrap">
                              <Link href={item.href}>{item.name}</Link>
                            </li>
                        ))}
                      </ul>
                    </li>
                    ) : (
                    <li key={idx} className="px-4 py-2 md:py-0 text-xl">
                        <Link href={link.href}>{link.name}</Link>
                    </li>
                    )
                )}
            </ul>

            {/* Right Section */}
            <div className="hidden lg:flex items-center gap-6">
                {/* Search
                <button className="hover:text-orange-500 transition">
                    <Search size={18} />
                </button> */}

                {/* Phone Number */}
                <div className="flex items-center gap-2 font-semibold">
                    <Headphones className="text-orange-500" size={20} />
                    <a href="tel:+1234567890">+(123) 456-7890</a>
                </div>
            </div>
        </div>
    </nav>
  );
}
