import { serialize } from 'cookie';

function appendSetCookieHeaders(target, collecting) {
  for (const c of collecting.cookies) {
    const opts = {
      path: c.path,
      httpOnly: c.httpOnly,
      secure: c.secure,
      sameSite: c.sameSite
    };
    if (c.domain) opts.domain = c.domain;
    if (c.expires > 0) opts.expires = new Date(c.expires);
    target.append("Set-Cookie", serialize(c.key, c.value, opts));
  }
}
function mergeCollectingResponseCookies(base, collecting) {
  const headers = new Headers(base.headers);
  appendSetCookieHeaders(headers, collecting);
  return new Response(base.body, { status: base.status, statusText: base.statusText, headers });
}
function collectingResponseToResponse(collecting) {
  const headers = new Headers();
  collecting.headers.forEach((value, key) => {
    headers.append(key, value);
  });
  appendSetCookieHeaders(headers, collecting);
  const body = collecting.body ?? null;
  return new Response(body, { status: collecting.statusCode, headers });
}

export { collectingResponseToResponse as c, mergeCollectingResponseCookies as m };
