import React from "react";
import AnimatedText from "./AnimatedText";
import FeaturedProject from "./FeaturedProject";

import PageTransition from "./PageTransition";
import SingleProject from "./SingleProject";

const Projects = () => {
  return (
    <>
      <PageTransition />{" "}
      <section className="px-4">
        <AnimatedText
          title="Imagination Trumps Knowledge!"
          classname=" dark:text-white lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
        />
        <div className="grid grid-cols-12 md:grid-cols-4 gap-24 mb-10">
          <div className="col-span-12 md:col-span-4 ">
            <FeaturedProject
              type="Featured Project"
              title="Fudo"
              summary="This Next.js pizza delivery site leverages Sanity database for product info, integrates Zustand for efficient state management, Stripe for online payments, and Framer Motion for dynamic animations, all within a responsive, Tailwind-styled interface, supporting light/dark modes seamlessly."
              link="https://fudo-sepia.vercel.app/"
              github="https://github.com/faiyaj7/Fudo"
              img="/featuredProject.png"
            />
          </div>
          <div className="col-span-6 md:col-span-4">
            <SingleProject
              type=" Project"
              title="Celestia"
              summary="Celestia's Next.js-powered skincare hub merges artful design with Stripe transactions, Redux Toolkit state management, and Tailwind CSS responsiveness, reshaping beauty in the digital realm.
        "
              link="https://github.com/faiyaj7/Celestia"
              github="https://github.com/faiyaj7/Celestia"
              img="/celestia.png"
            />
          </div>
          <div className="col-span-6 md:col-span-4">
            <SingleProject
              type=" Project"
              title="Kinbo"
              summary="
        Kinbo, an online headphone marketplace on Next.js, utilizes Sanity for product data, Stripe for payments, and Zustand for streamlined state handling, boasting Tailwind CSS for responsive design across devices."
              link="https://kinbo-ecommerce.vercel.app/"
              github="https://github.com/faiyaj7/Kinbo"
              img="/kinbo.png"
            />
          </div>
          <div className="col-span-6 md:col-span-4">
            <SingleProject
              type=" Project"
              title="BhromomKori"
              summary="This is a website that demonstrates a pizza delivery website using Next Js . The website loads the product information from the sanity database . Users can select those products and can choose the pizza size and make an order. Moreover ,the order are taken both on Delivery and by Stripe Online Payment system. To work around the state management ,Zustand is used for its lightweight ,less Boiler plate and easy integrations. Furthermore, Framer Motion is used to bring live to the website by animation. All in all ,this website is a responsive website for small to large devices , can switch between light and black mode and in the whole project Tailwind is used for the website styling."
              link="https://github.com/faiyaj7/Travel-App"
              github="https://github.com/faiyaj7/Travel-App"
              img="/kinbo.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
