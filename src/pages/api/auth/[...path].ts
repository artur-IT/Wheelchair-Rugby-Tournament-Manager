import type { APIRoute } from "astro";
import { handleSuperTokensRequest } from "@/lib/supertokens/handleSuperTokensRequest";

export const prerender = false;

export const ALL: APIRoute = async ({ request }) => handleSuperTokensRequest(request);
