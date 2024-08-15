"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const skillRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("Home", 0.5);

  // Combine the refs using useEffect
  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(skillRef.current);
    }
  }, [sectionInViewRef]);

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <motion.section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={skillRef}
      id="skills"
      style={{ translateY: translateY }}
    >
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        What Skill I Am Equipped With
      </p>
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center space-x-4 space-y-4 mt-12 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={index}
            custom={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 flex items-center justify-between flex-col gap-2 dark:bg-white/10 dark:text-white/80 "
            style={{ rotate: -20 }}
          >
            <Image
              src={skill.image}
              alt={skill.name}
              quality={95}
              width={50}
              height={50}
              className="bg-transparent"
            ></Image>
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
