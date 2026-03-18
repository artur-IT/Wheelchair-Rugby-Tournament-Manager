import { describe, expect, it } from "vitest";

import type { Tournament } from "@/types";
import { tournamentToTournamentFormDefaults } from "./tournamentFormMapping";

describe("tournamentFormMapping", () => {
  it("parses address into street/zip/city and maps tournament defaults", () => {
    const tournamentFixture: Tournament = {
      id: "t1",
      name: "Turniej Otwarcia Sezonu",
      startDate: "2024-05-10",
      endDate: "2024-05-12",
      seasonId: "s1",
      venue: {
        id: "v1",
        tournamentId: "t1",
        name: "Hala Arena",
        address: "ul. Olimpijska 1, 00-123 Warszawa",
        mapUrl: "https://maps.google.com",
      },
      accommodation: {
        id: "a1",
        tournamentId: "t1",
        name: "Hotel Sport",
        address: "ul. Hotelowa 5, 11-222 Krakow",
        mapUrl: "https://maps.google.com",
      },
      catering: "Hotel + Catering na hali",
      teams: [],
      referees: [],
      classifiers: [],
      volunteers: [],
    };

    const defaults = tournamentToTournamentFormDefaults(tournamentFixture);

    expect(defaults.name).toBe("Turniej Otwarcia Sezonu");
    expect(defaults.street).toBe("ul. Hotelowa 5");
    expect(defaults.zipCode).toBe("11-222");
    expect(defaults.city).toBe("Krakow");
    expect(defaults.hotel).toBe("Hotel Sport");
    expect(defaults.hallName).toBe("Hala Arena");
    expect(defaults.catering).toBe("Hotel + Catering na hali");

    expect(defaults.startDate).toBeInstanceOf(Date);
    expect(defaults.endDate).toBeInstanceOf(Date);
    expect(defaults.startDate.getFullYear()).toBe(2024);
    expect(defaults.startDate.getMonth()).toBe(4); // 0-indexed
    expect(defaults.startDate.getDate()).toBe(10);
    expect(defaults.endDate.getFullYear()).toBe(2024);
    expect(defaults.endDate.getMonth()).toBe(4);
    expect(defaults.endDate.getDate()).toBe(12);
  });
});
