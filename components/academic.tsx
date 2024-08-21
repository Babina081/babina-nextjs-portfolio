"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import capImage from "@/public/cap.png";
import { academicData } from "@/lib/data";
import udemyCertificate from "@/public/udemy-certificate.jpg";
import Image from "next/image";

const Academic = () => {
  // const { ref } = useSectionInView("Academic", 0.75);

  const sectionRef = useRef(null);
  // Use your custom hook useSectionInView with the ref
  const { ref: sectionInViewRef } = useSectionInView("Academic", 0.75);

  // Combine the refs using useEffect
  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(sectionRef.current);
    }
  }, [sectionInViewRef]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <div ref={sectionRef} className="scroll-mt-28 mb-40 " id="academic">
      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative group">
        <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
          Lookover My Educational History
        </p>
        <SectionHeading>ACADEMIC CERTIFICATES</SectionHeading>
        <div className="flex flex-col gap-10">
          {academicData.map(
            ({ date, college, degree, location, affiliated }) => (
              <div className="flex flex-col gap-0 sm:gap-10" key={college}>
                <div className="paper">
                  <div className="pin">
                    <div className="shadow"></div>
                    <div className="metal"></div>
                    <div className="bottom-circle"></div>
                  </div>
                  <div className="flex  text-gray-700 flex-row-reverse gap-10 items-start p-10 justify-between">
                    <span className="text-sm bg-gradient-to-b from-black to-blue-700 text-transparent bg-clip-text w-32">
                      {date}
                    </span>
                    <div className="flex flex-col items-start justify-start w-full">
                      <h1 className="text-sm font-semibold sm:font-bold">
                        {college}
                      </h1>
                      <h3 className="text-xs font-medium sm:font-semibold italic">
                        {affiliated}
                      </h3>
                      <p className="text-sm font-bold underline text-left">
                        {location}
                      </p>
                      <h2 className="font-medium p-1 text-red-700 drop-shadow-md text-sm">
                        {degree}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <motion.img
          src={capImage.src}
          alt="cylinder Image"
          width={220}
          height={220}
          className="hidden md:block -top-16 -left-32 md:absolute -z-10 drop-shadow-md"
          style={{ translateY: translateY }}
        ></motion.img>

        <motion.img
          src={capImage.src}
          alt="noodle Image"
          width={220}
          height={220}
          className="hidden lg:block top-[600px] left-[448px] md:absolute rotate-[30deg]"
          style={{ rotate: 30, translateY: translateY }}
        ></motion.img>
        {/* <div>
        <Image src={udemyCertificate} alt="udemy certificate" className=""></Image>
      </div> */}
      </div>
    </div>
  );
};

export default Academic;
