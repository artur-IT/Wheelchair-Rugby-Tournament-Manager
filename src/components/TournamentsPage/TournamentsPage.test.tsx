import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TournamentsPage from "./TournamentsPage";

describe("TournamentsPage", () => {
  it("renders tournament card details and navigation links", () => {
    render(<TournamentsPage />);

    expect(screen.getByRole("heading", { name: "Turnieje" })).toBeInTheDocument();
    expect(screen.getByText("Turniej Otwarcia Sezonu")).toBeInTheDocument();
    expect(screen.getByText("2024-05-10 - 2024-05-12")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Nowy Turniej" })).toHaveAttribute("href", "/tournaments/new");
    expect(screen.getByRole("link", { name: "Szczegóły" })).toHaveAttribute("href", "/tournaments/t1");
  });
});
