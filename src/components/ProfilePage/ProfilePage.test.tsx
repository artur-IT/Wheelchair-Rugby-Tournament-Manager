import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import ProfilePage from "./ProfilePage";

describe("ProfilePage", () => {
  it("renders user profile data and prefilled form fields", () => {
    render(<ProfilePage />);

    expect(screen.getByRole("heading", { name: "Mój Profil" })).toBeInTheDocument();
    expect(screen.getByText("Administrator Systemu")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Admin")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Systemu")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Zapisz Zmiany" })).toBeInTheDocument();
  });
});
