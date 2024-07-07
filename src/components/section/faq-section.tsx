import ArrowIcon from "../icons/arrow-icon";

export default function FAQSection() {
  return (
    <section className="mx-auto mt-44 flex max-w-screen-lg flex-col items-center gap-4 px-4">
      <h2 className="text-center text-5xl font-bold -tracking-[0.075em]">
        Preguntas Frecuentes
      </h2>
      <p className="max-w-lg text-center text-neutral-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis,
        ducimus vero. Esse amet.
      </p>
      <div className="mx-auto mt-2 flex max-w-screen-md flex-col gap-4">
        {[1, 2, 3, 4].map((idx) => (
          <details
            key={idx}
            {...(idx % 2 !== 0 && { open: true })}
            className="group rounded-lg bg-neutral-200 px-8 py-6 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-2">
              <h2 className="text-2xl font-semibold tracking-tighter">
                Lorem ipsum dolor sit amet consectetur adipisicing elit?
              </h2>
              <span className="relative size-6 shrink-0">
                <ArrowIcon className="size-6 shrink-0 transition duration-300 group-open:-rotate-180" />
              </span>
            </summary>
            <p className="mt-2 text-neutral-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laudantium, cupiditate officiis deleniti illum est at, voluptatum
              totam dolorum, accusantium quasi quisquam possimus? Ducimus
              facilis molestias autem! Alias repellendus illum asperiores!
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
