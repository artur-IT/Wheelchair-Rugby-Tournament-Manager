import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TeamDetails from "./TeamDetails";

describe("TeamDetails", () => {
  it("shows not found message for unknown team id", () => {
    render(<TeamDetails id="missing-team-id" />);

    expect(screen.getByText("Nie znaleziono drużyny.")).toBeInTheDocument();
  });

  it("renders selected team details for valid team id", () => {
    render(<TeamDetails id="1" />);

    expect(screen.getByRole("heading", { name: "Warsaw Dragons" })).toBeInTheDocument();
    expect(screen.getByText("ul. Sportowa 1, Warszawa")).toBeInTheDocument();
    expect(screen.getByText("Jan Kowalski")).toBeInTheDocument();
    expect(screen.getByText("Adam Nowak")).toBeInTheDocument();
  });
});
