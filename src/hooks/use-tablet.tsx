import * as React from "react";
import { useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsTablet() {
  const [isTablet, setIsTablet] = React.useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT + 1}px)`);
    const onChange = () => {
      setIsTablet(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsTablet(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return !!isTablet;
}
