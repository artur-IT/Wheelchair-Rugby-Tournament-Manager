import { j as json } from './api_BSHquwC3.mjs';
import { getSessionPrismaUser } from './sessionFromRequest_3u4HQXzv.mjs';

async function getSessionUserOr401(request) {
  const user = await getSessionPrismaUser(request);
  if (!user) {
    return { ok: false, response: json({ error: "Brak aktywnej sesji użytkownika" }, 401) };
  }
  return { ok: true, user };
}

export { getSessionUserOr401 as g };
