import Carousel from "../carousel/carousel";
import MainLayout from "../layouts/main-layout";

export default function ClientsSection() {
  return (
    <section id="clientas" className="mt-32">
      <MainLayout>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-center text-5xl font-bold leading-[0.85] tracking-tighter md:text-start">
              Algunas Clientas.
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg md:mx-0 md:text-start">
              Explora la galería y descubre clientas felices con uñas
              perfectamente diseñadas y cuidadas.
            </p>
          </div>
          <a
            href="https://www.instagram.com/butterfly_nailx/"
            target="_blank"
            className="max-w-md text-center text-xl font-bold underline"
          >
            ¿Queres ver más? Seguinos en nuestro Instagram.
          </a>
        </div>
      </MainLayout>
      <Carousel
        images={[
          "/clientas/1.webp",
          "/clientas/2.webp",
          "/clientas/3.webp",
          "/clientas/4.webp",
          "/clientas/5.webp",
          "/clientas/6.webp",
          "/clientas/7.webp",
          "/clientas/8.webp",
        ]}
      />
    </section>
  );
}
