"use client";

import { Lightbulb, Shield, Plug } from "lucide-react";
import SectionDivider from "./SectionDivider";

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
    <section id="value" className="scroll-mt-24 py-12 text-center text-white">
      <div className="container mx-auto px-6 py-6">
        {/* Heading */}
        <div className="text-center mb-12 text-gray-800">
          <h2 className="text-4xl font-bold">
            Our <span className="text-primary">Mission</span>,{" "}
            <span className="text-primary">Vision</span> &{" "}
            <span className="text-primary">Values</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base">
            Real stories from real customers — see why professionals trust our services.
          </p>
          <SectionDivider />
        </div>

        {/* Info Sections */}
        <div className="mt-10 grid md:grid-cols-3 gap-8 text-left">
          {infoSections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.id}
                className="hover:scale-105 bg-gray-100 rounded-md p-6 flex flex-col items-center shadow hover:shadow-lg transition"
              >
                <Icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2 text-gray-600">{section.title}</h3>
                <p className="text-gray-500 text-center">{section.description}</p>
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
