import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TournamentForm from "./TournamentForm";

describe("TournamentForm", () => {
  it("renders tournament form heading", () => {
    render(<TournamentForm />);

    expect(screen.getByRole("heading", { name: "Nowy / Edytuj Turniej" })).toBeInTheDocument();
  });
});
