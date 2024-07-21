import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    ADMIN_USERNAME: z.string(),
    ADMIN_PASSWORD: z.string(),
    RESEND_API_KEY: z.string(),
    POSTGRES_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },
  client: {},
  runtimeEnv: {
    ADMIN_USERNAME: process.env.ADMIN_USERNAME,
    ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    POSTGRES_URL: process.env.POSTGRES_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
