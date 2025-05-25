import { RefObject, useEffect, useMemo, useState } from "react";

export const useIsVisible = (
  ref: RefObject<Element | null>,
  enabled: boolean = true,
) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const [outCorner, setOutCorner] = useState<
    "top" | "bottom" | "left" | "right" | null
  >(null);

  const observer = useMemo(() => {
    return new IntersectionObserver(
      ([entry]) => {
        const halfOfRectY =
          entry.boundingClientRect.top + entry.boundingClientRect.height / 2;

        if (entry.boundingClientRect.height < window.innerHeight) {
          if (halfOfRectY > window.innerHeight) {
            setOutCorner("bottom");
          } else if (entry.boundingClientRect.top < 0) {
            setOutCorner("top");
          }
        } else {
          setOutCorner(null);
        }

        setIntersecting(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );
  }, []);

  useEffect(() => {
    if (!ref.current || !enabled) {
      observer.disconnect();
      return;
    }

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [enabled]);

  return {
    isIntersecting,
    outCorner,
    track: (node: Element) => {
      if (node === null) {
        return;
      }
      observer.observe(node);
    },
  };
};
