import TextInput from "~/components/text-input";
import { login } from "~/server/actions";

export default function LoginPage() {
  return (
    <div className="py-4">
      <h2 className="mt-24 text-center text-5xl font-bold leading-[0.9] tracking-tighter">
        Ingresar 🤓☝
      </h2>
      <form
        action={login}
        className="mx-auto flex max-w-[360px] flex-col gap-4 px-4 py-8"
      >
        <TextInput
          label="Usuario"
          name="username"
          placeholder="Tu usuario aquí..."
        />
        <TextInput
          label="Contraseña"
          name="password"
          placeholder="Tu contraseña aquí..."
          type="password"
        />
        <button
          type="submit"
          className="mt-auto grid h-fit rounded bg-neutral-950 px-6 py-2.5 font-bold text-white disabled:bg-neutral-600"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}
