import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./Icons";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="mt-20 w-full flex md:flex-col items-center justify-between 
    rounded-3xl border-solid border-dark bg-light shadow-2xl"
    >
      <Link
        href={link}
        target="_blank"
        className="w-1/2 md:w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          width={800}
          height={800}
        />
      </Link>
      <div className="w-1/2 md:w-full flex flex-col items-start justify-between pl-6 md:mt-5">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-black">
            {title}
          </h2>
        </Link>
        <p className="my-2 text-dark font-medium">{summary}</p>
        <div className="mt-2 flex items-center mb-10">
          <Link href={github} className="w-10 dark:text-black">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
