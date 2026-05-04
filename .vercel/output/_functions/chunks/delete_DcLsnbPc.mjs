import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import './zodPl_AymT4aL4.mjs';
import { getSessionPrismaUser } from './sessionFromRequest_3u4HQXzv.mjs';
import { deleteOwnUserAccount } from './deleteOwnUserAccount_CXBIEHRJ.mjs';
import { z } from 'zod';

const DeleteAccountBodySchema = z.object({
  confirmation: z.string().transform((s) => s.trim()).pipe(z.string().min(1, "Wpisz adres e-mail używany do logowania."))
});
const POST = async ({ request }) => {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) return json({ error: "Brak aktywnej sesji użytkownika" }, 401);
  const body = await request.json().catch(() => null);
  const parsed = DeleteAccountBodySchema.safeParse(body);
  if (!parsed.success) {
    return new Response(JSON.stringify({ error: parsed.error.flatten() }), {
      status: 400,
      headers: { "Content-Type": "application/json" }
    });
  }
  const dbUser = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { email: true }
  });
  if (!dbUser) return json({ error: "Użytkownik nie istnieje" }, 404);
  if (parsed.data.confirmation.toLowerCase() !== dbUser.email.toLowerCase()) {
    return json({ error: "Wpisany e-mail nie zgadza się z adresem tego konta." }, 400);
  }
  const deleted = await deleteOwnUserAccount(sessionUser.userId);
  if (!deleted) return json({ error: "Użytkownik nie istnieje" }, 404);
  return new Response(null, { status: 204 });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
