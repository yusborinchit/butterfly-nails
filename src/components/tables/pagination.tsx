interface Props {
  page: number;
  prevPage: () => void;
  nextPage: () => void;
}

export default function Pagination(props: Readonly<Props>) {
  return (
    <nav className="flex justify-center">
      <button
        onClick={props.prevPage}
        className="flex items-center justify-end rounded-e p-2 font-bold leading-tight"
      >
        Anterior
      </button>
      <p className="flex items-center justify-center px-3 leading-tight text-neutral-500">
        {props.page + 1}
      </p>
      <button
        onClick={props.nextPage}
        className="flex items-center justify-start rounded-e p-2 font-bold leading-tight"
      >
        Siguiente
      </button>
    </nav>
  );
}
