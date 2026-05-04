import { vi, beforeAll, describe, it, expect } from 'vitest';

vi.mock("@/lib/supertokens/sessionFromRequest", () => ({
  getSessionPrismaUser: vi.fn()
}));
vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      findUnique: vi.fn()
    }
  }
}));
vi.mock("@/lib/users/deleteOwnUserAccount", () => ({
  deleteOwnUserAccount: vi.fn()
}));
let POST;
beforeAll(async () => {
  const mod = await import('./delete_DcLsnbPc.mjs').then(n => n._);
  POST = mod.POST;
});
describe("POST /api/users/me/delete", () => {
  it("returns 401 without session", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce(null);
    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "any@example.com" })
      })
    });
    expect(response.status).toBe(401);
  });
  it("returns 400 when confirmation email does not match account", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    const { prisma } = await import('./prisma_lW-FDGGq.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({ email: "real@example.com" });
    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "wrong@example.com" })
      })
    });
    expect(response.status).toBe(400);
  });
  it("returns 204 when email matches and deletion succeeds", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    const { prisma } = await import('./prisma_lW-FDGGq.mjs');
    const { deleteOwnUserAccount } = await import('./deleteOwnUserAccount_CXBIEHRJ.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({ email: "user@test.com" });
    vi.mocked(deleteOwnUserAccount).mockResolvedValueOnce(true);
    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "  User@Test.com  " })
      })
    });
    expect(response.status).toBe(204);
    expect(deleteOwnUserAccount).toHaveBeenCalledWith("u1");
  });
  it("returns 404 when prisma user row is missing before delete", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    const { prisma } = await import('./prisma_lW-FDGGq.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);
    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "x@y.com" })
      })
    });
    expect(response.status).toBe(404);
  });
  it("returns 404 when deleteOwnUserAccount reports missing user", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    const { prisma } = await import('./prisma_lW-FDGGq.mjs');
    const { deleteOwnUserAccount } = await import('./deleteOwnUserAccount_CXBIEHRJ.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({ email: "same@example.com" });
    vi.mocked(deleteOwnUserAccount).mockResolvedValueOnce(false);
    const response = await POST({
      request: new Request("http://localhost/api/users/me/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ confirmation: "same@example.com" })
      })
    });
    expect(response.status).toBe(404);
  });
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
