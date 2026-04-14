import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import LandingPage from "./LandingPage";

vi.mock("@/lib/navigation/assignLocation", () => ({
  assignLocation: vi.fn(),
}));

import { assignLocation } from "@/lib/navigation/assignLocation";

describe("LandingPage", () => {
  beforeEach(() => {
    vi.mocked(assignLocation).mockClear();
  });

  it("navigates to register with a full document navigation", async () => {
    const user = userEvent.setup();
    render(<LandingPage />);

    await user.click(screen.getByRole("button", { name: "Załóż konto" }));

    expect(assignLocation).toHaveBeenCalledWith("/register");
  });

  it("opens login modal after login button click", async () => {
    const user = userEvent.setup();
    render(<LandingPage />);

    expect(screen.queryByRole("heading", { name: "Logowanie" })).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Zaloguj się" }));

    expect(await screen.findByRole("heading", { name: "Logowanie" })).toBeInTheDocument();
  });
});
