import ArrowIcon from "../icons/arrow-icon";

interface Props {
  question: string;
  answer: string;
  isOpen?: true;
}

export default function QuestionCard(props: Readonly<Props>) {
  return (
    <details
      {...(props.isOpen && { open: true })}
      className="group flex-1 rounded-lg bg-neutral-200 px-8 py-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex cursor-pointer items-center justify-between gap-2">
        <h2 className="text-2xl font-semibold tracking-tighter">
          {props.question}
        </h2>
        <span className="relative size-6 shrink-0">
          <ArrowIcon className="size-6 shrink-0 transition duration-300 group-open:-rotate-180" />
        </span>
      </summary>
      <p className="mt-2 text-neutral-500">{props.answer}</p>
    </details>
  );
}
