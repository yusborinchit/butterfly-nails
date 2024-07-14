import MainLayout from "./main-layout";

export default function AdminHeader() {
  return (
    <MainLayout
      as="header"
      className="sticky left-0 top-0 z-10 flex h-[72px] items-center bg-white"
    >
      <a href="/" className="underline">
        &lt;- Volver al Inicio
      </a>
      <nav className="ml-auto flex gap-8 pr-4">
        <a
          href="/admin"
          className="text-neutral-500 underline transition-colors hover:text-neutral-950"
        >
          Agenda
        </a>
        <a
          href="/admin/statistics"
          className="text-neutral-500 underline transition-colors hover:text-neutral-950"
        >
          Estadísticas
        </a>
      </nav>
    </MainLayout>
  );
}
