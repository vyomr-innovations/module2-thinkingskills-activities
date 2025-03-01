"use client";

import { useEffect, useRef } from "react";

const P5Wrapper = ({ sketch }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("p5").then((p5) => {
        const canvas = new p5.default(sketch, sketchRef.current);
        return () => {
          canvas.remove(); // Cleanup on unmount
        };
      });
    }
  }, [sketch]);

  return <div ref={sketchRef} />;
};

export default P5Wrapper;
