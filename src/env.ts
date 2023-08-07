import z from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_IMBD_API_KEY: z.string(),
});

export const ENV = envSchema.parse({
  NEXT_PUBLIC_IMBD_API_KEY: process.env.NEXT_PUBLIC_IMBD_API_KEY,
});

console.log({ ENV });
