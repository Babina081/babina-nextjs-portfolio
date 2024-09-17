"use client";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SectionHeading from "./section-heading";

const Skills = () => {
  const skillRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("Skills");

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

  const outerContainerRef = useRef<HTMLUListElement | null>(null);
  const middleContainerRef = useRef<HTMLUListElement | null>(null);
  const innerContainerRef = useRef<HTMLUListElement | null>(null);
  const outerCircleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const middleCircleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const innerCircleRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [rotationAngle, setRotationAngle] = useState<number>(0); // Track rotation angle

  useEffect(() => {
    const outerContainer = outerContainerRef.current;
    const middleContainer = middleContainerRef.current;
    const innerContainer = innerContainerRef.current;
    const outerCircles = outerCircleRefs.current;
    const middleCircles = middleCircleRefs.current;
    const innerCircles = innerCircleRefs.current;

    if (
      !outerContainer ||
      !middleContainer ||
      !innerContainer ||
      !outerCircles.length ||
      !middleCircles.length ||
      !innerCircles.length
    )
      return;

    const outerRadius = outerContainer.offsetWidth / 2;
    const middleRadius = middleContainer.offsetWidth / 2;
    const innerRadius = innerContainer.offsetWidth / 2;
    const outerRotation = 360 / outerCircles.length;
    const middleRotation = 360 / middleCircles.length;
    const innerRotation = 360 / innerCircles.length;

    const circular = () => {
      // Outer circle
      outerCircles.forEach((circle, i) => {
        if (circle) {
          const value = `rotate(${
            i * outerRotation
          }deg) translate(${outerRadius}px) rotate(-${i * outerRotation}deg)`;
          circle.style.transform = value;
        }
      });

      // Middle circle
      middleCircles.forEach((circle, i) => {
        if (circle) {
          const value = `rotate(${
            i * middleRotation
          }deg) translate(${middleRadius}px) rotate(-${i * middleRotation}deg)`;
          circle.style.transform = value;
        }
      });

      // Inner circle
      innerCircles.forEach((circle, i) => {
        if (circle) {
          const value = `rotate(${
            i * innerRotation
          }deg) translate(${innerRadius}px) rotate(-${i * innerRotation}deg)`;
          circle.style.transform = value;
        }
      });
    };

    circular();
    window.addEventListener("resize", circular);

    return () => {
      window.removeEventListener("resize", circular);
    };
  }, []);

  useEffect(() => {
    const animateRotation = () => {
      setRotationAngle((prev) => prev + 0.2); // Adjust the speed by changing the increment value
      requestAnimationFrame(animateRotation);
    };

    const animationId = requestAnimationFrame(animateRotation);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Split data for outer, middle, and inner circles
  const numSkills = skillsData.length;
  const outerCircleData = skillsData.slice(0, Math.ceil(numSkills / 3));
  const middleCircleData = skillsData.slice(
    Math.ceil(numSkills / 3),
    Math.ceil((numSkills * 2) / 3)
  );
  const innerCircleData = skillsData.slice(Math.ceil((numSkills * 2) / 3));

  return (
    <section
      className="mb-28 scroll-mt-28 text-center sm:mb-40 max-w-5xl mx-auto"
      ref={skillRef}
      id="skills"
    >
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300 dark:text-transparent bg-clip-text ">
        What Skill I Am Equipped With
      </p>
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
        className="sm:block hidden"
      >
        {/* Outer circle */}
        <ul
          ref={outerContainerRef}
          style={{
            position: "absolute",
            top: "50%", // Center horizontally
            left: "50%", // Center vertically
            width: "30rem", // Larger outer circle
            height: "30rem",
            listStyleType: "none",
            border: "0.5px solid var(--circle-background)",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`, // Center and apply rotation
            transition: "transform 0.9s linear", // Smooth transition
          }}
        >
          {outerCircleData.map((skill, index) => (
            <li
              key={index}
              ref={(el) => {
                outerCircleRefs.current[index] = el;
              }}
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
                style={{ height: "auto" }} // Adjust height or width, and let the other scale naturally
                layout="intrinsic"
              />
            </li>
          ))}
        </ul>

        {/* Middle circle */}
        <ul
          ref={middleContainerRef}
          style={{
            position: "absolute",
            top: "50%", // Center horizontally
            left: "50%", // Center vertically
            width: "20rem", // Medium circle
            height: "20rem",
            listStyleType: "none",
            border: "0.5px solid var(--circle-background)",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`, // Center and apply rotation
            transition: "transform 0.9s linear", // Smooth transition
          }}
        >
          {middleCircleData.map((skill, index) => (
            <li
              key={index}
              ref={(el) => {
                middleCircleRefs.current[index] = el;
              }}
              style={{
                position: "absolute",
                width: "2.5rem",
                height: "2.5rem",
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
                style={{ height: "auto" }} // Adjust height or width, and let the other scale naturally
                layout="intrinsic"
              />
            </li>
          ))}
        </ul>

        {/* Inner circle */}
        <ul
          ref={innerContainerRef}
          style={{
            position: "absolute",
            top: "50%", // Center horizontally
            left: "50%", // Center vertically
            width: "10rem", // Smaller inner circle
            height: "10rem",
            listStyleType: "none",
            border: "0.5px solid var(--circle-background)",
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)`, // Center and apply rotation
            transition: "transform 0.9s linear", // Smooth transition
          }}
        >
          {innerCircleData.map((skill, index) => (
            <li
              key={index}
              ref={(el) => {
                innerCircleRefs.current[index] = el;
              }}
              style={{
                position: "absolute",
                width: "2rem",
                height: "2rem",
                // Use CSS variable for color
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
                style={{ height: "auto" }} // Adjust height or width, and let the other scale naturally
                layout="intrinsic"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
