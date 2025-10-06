"use client";

import { Lightbulb, Shield, Plug } from "lucide-react";

interface InfoSection {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

const infoSections: InfoSection[] = [
  {
    id: 1,
    title: "Mission",
    description:
      "To provide innovative software and smart solutions that empower businesses in Ethiopia and beyond.",
    icon: Lightbulb,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "To become a leading technology company delivering cutting-edge solutions for sustainable growth.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Values",
    description:
      "Integrity, excellence, and customer-centric innovation guide everything we do.",
    icon: Plug,
  },
];

export default function Values() {
  return (
    <section className="py-12 bg-gray-900 text-center text-white">
      <div className="container mx-auto px-6 py-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-5xl font-semibold">
            Our <span className="text-primary">Mission</span>,{" "}
            <span className="text-primary">Vision</span> &{" "}
            <span className="text-primary">Values</span>
          </h2>
          <span className="relative inline-flex items-center justify-center mt-3">
            <span className="block w-12 h-[2px] bg-orange-500 mr-2"></span>
            <span className="text-orange-500">●</span>
            <span className="block w-12 h-[2px] bg-orange-500 ml-2"></span>
          </span>
        </div>

        {/* Info Sections */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
          {infoSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="bg-gray-800 rounded-md p-6 flex flex-col items-center md:items-start shadow hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-300">{section.description}</p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md text-xl font-semibold shadow hover:bg-orange-600 transition"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}
