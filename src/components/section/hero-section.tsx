import HeroImage from "../hero-image";
import MainLayout from "../layouts/main-layout";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <MainLayout className="pb-24 pt-32">
        <h1 className="flex flex-col text-center text-[5rem] font-bold tracking-tighter sm:text-start sm:text-8xl">
          <span className="leading-[0.85]">Butterfly</span>
          <span className="leading-[0.85]">Nails.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-center text-lg sm:mx-0 sm:text-start">
          Embellece tus uñas con estilo y sofisticación. Tu satisfacción es
          nuestra inspiración.
        </p>
        <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row">
          <a
            href="#servicios"
            className="inline-flex justify-center rounded-md bg-secondary px-6 py-4 text-base/5 transition-transform hover:-translate-y-1"
          >
            Saber Más
          </a>
          <a
            href="#agenda"
            className="inline-flex justify-center rounded-md bg-primary px-6 py-4 text-base/5 text-white transition-transform hover:-translate-y-1"
          >
            Agendar Ahora
          </a>
        </div>
        <div className="absolute top-0 hidden h-full w-full items-end overflow-hidden rounded-3xl bg-secondary md:left-[60%] md:flex lg:left-[50%]">
          <HeroImage />
        </div>
      </MainLayout>
    </section>
  );
}
