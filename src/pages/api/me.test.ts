import { beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

let GET: (ctx: unknown) => Promise<Response>;

function cookies(session: string | undefined, userId: string | undefined) {
  return {
    get: vi.fn((name: string) => {
      if (name === "session") return session ? { value: session } : undefined;
      if (name === "sessionUserId") return userId ? { value: userId } : undefined;
      return undefined;
    }),
  } as never;
}

beforeAll(async () => {
  const mod = await import("@/pages/api/me");
  GET = mod.GET as unknown as (ctx: unknown) => Promise<Response>;
});

describe("GET /api/me", () => {
  beforeEach(async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.findUnique).mockReset();
  });

  it("returns 401 without session", async () => {
    const res = await GET({ cookies: cookies(undefined, undefined) } as never);
    expect(res.status).toBe(401);
  });

  it("returns 403 when password reset is required", async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: "u1",
      role: "ADMIN",
      mustResetPassword: true,
    } as never);

    const res = await GET({ cookies: cookies("ok", "u1") } as never);
    expect(res.status).toBe(403);
  });

  it("returns 404 when the user row disappeared after auth", async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.findUnique)
      .mockResolvedValueOnce({ id: "u1", role: "ADMIN", mustResetPassword: false } as never)
      .mockResolvedValueOnce(null);

    const res = await GET({ cookies: cookies("ok", "u1") } as never);
    expect(res.status).toBe(404);
  });

  it("returns the current user profile", async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.findUnique)
      .mockResolvedValueOnce({ id: "u1", role: "ADMIN", mustResetPassword: false } as never)
      .mockResolvedValueOnce({
        id: "u1",
        name: "Jan Kowalski",
        email: "jan@example.com",
        localLogin: "janek",
        authProvider: "LOCAL",
      } as never);

    const res = await GET({ cookies: cookies("ok", "u1") } as never);
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      user: { id: string; name: string; email: string | null; localLogin: string | null; authProvider: string };
    };
    expect(body.user).toEqual({
      id: "u1",
      name: "Jan Kowalski",
      email: "jan@example.com",
      localLogin: "janek",
      authProvider: "LOCAL",
    });
  });
});
