import dayjs from "dayjs";
import InfoIcon from "~/components/icons/info-icon";
import InstagramIcon from "~/components/icons/instagram-icon";
import LocationIcon from "~/components/icons/location-icon";
import PhoneIcon from "~/components/icons/phone-icon";
import MainLayout from "~/components/layouts/main-layout";

interface Props {
  searchParams: {
    date: string;
    time: string;
    service: string;
  };
}

export default function BookingInfoPage(props: Readonly<Props>) {
  const { searchParams } = props;

  const date = dayjs(searchParams.date).format("DD/MM/YYYY");

  return (
    <div className="bg-neutral-200">
      <MainLayout className="grid min-h-screen place-items-center py-4">
        <section className="grid overflow-hidden rounded-lg bg-white sm:grid-cols-2">
          <div className="flex flex-col px-6 py-10">
            <div className="flex flex-col gap-1">
              <h3 className="text-4xl font-bold -tracking-[0.075em]">
                {searchParams.service}
              </h3>
              <p className="text-sm text-neutral-600">
                {date} a las {searchParams.time} hs
              </p>
            </div>
            <div className="mt-6 flex items-center rounded-lg border border-red-300 bg-red-100 p-4 text-red-700">
              <InfoIcon className="h-4 w-4 flex-shrink-0" />
              <p className="ms-3 text-sm [&>strong]:font-semibold">
                Hay <strong>20 minutos</strong> de tolerancia de espera.
              </p>
            </div>
            <p className="mt-6 text-neutral-600 [&>strong]:font-semibold">
              Contactate conmigo y mándame el <strong>diseño por MD</strong>.
            </p>
            <div className="mt-6 flex flex-col gap-2 text-neutral-950">
              <a
                href="https://www.instagram.com/butterfly_nailx/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <InstagramIcon className="h-7 w-7 text-neutral-950" />
                <span className="font-bold leading-[1]">@butterfly_nailx</span>
              </a>
              <p className="flex items-center gap-2">
                <PhoneIcon className="h-7 w-7 text-neutral-950" />
                <span className="font-bold leading-[1]">098368615</span>
              </p>
              <p className="flex items-center gap-2">
                <LocationIcon className="h-7 w-7 text-neutral-950" />
                <span className="font-bold leading-[1]">Consultar por MD</span>
              </p>
            </div>
            <p className="mt-6 text-neutral-600 [&>strong]:font-semibold">
              El pago se puede realizar en <strong>efectivo</strong> o{" "}
              <strong>transferencia bancaria</strong>.
            </p>
            <div className="mt-6 flex flex-col gap-1">
              <h4 className="font-bold underline">Datos Bancarios:</h4>
              <ul className="flex flex-col text-neutral-600">
                <li className="ml-4 list-disc">Banco Itaú</li>
                <li className="ml-4 list-disc">Caja de ahorro n° 9863016</li>
                <li className="ml-4 list-disc">Moneda: UYU</li>
              </ul>
            </div>
          </div>
          <div className="row-start-1 h-full min-h-[150px] w-full min-w-[300px] bg-neutral-400 sm:row-start-auto" />
        </section>
      </MainLayout>
    </div>
  );
}
