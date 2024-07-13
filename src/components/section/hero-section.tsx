import Image from "next/image";
import MainLayout from "../layouts/main-layout";

export default function HeroSection() {
  return (
    <MainLayout className="mt-28 grid items-center gap-16 sm:mt-20 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-[4.75rem] font-bold leading-[0.9] -tracking-[0.075em] md:text-start">
          Butterfly Nails
        </h1>
        <p className="mx-auto max-w-[500px] text-center text-neutral-500 md:text-start">
          Embellece tus uñas con estilo y sofisticación. Tu satisfacción es
          nuestra inspiración.
        </p>
        <a
          href="#agenda"
          className="mx-auto grid h-fit w-fit rounded bg-neutral-950 px-6 py-3 font-bold text-white md:mx-0"
        >
          Agendar Ahora
        </a>
      </div>
      <Image
        src="/btfyl2.png"
        width={410}
        height={435}
        alt=""
        className="ml-auto hidden max-w-[90%] md:inline-block"
      />
    </MainLayout>
  );
}
