import { describe, expect, it } from "vitest";

import { sanitizePhone, toTitleCase } from "./validateInputs";

describe("toTitleCase", () => {
  it("capitalises first letter of each word", () => {
    expect(toTitleCase("artur mati")).toBe("Artur Mati");
  });

  it("lowercases ALL-CAPS input", () => {
    expect(toTitleCase("ARTUR MATI")).toBe("Artur Mati");
  });

  it("handles single word", () => {
    expect(toTitleCase("kowalski")).toBe("Kowalski");
  });

  it("trims leading and trailing spaces", () => {
    expect(toTitleCase("  jan  ")).toBe("Jan");
  });

  it("returns empty string for empty input", () => {
    expect(toTitleCase("")).toBe("");
  });
});

describe("sanitizePhone", () => {
  it("strips non-digit characters", () => {
    expect(sanitizePhone("abc123def")).toBe("123");
  });

  it("strips spaces, dashes and parentheses", () => {
    expect(sanitizePhone("(12) 345-6789")).toBe("123456789");
  });

  it("truncates to 9 digits when input is longer", () => {
    expect(sanitizePhone("1234567890")).toBe("123456789");
  });

  it("returns the value unchanged when it is exactly 9 digits", () => {
    expect(sanitizePhone("123456789")).toBe("123456789");
  });

  it("returns empty string for empty input", () => {
    expect(sanitizePhone("")).toBe("");
  });

  it("returns empty string when input contains no digits", () => {
    expect(sanitizePhone("abcdef")).toBe("");
  });
});
