"use client";
import { useEffect } from "react";

const StarMouse = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const container = document.querySelector("body");
      if (!container) return;

      const star = document.createElement("div");
      star.className = "star";
      container.appendChild(star);

      // Set the initial position of the star
      star.style.left = `${e.pageX}px`;
      star.style.top = `${e.pageY}px`;

      // Set the animation for the star
      setTimeout(() => {
        star.style.transform = "translate(-50%, -50%) scale(2)"; // Moves and grows
        star.style.opacity = "0"; // Fades out
      }, 50);

      // Remove the star after the animation
      setTimeout(() => {
        if (container.contains(star)) {
          container.removeChild(star);
        }
      }, 600); // Should match the longest transition time
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return <div id="star-container"></div>;
};

export default StarMouse;
