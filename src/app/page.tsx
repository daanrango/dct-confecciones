import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero
        title="DCT - Confecciones"
        description={`Cada diseño es una idea, cada puntada es un sueño hecho realidad.\n"Y todo lo que hagáis, hacedlo con amor."\nCorintios 16:14`}
        link="/contacto"
        linkText="Contacto"
        images={[
          "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
          "https://images.unsplash.com/photo-1445205170230-053b83016050",
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        ]}
      />
    </>
  );
}
