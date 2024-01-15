"use client";
import React from "react";
import { motion } from "framer-motion";
const PageTransition = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-50 bg-primary"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
      />
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
      />
    </>
  );
};

export default PageTransition;
