"use client";
import React from "react";
import { BiSun } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";
import HydrationAvoid from "./HydrationAvoid";
const DarkLightMode = () => {
  const { theme, setTheme } = useTheme();
  if (theme === "system") {
    setTheme("dark");
  }
  return (
    <HydrationAvoid>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? (
          <BiSun
            size={25}
            className="text-dark dark:text-white md:text-light md:dark:text-dark"
          />
        ) : (
          <MdDarkMode
            size={25}
            className="text-dark dark:text-white md:text-light md:dark:text-dark"
          />
        )}
      </button>
    </HydrationAvoid>
  );
};

export default DarkLightMode;
