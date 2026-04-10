import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import QueryProvider from "@/components/QueryProvider/QueryProvider";
import type { ClubPlayerDto } from "@/features/club/components/ClubPage/types";

import ClubPlayersPersonnelSection from "./ClubPlayersPersonnelSection";

function renderWithQuery(ui: ReactNode) {
  return render(<QueryProvider>{ui}</QueryProvider>);
}

const samplePlayer: ClubPlayerDto = {
  id: "p1",
  firstName: "Jan",
  lastName: "Kowalski",
  classification: 1.0,
  number: 7,
  status: "ACTIVE",
  birthDate: "2010-03-15T00:00:00.000Z",
  contactEmail: "jan@example.com",
  contactPhone: "123456789",
  contactAddress: "Sportowa 1",
  contactPostalCode: "80-001",
  contactCity: "Gdańsk",
  contactMapUrl: "https://www.openstreetmap.org/search?query=test",
};

describe("ClubPlayersPersonnelSection", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("shows birth date, full address, and map as short link text", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-06-01T12:00:00.000Z"));

    renderWithQuery(
      <ClubPlayersPersonnelSection
        clubId="c1"
        players={[samplePlayer]}
        isLoading={false}
        loadError={null}
        onRetry={() => {}}
      />
    );

    expect(screen.getByRole("heading", { level: 3, name: "Jan Kowalski" })).toBeInTheDocument();
    expect(screen.getByText("2010-03-15 (16 lat)")).toBeInTheDocument();
    expect(screen.getByText("Sportowa 1, 80-001 Gdańsk")).toBeInTheDocument();

    const mapLink = screen.getByRole("link", { name: "Mapa" });
    expect(mapLink).toHaveAttribute("href", samplePlayer.contactMapUrl);
    expect(mapLink).toHaveAttribute("target", "_blank");
    expect(mapLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
