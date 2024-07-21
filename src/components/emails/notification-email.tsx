import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import dayjs from "dayjs";
import { type Booking } from "~/types";

interface Props {
  booking: Omit<Booking, "id">;
}

export default function NotificationEmail(props: Readonly<Props>) {
  const { booking } = props;

  return (
    <Html>
      <Preview>{`Notificación del turno ${booking.date} a las ${booking.time} de ${booking.name}`}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans text-black">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-lg border border-solid border-[#eaeaea] bg-white p-[20px]">
            <Heading className="text-4xl font-bold -tracking-[0.075em]">
              Notificación de turno {dayjs(booking.date).format("DD/MM/YYYY")} a{" "}
              las {booking.time}
            </Heading>
            <Text className="mt-4">Hola {booking.name},</Text>
            <Text className="mt-4">
              El turno del {dayjs(booking.date).format("DD/MM/YYYY")} a las{" "}
              {booking.time} hs de {booking.name} ha sido agendado con éxito.
            </Text>
            <Hr className="mx-0 w-full border border-solid border-[#eaeaea]" />
            <Text>
              <strong className="font-semibold">Dia:</strong>{" "}
              {dayjs(booking.date).format("DD/MM/YYYY")}.
            </Text>
            <Text>
              <strong className="font-semibold">Hora:</strong> {booking.time}{" "}
              hs.
            </Text>
            <Text>
              <strong className="font-semibold">Servicio:</strong>{" "}
              {booking.service}.
            </Text>
            <Hr className="mx-0 w-full border border-solid border-[#eaeaea]" />
            <Text className="text-base font-bold">
              <Link
                href="https://www.instagram.com/butterfly_nailx/"
                className="text-blue-500 underline"
              >
                Haz click aquí
              </Link>{" "}
              para mandarme el diseño por MD.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
