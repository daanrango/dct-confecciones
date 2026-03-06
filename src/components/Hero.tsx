"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Mi proyecto con Next, Tailwind y Motion
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Una base moderna para crear interfaces rápidas, limpias y con
          animaciones suaves.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 rounded-2xl px-6 py-3 bg-black text-white"
        >
          Empezar
        </motion.button>
      </motion.div>
    </section>
  );
}
