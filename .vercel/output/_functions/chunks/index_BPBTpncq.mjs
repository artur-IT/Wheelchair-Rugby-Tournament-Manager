import { vi, beforeAll, describe, it, expect } from 'vitest';

vi.mock("@/lib/prisma", () => ({
  prisma: {
    club: {
      findMany: vi.fn(),
      create: vi.fn()
    }
  }
}));
vi.mock("@/lib/supertokens/sessionFromRequest", () => ({
  getSessionPrismaUser: vi.fn()
}));
let GET;
let POST;
beforeAll(async () => {
  const mod = await import('./index_PkHqLH1v.mjs').then(n => n._);
  GET = mod.GET;
  POST = mod.POST;
});
describe("club API /api/club", () => {
  it("GET returns 401 without session user", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce(null);
    const response = await GET({ request: new Request("http://localhost/api/club") });
    expect(response.status).toBe(401);
  });
  it("GET returns 200 for logged in user", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "owner-1", tenantId: "public" });
    const { prisma } = await import('./prisma_lW-FDGGq.mjs');
    vi.mocked(prisma.club.findMany).mockResolvedValueOnce([]);
    const response = await GET({ request: new Request("http://localhost/api/club") });
    expect(response.status).toBe(200);
  });
  it("POST returns 400 for invalid JSON body", async () => {
    const { getSessionPrismaUser } = await import('./sessionFromRequest_3u4HQXzv.mjs');
    vi.mocked(getSessionPrismaUser).mockResolvedValue({ userId: "owner-1", tenantId: "public" });
    const request = new Request("http://localhost/api/club", {
      method: "POST",
      body: "{",
      headers: { "Content-Type": "application/json" }
    });
    const response = await POST({ request });
    expect(response.status).toBe(400);
  });
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
