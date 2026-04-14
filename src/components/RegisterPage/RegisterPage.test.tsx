import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import RegisterPage from "./RegisterPage";

describe("RegisterPage", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("sends JSON registration request with nick, email and password", async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({ ok: false, json: async () => ({ error: "test" }) });
    vi.stubGlobal("fetch", fetchMock);

    render(<RegisterPage />);

    await user.type(screen.getByLabelText(/Nick \(login\)/i), "user1");
    await user.type(screen.getByLabelText(/e-mail/i), "user1@example.com");
    await user.type(screen.getByLabelText(/hasło/i), "password12");
    await user.click(screen.getByRole("button", { name: /Załóż konto/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        "/api/register",
        expect.objectContaining({
          method: "POST",
          headers: { "Content-Type": "application/json" },
        })
      );
    });
    const rawBody = fetchMock.mock.calls[0][1] as { body: string };
    const body = JSON.parse(rawBody.body) as { localLogin: string; email: string; password: string };
    expect(body.localLogin).toBe("user1");
    expect(body.email).toBe("user1@example.com");
    expect(body.password).toBe("password12");
  });
});
