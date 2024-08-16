"use client";
import React, { useCallback, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 ">
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        Works Recently Accomplished By Me
      </p>
      <SectionHeading>My Projects</SectionHeading>

      {projectsData.map((project, index) => {
        // const projectRef = useRef(null);
        // // const { ref: sectionInViewRef } = useSectionInView("Projects", 0.25);
        // const { ref: sectionInViewRef } = useSectionInView(
        //   "Projects",
        //   0.25,
        //   index
        // );
        // useEffect(() => {
        //   if (sectionInViewRef) {
        //     sectionInViewRef(projectRef.current);
        //   }
        // }, [sectionInViewRef]);
        // const { scrollYProgress } = useScroll({
        //   target: projectRef,
        //   offset: ["0 1", "1.33 1"],
        // });
        // const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
        // const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

        return (
          <div
            className="group mb-3 sm:mb-8 last:mb-0 flex gap-2 sm:flex-row "
            key={index}
          >
            <Project {...project} />
          </div>
        );
      })}
    </section>
  );
};
export default Projects;
