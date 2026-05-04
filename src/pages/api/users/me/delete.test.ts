import { beforeAll, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/supertokens/sessionFromRequest", () => ({
  getSessionPrismaUser: vi.fn(),
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
    },
  },
}));

vi.mock("@/lib/users/deleteOwnUserAccount", () => ({
  deleteOwnUserAccount: vi.fn(),
}));

let POST: (ctx: unknown) => Promise<Response>;

beforeAll(async () => {
  const mod = await import("@/pages/api/users/me/delete");
  POST = mod.POST as unknown as (ctx: unknown) => Promise<Response>;
});

describe("POST /api/users/me/delete", () => {
  it("returns 401 without session", async () => {
    const { getSessionPrismaUser } = await import("@/lib/supertokens/sessionFromRequest");
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce(null);

    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "any@example.com" }),
      }),
    } as never);

    expect(response.status).toBe(401);
  });

  it("returns 400 when confirmation email does not match account", async () => {
    const { getSessionPrismaUser } = await import("@/lib/supertokens/sessionFromRequest");
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({ email: "real@example.com" });

    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "wrong@example.com" }),
      }),
    } as never);

    expect(response.status).toBe(400);
  });

  it("returns 204 when email matches and deletion succeeds", async () => {
    const { getSessionPrismaUser } = await import("@/lib/supertokens/sessionFromRequest");
    const { prisma } = await import("@/lib/prisma");
    const { deleteOwnUserAccount } = await import("@/lib/users/deleteOwnUserAccount");
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({ email: "user@test.com" });
    vi.mocked(deleteOwnUserAccount).mockResolvedValueOnce(true);

    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "  User@Test.com  " }),
      }),
    } as never);

    expect(response.status).toBe(204);
    expect(deleteOwnUserAccount).toHaveBeenCalledWith("u1");
  });

  it("returns 404 when prisma user row is missing before delete", async () => {
    const { getSessionPrismaUser } = await import("@/lib/supertokens/sessionFromRequest");
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);

    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "x@y.com" }),
      }),
    } as never);

    expect(response.status).toBe(404);
  });

  it("returns 404 when deleteOwnUserAccount reports missing user", async () => {
    const { getSessionPrismaUser } = await import("@/lib/supertokens/sessionFromRequest");
    const { prisma } = await import("@/lib/prisma");
    const { deleteOwnUserAccount } = await import("@/lib/users/deleteOwnUserAccount");
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({ email: "same@example.com" });
    vi.mocked(deleteOwnUserAccount).mockResolvedValueOnce(false);

    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "same@example.com" }),
      }),
    } as never);

    expect(response.status).toBe(404);
  });
});
