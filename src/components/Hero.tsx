// components/CenterCarousel.tsx
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  text: string;
  img: string;
}

const slides: Slide[] = [
  {
    id: 0,
    title: "Need any help we are ready for you",
    subtitle: "Welcome to Electric",
    text: "Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant?",
    img: "/images/sub.jpg",
  },
  {
    id: 1,
    title: "The Future of Electric Transportation",
    subtitle: "Welcome to Electric",
    text: "Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant?",
    img: "/images/3.jpg",
  },
  {
    id: 2,
    title: "Future Electric Power and Renewables",
    subtitle: "Welcome to Electric",
    text: "Ac mi duis mollis. Sapiente? Scelerisque quae, penatibus? Suscipit class corporis nostra rem quos voluptatibus habitant?",
    img: "/images/sub.jpg",
  },
];

export default function CenterCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

   // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="center" className="relative py-12 bg-foreground">
      <div className="container mx-auto px-6">
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[current].id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
            >
              {/* Left side (text) */}
              <div className="space-y-4 text-center md:text-left">
                <h6 className="uppercase text-primary text-sm font-semibold text-lg">
                  {slides[current].subtitle}
                </h6>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  {slides[current].title}
                </h1>
                <p className="text-gray-300 text-lg">{slides[current].text}</p>
                <a
                  href="#"
                  className="inline-block mt-4 bg-primary text-white font-bold px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-black transition"
                >
                  Read More →
                </a>
              </div>

              {/* Right side (image) */}
              <div className="relative w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={slides[current].img}
                  alt={slides[current].title}
                  fill
                  className="object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-6 md:mt-12">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setCurrent(i)}
                className={`w-8 h-1 rounded-full transition ${
                  current === i ? "bg-primary" : "bg-gray-500"
                }`}
              />
            ))}
          </div>

          {/* Controls (optional) */}
          {/* <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-primary transition"
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-black/50 text-white p-2 rounded-full hover:bg-primary transition"
            >
              ›
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
