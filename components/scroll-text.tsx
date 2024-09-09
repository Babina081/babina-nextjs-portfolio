"use client";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";


const ScrollText = () => {

  return (
    <section className="flex items-center justify-center  mb-28 overflow-hidden max-w-5xl z-20 h-screen  mx-auto">
      <div className="container-scroll relative max-w-5xl mx-0 my-auto ">
        <h1 className=" reveal flex items-center justify-center text-center gap-4 flex-col">
          <span className=" mb-10 flex justify-between w-full mx-auto ">
            <FaQuoteLeft className=" text-left h-10 w-10 font-bold" />
            <FaQuoteRight className=" text-right h-10 w-10 font-bold" />
          </span>
          <span className="bg-gradient-to-b from-black to-blue-600 dark:from-white dark:to-blue-300 text-transparent bg-clip-text font-extrabold text-3xl md:text-5xl ">
            Crafting Tomorrow's Code, Today.
          </span>
          <span className="bg-gradient-to-b from-black to-blue-600 dark:from-white dark:to-blue-300 text-transparent bg-clip-text font-extrabold text-3xl md:text-5xl ">
            Transforming Ideas into Digital Masterpieces.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default ScrollText;
