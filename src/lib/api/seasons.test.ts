import { afterEach, describe, expect, it, vi } from "vitest";

import { createSeason, fetchSeasonsList, updateSeason } from "./seasons";

describe("seasons API helpers", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("fetchSeasonsList returns array on OK", async () => {
    const body = [{ id: "s1", name: "A" }];
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify(body), { status: 200 }))
    );
    await expect(fetchSeasonsList()).resolves.toEqual(body);
  });

  it("createSeason sends POST", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ id: "s1", name: "A" }), { status: 200 }))
    );
    await expect(createSeason({ name: "A", year: 2026 })).resolves.toMatchObject({ id: "s1" });
  });

  it("createSeason throws parsed validation error on non-OK response", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ error: { formErrors: ["Zła nazwa sezonu"] } }), { status: 400 }))
    );
    await expect(createSeason({ name: "", year: 2026 })).rejects.toThrow("Zła nazwa sezonu");
  });

  it("updateSeason sends PATCH", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url, init) => {
        expect(url).toBe("/api/seasons/s1");
        expect((init as RequestInit).method).toBe("PATCH");
        return new Response(JSON.stringify({ id: "s1", name: "B" }), { status: 200 });
      })
    );
    await expect(updateSeason("s1", { name: "B", year: 2026 })).resolves.toMatchObject({ name: "B" });
  });
});
