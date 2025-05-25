import { RefObject, useCallback, useEffect } from "react";

export const useOutsideClick = (
  ref: RefObject<Element | null>,
  callback: (event: MouseEvent) => void = () => {},
  enabled: boolean = true,
) => {
  const handleClick = useCallback((event: MouseEvent) => {
    if (!ref.current || ref.current?.contains(event.target as Node)) {
      return;
    }

    callback(event);
  }, []);

  useEffect(() => {
    if (!enabled || !ref.current) {
      document.removeEventListener("click", handleClick, true);
      return;
    }

    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, [enabled]);
};
