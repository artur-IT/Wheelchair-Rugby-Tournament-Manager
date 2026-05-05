import type { APIRoute } from "astro";
import { json } from "@/lib/api";
import { getOptionalGoogleOAuthConfig } from "@/lib/supertokens/env";

export const GET: APIRoute = async () => {
  const googleOAuthConfig = getOptionalGoogleOAuthConfig();
  return json({ enabled: Boolean(googleOAuthConfig) });
};
