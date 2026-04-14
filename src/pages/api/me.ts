import type { APIRoute } from "astro";
import { json } from "@/lib/api";
import { getRequesterIdentity } from "@/lib/clubAuth";
import { prisma } from "@/lib/prisma";

export const GET: APIRoute = async ({ cookies }) => {
  const auth = await getRequesterIdentity(cookies);
  if (!auth.ok) {
    return auth.response;
  }

  const user = await prisma.user.findUnique({
    where: { id: auth.identity.userId },
    select: {
      id: true,
      name: true,
      email: true,
      localLogin: true,
      authProvider: true,
    },
  });

  if (!user) {
    return json({ error: "Nie znaleziono użytkownika." }, 404);
  }

  return json({ user });
};
