import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import TournamentDetails from "./TournamentDetails";

const tournamentFixture = {
  id: "t1",
  name: "Turniej Otwarcia Sezonu",
  startDate: "2024-05-10",
  endDate: "2024-05-12",
  seasonId: "s1",
  venue: {
    id: "v1",
    tournamentId: "t1",
    name: "Hala Arena",
    address: "ul. Olimpijska 1",
    mapUrl: "https://maps.google.com",
  },
  accommodation: {
    id: "a1",
    tournamentId: "t1",
    name: "Hotel Sport",
    address: "ul. Hotelowa 5",
    mapUrl: "https://maps.google.com",
  },
  catering: "Hotel + Catering na hali",
  teams: [],
  referees: [],
  classifiers: [],
  volunteers: [],
};

beforeEach(() => {
  vi.stubGlobal(
    "fetch",
    vi.fn(async (input: RequestInfo) => {
      const url = typeof input === "string" ? input : input.url;

      if (url === "/api/tournaments") {
        return { ok: true, json: async () => [tournamentFixture] };
      }

      return { ok: true, json: async () => [] };
    }) as never
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("TournamentDetails", () => {
  it("shows not found message for unknown tournament id", () => {
    render(<TournamentDetails id="missing-tournament-id" />);

    return screen.findByText("Nie znaleziono turnieju.").then(() => {
      expect(screen.getByText("Nie znaleziono turnieju.")).toBeInTheDocument();
    });
  });

  it("renders selected tournament details for valid tournament id", async () => {
    render(<TournamentDetails id="t1" />);

    expect(await screen.findByRole("heading", { name: "Turniej Otwarcia Sezonu" })).toBeInTheDocument();
    expect(await screen.findByText("Hala Arena")).toBeInTheDocument();
    expect(await screen.findByText("Hotel Sport")).toBeInTheDocument();
    expect(await screen.findByText("Hotel + Catering na hali")).toBeInTheDocument();
    expect(await screen.findByText("Brak przypisanych drużyn.")).toBeInTheDocument();
  });
});
