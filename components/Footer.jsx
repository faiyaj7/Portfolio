import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="sm:text-base  w-full border-t-2 border-solid border-dark font-medium text-lg px-4">
      <div className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex items-center">
          Build with <span className="text-primary text-2xl px-1">&#9825;</span>
          by &nbsp;
          <Link href={"/"} className="underline underline-offset-2">
            Faiyaj Bin Ahmed{" "}
          </Link>
        </div>
        <Link href={"/"}>Say Hello</Link>
      </div>
    </footer>
  );
};

export default Footer;
