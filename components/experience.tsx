"use client";
import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import SubHeading from "./sub-heading";

const Experience = () => {
  const { ref } = useSectionInView("Qualifications", 0.5);
  const { theme } = useTheme();

  return (
    <section ref={ref} className="mb-28 scroll-mt-28 sm:mb-40 " id="experience">
      <SubHeading>Checkout my work real world experience</SubHeading>
      <SectionHeading>My Work Experience</SectionHeading>
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
            <h2 className="bg-gradient-to-b from-black to-blue-400 text-transparent bg-clip-text dark:text-[#06D6A0]  font-medium pt-[0.25em]">
              {experience.title}
            </h2>
            <h3 className="text-black dark:text-white underline text-sm">
              {experience.company}
            </h3>
            <h5 className="">{experience.location}</h5>
            <p
              id="description "
              className="tracking-tighter text-justify text-sm font-normal"
            >
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
