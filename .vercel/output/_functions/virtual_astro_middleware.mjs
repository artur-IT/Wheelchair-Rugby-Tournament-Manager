import { a8 as defineMiddleware, ah as sequence } from './chunks/sequence_C_bNAUSZ.mjs';
import { CollectingResponse } from 'supertokens-node/framework/custom';
import Session from 'supertokens-node/recipe/session';
import { m as mergeCollectingResponseCookies } from './chunks/collectingResponseToWeb_DzS16mEn.mjs';
import { e as ensureSuperTokensInitialized } from './chunks/initSuperTokens_C41LI9IU.mjs';
import { r as requestToPreParsedRequest } from './chunks/requestAdapter_BqTDm4i-.mjs';

const PUBLIC_PATHS = /* @__PURE__ */ new Set(["/", "/login", "/auth/callback", "/auth/reset-password"]);
function isPublicAuthPage(pathname) {
  return pathname === "/auth/reset-password";
}
function isPublicAuthApi(pathname) {
  return pathname.startsWith("/api/auth");
}
function isLikelyAssetPath(pathname) {
  return pathname.startsWith("/_astro/") || pathname.startsWith("/favicon") || pathname.endsWith(".css") || pathname.endsWith(".js") || pathname.endsWith(".map") || pathname.endsWith(".svg") || pathname.endsWith(".png") || pathname.endsWith(".jpg") || pathname.endsWith(".jpeg") || pathname.endsWith(".webp") || pathname.endsWith(".ico");
}
async function readSuperTokensSession(request) {
  ensureSuperTokensInitialized();
  const req = requestToPreParsedRequest(request);
  const collecting = new CollectingResponse();
  try {
    const session = await Session.getSession(req, collecting, { sessionRequired: false });
    return { ok: !!session, collecting };
  } catch {
    return { ok: false, collecting };
  }
}
const onRequest$1 = defineMiddleware(async (context, next) => {
  const { url, redirect, request } = context;
  if (PUBLIC_PATHS.has(url.pathname) || isPublicAuthPage(url.pathname) || isPublicAuthApi(url.pathname) || isLikelyAssetPath(url.pathname)) {
    return next();
  }
  const { ok, collecting } = await readSuperTokensSession(request);
  if (!ok) {
    if (url.pathname.startsWith("/api/")) {
      return new Response(JSON.stringify({ error: "Brak autoryzacji" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
    return redirect("/login");
  }
  const response = await next();
  if (response instanceof Response) {
    return mergeCollectingResponseCookies(response, collecting);
  }
  return response;
});

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
