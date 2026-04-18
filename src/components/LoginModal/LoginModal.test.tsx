import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const signInMock = vi.fn();
const signUpMock = vi.fn();
const getAuthUrlMock = vi.fn();

vi.mock("supertokens-web-js/recipe/emailpassword", () => ({
  signIn: (...args: unknown[]) => signInMock(...args),
  signUp: (...args: unknown[]) => signUpMock(...args),
}));

vi.mock("supertokens-web-js/recipe/thirdparty", () => ({
  getAuthorisationURLWithQueryParamsAndSetState: (...args: unknown[]) => getAuthUrlMock(...args),
}));

vi.mock("@/lib/supertokens/initFrontend", () => ({
  ensureSuperTokensFrontendInitialized: vi.fn(),
}));

import LoginModal from "./LoginModal";

describe("LoginModal", () => {
  beforeEach(() => {
    signInMock.mockReset();
    signUpMock.mockReset();
    getAuthUrlMock.mockReset();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders login form when open", () => {
    render(<LoginModal open onClose={vi.fn()} onLoginSuccess={vi.fn()} />);

    expect(screen.getByRole("heading", { name: "Logowanie" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Zaloguj" })).toBeInTheDocument();
  });

  it("shows error alert when signIn fails", async () => {
    const user = userEvent.setup();
    signInMock.mockResolvedValue({ status: "WRONG_CREDENTIALS_ERROR" });

    render(<LoginModal open onClose={vi.fn()} />);

    await user.type(screen.getByLabelText(/Email/i), "admin@example.com");
    await user.type(screen.getByLabelText(/Hasło/i), "wrong-password");
    await user.click(screen.getByRole("button", { name: "Zaloguj" }));

    expect(await screen.findByText("Błędny email lub hasło. Spróbuj ponownie.")).toBeInTheDocument();
  });

  it("disables submit button while login request is pending", async () => {
    const user = userEvent.setup();
    let resolveSignIn: ((v: { status: string }) => void) | undefined;
    signInMock.mockImplementation(
      () =>
        new Promise((resolve) => {
          resolveSignIn = resolve;
        })
    );

    render(<LoginModal open onClose={vi.fn()} />);

    await user.type(screen.getByLabelText(/Email/i), "admin@example.com");
    await user.type(screen.getByLabelText(/Hasło/i), "demo-password");
    await user.click(screen.getByRole("button", { name: "Zaloguj" }));

    expect(screen.getByRole("button", { name: "Przetwarzanie…" })).toBeDisabled();
    resolveSignIn?.({ status: "OK" });
    await screen.findByRole("button", { name: "Zaloguj" });
  });

  it("submits signIn and calls onLoginSuccess", async () => {
    const user = userEvent.setup();
    signInMock.mockResolvedValue({ status: "OK" });
    const onLoginSuccess = vi.fn();

    render(<LoginModal open onClose={vi.fn()} onLoginSuccess={onLoginSuccess} />);

    await user.type(screen.getByLabelText(/Email/i), "admin@example.com");
    await user.type(screen.getByLabelText(/Hasło/i), "demo-password");
    await user.click(screen.getByRole("button", { name: "Zaloguj" }));

    expect(signInMock).toHaveBeenCalled();
    expect(onLoginSuccess).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("Błędny email lub hasło. Spróbuj ponownie.")).not.toBeInTheDocument();
  });
});
