import { t as toTitleCase } from './validateInputs_c5edMn88.mjs';

function buildGoogleMapsSearchUrl(parts) {
  const name = parts.name?.trim() ?? "";
  const address = parts.address?.trim() ?? "";
  const chunks = [name, address].filter(Boolean);
  if (chunks.length === 0) {
    return null;
  }
  const query = chunks.join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
function resolveMapsHref(params) {
  const manual = params.mapUrl?.trim();
  if (manual && /^https?:\/\//i.test(manual)) {
    return manual;
  }
  return buildGoogleMapsSearchUrl({ name: params.name, address: params.address });
}
function resolvePlaceMapsHref(place) {
  if (!place) {
    return null;
  }
  return resolveMapsHref(place);
}
function getAddressLines(address) {
  const comma = address.indexOf(",");
  if (comma === -1) {
    return address.trim() ? [address.trim()] : [];
  }
  const street = address.slice(0, comma).trim();
  const cityLine = address.slice(comma + 1).trim();
  return [street, cityLine].filter(Boolean);
}
function formatAddressForDisplay(address, lineJoin = "\n") {
  const raw = (address ?? "").trim();
  if (!raw) {
    return "";
  }
  return getAddressLines(raw).map((line) => toTitleCase(line)).join(lineJoin);
}

export { buildGoogleMapsSearchUrl as b, formatAddressForDisplay as f, resolvePlaceMapsHref as r };
