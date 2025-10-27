"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import clsx from "clsx";
import SectionDivider from "./SectionDivider";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eget Nulla",
    role: "Electrician",
    rating: 4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    avatarColor: "bg-gray-400",
  },
  {
    id: 2,
    name: "Lorem Porta",
    role: "Electrician",
    rating: 3,
    text: "Separated they live in Bookmarksgrove right at the coast of the Semantics.",
    avatarColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Dolor Amet",
    role: "Electrician",
    rating: 5,
    text: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
    avatarColor: "bg-blue-600",
  },
  {
    id: 4,
    name: "Mattis Quis",
    role: "Engineer",
    rating: 5,
    text: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    avatarColor: "bg-green-600",
  },
  {
    id: 5,
    name: "Justo Ligula",
    role: "Contractor",
    rating: 4,
    text: "The Big Oxmox advised her not to do so, because there were thousands of bad Commas.",
    avatarColor: "bg-yellow-500",
  },
  {
    id: 6,
    name: "Nunc Vitae",
    role: "Electrician",
    rating: 5,
    text: "She packed her seven versalia, put her initial into the belt and made herself on the way.",
    avatarColor: "bg-red-500",
  },
];

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  // Split testimonials into groups of 3 per slide
  const perSlide = 3;
  const groupedSlides = [];
  for (let i = 0; i < testimonials.length; i += perSlide) {
    groupedSlides.push(testimonials.slice(i, i + perSlide));
  }

  const nextSlide = () => setCurrent((prev) => (prev + 1) % groupedSlides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + groupedSlides.length) % groupedSlides.length);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonial" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        
        {/* Header */}
        <div className="mb-8">
          <h2 className="font-semibold tracking-wide uppercase mb-2 text-gray-500 text-lg">
            Testimonials
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 leading-tight text-primary">
            What Our Clients Say About Us
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Real stories from real customers — see why professionals trust our services.
          </p>
          <SectionDivider />
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {groupedSlides[current].map((t) => (
                <div
                  key={t.id}
                  className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-transparent hover:border-orange-100"
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={clsx(
                        "w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4 shadow-md",
                        t.avatarColor
                      )}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div className="flex space-x-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={clsx(
                            "w-4 h-4 transition-colors",
                            i < t.rating ? "text-orange-500" : "text-gray-300"
                          )}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">
                    “{t.text}”
                  </p>
                  <div className="text-left">
                    <h5 className="font-semibold text-lg text-gray-800">{t.name}</h5>
                    <p className="text-orange-500 text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {groupedSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-8 h-1 rounded-full transition ${
                  current === i ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 text-gray-700 p-3 rounded-full shadow hover:primary hover:text-white transition"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 text-gray-700 p-3 rounded-full shadow hover:bg-primary hover:text-white transition"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
