export default function BookingTableHeader() {
  return (
    <thead className="sticky inset-0">
      <tr className="bg-neutral-950 font-bold uppercase text-white">
        <th className="px-5 py-4 text-start text-lg">Fecha</th>
        <th className="px-5 py-4 text-start text-lg">Turno</th>
        <th className="px-5 py-4 text-start text-lg">C.I.</th>
        <th className="px-5 py-4 text-start text-lg">Nombre</th>
        <th className="px-5 py-4 text-start text-lg">Usuario</th>
        <th className="px-5 py-4 text-start text-lg">Servicio</th>
        <th className="px-5 py-4 text-center text-lg">Estado</th>
        <th className="px-5 py-4 text-start text-lg"></th>
      </tr>
    </thead>
  );
}
