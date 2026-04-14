import { describe, expect, it } from "vitest";
import { splitDisplayName } from "@/lib/auth/splitDisplayName";

describe("splitDisplayName", () => {
  it("returns empty strings for blank input", () => {
    expect(splitDisplayName("")).toEqual({ firstName: "", lastName: "" });
    expect(splitDisplayName("   ")).toEqual({ firstName: "", lastName: "" });
  });

  it("treats a single token as first name only", () => {
    expect(splitDisplayName("Janusz")).toEqual({ firstName: "Janusz", lastName: "" });
  });

  it("splits on the first space and keeps the rest as last name", () => {
    expect(splitDisplayName("Jan Kowalski")).toEqual({ firstName: "Jan", lastName: "Kowalski" });
    expect(splitDisplayName("Anna Maria Nowak")).toEqual({ firstName: "Anna", lastName: "Maria Nowak" });
  });
});
