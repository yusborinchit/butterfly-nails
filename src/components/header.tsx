export default function Header() {
  return (
    <header className="mx-auto flex max-w-screen-lg items-center px-4 py-4">
      <nav className="ml-auto hidden items-center md:flex">
        {["Inicio", "Agenda", "Clientas", "FAQ", "Contacto"].map(
          (link, idx) => (
            <a key={idx} href="#" className="px-4 py-2 hover:underline">
              {link}
            </a>
          ),
        )}
      </nav>
    </header>
  );
}
