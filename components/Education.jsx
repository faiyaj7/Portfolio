"use client";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
const Details = ({ institute, degree, passingYear, extraInfo }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] mx-auto flex flex-col items-center 
      justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4, type: "spring" }}
        viewport={{ once: false }}
        className="w-full"
      >
        <h3 className="capitalize font-bold text-lg text-dark dark:text-white sm:text-xl xs:text-lg">
          {degree}
        </h3>
        <p className="inline font-light text-sm w-full">{passingYear}</p>{" "}
        <span>| </span>
        <h2 className="inline font-light text-sm">{institute}</h2>
        <h4 className="font-medium w-full">{extraInfo}</h4>
      </motion.div>
    </li>
  );
};
const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark  origin-top
          dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            institute={"Brac University"}
            degree={"Bachelors of Science in Computer Science"}
            passingYear={"2019-2023"}
            extraInfo={
              "Related courses included Artificial Intelligence , Natural Langugae Processing , Web Developement"
            }
          />{" "}
          <Details
            institute={"Chittagong Cantonment Public School & College"}
            degree={"Higher Secondary"}
            passingYear={"2016-2017"}
          />{" "}
          <Details
            institute={"Radiant School"}
            degree={"Secondary"}
            passingYear={"2015-2016"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
