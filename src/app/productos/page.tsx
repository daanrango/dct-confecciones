import Hero from "@/components/Hero";

function page() {
  return (
    <>
      <Hero
        title="Nuestros Productos"
        description="Nos especializamos en la confección de prendas y artículos textiles personalizados, combinando creatividad, precisión y atención al detalle"
        linkText="Saber mas"
        link="/contacto"
        images={[
          "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
        ]}
      />
    </>
  );
}

export default page;
