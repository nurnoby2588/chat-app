import z from "zod";
import dotenv from "dotenv";
dotenv.config();

export const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
//   MONGO_URI: z.string().min(1, "MONGO_URI is required"),
//   JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
//   JWT_EXPIRES_IN: z.string().min(1, "JWT_EXPIRES_IN is required"),
});
export const env = envSchema.parse(process.env);
export type env = z.infer<typeof envSchema>;
