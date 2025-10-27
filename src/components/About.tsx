"use client";
import { useState } from "react";
import Image from "next/image";

const tabs = [
  {
    id: "who",
    title: "Who We Are",
    content: (
      <>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde
          omnis natus error sit voluptatem accusan tium doloremque laudantium
          totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi
          archite.
        </p>
        <p className="mt-3 flex items-center">
          <span className="text-orange-500 mr-2">●</span> Morbi fermentum felis
          nec
        </p>
        <p className="flex items-center">
          <span className="text-orange-500 mr-2">●</span> Kermentum felis nec
          gravida tempus.
        </p>
        <h6 className="mt-6">
          <a
            href="/contact"
            className="text-xl inline-block bg-primary text-white px-6 py-3 rounded-md border border-primary font-semibold hover:bg-transparent hover:text-orange-500 transition"
          >
            Contact Now
          </a>
        </h6>
      </>
    ),
  },
  {
    id: "what",
    title: "What We Do",
    content: (
      <>
        <p>
          Kurabitur efficitur justo vitae purus varius gravida. Pellentesque
          posuere, magna ut consectetur gravida, enim ipsum maximus dolor, et
          semper sapien erat vel purus. Vestibulum non tortor id nisl rhoncus
          scelerisque. Morbi faucibus eros mattis tellus scelerisque.
        </p>
        <p className="mt-3 flex items-center">
          <span className="text-orange-500 mr-2">●</span> Test fermentum felis
          nec
        </p>
        <p className="flex items-center">
          <span className="text-orange-500 mr-2">●</span> Fermentum felis nec
          gravida tempus.
        </p>
        <h6 className="mt-6">
          <a
            href="/contact"
            className="text-xl inline-block bg-orange-500 text-white px-6 py-3 rounded-md border border-primary font-semibold hover:bg-transparent hover:text-orange-500 transition"
          >
            Contact Us
          </a>
        </h6>
      </>
    ),
  },
];

export default function AboutCompany() {
  const [activeTab, setActiveTab] = useState("who");

  return (
    <section id="about" className="scroll-mt-24 py-12 relative">
      <div className="container mx-auto px-6">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            <span className="text-orange-500">About</span> Company
          </h2>
          <p className="mt-3 text-gray-600 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusm
            tempor
          </p>
          <span className="relative inline-flex items-center justify-center mt-3">
            <span className="block w-12 h-[2px] bg-orange-500 mr-2"></span>
            <span className="text-orange-500">●</span>
            <span className="block w-12 h-[2px] bg-orange-500 ml-2"></span>
          </span>
        </div>

        {/* Tabs + Image */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left Tabs */}
          <div>
            <div className="flex border-b border-gray-200 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-2xl font-semibold transition ${
                    activeTab === tab.id
                      ? "text-black border-b-4 border-orange-500"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="text-gray-700 text-lg">
              {tabs.find((t) => t.id === activeTab)?.content}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden rounded-md shadow-lg">
            <Image
              src="/images/4-1.jpg"
              alt="About Company"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
