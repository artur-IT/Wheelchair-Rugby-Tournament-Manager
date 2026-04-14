import type { AstroCookies } from "astro";

const maxAgeSeconds = 60 * 60 * 24 * 7;

export function setAuthSessionCookies(
  cookies: AstroCookies,
  params: { userId: string; role: string; requestUrl: URL }
): void {
  const isSecure = params.requestUrl.protocol === "https:" || import.meta.env.PROD;
  const base = {
    path: "/" as const,
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isSecure,
    maxAge: maxAgeSeconds,
  };
  cookies.set("session", "ok", base);
  cookies.set("sessionUserId", params.userId, base);
  cookies.set("sessionUserRole", params.role, base);
}

export function clearOAuthPkcCookies(cookies: AstroCookies, requestUrl: URL): void {
  const isSecure = requestUrl.protocol === "https:" || import.meta.env.PROD;
  const opts = { path: "/", httpOnly: true, sameSite: "lax" as const, secure: isSecure };
  cookies.delete("google_oauth_state", opts);
  cookies.delete("google_oauth_verifier", opts);
}
