"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
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
  const { ref } = useSectionInView("Skills", 0.75);
  return (
    <section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      ref={ref}
      id="skills"
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            // viewport={{ once: true }}
            key={index}
            custom={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 flex items-center justify-between flex-col gap-2 dark:bg-white/10 dark:text-white/80"
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
    </section>
  );
};

export default Skills;
