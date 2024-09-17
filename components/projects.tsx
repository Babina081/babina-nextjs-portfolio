"use client";
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useEffect, useRef } from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import SubHeading from "./sub-heading";

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
      <SubHeading>Works Recently Accomplished By Me</SubHeading>
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
