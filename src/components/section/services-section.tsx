export default function ServicesSection() {
  return (
    <section className="mx-auto mt-44 grid max-w-screen-lg gap-4 px-4 sm:grid-cols-2 md:grid-cols-3">
      {[1, 2, 3].map((idx) => (
        <article
          key={idx}
          className="flex flex-col sm:last:col-span-2 sm:last:mx-auto sm:last:max-w-[50%] md:last:col-span-1 md:last:max-w-max md:odd:mb-12 md:even:mt-12"
        >
          <div className="relative overflow-hidden rounded-t-lg">
            <h3 className="absolute bottom-0 left-0 z-10 break-before-all p-4 text-3xl font-bold leading-[0.9] tracking-tighter text-white">
              Esmaltado Semi
            </h3>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-35%"></div>
            <img
              src="/soft-gel.jpg"
              alt=""
              className="aspect-square object-cover"
            />
          </div>
          <div className="flex flex-col gap-4 rounded-b-lg bg-black p-4 pt-0">
            <p className="text-neutral-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit.
            </p>
            <div className="h-px rounded-full bg-neutral-800"></div>
            <p className="font-semibold text-white">400$ a 800$</p>
          </div>
        </article>
      ))}
    </section>
  );
}
