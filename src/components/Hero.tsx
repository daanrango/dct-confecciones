"use client";

import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

type HeroProps = {
  title: string;
  description: string;
  link: string;
  linkText: string;
  images: string[];
};

export default function Hero({
  title,
  description,
  link,
  linkText,
  images,
}: HeroProps) {
  const hasMultipleImages = images.length > 1;

  return (
    <section
      id={`hero-${title.toLowerCase().replace(/\s+/g, "-")}`}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {hasMultipleImages ? (
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            slidesPerView={1}
            loop
            effect="fade"
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="h-full w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`}>
                <div
                  className="h-screen w-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div
            className="h-full w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${images[0]})` }}
          />
        )}

        <div className="absolute inset-0 z-10 bg-black/60" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 relative z-20 max-w-2xl text-center text-white"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">
          {title}
        </h1>

        <p className="mt-6 text-lg text-gray-200 whitespace-pre-line">
          {description?.replace(/\\n/g, "\n")}
        </p>

        <motion.a
          href={link}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block mt-8 rounded px-6 py-3 bg-white text-black hover:bg-color1 hover:text-white transition-all font-medium"
        >
          {linkText}
        </motion.a>
      </motion.div>
    </section>
  );
}
