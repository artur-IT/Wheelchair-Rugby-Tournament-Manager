import { z } from "@/lib/zodPl";

export const CurrentUserMeSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email().nullable(),
  localLogin: z.string().nullable(),
  authProvider: z.enum(["LOCAL", "GOOGLE"]),
});

export const MeResponseSchema = z.object({
  user: CurrentUserMeSchema,
});

export type CurrentUserMe = z.infer<typeof CurrentUserMeSchema>;
