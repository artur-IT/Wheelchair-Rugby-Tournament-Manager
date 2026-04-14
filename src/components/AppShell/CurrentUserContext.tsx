import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import type { CurrentUserMe } from "@/lib/auth/meResponse";
import { fetchCurrentUserMe } from "@/lib/api/me";

export type CurrentUserStatus = "loading" | "ready" | "error";

export interface CurrentUserContextValue {
  status: CurrentUserStatus;
  user: CurrentUserMe | null;
  refresh: () => Promise<void>;
}

const CurrentUserContext = createContext<CurrentUserContextValue | null>(null);

export function CurrentUserProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<CurrentUserStatus>("loading");
  const [user, setUser] = useState<CurrentUserMe | null>(null);

  const loadUser = useCallback(async (signal: AbortSignal) => {
    try {
      const nextUser = await fetchCurrentUserMe(signal);
      if (signal.aborted) {
        return;
      }
      setUser(nextUser);
      setStatus("ready");
    } catch {
      if (signal.aborted) {
        return;
      }
      setUser(null);
      setStatus("error");
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    void loadUser(controller.signal);
    return () => controller.abort();
  }, [loadUser]);

  // Re-fetch the user on demand (e.g., after profile edits).
  const refresh = useCallback(async () => {
    const controller = new AbortController();
    try {
      await loadUser(controller.signal);
    } finally {
      controller.abort();
    }
  }, [loadUser]);

  return <CurrentUserContext.Provider value={{ status, user, refresh }}>{children}</CurrentUserContext.Provider>;
}

export function useCurrentUser(): CurrentUserContextValue {
  const value = useContext(CurrentUserContext);
  if (!value) {
    throw new Error("useCurrentUser must be used within CurrentUserProvider");
  }
  return value;
}
