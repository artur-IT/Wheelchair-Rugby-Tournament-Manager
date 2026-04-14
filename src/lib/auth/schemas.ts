import { z } from "@/lib/zodPl";

/** ASCII letters + digits only; canonical lowercase applied after parse. */
const localLoginPattern = /^[a-zA-Z0-9]{1,6}$/;

export const LocalLoginSchema = z
  .string()
  .trim()
  .regex(localLoginPattern, "Nick: tylko litery (A–Z, a–z) i cyfry, 1–6 znaków, bez polskich znaków.")
  .transform((s) => s.toLowerCase());

export const RegisterBodySchema = z.object({
  localLogin: LocalLoginSchema,
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków").max(128),
  email: z.string().trim().toLowerCase().email(),
  /** Optional display name; empty string is treated as omitted in the API. */
  name: z.string().trim().max(120).optional(),
});

export const LoginBodySchema = z.object({
  localLogin: LocalLoginSchema,
  password: z.string().min(1),
});
