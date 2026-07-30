import { useCallback, useEffect, useState } from "react";
import { emptyProfile, loadProfile, saveProfile, type AhaarProfile } from "@/lib/profile";

/**
 * Client-side profile store. Swap loadProfile/saveProfile for API calls later.
 */
export function useAhaarProfile() {
  const [profile, setProfileState] = useState<AhaarProfile>(emptyProfile);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = loadProfile();
    if (stored) setProfileState(stored);
    setHydrated(true);
  }, []);

  const update = useCallback((patch: Partial<AhaarProfile>) => {
    setProfileState((prev) => {
      const next = { ...prev, ...patch };
      saveProfile(next);
      return next;
    });
  }, []);

  return { profile, update, hydrated };
}
