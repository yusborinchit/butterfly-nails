export default function ClientsSection() {
  return (
    <section className="mx-auto mt-44 flex max-w-screen-lg flex-col gap-4 px-4">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-center text-5xl font-bold -tracking-[0.075em] sm:text-start">
            Algunas Clientas
          </h2>
          <p className="mx-auto max-w-lg text-center text-neutral-500 sm:mx-0 sm:text-start">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Blanditiis, ducimus vero. Esse amet.
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
      <div className="mt-2 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <img
            key={idx}
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        ))}
      </div>
    </section>
  );
}
