import { afterEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/supertokens/sessionFromRequest", () => ({
  getSessionPrismaUser: vi.fn(),
}));

import { getSessionPrismaUser } from "@/lib/supertokens/sessionFromRequest";
import { getSessionUserOr401 } from "./requireSessionUser";

describe("getSessionUserOr401", () => {
  afterEach(() => {
    vi.mocked(getSessionPrismaUser).mockReset();
  });

  it("returns user when session resolves", async () => {
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce({ userId: "u1", tenantId: "public" });
    const req = new Request("https://example.com/api/seasons");
    const result = await getSessionUserOr401(req);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.user.userId).toBe("u1");
    }
  });

  it("returns 401 response when session is missing", async () => {
    vi.mocked(getSessionPrismaUser).mockResolvedValueOnce(null);
    const req = new Request("https://example.com/api/seasons");
    const result = await getSessionUserOr401(req);
    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.response.status).toBe(401);
    }
  });
});
