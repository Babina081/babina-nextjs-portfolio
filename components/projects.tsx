"use client";
import React, { useCallback, useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const projectRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("Projects");

  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(projectRef.current);
    }
  }, [sectionInViewRef]);

  return (
    <section ref={projectRef} className="scroll-mt-28 mb-28 " id="projects">
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        Works Recently Accomplished By Me
      </p>
      <SectionHeading>My Projects</SectionHeading>

      <div className="grid md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;
