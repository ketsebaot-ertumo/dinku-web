import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NavbarClient from "@/components/NavbarClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const viewport = {
  // themeColor: "#0a2a7a",
  themecolor: "#ff7617",
  // themeColor: [<meta name="theme-color" content="#0a2a7a" />]
};

export const metadata = {
  metadataBase: new URL("https://laternlights.com"),
  title: {
    default: "Latern Lights",
    template: "%s | Latern Lights"
  },
  description: "Latern Lights is a modern electrical and lighting solutions company illuminating the Electric City with innovation and sustainability. We specialize in smart lighting systems, electrical installations, energy-efficient technologies, and custom illumination designs for homes, businesses, and public spaces.",
  keywords: ["Latern", "lights", "Latern Lights", "safaricom", "Latern lights", "Latern", "Lights",  "electric city",
    "lighting solutions",
    "smart lighting",
    "LED systems",
    "electrical installation",
    "energy efficiency",],
  authors: [{ name: "Ketsebaot Ertumo", url: "https://ketsebaot.vercel.app" }],
  icons: {
    icon: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1762002577/dinku/images/logo_dnxasx.png',
    apple: 'https://res.cloudinary.com/dq6mvqivd/image/upload/v1762002577/dinku/images/logo_dnxasx.png',
  },
  openGraph: {
    title: "Latern Lights",
     description:
      "Empowering the Electric City — Latern Lights delivers cutting-edge electrical and lighting solutions designed for a brighter, smarter, and more energy-efficient future.",
    url: "https://laternlights.com",
    siteName: "Latern Lights",
    images: [
      {
        url: "https://res.cloudinary.com/dq6mvqivd/image/upload/v1762002577/dinku/images/logo_dnxasx.png",
        width: 1200,
        height: 630,
        alt: "Latern Lights",
        type: "image/jpg"
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latern Lights", 
    description:
      "Latern Lights powers the Electric City with smart, sustainable lighting and electrical innovation for homes, businesses, and industries.",
    images: [
      {
        url: "https://res.cloudinary.com/dq6mvqivd/image/upload/v1762002577/dinku/images/logo_dnxasx.png",
        width: 1200,
        height: 630,
        alt: "Latern Lights",
        type: "image/jpg"
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar/> */}
        <NavbarClient />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
