"use client";
import React, { useEffect, useRef } from "react";
import { useSpring, useInView, useMotionValue } from "framer-motion";
const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [value, isInView, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  // here value does not do anything. The main work is done in the second useEffect.
  // textContent is changing every time
  return <span ref={ref}>{value}</span>;
};

export default AnimatedNumbers;
