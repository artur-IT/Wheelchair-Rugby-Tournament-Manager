import { middleware, CollectingResponse } from 'supertokens-node/framework/custom';
import { c as collectingResponseToResponse } from './collectingResponseToWeb_DzS16mEn.mjs';
import { e as ensureSuperTokensInitialized } from './initSuperTokens_C41LI9IU.mjs';
import { r as requestToPreParsedRequest } from './requestAdapter_BqTDm4i-.mjs';

function logSuperTokensFailure(context, err) {
  if (err instanceof Error) {
    console.error(`[SuperTokens] ${context}: ${err.message}`);
    if (err.stack) {
      console.error(err.stack);
    }
  } else {
    console.error(`[SuperTokens] ${context}:`, err);
  }
}
async function handleSuperTokensRequest(request) {
  try {
    ensureSuperTokensInitialized();
  } catch (err) {
    logSuperTokensFailure("init failed (check env: SUPERTOKENS_*, GOOGLE_*, DATABASE)", err);
    return new Response("Authentication service error", { status: 500 });
  }
  const stMiddleware = middleware();
  const req = requestToPreParsedRequest(request);
  const res = new CollectingResponse();
  try {
    const result = await stMiddleware(req, res);
    if ("error" in result && result.error) {
      logSuperTokensFailure(`middleware error for ${new URL(request.url).pathname}`, result.error);
      return new Response("Authentication service error", { status: 500 });
    }
    if (!result.handled) {
      return new Response("Not found", { status: 404 });
    }
    return collectingResponseToResponse(res);
  } catch (err) {
    logSuperTokensFailure(`unhandled exception for ${new URL(request.url).pathname}`, err);
    return new Response("Authentication service error", { status: 500 });
  }
}

const prerender = false;
const ALL = async ({ request, url }) => {
  if (request.method === "GET" && url.pathname === "/api/auth/callback/google") {
    const target = new URL(`/auth/callback${url.search}`, url.origin);
    return Response.redirect(target.toString(), 302);
  }
  return handleSuperTokensRequest(request);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
