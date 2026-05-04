import { Prisma } from "@prisma/client";
import { beforeEach, describe, expect, it, vi } from "vitest";

const deleteUserMock = vi.fn();

vi.mock("supertokens-node", () => ({
  default: { deleteUser: (...args: unknown[]) => deleteUserMock(...args) },
}));

vi.mock("@/lib/supertokens/initSuperTokens", () => ({
  ensureSuperTokensInitialized: vi.fn(),
}));

vi.mock("@/lib/prisma", () => ({
  prisma: {
    user: {
      delete: vi.fn(),
    },
  },
}));

describe("deleteOwnUserAccount", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("deletes prisma user then calls SuperTokens.deleteUser", async () => {
    const { prisma } = await import("@/lib/prisma");
    vi.mocked(prisma.user.delete).mockResolvedValueOnce({} as never);
    deleteUserMock.mockResolvedValueOnce({ status: "OK" });

    const { deleteOwnUserAccount } = await import("@/lib/users/deleteOwnUserAccount");
    await expect(deleteOwnUserAccount("user-1")).resolves.toBe(true);

    expect(prisma.user.delete).toHaveBeenCalledWith({ where: { id: "user-1" } });
    expect(deleteUserMock).toHaveBeenCalledWith("user-1");
  });

  it("returns false when prisma user is already gone", async () => {
    const { prisma } = await import("@/lib/prisma");
    const notFound = new Prisma.PrismaClientKnownRequestError("not found", {
      code: "P2025",
      clientVersion: "test",
    });
    vi.mocked(prisma.user.delete).mockRejectedValueOnce(notFound);

    const { deleteOwnUserAccount } = await import("@/lib/users/deleteOwnUserAccount");
    await expect(deleteOwnUserAccount("missing")).resolves.toBe(false);
    expect(deleteUserMock).not.toHaveBeenCalled();
  });
});
