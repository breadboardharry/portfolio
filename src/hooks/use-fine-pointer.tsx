import * as React from "react";
import { useEffect } from "react";

export function useHasFinePointer() {
  const [hasFinePointer, setHasFinePointer] = React.useState<
    boolean | undefined
  >(undefined);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    setHasFinePointer(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return !!hasFinePointer;
}
