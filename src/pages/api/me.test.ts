import { beforeAll, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      update: vi.fn(),
    },
  },
}));

let GET: (ctx: unknown) => Promise<Response>;
let PATCH: (ctx: unknown) => Promise<Response>;

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
  PATCH = mod.PATCH as unknown as (ctx: unknown) => Promise<Response>;
});

beforeEach(async () => {
  const { prisma } = await import("@/lib/prisma");
  vi.mocked(prisma.user.findUnique).mockReset();
  vi.mocked(prisma.user.update).mockReset();
});

describe("GET /api/me", () => {
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
        passwordResetEmail: null,
        localLogin: "janek",
        authProvider: "LOCAL",
      } as never);

    const res = await GET({ cookies: cookies("ok", "u1") } as never);
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      user: {
        id: string;
        name: string;
        email: string | null;
        passwordResetEmail: string | null;
        localLogin: string | null;
        authProvider: string;
      };
    };
    expect(body.user).toEqual({
      id: "u1",
      name: "Jan Kowalski",
      email: "jan@example.com",
      passwordResetEmail: null,
      localLogin: "janek",
      authProvider: "LOCAL",
    });
  });
});

describe("PATCH /api/me", () => {
  it("returns 401 without session", async () => {
    const res = await PATCH({
      cookies: cookies(undefined, undefined),
      request: { json: async () => ({}) } as never,
    } as never);
    expect(res.status).toBe(401);
  });

  it("returns 403 when password reset is required", async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: "u1",
      role: "ADMIN",
      mustResetPassword: true,
    } as never);

    const res = await PATCH({
      cookies: cookies("ok", "u1"),
      request: { json: async () => ({ name: "Janek", passwordResetEmail: "helper@example.com" }) } as never,
    } as never);
    expect(res.status).toBe(403);
  });

  it("updates the user profile", async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: "u1",
      role: "ADMIN",
      mustResetPassword: false,
    } as never);
    vi.mocked(prisma.user.update).mockResolvedValueOnce({
      id: "u1",
      name: "Nowy",
      email: "jan@example.com",
      localLogin: "janek",
      authProvider: "LOCAL",
      passwordResetEmail: "helper@example.com",
    } as never);

    const res = await PATCH({
      cookies: cookies("ok", "u1"),
      request: { json: async () => ({ name: "Nowy", passwordResetEmail: "helper@example.com" }) } as never,
    } as never);
    expect(res.status).toBe(200);
    const body = (await res.json()) as {
      user: {
        id: string;
        name: string;
        email: string;
        passwordResetEmail: string | null;
        localLogin: string | null;
        authProvider: string;
      };
    };
    expect(body.user).toEqual({
      id: "u1",
      name: "Nowy",
      email: "jan@example.com",
      passwordResetEmail: "helper@example.com",
      localLogin: "janek",
      authProvider: "LOCAL",
    });
  });
});
