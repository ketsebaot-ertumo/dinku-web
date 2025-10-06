"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number; // out of 5
  text: string;
  avatarColor: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Eget Nulla",
    role: "Electrician",
    rating: 4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    avatarColor: "bg-gray-400",
  },
  {
    id: 2,
    name: "Lorem Porta",
    role: "Electrician",
    rating: 4,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    avatarColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Dolor Amet",
    role: "Electrician",
    rating: 5,
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    avatarColor: "bg-blue-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-orange-500 font-bold text-sm mb-2">TESTIMONIAL</h2>
        <h3 className="text-3xl font-semibold mb-8">What Our Client Say About Us</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-md shadow hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                {/* Star Rating */}
                <div className="flex space-x-1 mr-3">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < t.rating ? "text-orange-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full ${t.avatarColor} flex items-center justify-center text-white`}>
                  50x50
                </div>
              </div>
              <h5 className="font-semibold text-lg">{t.name}</h5>
              <p className="text-orange-500 text-sm mb-2">{t.role}</p>
              <p className="text-gray-600 text-sm">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
