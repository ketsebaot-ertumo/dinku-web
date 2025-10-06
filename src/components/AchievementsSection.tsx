"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { User, Star, FileCheck, Trophy } from "lucide-react";

const stats = [
  { id: 1, icon: User, value: 280, label: "Site Inspections" },
  { id: 2, icon: Star, value: 330, label: "Qualified Staffs" },
  { id: 3, icon: FileCheck, value: 880, label: "Successful Projects" },
  { id: 4, icon: Trophy, value: 88, label: "Awards Won" },
];

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref); // removed `once: true`

  useEffect(() => {
    let counter: number;

    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = 40; // milliseconds
      const step = Math.ceil(end / (duration * 1000 / incrementTime));

      counter = window.setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(start);
        }
      }, incrementTime);
    } else {
      // reset when out of view
      setCount(0);
    }

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  return (
    <section id="achivement" className="bg-gray-900 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
                className="flex flex-col items-center justify-center bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-extrabold text-white">
                  <AnimatedNumber value={stat.value} duration={2} />+
                </h3>
                <p className="text-gray-300 text-lg mt-2 text-center">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
