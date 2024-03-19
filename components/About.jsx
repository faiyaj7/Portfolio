import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import AnimatedNumbers from "./AnimatedNumbers";
import Skills from "./Skills";
import Education from "./Education";
import PageTransition from "./PageTransition";

const About = () => {
  return (
    <>
      <PageTransition />
      <div className="flex w-full flex-col items-center justify-center pt-16 px-4 mb-10">
        <AnimatedText
          title="Passion Fuels Purpose! "
          classname="mb-16 dark:text-white lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
          {/* About */}
          <div className="col-span-3 flex flex-col items-start justify-start  md:order-2 md:col-span-8">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-white">
              BioGraphy
            </h2>
            <p className="font-medium">
              I&apos;m Faiyaj Bin Ahmed, a seasoned web developer proficient in
              MERN stack and Next.js. My journey in the realm of web development
              has been characterized by a relentless pursuit of creating not
              only visually stunning interfaces but also highly functional and
              user-centric digital experiences.
            </p>
            <p className="font-medium  my-4">
              I am deeply passionate about transforming my clients visions into
              reality, consistently seeking innovative approaches to elevate the
              digital landscape. For me, design transcends mere aesthetics&#59; it&apos;s
              a dynamic process of problem-solving, aimed at crafting intuitive
              and enjoyable experiences for users. With a diverse portfolio of
              successful projects, I bring a wealth of experience to the table.
            </p>
            <p className="font-medium  my-4">
              {" "}
              My commitment goes beyond just writing code&#59; it&apos;s about weaving
              together technology and creativity to deliver solutions that
              resonate with both clients and end-users alike. Let&apos;s collaborate
              and bring your digital aspirations to life through a seamless
              fusion of design and functionality.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it&apos;s about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
          </div>
          {/* Image */}
          <div
            className=" col-span-3 relative h-max rounded-2xl 
    border-2 border-solid border-dark bg-light p-8 md:order-1 md:col-span-8"
          >
            <div className="absolute top-0 -right-3 -z-10 w-full h-fullx rounded-[2rem] bg-dark" />{" "}
            <Image
              src="/images/profile/developer-pic-2.jpg"
              alt="profile"
              width={400}
              height={400}
              className="w-full h-auto rounded-2xl"
              priority
            />
          </div>
          {/* Information regarding clients , project and experince */}
          <div className="col-span-2 flex flex-col items-end  justify-between xl:col-span-8 xl:flex-row md:order-3">
            <div className="flex flex-col items-end justify-center xl:items-center ">
              <span className=" text-7xl md:text-6xl sm:text-5xl xs:text-4xl font-bold">
                <AnimatedNumbers value={"5"} />+
              </span>

              <h2 className="text-xl md:text-xs font-medium capitalize text-dark/75 dark:text-white">
                Satisfied Clients
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className=" text-7xl md:text-6xl sm:text-5xl xs:text-4xl  font-bold">
                {" "}
                <AnimatedNumbers value={"10"} />+
              </span>
              <h2 className="text-xl md:text-xs font-medium capitalize text-dark/75 dark:text-white">
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-end justify-center xl:items-center">
              <span className=" text-7xl md:text-6xl sm:text-5xl xs:text-4xl  font-bold">
                {" "}
                <AnimatedNumbers value={"1 "} />+
              </span>
              <h2 className="text-xl md:text-xs font-medium capitalize text-dark/75 dark:text-white">
                Experience
              </h2>
            </div>
          </div>
        </div>
        <Skills />
        <Education />
      </div>
    </>
  );
};

export default About;
