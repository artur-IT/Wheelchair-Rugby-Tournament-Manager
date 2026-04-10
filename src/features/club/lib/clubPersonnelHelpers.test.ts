import { describe, expect, it } from "vitest";
import {
  buildContactMapSearchUrl,
  computeAgeFromIsoDateString,
  extractClubApiErrorMessage,
} from "@/features/club/lib/clubPersonnelHelpers";

describe("clubPersonnelHelpers", () => {
  it("extractClubApiErrorMessage reads string error", () => {
    expect(extractClubApiErrorMessage({ error: "Błąd" }, "fallback")).toBe("Błąd");
  });

  it("extractClubApiErrorMessage prefixes field label and message", () => {
    expect(
      extractClubApiErrorMessage(
        {
          error: {
            formErrors: [],
            fieldErrors: { firstName: ["Za krótko"] },
          },
        },
        "fallback"
      )
    ).toBe("Imię: Za krótko");
  });

  it("extractClubApiErrorMessage replaces vague Zod default with a helpful hint", () => {
    expect(
      extractClubApiErrorMessage(
        {
          error: {
            formErrors: [],
            fieldErrors: { contactPostalCode: ["Nieprawidłowa wartość"] },
          },
        },
        "fallback"
      )
    ).toContain("Kod pocztowy:");
  });

  it("buildContactMapSearchUrl returns null when address parts empty", () => {
    expect(buildContactMapSearchUrl({})).toBeNull();
  });

  it("buildContactMapSearchUrl encodes query for OpenStreetMap", () => {
    const url = buildContactMapSearchUrl({
      address: "Sportowa 1",
      postalCode: "80-001",
      city: "Gdańsk",
    });
    expect(url).toContain(encodeURIComponent("Sportowa 1"));
    expect(url).toContain("openstreetmap.org");
  });

  it("computeAgeFromIsoDateString returns full years", () => {
    const ref = new Date("2026-06-01T12:00:00.000Z");
    expect(computeAgeFromIsoDateString("2010-01-15T00:00:00.000Z", ref)).toBe(16);
  });
});
