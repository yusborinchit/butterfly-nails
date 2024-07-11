interface Props {
  page: number;
  prevPage: () => void;
  nextPage: () => void;
}

export default function Pagination(props: Readonly<Props>) {
  return (
    <nav className="flex items-center -space-x-px sm:ml-auto">
      <button
        onClick={props.prevPage}
        className="flex items-center justify-center rounded-s p-2 leading-tight text-neutral-700"
      >
        <span>Anterior</span>
        {/* <PrevIcon className="h-3 w-3" /> */}
      </button>
      <p className="flex items-center justify-center px-3 text-xl font-bold leading-tight text-neutral-700">
        {props.page}
      </p>
      <button
        onClick={props.nextPage}
        className="flex items-center justify-center gap-1 rounded-e p-2 leading-tight text-neutral-700"
      >
        <span>Siguiente</span>
        {/* <NextIcon className="h-4 w-4" /> */}
      </button>
    </nav>
  );
}
