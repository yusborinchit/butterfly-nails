export default function HeroSection() {
  return (
    <div className="mx-auto mt-20 grid max-w-screen-lg items-center gap-16 px-4 md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h1 className="text-center text-[4.75rem] font-bold leading-[0.9] -tracking-[0.075em] md:text-start">
          Butterfly Nails
        </h1>
        <p className="text-center text-neutral-500 md:text-start">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi.
        </p>
        <a
          href=""
          className="mx-auto grid h-fit w-fit rounded bg-neutral-950 px-6 py-2.5 font-bold text-white disabled:bg-neutral-600 md:mx-0"
        >
          Agendar Ahora
        </a>
      </div>
      <img
        src="/btfyl2.png"
        alt=""
        className="ml-auto hidden max-w-[90%] md:inline-block"
      />
    </div>
  );
}
