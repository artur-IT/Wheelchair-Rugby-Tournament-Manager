import { z } from 'zod';
import { j as json } from './api_BSHquwC3.mjs';
import { prisma } from './prisma_lW-FDGGq.mjs';

const querySchema = z.object({
  email: z.string().trim().email()
});
const GET = async ({ url }) => {
  const parsed = querySchema.safeParse({
    email: url.searchParams.get("email") ?? ""
  });
  if (!parsed.success) {
    return json({ error: "Nieprawidlowy adres e-mail." }, 400);
  }
  const email = parsed.data.email.toLowerCase();
  const existing = await prisma.user.findFirst({
    where: {
      email: { equals: email, mode: "insensitive" }
    },
    select: { id: true }
  });
  if (!existing) {
    return json({ conflict: false });
  }
  return json({
    conflict: true,
    message: "Konto z tym adresem e-mail już istnieje."
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
