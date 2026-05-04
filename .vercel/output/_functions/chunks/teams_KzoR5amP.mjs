import { g as getErrorMessageFromResponse, j as parseApiFieldErrors, k as parseApiErrorBody, m as httpStatusFallbackMessage, h as ApiValidationError } from './DataLoadAlert_DbJvhLOL.mjs';

async function fetchPersonnelBySeason(apiEndpoint, seasonId, loadErrorFallback, signal) {
  const res = await fetch(`${apiEndpoint}?seasonId=${encodeURIComponent(seasonId)}`, { signal });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, loadErrorFallback);
    throw new Error(msg);
  }
  return res.json();
}
async function createPersonnel(apiEndpoint, payload) {
  const res = await fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const raw = await res.json().catch(() => null);
    const fieldErrors = parseApiFieldErrors(raw) ?? void 0;
    const message = parseApiErrorBody(raw) ?? httpStatusFallbackMessage(res) ?? "Nie udało się zapisać osoby";
    if (fieldErrors) throw new ApiValidationError(message, fieldErrors);
    throw new Error(message);
  }
  return res.json();
}
async function updatePersonnel(apiEndpoint, id, payload) {
  const res = await fetch(`${apiEndpoint}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się zaktualizować osoby");
    throw new Error(msg);
  }
  return res.json();
}
async function deletePersonnel(apiEndpoint, id) {
  const res = await fetch(`${apiEndpoint}/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się usunąć osoby");
    throw new Error(msg);
  }
}

async function fetchTeamsBySeason(seasonId, signal) {
  const res = await fetch(`/api/teams?seasonId=${encodeURIComponent(seasonId)}`, { signal });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się pobrać drużyn");
    throw new Error(msg);
  }
  return res.json();
}
async function fetchTeamById(id, signal) {
  const res = await fetch(`/api/teams/${id}`, { signal });
  if (res.status === 404) return null;
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się pobrać drużyny");
    throw new Error(msg);
  }
  return res.json();
}
async function deleteTeamById(id) {
  const res = await fetch(`/api/teams/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się usunąć drużyny");
    throw new Error(msg);
  }
}
async function updateTeamById(id, body) {
  const res = await fetch(`/api/teams/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się zaktualizować drużyny");
    throw new Error(msg);
  }
  return res.json();
}
async function createTeam(body) {
  const res = await fetch("/api/teams", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się zapisać drużyny");
    throw new Error(msg);
  }
  return res.json();
}

export { updatePersonnel as a, createPersonnel as b, createTeam as c, fetchTeamById as d, deleteTeamById as e, fetchPersonnelBySeason as f, deletePersonnel as g, fetchTeamsBySeason as h, updateTeamById as u };
