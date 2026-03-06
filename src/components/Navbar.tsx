"use client";

import { motion, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          originX: 0,
        }}
        className="bg-color1 fixed h-2.5 top-0 left-0 right-0 z-60"
      />
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-white/70 backdrop-blur-md border-b z-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4">
          <Link href="/">
            <Image
              src="/logo-completo.png"
              alt="Logo"
              width={100}
              height={200}
            />
          </Link>
          <div className="flex gap-6 text-sm uppercase font-medium">
            <Link
              href="/"
              className="hover:text-color1 border-b-2 border-transparent hover:border-color1 transition"
            >
              Inicio
            </Link>
            <Link
              href="/servicios"
              className="hover:text-color1 border-b-2 border-transparent hover:border-color1 transition"
            >
              Servicios
            </Link>
            <Link
              href="/productos"
              className="hover:text-color1 border-b-2 border-transparent hover:border-color1 transition"
            >
              Productos
            </Link>
            <Link
              href="/catalogo"
              className="hover:text-color1 border-b-2 border-transparent hover:border-color1 transition"
            >
              Catálogo
            </Link>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=593995687336&text=Hola%20me%20interesa%20contratar%20tus%20servicios."
            className="bg-color5 text-white hover:bg-color1 transition py-2 px-4 rounded-md"
          >
            Contacto
          </a>
        </div>
      </motion.nav>
    </>
  );
}
