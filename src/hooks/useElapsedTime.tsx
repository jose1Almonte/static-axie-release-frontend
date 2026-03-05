import { useEffect, useState } from "react";

export function useElapsedTime(lastUpdate: Date | null) {
  const [elapsed, setElapsed] = useState<string>("");

  useEffect(() => {
    if (!lastUpdate) return;

    const interval = setInterval(() => {
      const now = new Date();
      const diffMs = now.getTime() - lastUpdate.getTime();
      const diffSec = Math.floor(diffMs / 1000);
      const minutes = Math.floor(diffSec / 60);
      const seconds = diffSec % 60;
      setElapsed(`${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [lastUpdate]);

  return elapsed;
}