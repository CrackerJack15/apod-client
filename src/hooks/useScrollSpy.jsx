import { useState, useLayoutEffect } from "react";

function useScrollSpy(ids, offset = 0) {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);
          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
}

const clamp = (max) => Math.max(0, max);

const isBetween = (number, floor, ceil) => floor >= number && number <= ceil;

export default useScrollSpy;
