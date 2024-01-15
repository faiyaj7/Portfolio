import Image from "next/image";
import React from "react";
import AnimatedText from "./AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./Icons";
import HireMe from "./HireMe";
import Skills from "./Skills";
import DarkLightMode from "./DarkLightMode";

const HeroBanner = () => {
  return (
    <div className="flex items-center justify-center w-full lg:flex-col gap-5">
      <div className="w-1/2 md:w-full">
        <Image
          src="/images/profile/developer-pic-1.png"
          width={500}
          height={500}
          alt="Hero Profile"
          className="w-full h-auto md:inline-block md:w-full"
        />
      </div>
      <div className="px-4 w-1/2 flex flex-col items-center self-center gap-4 lg:w-full lg:text-center">
        <AnimatedText
          title="Turning Vision Into Reality With Code And Design."
          classname="!text-6xl dark:text-white xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
        />
        <p className="text-base font-medium  dark:text-white">
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React.js and web development.
        </p>
        <div className="flex items-center justify-start md:justify-center md:gap-4 md:mt-5 mt-2 mb-10 lg:self-center">
          <Link
            download={true}
            href="/dummy.pdf"
            target={"_blank"}
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg 
            font-semibold hover:bg-light hover:text-dark border-2 border-solid 
            border-transparent hover:border-dark dark:bg-white dark:text-dark"
          >
            Resume <LinkArrow className="w-6 ml-1" />
          </Link>
          <Link
            href="mailto:faiyajahmed710@gmail.com"
            target={"_blank"}
            className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
      <HireMe />
      <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
        <Image
          src="\images\svgs\miscellaneous_icons_1.svg"
          width={400}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroBanner;
