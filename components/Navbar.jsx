"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { AnimatePresence, motion } from "framer-motion";
import DarkLightMode from "./DarkLightMode";
import { CgProfile } from "react-icons/cg";
import { FaHome } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { useRouter } from "next/navigation";
const menuItem = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const CustomLink = ({ link, title, classname = "" }) => {
  const currentUrl = usePathname();

  return (
    <Link href={link} className={`${classname} relative group`}>
      {title}
      <span
        className={`h-[1px]  bg-black dark:bg-white absolute 
        left-0 bottom-0 group-hover:w-full transition-all duration-300 ${
          currentUrl === link ? "w-full" : "w-0"
        }`}
      ></span>
    </Link>
  );
};

const SocialLink = motion(Link);
const MobileCustomLink = ({
  reactIcon,
  link,
  title,
  classname = "",
  toggle,
}) => {
  const router = useRouter();
  const handleUrl = () => {
    toggle();
    router.push(link);
  };
  return (
    <motion.span
      className="flex flex-row items-center justify-center w-full gap-2"
      variants={menuItem}
    >
      {reactIcon}
      <button
        href={link}
        className={`${classname} relative group`}
        onClick={handleUrl}
      >
        {title}
      </button>
    </motion.span>
  );
};
const Navbar = () => {
  const menuContainer = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="w-full p-8 font-medium flex items-center justify-between">
      {/* Mobile Menu */}
      <button
        className="md:flex flex-col justify-center items-center hidden z-40"
        onClick={handleMenuToggle}
      >
        <span
          className={`bg-dark dark:bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? `rotate-45 translate-y-1` : `-translate-y-0.5`
          } ${isOpen && "bg-white dark:bg-dark"}`}
        ></span>
        <span
          className={` my-0.5 bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? `opacity-0` : `opacity-100`
          } ${isOpen && "bg-white dark:bg-dark"}`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
          } ${isOpen && "bg-white dark:bg-dark"}`}
        ></span>
      </button>

      {/* Large Screen */}
      <div className="md:hidden w-full flex justify-between items-center">
        <nav className="flex gap-4">
          <CustomLink link="/" title="Home" />
          <CustomLink link="/about" title="About" />
          <CustomLink link="/projects" title="Project" />
        </nav>
        <nav className="flex items-center justify-center flex-wrap gap-4">
          <SocialLink
            href="https://twitter.com"
            target={"_blank"}
            className="w-6 "
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <TwitterIcon />
          </SocialLink>
          <SocialLink
            href="https://github.com/faiyaj7"
            target={"_blank"}
            className="w-6 "
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/faiyaj-bin-ahmed-16b5a8200/"
            target={"_blank"}
            className="w-6 "
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </SocialLink>

          <DarkLightMode />
        </nav>{" "}
      </div>

      {/* Mobile Screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="hidden w-full md:flex flex-col justify-around items-center fixed top-0 left-0 bottom-0 right-0
         bg-dark/90 dark:bg-light/75 h-screen backdrop-blur-md py-32 z-30 overflow-hidden"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
          >
            <motion.nav
              className="flex flex-col items-center w-full  gap-4"
              variants={menuContainer}
              initial="hidden"
              animate="visible"
            >
              <MobileCustomLink
                link="/"
                title="Home"
                classname="dark:text-black dark:font-bold text-white font-bold"
                reactIcon={<FaHome className="dark:text-black text-white" />}
                toggle={handleMenuToggle}
              />
              <MobileCustomLink
                link="/about"
                title="About"
                classname="dark:text-black dark:font-bold text-white font-bold "
                reactIcon={
                  <CgProfile className="dark:text-black text-white " />
                }
                toggle={handleMenuToggle}
              />
              <MobileCustomLink
                link="/projects"
                title="Project"
                classname="dark:text-black dark:font-bold text-white font-bold"
                reactIcon={
                  <GoProjectRoadmap className="dark:text-black text-white" />
                }
                toggle={handleMenuToggle}
              />
            </motion.nav>
            <motion.nav
              className="flex items-center justify-center flex-wrap gap-6"
              variants={menuContainer}
              initial="hidden"
              animate="visible"
            >
              <SocialLink
                href="https://twitter.com"
                target={"_blank"}
                className="w-6 "
                transition={{ duration: 0.3 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                variants={menuItem}
              >
                <TwitterIcon />
              </SocialLink>
              <SocialLink
                href="https://github.com/faiyaj7"
                target={"_blank"}
                className="w-6 "
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                variants={menuItem}
              >
                <GithubIcon className={"text-light dark:text-dark"} />
              </SocialLink>
              <SocialLink
                href="/projects"
                target={"_blank"}
                className="w-6 "
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                variants={menuItem}
              >
                <LinkedInIcon />
              </SocialLink>
              <motion.div
                variants={menuItem}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <DarkLightMode />
              </motion.div>
            </motion.nav>{" "}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute left-[50%]  top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
