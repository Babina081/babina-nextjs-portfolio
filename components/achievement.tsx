"use client";
import { useSectionInView } from "@/lib/hooks";
import udemy from "@/public/udemy.png";
import Image from "next/image";
import { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import SubHeading from "./sub-heading";
import { achievementsData } from "@/lib/data";

const Achievement = () => {
  const achievementRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("Achievement", 0.75);

  // Combine the refs using useEffect
  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(achievementRef.current);
    }
  }, [sectionInViewRef]);

  return (
    <section
      className="mb-28 max-w-7xl scroll-mt-28 text-center sm:mb-40"
      ref={achievementRef}
      id="achievement"
    >
      <SubHeading>Showcasing my commitment to excellence</SubHeading>
      <SectionHeading>My Achievement</SectionHeading>
      {achievementsData.map((achievement) => (
        <div
          key={achievement.id}
          className="flex flex-col md:flex-row gap-8 md:gap-14 w-full p-4 md:p-10 my-10 rounded-lg items-center justify-center shadow-md dark:shadow-white/10 border border-blue-500/10"
        >
          <Image
            src={achievement.image}
            alt={achievement.provider}
            className="rounded-lg border border-black/10 w-fit md:w-80"
          />
          <div className="flex flex-col text-left justify-between w-full md:w-56 gap-4 ">
            <div>
              <h1 className="font-bold text-xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text dark:from-white dark:to-blue-300">
                {achievement.title}
              </h1>
              <p>Provider: {achievement.provider}</p>
              <p>Instructor: {achievement.instructor}</p>
            </div>
            <div className="text-right">
              <a
                href={achievement.certificateUrl}
                target="_blank"
                className="text-blue-500 underline"
                rel="noreferrer"
                aria-label="udemy certificate"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Achievement;
