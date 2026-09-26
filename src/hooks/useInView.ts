import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>(threshold = 0.55) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const root = document.getElementById("scroller");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio >= threshold);
      },
      { root, threshold: [0, threshold, 0.85] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
