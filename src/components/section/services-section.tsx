import ServiceCard from "../cards/service-card";
import MainLayout from "../layouts/main-layout";

export default function ServicesSection() {
  return (
    <section className="mt-32 bg-background py-24">
      <MainLayout id="servicios" as="section">
        <h2 className="text-center text-5xl font-bold leading-[0.85] tracking-tighter">
          Nuestros Servicios.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-center text-lg">
          Ofrecemos una amplia gama de tratamientos de uñas diseñados para
          satisfacer todas tus necesidades.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:-mt-4 lg:grid-cols-4">
          <ServiceCard
            src="/esmaltado-semi-retocado.jpg"
            alt="Unas uñas con Esmaltado Semi."
            title="Esmaltado Semi"
            description="Es un esmaltado que dura aproximadamente 21 días, acompañando el crecimiento. No extiende el largo de la uña."
            price="Desde 400$"
          />
          <ServiceCard
            src="/soft-gel.jpg"
            alt="Unas uñas Soft Gel."
            title="Soft Gel"
            description="Son tips de gel que extienden el largo de la uña. Su colocación y esmaltado lleva 2 horas y 15 minutos como mínimo. Duran entre 2 a 3 semanas."
            price="Desde 650$"
          />
          <ServiceCard
            src="/hibridas-retocada.jpg"
            alt="Unas uñas Híbridas."
            title="Híbridas"
            description="Una extensión de soft gel + un recubrimiento de base Rubber, su beneficio principal es más resistencia, ayuda a que no hayan desprendimientos en la zona de cutícula a medida que crece la uña natural."
            price="Desde 800$"
          />
          <ServiceCard
            src="/capping-retocada.jpg"
            alt="Unas uñas con Capping."
            title="Capping"
            description="Una capa de gel para reforzar la uña natural. No extiende el largo de la uña pero ayuda a dejarlas crecer. Su colocación y esmaltado lleva 1 hora y media como mínimo, dependiendo del diseño y la condición de la uña."
            price="Desde 450$"
          />
        </div>
      </MainLayout>
    </section>
  );
}
