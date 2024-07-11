interface Props {
  className: string;
}

export default function NextIcon({ className }: Readonly<Props>) {
  return (
    <svg className={className} fill="none" viewBox="0 0 6 10">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m1 9 4-4-4-4"
      />
    </svg>
  );
}
