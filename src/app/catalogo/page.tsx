import Hero from "@/components/Hero";

function page() {
  return (
    <>
      <Hero
        title="Catalogo de Productos"
        description="Nuestros servicios de confección de alta calidad."
        link="/contacto"
        linkText="Contacto"
        images={[
          "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
        ]}
      />
    </>
  );
}

export default page;
