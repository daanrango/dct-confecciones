"use client";

import { motion } from "motion/react";

const projects = [
  {
    title: "Next Dashboard",
    desc: "Modern dashboard built with Next.js",
  },
  {
    title: "API Platform",
    desc: "Backend services with Node and cloud",
  },
  {
    title: "Portfolio Website",
    desc: "Animated personal portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="border rounded-2xl p-6 shadow-sm bg-white"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-3 text-gray-600">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
