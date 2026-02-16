"use client";

import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const ids = [
      "home",
      "services",
      "about",
      "solutions",
      "portfolio",
      "testimonials",
      "contact",
    ];

    const idToPath = (id) => (id === "home" ? "/" : `/${id}`);

    let current = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            const id = entry.target.id;
            const path = idToPath(id);
            if (current !== path) {
              current = path;
              try {
                window.history.replaceState({}, "", path);
              } catch (e) {
                // ignore in non-browser environments
              }
            }
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: [0.45, 0.6] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
