import './zodPl_AymT4aL4.mjs';
import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { Prisma } from '@prisma/client';
import { s as sanitizePhone, r as requiredPhoneSchema, t as toTitleCase } from './validateInputs_c5edMn88.mjs';
import { g as getSessionUserOr401 } from './requireSessionUser_n9TuULSW.mjs';
import { z } from 'zod';

function isNotFound(error) {
  return typeof error === "object" && error !== null && "code" in error && error.code === "P2025";
}
const UpdatePersonSchema = z.object({
  firstName: z.string().trim().min(1, "Imię jest wymagane"),
  lastName: z.string().trim().min(1, "Nazwisko jest wymagane"),
  email: z.union([z.string().email("Nieprawidłowy adres e-mail"), z.literal(""), z.null()]).optional(),
  phone: z.string().transform((v) => sanitizePhone(v)).pipe(requiredPhoneSchema)
}).transform((payload) => ({
  firstName: toTitleCase(payload.firstName),
  lastName: toTitleCase(payload.lastName),
  email: payload.email === void 0 ? void 0 : payload.email?.trim() || null,
  phone: payload.phone
}));
const PATCH = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params?.id;
  if (!id) {
    return json({ error: "Nieprawidłowe ID" }, 400);
  }
  const owned = await prisma.classifier.findFirst({
    where: { id, season: { ownerUserId: auth.user.userId } },
    select: { id: true }
  });
  if (!owned) return json({ error: "Nie znaleziono klasyfikatora" }, 404);
  const body = await request.json().catch(() => null);
  const parsed = UpdatePersonSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  try {
    const updated = await prisma.classifier.update({
      where: { id },
      data: parsed.data
    });
    return json(updated);
  } catch (error) {
    if (isNotFound(error)) return json({ error: "Nie znaleziono klasyfikatora" }, 404);
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        return json({ error: "Klasyfikator już istnieje (numer telefonu jest zajęty)" }, 409);
      }
    }
    throw error;
  }
};
const DELETE = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;
  const id = params?.id;
  if (!id) {
    return json({ error: "Nieprawidłowe ID" }, 400);
  }
  const owned = await prisma.classifier.findFirst({
    where: { id, season: { ownerUserId: auth.user.userId } },
    select: { id: true }
  });
  if (!owned) return json({ error: "Nie znaleziono klasyfikatora" }, 404);
  try {
    await prisma.classifier.delete({
      where: { id }
    });
    return new Response(null, { status: 204 });
  } catch (error) {
    if (isNotFound(error)) return json({ error: "Nie znaleziono klasyfikatora" }, 404);
    throw error;
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  PATCH
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
