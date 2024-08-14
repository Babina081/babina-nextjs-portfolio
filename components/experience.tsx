"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "@/lib/hooks";
import { experiencesData } from "@/lib/data";
import { useTheme } from "@/context/theme-context";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.5);
  const { theme } = useTheme();

  return (
    <section
      id="experience"
      // ref={sectionRef}
      ref={ref}
      className="mb-28 scroll-mt-28 sm:mb-40 "
    >
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        Works Recently Accomplished By Me{" "}
      </p>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            visible={true}
            contentStyle={{
              background:
                theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0,0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                theme === "light"
                  ? "0.4rem solid #9ca3af"
                  : "0.4rem solid rgba(255,255,255,0.5)",
            }}
            date={experience.date}
            dateClassName="date"
            icon={experience.icon}
            iconStyle={
              experience.type === "work"
                ? { background: "#06D6A0", fontSize: "1.5rem", color: "white" }
                : { background: "#f9c74f", fontSize: "1.5rem", color: "white" }
            }
          >
            <h3 className=" pt-[0.25em]">{experience.title}</h3>
            <h5 className="">{experience.location}</h5>
            <p id="description">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
