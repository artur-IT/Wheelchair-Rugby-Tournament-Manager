import { MeResponseSchema } from "@/lib/auth/meResponse";
import { getErrorMessageFromResponse } from "@/lib/apiHttp";

/** Loads the logged-in user from the session cookie; null if not authenticated. */
export async function fetchCurrentUserMe(signal?: AbortSignal) {
  const res = await fetch("/api/me", { signal, credentials: "same-origin" });
  if (res.status === 401) {
    return null;
  }

  if (!res.ok) {
    const message = await getErrorMessageFromResponse(res, "Nie udało się załadować danych użytkownika.");
    throw new Error(message);
  }

  const raw: unknown = await res.json();
  const parsed = MeResponseSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error("Nieprawidłowa odpowiedź serwera.");
  }

  return parsed.data.user;
}
