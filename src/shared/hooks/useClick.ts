import { useEffect, useRef } from "react";

export const useClick = <T extends HTMLElement>(
  onClick: (this: T, ev?: MouseEvent) => any
) => {
  const element = useRef<T>(null);
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("click", onClick);
      return () => {
        element.current.removeEventListener("click", onClick);
      };
    }
  });
  return element;
};
