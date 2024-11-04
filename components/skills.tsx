"use client";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./section-heading";
import SubHeading from "./sub-heading";

interface Skill {
  name: string;
  image: string;
}


const Skills = () => {
  const skillRef = useRef<HTMLDivElement | null>(null);
  const { ref: sectionInViewRef } = useSectionInView("Skills");

  useEffect(() => {
    if (sectionInViewRef && skillRef.current) {
      sectionInViewRef(skillRef.current);
    }
  }, [sectionInViewRef]);

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const outerContainerRef = useRef<HTMLUListElement | null>(null);
  const middleContainerRef = useRef<HTMLUListElement | null>(null);
  const innerContainerRef = useRef<HTMLUListElement | null>(null);
  const fourthContainerRef = useRef<HTMLUListElement | null>(null);

  const outerCircleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const middleCircleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const innerCircleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const fourthCircleRefs = useRef<(HTMLLIElement | null)[]>([]);

  const [rotationAngle, setRotationAngle] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  useEffect(() => {
    const setupCircularLayout = () => {
      const containers = [
        { ref: outerContainerRef, circles: outerCircleRefs.current },
        { ref: middleContainerRef, circles: middleCircleRefs.current },
        { ref: innerContainerRef, circles: innerCircleRefs.current },
        { ref: fourthContainerRef, circles: fourthCircleRefs.current },
      ];

      containers.forEach(({ ref, circles }) => {
        const container = ref.current;
        if (!container || !circles.length) return;

        const radius = container.offsetWidth / 2;
        const rotation = 360 / circles.length;

        circles.forEach((circle, i) => {
          if (circle) {
            const transform = `rotate(${i * rotation}deg) translate(${radius}px) rotate(-${i * rotation}deg)`;
            circle.style.transform = transform;
          }
        });
      });
    };

    setupCircularLayout();
    window.addEventListener("resize", setupCircularLayout);

    return () => {
      window.removeEventListener("resize", setupCircularLayout);
    };
  }, []);

  useEffect(() => {
    const animateRotation = () => {
      setRotationAngle((prev) => prev + 0.2);
      requestAnimationFrame(animateRotation);
    };

    const animationId = requestAnimationFrame(animateRotation);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const outerCircleData = skillsData.slice(0, Math.ceil(skillsData.length / 4));
  const middleCircleData = skillsData.slice(Math.ceil(skillsData.length / 4), Math.ceil((skillsData.length * 2) / 4));
  const innerCircleData = skillsData.slice(Math.ceil((skillsData.length * 2) / 4), Math.ceil((skillsData.length * 3) / 4));
  const fourthCircleData = skillsData.slice(Math.ceil((skillsData.length * 3) / 4));
  
  return (
    <section
      className="mb-28 scroll-mt-28 text-center sm:mb-40 max-w-3xl mx-auto"
      ref={skillRef}
      id="skills"
    >
      <SubHeading>What Skill I Am Equipped With</SubHeading>
      <SectionHeading>My Skills</SectionHeading>
      {/* small devices */}
      <ul className="flex sm:hidden flex-wrap justify-center space-x-4 space-y-4 mt-12 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            key={index}
            className="bg-white borderBlack rounded-xl px-5 py-3 flex items-center justify-between flex-col gap-2 dark:bg-white/10 dark:text-white/80 "
          >
            <Image
              src={skill.image}
              alt={`Icon for ${skill.name} skill`}
              quality={95}
              width={50}
              height={50}
              className="bg-transparent"
            ></Image>
            {skill.name}
          </li>
        ))}
      </ul>
      <div
        style={{
          position: "relative",
          height: "60vh",
          minHeight: "30rem",
          minWidth: "30rem",
        }}
        className="sm:block hidden my-28"
      >
        {/* Display hovered skill name */}
        <div
          className="absolute text-2xl font-bold"
          style={{
            position: "absolute",
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {hoveredSkill} {/* Fallback text */}
        </div>
        {/* Circle containers */}
        {[
          { ref: outerContainerRef, data: outerCircleData, size: "30rem", circleRefs: outerCircleRefs },
          { ref: middleContainerRef, data: middleCircleData, size: "20rem", circleRefs: middleCircleRefs },
          { ref: innerContainerRef, data: innerCircleData, size: "10rem", circleRefs: innerCircleRefs },
          { ref: fourthContainerRef, data: fourthCircleData, size: "40rem", circleRefs: fourthCircleRefs },
        ].map(({ ref, data, size, circleRefs }, index) => (
          <ul
            key={index}
            ref={ref}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: size,
              height: size,
              listStyleType: "none",
              border: "0.5px solid var(--circle-background)",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
              transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`,
              transition: "transform 0.9s linear",
            }}
          >
            {data.map((skill: Skill, i: number) => (
              <li
                key={i}
                ref={(el) => {
                  circleRefs.current[i] = el;
                }}
                // onMouseEnter={() => setHoveredSkill(skill.name)}
                // onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  position: "absolute",
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Image
                  src={skill.image}
                  alt={`Icon for ${skill.name} skill`}
                  width={50}
                  height={50}
                  style={{ height: "auto" }}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Skills;
