"use client";
import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      initial={{ x: 0, y: 0 }}
      animate={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      whileInView={{ x: x, y: y }}
      whileHover={{ scale: 1.08 }}
      viewport={{ once: true }}
      className="absolute flex items-center justify-center rounded-full 
      font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer py-3 px-6
      lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent 
      xs:text-dark xs:dark:text-light xs:font-bold
      "
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
      lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg
      md:bg-circularLightMd md:dark:bg-circularDarkMd
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer flex items-center justify-center rounded-full
           font-semibold bg-dark text-light p-8  shadow-dark dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2"
        >
          Web
        </motion.div>
        <Skill name="Html" x="-15vw" y="12vh" />
        <Skill name="CSS" x="15vw" y="8vh" />
        <Skill name="JavaScript" x="0vw" y="-19vh" />
        <Skill name="NextJs" x="15vw" y="-5vh" />
        <Skill name="Tailwind CSS" x="25vw" y="18vh" />
        <Skill name="Redux Toolkit" x="30vw" y="-20vh" />
        <Skill name="Zustand" x="-30vw" y="-15vh" />
        <Skill name="ReactJs" x="-25vw" y="-5vh" />
        <Skill name="Prisma" x="-30vw" y="-25vh" />
        <Skill name="MongoDB" x="-35vw" y="10vh" />
        <Skill name="Mongoose" x="25vw" y="-10vh" />
        <Skill name="GitHub" x="0vw" y="20vh" />
      </div>
    </>
  );
};

export default Skills;
