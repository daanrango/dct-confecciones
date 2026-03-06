import Hero from "@/components/Hero";

function page() {
  return (
    <>
      <Hero
        title="Nuestros Servicios"
        description="Ofrecemos una selecta gama de servicios profesionales para satisfacer tus necesidades. Nos comprometemos a brindarte cada servicio con una sonrisa y la mejor atención."
        linkText="Saber mas"
        link="/contacto"
        images={[
          "https://images.unsplash.com/photo-1445205170230-053b83016050",
        ]}
      />
    </>
  );
}

export default page;
