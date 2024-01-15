import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GithubIcon } from "./Icons";

const SingleProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-3xl border-solid border-dark bg-light shadow-2xl">
      <div className="w-full h-1/2">
        <Link
          href={link}
          target="_blank"
          className="w-full h-full cursor-pointer overflow-hidden rounded-lg px-3"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-[38vmin] object-cover"
            width={800}
            height={800}
          />
        </Link>
      </div>
      <div className="w-full flex flex-col items-start justify-between pl-6 ">
        <span className=" text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 "
        >
          <h2 className="my-2 w-full text-left text-4xl font-extrabold dark:text-black">
            {title}
          </h2>
        </Link>
        <p className="my-2 text-dark/75 text-sm ">{summary}</p>
        <div className="mt-2 flex items-center  mb-10">
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

export default SingleProject;
