"use client";
import { useEffect, useRef } from "react";

export default function GoogleReviewsWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent double-injection during React Strict Mode in development
    if (containerRef.current && !containerRef.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src = "https://cdn.trustindex.io/loader.js?ed8c13765fc938084c360502dc4";
      script.async = true;
      script.defer = true;

      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div ref={containerRef} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700 min-h-[150px]">
      {/* The Trustindex script and its widget will be injected right here */}
    </div>
  );
}
