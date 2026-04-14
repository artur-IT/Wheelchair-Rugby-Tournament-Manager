/**
 * Best-effort split of a single stored display name into first / last for profile UI.
 */
export function splitDisplayName(displayName: string): { firstName: string; lastName: string } {
  const trimmed = displayName.trim();
  if (!trimmed) {
    return { firstName: "", lastName: "" };
  }

  const spaceIndex = trimmed.indexOf(" ");
  if (spaceIndex === -1) {
    return { firstName: trimmed, lastName: "" };
  }

  return {
    firstName: trimmed.slice(0, spaceIndex),
    lastName: trimmed.slice(spaceIndex + 1).trim(),
  };
}
