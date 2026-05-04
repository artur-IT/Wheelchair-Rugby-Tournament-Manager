import type { APIRoute } from "astro";
import { json } from "@/lib/api";
import { prisma } from "@/lib/prisma";
import { z } from "@/lib/zodPl";
import { getSessionPrismaUser } from "@/lib/supertokens/sessionFromRequest";
import { deleteOwnUserAccount } from "@/lib/users/deleteOwnUserAccount";

const DeleteAccountBodySchema = z.object({
  confirmation: z
    .string()
    .transform((s) => s.trim())
    .pipe(z.string().min(1, "Wpisz adres e-mail używany do logowania.")),
});

export const POST: APIRoute = async ({ request }) => {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) return json({ error: "Brak aktywnej sesji użytkownika" }, 401);

  const body = await request.json().catch(() => null);
  const parsed = DeleteAccountBodySchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const dbUser = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { email: true },
  });
  if (!dbUser) return json({ error: "Użytkownik nie istnieje" }, 404);

  if (parsed.data.confirmation.toLowerCase() !== dbUser.email.toLowerCase()) {
    return json({ error: "Wpisany e-mail nie zgadza się z adresem tego konta." }, 400);
  }

  const deleted = await deleteOwnUserAccount(sessionUser.userId);
  if (!deleted) return json({ error: "Użytkownik nie istnieje" }, 404);
  return new Response(null, { status: 204 });
};
