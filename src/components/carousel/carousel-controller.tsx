import RightArrowIcon from "../icons/right-arrow-icon";

interface Props {
  direction: "left" | "right";
  handleClick: () => void;
}

export default function CarouselController(props: Readonly<Props>) {
  return (
    <button
      onClick={props.handleClick}
      aria-label={props.direction === "left" ? "Anterior" : "Siguiente"}
      className="pointer-events-auto grid aspect-square place-items-center rounded-full border border-background/50 bg-gradient-to-t from-background/80 to-white/30 p-4 shadow-md backdrop-blur-sm hover:from-background/95 hover:to-white/50"
    >
      {props.direction === "left" ? (
        <RightArrowIcon className="size-6 rotate-180" />
      ) : (
        <RightArrowIcon className="size-6" />
      )}
    </button>
  );
}
