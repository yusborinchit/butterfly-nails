import { z } from "zod";

export const BookingFormSchema = z
  .object({
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, {
      message: "Fecha inválida.",
    }),
    time: z.string().regex(/^(09:00|13:00|16:00|18:00)$/, {
      message: "Turno inválido.",
    }),
    ci: z.string().length(8, {
      message: "Cédula inválida (8 caracteres de largo).",
    }),
    name: z
      .string()
      .min(1, {
        message: "Nombre no puede ser vació.",
      })
      .max(256, {
        message: "Nombre inválido.",
      }),
    username: z
      .string()
      .min(1, {
        message: "Usuario de Instagram no puede ser vació.",
      })
      .max(64, {
        message: "Usuario de Instagram inválido.",
      }),
    phone: z.string().regex(/^\d{9}$/, {
      message: "Teléfono inválido (9 caracteres de largo).",
    }),
    email: z.string().email({ message: "Email inválido." }).or(z.literal("")),
    service: z.string().regex(/^(Soft Gel|Capping|Esmaltado Semi|Híbridas)$/, {
      message: "Servicio inválido.",
    }),
    description: z
      .string()
      .min(1, {
        message: "Descripción no puede ser vacía.",
      })
      .max(364, {
        message: "Descripción inválida (Máximo 364 caracteres de largo).",
      }),
  })
  .required();
