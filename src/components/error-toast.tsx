import InfoIcon from "./icons/info-icon";

interface Props {
  message: string
}

export default function ErrorToast(props: Readonly<Props>) {
  return (
    <div
      role="alert"
      className="mb-4 flex items-center gap-4 rounded-lg border border-red-300 bg-red-50 p-4 text-red-800"
    >
      <InfoIcon className="size-8" />
      <span className="sr-only">Error</span>
      <div>
        <p className="font-medium">¡Hubo un error!</p>
        <p>{props.message}</p>
      </div>
    </div>
  );
}
