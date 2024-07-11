interface Props {
  className: string;
}

export default function OptionsIcon({ className }: Readonly<Props>) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0"
      />
    </svg>
  );
}
