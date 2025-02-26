"use client";

import { useEffect, useRef } from 'react';
import p5 from 'p5';

const P5Wrapper = ({ sketch }) => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const canvas = new p5(sketch, sketchRef.current);
    return () => {
      canvas.remove(); // Cleanup on unmount
    };
  }, [sketch]);

  return <div ref={sketchRef} />;
};

export default P5Wrapper;  
