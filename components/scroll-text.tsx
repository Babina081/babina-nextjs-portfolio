"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ScrollText = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);
  return (
    <section className="mt-14 pb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] flex items-center justify-center  mb-28 overflow-hidden z-20 h-screen  mx-auto">
      <div className="container-scroll relative max-w-5xl mx-0 my-auto ">
        <h1 className=" reveal flex items-center justify-center text-center gap-4 flex-col">
          <span className=" mb-10 flex justify-between w-full mx-auto ">
            <span
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <FaQuoteLeft className=" text-left h-14 w-14 font-bold" />
            </span>
            <span
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <FaQuoteRight className=" text-right h-14 w-14 font-bold" />
            </span>
          </span>
          <span
            className="textLight textDark font-extrabold text-3xl md:text-5xl "
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Crafting Tomorrow&apos;s Code, Today.
          </span>
          <span
            className="textLight textDark font-extrabold text-3xl md:text-5xl "
            data-aos="zoom-in-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            Transforming Ideas into Digital Masterpieces.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ScrollText;
