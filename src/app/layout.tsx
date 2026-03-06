import type { Metadata } from "next";
import { Charmonman, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WhatsappButton from "@/components/utils/WhatsappButton";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-dct-body",
});

const charmonman = Charmonman({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dct-title",
});

export const metadata: Metadata = {
  title: "DCT - Confecciones",
  description:
    "Sitio web de DCT - Confecciones, una empresa dedicada a la confección de prendas de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${charmonman.variable}`}
    >
      <body className="antialiased">
        <Navbar />
        {children}
        <WhatsappButton />
      </body>
    </html>
  );
}
