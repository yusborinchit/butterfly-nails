import Image from "next/image";
import MainLayout from "../layouts/main-layout";

export default function ClientsSection() {
  return (
    <MainLayout
      id="clientas"
      as="section"
      className="mt-44 flex flex-col gap-4"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-5xl font-bold -tracking-[0.075em] sm:text-start">
            Algunas Clientas
          </h2>
          <p className="mx-auto max-w-xl text-center text-neutral-500 sm:mx-0 sm:text-start">
            Explora la galería y descubre clientas felices con uñas
            perfectamente diseñadas y cuidadas.
          </p>
        </div>
        <a
          target="_blank"
          href="https://www.instagram.com/butterfly_nailx/"
          className="text-center font-semibold text-blue-600 underline sm:ml-auto sm:text-lg"
        >
          ¿Queres ver más? Síguenos en nuestro Instagram.
        </a>
      </div>
      <div className="mt-2 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((idx) => (
          <div
            key={idx}
            className="relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={`/clienta-${idx}.jpg`}
              width={500}
              height={500}
              alt="La foto de las uñas de una clienta."
              className="absolute inset-0 aspect-square h-full w-full object-cover transition-transform hover:scale-125"
            />
          </div>
        ))}
      </div>
    </MainLayout>
  );
}
