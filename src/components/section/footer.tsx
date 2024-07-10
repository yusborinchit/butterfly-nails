import MainLayout from "../layouts/main-layout";

export default function Footer() {
  return (
    <footer className="bg-neutral-950">
      <MainLayout className="mt-44 flex flex-col items-center py-8 sm:flex-row">
        <h3 className="text-lg font-semibold text-white">Butterfly Nails</h3>
        <p className="text-center text-sm text-neutral-500 sm:ml-auto">
          Copyright &copy; 2024. All rights reserved.
        </p>
      </MainLayout>
    </footer>
  );
}
