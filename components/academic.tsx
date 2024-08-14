"use client";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import capImage from "@/public/cap.png";

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
    <div id="academic" ref={sectionRef} className="scroll-mt-28 mb-28 ">
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        Lookover My Educational History
      </p>
      <SectionHeading>ACADEMIC CERTIFICATES</SectionHeading>

      <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
        {" "}
        {/* <motion.img
            src={capImage.src}
            alt="cog Image"
            className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
            animate={{ translateY: [-30, 30] }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          ></motion.img> */}
        <motion.img
          src={capImage.src}
          alt="cylinder Image"
          width={220}
          height={220}
          className="hidden md:block -top-8 -left-32 md:absolute"
          style={{ translateY: translateY }}
        ></motion.img>
        <motion.img
          src={capImage.src}
          alt="noodle Image"
          width={220}
          height={220}
          className="hidden lg:block top-[524px] left-[448px] md:absolute rotate-[30deg]"
          style={{ rotate: 30, translateY: translateY }}
        ></motion.img>
      </div>
    </div>
  );
};

export default Academic;
