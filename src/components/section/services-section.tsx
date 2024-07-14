import ServiceCard from "../cards/service-card";
import MainLayout from "../layouts/main-layout";

export default function ServicesSection() {
  return (
    <MainLayout
      id="servicios"
      as="section"
      className="mt-44 grid gap-4 sm:grid-cols-2 md:max-w-screen-md lg:max-w-[1090px] lg:grid-cols-4"
    >
      <ServiceCard
        src="/soft-gel.jpg"
        alt=""
        service="Soft Gel"
        description="Son tips de gel que extienden el largo de la uña. Su colocación y esmaltado lleva 2 horas y 15 minutos como mínimo. Duran entre 2 a 3 semanas."
        price="A partir de 650$"
      />
      <ServiceCard
        src="/esmaltado-semi-retocado.jpg"
        alt=""
        service="Esmaltado Semi"
        description="Es un esmaltado que dura aproximadamente 21 días, acompañando el crecimiento. No extiende el largo de la uña."
        price="A partir de 400$"
      />
      <ServiceCard
        src="/hibridas-retocada.jpg"
        alt=""
        service="Híbridas"
        description="Una capa de gel para reforzar la uña natural. No extiende el largo de la uña pero ayuda a dejarlas crecer. Su colocación y esmaltado lleva 1 hora y media como mínimo, dependiendo del diseño y la condición de la uña."
        price="A partir de 800$"
      />
      <ServiceCard
        src="/capping-retocada.jpg"
        alt=""
        service="Capping"
        description="Una capa de gel para reforzar la uña natural. No extiende el largo de la uña pero ayuda a dejarlas crecer. Su colocación y esmaltado lleva 1 hora y media como mínimo, dependiendo del diseño y la condición de la uña."
        price="A partir de 450$"
      />
    </MainLayout>
  );
}
