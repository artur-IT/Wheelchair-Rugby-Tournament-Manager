import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = "defaultSeasonId";
function readStorage() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}
function writeStorage(id) {
  try {
    localStorage.setItem(STORAGE_KEY, id);
  } catch {
  }
}
function useDefaultSeason() {
  const [defaultSeasonId, setDefaultSeasonId] = useState(null);
  useEffect(() => {
    setDefaultSeasonId(readStorage());
  }, []);
  const saveDefault = useCallback((id) => {
    writeStorage(id);
    setDefaultSeasonId(id);
  }, []);
  return { defaultSeasonId, saveDefault };
}

export { useDefaultSeason as u };
