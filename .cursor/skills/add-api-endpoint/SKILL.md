---
name: add-api-endpoint
description: Creates a new Astro API endpoint following project conventions: Zod validation, thin route, service in src/lib/, shared types in src/types.ts. Use when adding a new API route, HTTP handler, or backend endpoint to src/pages/api/.
---

# Add API Endpoint

## File locations

- Route handler → `src/pages/api/<resource>.ts` (or `<resource>/index.ts` for sub-routes)
- Business logic → `src/lib/<resource>.ts`
- Shared types/DTOs → `src/types.ts`

## Steps

- Add request/response types to `src/types.ts`
- Create service function in `src/lib/`
- Create the route file in `src/pages/api/`
- Verify with linter

## Route template

```ts
import type { APIRoute } from "astro";
import { z } from "zod";
import { myServiceFn } from "@/lib/myService";

const schema = z.object({
  field: z.string().min(1),
});

const json = (body: object, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export const POST: APIRoute = async ({ request }) => {
  const parsed = schema.safeParse(await request.json());
  if (!parsed.success) return json({ ok: false, error: parsed.error.flatten() }, 400);

  const result = await myServiceFn(parsed.data);
  return json({ ok: true, data: result });
};
```

## Rules

- Route is **thin**: only parse → validate → call service → respond
- Always use `safeParse` — never `parse` (throws)
- Return `400` for invalid input, `401` for auth failures, `409` for conflicts (e.g. Prisma unique constraint), `500` for unexpected errors
- Never leak stack traces to the client
- If the route requires auth, check the session cookie at the top (guard clause) and return `401` early
- Use early returns for all error conditions; happy path last

## Auth guard (when needed)

```ts
export const GET: APIRoute = async ({ cookies }) => {
  if (cookies.get("session")?.value !== "ok") return json({ ok: false }, 401);
  // ...happy path
};
```

## Service template (`src/lib/myService.ts`)

```ts
import type { MyDto } from "@/types";

export async function myServiceFn(data: MyDto) {
  // business logic here (Prisma, etc.)
}
```
