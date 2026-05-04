import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';
import { getSessionPrismaUser } from './sessionFromRequest_3u4HQXzv.mjs';
import './zodPl_AymT4aL4.mjs';
import { t as toTitleCase, a as requiredLastNameSchema, b as requiredFirstNameSchema } from './validateInputs_c5edMn88.mjs';
import { z } from 'zod';

const UpdateCurrentUserSchema = z.object({
  firstName: requiredFirstNameSchema,
  lastName: requiredLastNameSchema
});
function splitName(name) {
  const normalized = name.trim().replace(/\s+/g, " ");
  const [firstName, ...rest] = normalized.split(" ");
  const lastName = rest.join(" ");
  return {
    firstName: firstName || "",
    lastName: lastName || ""
  };
}
const GET = async ({ request }) => {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) return json({ error: "Brak aktywnej sesji użytkownika" }, 401);
  const user = await prisma.user.findUnique({
    where: { id: sessionUser.userId },
    select: { name: true, email: true }
  });
  if (!user) return json({ error: "Użytkownik nie istnieje" }, 404);
  const { firstName, lastName } = splitName(user.name);
  return json({ firstName, lastName, email: user.email });
};
const PUT = async ({ request }) => {
  const sessionUser = await getSessionPrismaUser(request);
  if (!sessionUser) return json({ error: "Brak aktywnej sesji użytkownika" }, 401);
  const body = await request.json().catch(() => null);
  const parsed = UpdateCurrentUserSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);
  const firstName = toTitleCase(parsed.data.firstName);
  const lastName = toTitleCase(parsed.data.lastName);
  const name = `${firstName} ${lastName}`;
  const updatedUser = await prisma.user.update({
    where: { id: sessionUser.userId },
    data: { name },
    select: { email: true }
  });
  return json({ firstName, lastName, email: updatedUser.email });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  PUT
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
