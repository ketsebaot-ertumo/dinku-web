'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function NavbarClient() {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/blog");

  if (hideNavbar) return null;

  return <Navbar />;
}
