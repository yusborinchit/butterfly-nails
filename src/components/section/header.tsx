import MainLayout from "../layouts/main-layout";

export default function Header() {
  return (
    <MainLayout
      as="header"
      className="sticky left-0 top-0 z-30 flex items-center bg-white py-3"
    >
      <img src="/bn-logo.png" alt="" className="h-11 w-11 rounded-full" />
      <nav className="ml-auto hidden items-center sm:flex">
        {["Inicio", "Servicios", "Agenda", "Clientas", "FAQ", "Contacto"].map(
          (link, idx) => (
            <a
              key={idx}
              href={`#${link.toLowerCase()}`}
              className="px-4 py-2 text-neutral-500 transition-colors hover:text-neutral-950 hover:underline"
            >
              {link}
            </a>
          ),
        )}
      </nav>
    </MainLayout>
  );
}
