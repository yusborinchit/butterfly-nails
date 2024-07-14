import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  service: string;
  description: string;
  price: string;
}

export default function ServiceCard(props: Readonly<Props>) {
  return (
    <article className="flex flex-col sm:last:col-span-2 sm:last:mx-auto sm:last:max-w-[50%] md:last:col-span-1 md:last:max-w-max md:odd:mb-12 md:even:mt-12">
      <div className="relative overflow-hidden rounded-t-lg">
        <h3 className="absolute bottom-0 left-0 z-10 break-before-all p-4 text-3xl font-bold leading-[0.9] tracking-tighter text-white">
          {props.service}
        </h3>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 via-35%"></div>
        <Image
          src={props.src}
          width={310}
          height={310}
          alt={props.alt}
          className="aspect-square h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-4 rounded-b-lg bg-black p-4 pt-0">
        <p className="line-clamp-4 text-neutral-500">{props.description}</p>
        <div className="h-px rounded-full bg-neutral-800"></div>
        <p className="font-semibold text-white">{props.price}</p>
      </div>
    </article>
  );
}
