import { g as getErrorMessageFromResponse, p as parseFormErrorFromResponse } from './DataLoadAlert_CBRXbjzF.mjs';

async function createSeason(body) {
  const res = await fetch("/api/seasons", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const msg = await parseFormErrorFromResponse(res, "Nie udało się zapisać sezonu");
    throw new Error(msg);
  }
  return res.json();
}
async function updateSeason(id, body) {
  const res = await fetch(`/api/seasons/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const msg = await parseFormErrorFromResponse(res, "Nie udało się zapisać sezonu");
    throw new Error(msg);
  }
  return res.json();
}
async function fetchSeasonsList(signal) {
  const res = await fetch("/api/seasons", { signal });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się pobrać sezonów");
    throw new Error(msg);
  }
  return res.json();
}
async function deleteSeasonById(id) {
  const res = await fetch(`/api/seasons/${id}`, { method: "DELETE" });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się usunąć sezonu");
    throw new Error(msg);
  }
}
async function fetchSeasonById(id, signal) {
  const res = await fetch("/api/seasons", { signal });
  if (!res.ok) {
    const msg = await getErrorMessageFromResponse(res, "Nie udało się pobrać sezonu.");
    throw new Error(msg);
  }
  const seasons = await res.json();
  const season = seasons.find((candidate) => candidate.id === id);
  if (!season) {
    throw new Error("Nie znaleziono zasobu.");
  }
  return season;
}

export { fetchSeasonsList as a, createSeason as c, deleteSeasonById as d, fetchSeasonById as f, updateSeason as u };
