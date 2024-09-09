"use client";
import { skillsData } from "@/lib/data"; // Assuming skillsData is an array of skills
import { useEffect, useRef, useState } from "react";

const PlaceItemInCircle = () => {
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
    <div style={{ position: "relative", width: "30rem", height: "30rem" }}>
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
          border: "0.5px solid rgb(60, 56, 65)",
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
              backgroundColor: "rgb(60, 56, 65)",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{ width: "3rem", height: "3rem" }}
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
          border: "0.5px solid rgb(60, 56, 65)",
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
              width: "3rem",
              height: "3rem",
              backgroundColor: "rgb(60, 56, 65)",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{ width: "3rem", height: "3rem" }}
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
          border: "0.5px solid rgb(60, 56, 65)",
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
              width: "3rem",
              height: "3rem",
              backgroundColor: "rgb(60, 56, 65)",
              borderRadius: "50%",
              display: "grid",
              placeItems: "center",
            }}
          >
            <img
              src={skill.image}
              alt={skill.name}
              style={{ width: "3rem", height: "3rem" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaceItemInCircle;
