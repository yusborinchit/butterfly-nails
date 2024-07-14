import dayjs from "dayjs";
import MainLayout from "~/components/layouts/main-layout";
import {
  getFrequentClients,
  getMonthServices,
  getTotalServices,
} from "~/server/queries";

export default async function StatisticsPage() {
  const [frequentClients, totalServices, monthServices] = await Promise.all([
    getFrequentClients(),
    getTotalServices(),
    getMonthServices(),
  ]);

  return (
    <MainLayout as="main" className="py-4">
      <h2 className="min-w-fit text-center text-3xl font-bold -tracking-[0.075em] sm:text-start">
        Estadísticas 🤓☝
      </h2>
      <div className="mt-4 flex flex-col gap-4">
        {/* FREQUENTS CLIENTS */}
        <div className="overflow-hidden rounded-lg border border-neutral-400">
          <pre className="overflow-auto bg-neutral-200 p-4 text-neutral-500">
            <strong>Clientas Frecuentes:</strong>
            <br />
            {JSON.stringify(frequentClients, null, 4)}
          </pre>
        </div>

        {/* TOTAL SERVICES */}
        <div className="overflow-hidden overflow-y-auto rounded-lg border border-neutral-400 bg-neutral-200">
          <pre className="overflow-auto p-4 text-neutral-500">
            <strong>Servicios Totales:</strong>
            <br />
            {JSON.stringify(totalServices, null, 4)}
          </pre>
        </div>

        {/* MONTH SERVICES */}
        <div className="overflow-hidden overflow-y-auto rounded-lg border border-neutral-400 bg-neutral-200">
          <pre className="overflow-auto p-4 text-neutral-500">
            <strong>Servicios x Mes:</strong>
            <br />
            {JSON.stringify(
              monthServices.map((d) => ({
                month: dayjs()
                  .month((d.month as number) - 1)
                  .format("MMMM"),
                bookings: d.bookings,
              })),
              null,
              4,
            )}
          </pre>
        </div>
      </div>
    </MainLayout>
  );
}
