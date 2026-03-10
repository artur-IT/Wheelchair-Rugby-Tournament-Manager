import { useState, useCallback } from "react";

const STORAGE_KEY = "defaultSeasonId";

/** Returns null if localStorage is unavailable (e.g. Safari private mode) */
function readStorage(): string | null {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function writeStorage(id: string): void {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
    // silently ignore when storage is blocked
  }
}

/** Reads and writes the default season ID to localStorage */
export function useDefaultSeason() {
  const [defaultSeasonId, setDefaultSeasonId] = useState<string | null>(readStorage);

  const saveDefault = useCallback((id: string) => {
    writeStorage(id);
    setDefaultSeasonId(id);
  }, []);

  return { defaultSeasonId, saveDefault };
}
