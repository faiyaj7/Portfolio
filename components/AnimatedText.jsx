"use client";
import React from "react";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const singleItem = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 2 },
  },
};
const AnimatedText = ({ title, classname = "" }) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-center ">
      <motion.h1
        className={`${classname} w-full text-dark font-bold text-8xl`}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {title.split("").map((word, index) => (
          <motion.span key={index} variants={singleItem}>
            {word}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
