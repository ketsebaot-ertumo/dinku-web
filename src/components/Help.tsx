"use client";

export default function Help() {
  return (
    <section className="py-12 bg-gray-900 text-center text-white">
      <div className="max-w-3xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Do you need{" "}
          <span className="text-orange-500 font-bold">help</span> from{" "}
          <span className="text-orange-500 font-bold">power?</span>
        </h2>

        {/* Subtext */}
        <p className="mt-3 text-gray-300 text-lg">
          Lorem ipsum dolor sit amet consectetur
        </p>

        {/* Button */}
        <div className="mt-6">
          <a
            href="/contact"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md text-sm font-bold uppercase shadow hover:bg-orange-600 transition"
          >
            Contact Now
          </a>
        </div>
      </div>
    </section>
  );
}
