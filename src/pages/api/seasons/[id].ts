import type { APIRoute } from "astro";
import { z } from "@/lib/zodPl";
import { prisma } from "@/lib/prisma";
import { json } from "@/lib/api";
import { Prisma } from "@prisma/client";
import { getSessionUserOr401 } from "@/lib/requireSessionUser";

function isNotFound(e: unknown) {
  return typeof e === "object" && e !== null && "code" in e && (e as { code: string }).code === "P2025";
}

const UpdateSeasonSchema = z.object({
  name: z.string().min(1).optional(),
  year: z.number().int().optional(),
  description: z.string().optional(),
});

export const GET: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const id = params.id;
  if (!id) return json({ error: "Brak id sezonu" }, 400);

  const season = await prisma.season.findFirst({
    where: { id, ownerUserId: auth.user.userId },
  });
  if (!season) return json({ error: "Nie znaleziono sezonu" }, 404);
  return json(season);
};

export const PATCH: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const id = params.id;
  if (!id) return json({ error: "Brak id sezonu" }, 400);

  const body = await request.json().catch(() => null);
  const parsed = UpdateSeasonSchema.safeParse(body);
  if (!parsed.success) return json({ error: parsed.error.flatten() }, 400);

  const existing = await prisma.season.findFirst({
    where: { id, ownerUserId: auth.user.userId },
    select: { id: true },
  });
  if (!existing) return json({ error: "Nie znaleziono sezonu" }, 404);

  try {
    const season = await prisma.season.update({
      where: { id },
      data: parsed.data,
    });
    return json(season);
  } catch (e) {
    if (isNotFound(e)) return json({ error: "Nie znaleziono sezonu" }, 404);
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") return json({ error: "Sezon dla tego roku już istnieje na Twoim koncie" }, 409);
    }
    throw e;
  }
};

export const DELETE: APIRoute = async ({ params, request }) => {
  const auth = await getSessionUserOr401(request);
  if (!auth.ok) return auth.response;

  const id = params.id;
  if (!id) return json({ error: "Brak id sezonu" }, 400);

  const existing = await prisma.season.findFirst({
    where: { id, ownerUserId: auth.user.userId },
    select: { id: true },
  });
  if (!existing) return json({ error: "Nie znaleziono sezonu" }, 404);

  try {
    await prisma.season.delete({ where: { id } });
    return new Response(null, { status: 204 });
  } catch (e) {
    if (isNotFound(e)) return json({ error: "Nie znaleziono sezonu" }, 404);
    throw e;
  }
};
