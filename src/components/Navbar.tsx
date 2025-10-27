
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { Menu, X, ChevronDown, Headphones } from "lucide-react";

// interface DropdownLink {
//   name: string;
//   href: string;
// }

// export interface NavLinkProps {
//   name: string;
//   href: string;
//   dropdown?: DropdownLink[];
// }

// const navLinks: NavLinkProps[] = [
//   { name: "Home", href: "/" },
//   { name: "About Us", href: "/#about" },
//   { name: "Services", href: "/#service" },
//   { name: "Projects", href: "/#projects" },
//   {
//     name: "Company",
//     href: "#",
//     dropdown: [
//       { name: "Team", href: "/#team" },
//       { name: "Blog", href: "/blog" },
//     ],
//   },
//   { name: "Contact Us", href: "/contact" },
// ];

// // 🧠 Helper: Get current hash (e.g., #about)
// function useCurrentHash() {
//   const [hash, setHash] = useState("");

//   useEffect(() => {
//     const updateHash = () => setHash(window.location.hash);
//     updateHash(); // initialize on mount
//     window.addEventListener("hashchange", updateHash);
//     window.addEventListener("scroll", updateHash); // optional for smoother UX
//     return () => {
//       window.removeEventListener("hashchange", updateHash);
//       window.removeEventListener("scroll", updateHash);
//     };
//   }, []);

//   return hash;
// }

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();
//   const currentHash = useCurrentHash();

//   // 🔍 helper: check if a link should be active
//   const isActive = (href: string) => {
//     // Root route
//     if (href === "/") return pathname === "/";
//     // Section links (e.g., /#about)
//     if (href.startsWith("/#")) return pathname === "/" && currentHash === href.replace("/", "");
//     // Regular routes (/contact, /blog)
//     return pathname === href;
//   };

//   return (
//     <nav className="bg-foreground text-white shadow-md sticky top-0 z-50 border-b border-primary">
//       <div className="container mx-auto flex justify-between items-center px-6 py-8">
//         {/* Logo */}
//         <Link href="/" className="flex items-center text-4xl font-bold">
//           <span className="text-orange-500 mr-2">💡</span> Electrician
//         </Link>

//         {/* Mobile Toggle */}
//         <button className="lg:hidden" onClick={() => setOpen(!open)}>
//           {open ? <X /> : <Menu />}
//         </button>

//         {/* Nav Items */}
//         <ul
//           className={`${
//             open ? "flex flex-col bg-white text-gray-800 py-4" : "hidden"
//           } absolute lg:static top-0 left-0 w-full lg:w-auto lg:flex lg:flex-row`}
//         >
//           <button
//             className="lg:hidden ml-auto mr-4"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <X /> : <Menu />}
//           </button>

//           {navLinks.map((link, idx) => {
//             const isDropdownActive =
//               link.dropdown?.some((item) => isActive(item.href)) ?? false;

//             return link.dropdown ? (
//               <li
//                 key={idx}
//                 className={`relative group px-4 py-2 md:py-0 text-xl transition-colors ${
//                   isDropdownActive ? "text-primary font-semibold" : ""
//                 }`}
//               >
//                 <span className="flex items-center cursor-pointer">
//                   {link.name} <ChevronDown className="ml-1 w-4 h-4" />
//                 </span>
//                 <ul className="absolute hidden group-hover:block bg-white text-gray-900 rounded-md shadow-lg mt-1 py-2">
//                   {link.dropdown.map((item, i) => (
//                     <li
//                       key={i}
//                       className={`px-6 py-2 rounded-md whitespace-nowrap transition-colors ${
//                         isActive(item.href)
//                           ? "bg-gray-100 text-primary font-semibold"
//                           : "hover:bg-gray-100"
//                       }`}
//                     >
//                       <Link href={item.href}>{item.name}</Link>
//                     </li>
//                   ))}
//                 </ul>
//               </li>
//             ) : (
//               <li
//                 key={idx}
//                 className={`px-4 py-2 md:py-0 text-xl transition-colors ${
//                   isActive(link.href) ? "text-primary font-semibold" : ""
//                 }`}
//               >
//                 <Link href={link.href}>{link.name}</Link>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Right Section */}
//         <div className="hidden lg:flex items-center gap-6">
//           <div className="flex items-center gap-2 font-semibold">
//             <Headphones className="text-orange-500" size={20} />
//             <a href="tel:+1234567890">+(123) 456-7890</a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Headphones } from "lucide-react";

interface DropdownLink {
  name: string;
  href: string;
}

export interface NavLinkProps {
  name: string;
  href: string;
  dropdown?: DropdownLink[];
}

const navLinks: NavLinkProps[] = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Services", href: "/#service" },
  { name: "Projects", href: "/#projects" },
  {
    name: "Company",
    href: "#",
    dropdown: [
      { name: "Team", href: "/#team" },
      { name: "Blog", href: "/blog" },
    ],
  },
  { name: "Contact Us", href: "/contact" },
];

// 🧠 Helper: Get current hash (e.g., #about)
function useCurrentHash() {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash(); // initialize on mount
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("scroll", updateHash); // optional for smoother UX
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("scroll", updateHash);
    };
  }, []);

  return hash;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const currentHash = useCurrentHash();

  // 🔍 helper: check if a link should be active
  const isActive = (href: string) => {
    // Root route
    if (href === "/") return pathname === "/";
    // Section links (e.g., /#about)
    if (href.startsWith("/#")) return pathname === "/" && currentHash === href.replace("/", "");
    // Regular routes (/contact, /blog)
    return pathname === href;
  };

  // Toggle dropdown for mobile
  const toggleDropdown = (linkName: string) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setOpen(false);
    setOpenDropdown(null);
  };

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
            open 
              ? "flex flex-col bg-white text-gray-800 py-4 absolute top-full left-0 w-full shadow-lg" 
              : "hidden"
          } lg:static lg:w-auto lg:flex lg:flex-row`}
        >
          {/* Mobile close button - positioned properly */}
          {open && (
            <div className="flex justify-end px-4 pb-2 lg:hidden">
              <button onClick={() => setOpen(false)}>
                <X />
              </button>
            </div>
          )}

          {navLinks.map((link, idx) => {
            const isDropdownActive =
              link.dropdown?.some((item) => isActive(item.href)) ?? false;

            return link.dropdown ? (
              <li
                key={idx}
                className={`relative group px-4 py-2 md:py-0 text-xl transition-colors ${
                  isDropdownActive ? "text-primary font-semibold" : ""
                }`}
              >
                {/* Desktop Dropdown */}
                <div className="hidden lg:block">
                  <span className="flex items-center cursor-pointer">
                    {link.name} <ChevronDown className="ml-1 w-4 h-4" />
                  </span>
                  <ul className="absolute hidden group-hover:block bg-white text-gray-900 rounded-md shadow-lg mt-1 py-2 z-50">
                    {link.dropdown.map((item, i) => (
                      <li
                        key={i}
                        className={`px-6 py-2 rounded-md whitespace-nowrap transition-colors ${
                          isActive(item.href)
                            ? "bg-gray-100 text-primary font-semibold"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <Link 
                          href={item.href} 
                          onClick={handleLinkClick}
                          className="block w-full"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Dropdown */}
                <div className="lg:hidden">
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className={`flex items-center justify-between w-full text-left ${
                      openDropdown === link.name ? "text-primary font-semibold" : ""
                    }`}
                  >
                    {link.name}
                    <ChevronDown 
                      className={`ml-1 w-4 h-4 transition-transform ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`} 
                    />
                  </button>
                  
                  {/* Mobile dropdown items */}
                  {openDropdown === link.name && (
                    <ul className="pl-4 mt-2 space-y-2 bg-gray-50 rounded-md py-2">
                      {link.dropdown.map((item, i) => (
                        <li key={i}>
                          <Link
                            href={item.href}
                            onClick={handleLinkClick}
                            className={`block py-2 px-4 rounded transition-colors ${
                              isActive(item.href)
                                ? "text-primary font-semibold bg-gray-100"
                                : "hover:text-primary"
                            }`}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ) : (
              <li
                key={idx}
                className={`px-4 py-2 md:py-0 text-xl transition-colors ${
                  isActive(link.href) ? "text-primary font-semibold" : ""
                }`}
              >
                <Link 
                  href={link.href} 
                  onClick={handleLinkClick}
                  className="block"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-2 font-semibold">
            <Headphones className="text-orange-500" size={20} />
            <a href="tel:+1234567890">+(123) 456-7890</a>
          </div>
        </div>
      </div>
    </nav>
  );
}