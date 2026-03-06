"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-10 border-t text-center"
    >
      <p className="text-gray-500">
        © 2026 MyPortfolio. Built with Next.js and Tailwind.
      </p>
    </motion.footer>
  );
}
