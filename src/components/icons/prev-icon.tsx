interface Props {
  className: string;
}

export default function PrevIcon({ className }: Readonly<Props>) {
  return (
    <svg className={className} fill="none" viewBox="0 0 6 10">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5 1 1 5l4 4"
      />
    </svg>
  );
}
