"use client";

import { motion } from "motion/react";

const features = [
  {
    title: "Modern Stack",
    desc: "Next.js, Tailwind and Motion animations",
  },
  {
    title: "Fast Performance",
    desc: "Optimized rendering and fast loading",
  },
  {
    title: "Responsive Design",
    desc: "Perfect experience on every device",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {features.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white shadow-sm border"
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
