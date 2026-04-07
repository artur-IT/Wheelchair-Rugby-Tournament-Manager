import { describe, expect, it } from "vitest";

import {
  isDayTimestampOutsideTournamentRange,
  isScheduledDayOutsideTournamentRange,
  matchHasRecordedResult,
} from "./matchPlanHelpers";

describe("matchPlanHelpers tournament range", () => {
  it("isScheduledDayOutsideTournamentRange is false inside inclusive bounds", () => {
    const start = "2024-05-10T00:00:00.000Z";
    const end = "2024-05-12T00:00:00.000Z";
    expect(isScheduledDayOutsideTournamentRange("2024-05-11T10:00:00.000Z", start, end)).toBe(false);
  });

  it("isScheduledDayOutsideTournamentRange is true before start", () => {
    const start = "2024-05-10T00:00:00.000Z";
    const end = "2024-05-12T00:00:00.000Z";
    expect(isScheduledDayOutsideTournamentRange("2024-05-09T10:00:00.000Z", start, end)).toBe(true);
  });

  it("isScheduledDayOutsideTournamentRange is true after end", () => {
    const start = "2024-05-10T00:00:00.000Z";
    const end = "2024-05-12T00:00:00.000Z";
    expect(isScheduledDayOutsideTournamentRange("2024-05-13T10:00:00.000Z", start, end)).toBe(true);
  });

  it("isDayTimestampOutsideTournamentRange matches scheduled-day helper for same calendar day", () => {
    const start = "2024-05-10T00:00:00.000Z";
    const end = "2024-05-12T00:00:00.000Z";
    const ts = Date.UTC(2024, 4, 9);
    expect(isDayTimestampOutsideTournamentRange(ts, start, end)).toBe(true);
    expect(isScheduledDayOutsideTournamentRange(new Date(ts).toISOString(), start, end)).toBe(true);
  });
});

describe("matchHasRecordedResult", () => {
  it("is true only when both scores are numbers", () => {
    expect(matchHasRecordedResult({ scoreA: 10, scoreB: 12 })).toBe(true);
    expect(matchHasRecordedResult({ scoreA: 0, scoreB: 0 })).toBe(true);
  });

  it("is false when either score is missing", () => {
    expect(matchHasRecordedResult({ scoreA: 10, scoreB: undefined })).toBe(false);
    expect(matchHasRecordedResult({ scoreA: undefined, scoreB: 12 })).toBe(false);
    expect(matchHasRecordedResult({ scoreA: undefined, scoreB: undefined })).toBe(false);
  });
});
