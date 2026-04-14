import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { CurrentUserMe } from "@/lib/auth/meResponse";
import { fetchCurrentUserMe } from "@/lib/api/me";

export type CurrentUserStatus = "loading" | "ready" | "error";

export interface CurrentUserContextValue {
  status: CurrentUserStatus;
  user: CurrentUserMe | null;
}

const CurrentUserContext = createContext<CurrentUserContextValue | null>(null);

export function CurrentUserProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<CurrentUserStatus>("loading");
  const [user, setUser] = useState<CurrentUserMe | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    void (async () => {
      try {
        const nextUser = await fetchCurrentUserMe(controller.signal);
        if (controller.signal.aborted) {
          return;
        }
        setUser(nextUser);
        setStatus("ready");
      } catch {
        if (controller.signal.aborted) {
          return;
        }
        setUser(null);
        setStatus("error");
      }
    })();
    return () => controller.abort();
  }, []);

  return <CurrentUserContext.Provider value={{ status, user }}>{children}</CurrentUserContext.Provider>;
}

export function useCurrentUser(): CurrentUserContextValue {
  const value = useContext(CurrentUserContext);
  if (!value) {
    throw new Error("useCurrentUser must be used within CurrentUserProvider");
  }
  return value;
}
