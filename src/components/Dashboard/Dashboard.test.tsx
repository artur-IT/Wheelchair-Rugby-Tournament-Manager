import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  beforeEach(() => {
    localStorage.removeItem("defaultSeasonId");
    vi.stubGlobal(
      "fetch",
      vi.fn((input: RequestInfo | URL) => {
        const url = typeof input === "string" ? input : input.toString();
        if (url === "/api/me") {
          return Promise.resolve({
            ok: true,
            status: 200,
            json: async () => ({
              user: {
                id: "u1",
                name: "Organizator Testowy",
                email: "org@example.com",
                localLogin: "org",
                authProvider: "LOCAL",
              },
            }),
          });
        }
        return Promise.resolve({ ok: false, json: async () => null });
      })
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shows helper link when default season is not set", async () => {
    render(<Dashboard />);

    expect(await screen.findByRole("heading", { name: "Witaj, Organizator!" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Brak domyślnego sezonu/i })).toHaveAttribute("href", "/settings");
  });

  it("loads and displays default season chip from API", async () => {
    localStorage.setItem("defaultSeasonId", "s1");
    const fetchMock = vi.fn().mockImplementation((url: string) => {
      if (url === "/api/me") {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => ({
            user: {
              id: "u1",
              name: "Organizator Testowy",
              email: "org@example.com",
              localLogin: "org",
              authProvider: "LOCAL",
            },
          }),
        });
      }
      if (url === "/api/seasons/s1") {
        return Promise.resolve({
          ok: true,
          json: async () => ({ id: "s1", name: "Sezon 1", year: 2026 }),
        });
      }
      if (url === "/api/tournaments") {
        return Promise.resolve({ ok: true, json: async () => [] });
      }
      if (url === "/api/teams?seasonId=s1") {
        return Promise.resolve({ ok: true, json: async () => [] });
      }
      if (url === "/api/referees?seasonId=s1") {
        return Promise.resolve({ ok: true, json: async () => [] });
      }
      return Promise.resolve({ ok: false, json: async () => null });
    });
    vi.stubGlobal("fetch", fetchMock);

    render(<Dashboard />);

    expect(await screen.findByRole("link", { name: "Sezon 1 (2026)" }, { timeout: 10000 })).toHaveAttribute(
      "href",
      "/settings"
    );
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/seasons/s1",
      expect.objectContaining({ signal: expect.any(AbortSignal) })
    );
  });
});
