"use client";
import React, { useEffect } from "react";
import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollText = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".c1 h1", {
      duration: 8,
      // x: "-60%",
      transform: "translateX(-60%)",
      ease: "none",
      scrollTrigger: {
        trigger: ".c1 h1",
        start: "top center ",
        end: () => {
          const element = document.querySelector(".c1") as HTMLElement;
          return element?.offsetHeight ? `+=${element.offsetHeight}` : "";
        },
        scrub: 4,
        // pin: ".c1 h1",
        // markers: {
        //   startColor: "red",
        //   endColor: "blue",
        //   fontSize: "4rem",
        //   indent: 200,
        // },
        // pinType: "fixed",
        // toggleClass: "red",
        // pinSpacing: true,
        // anticipatePin: 1,
        // pinReparent: true,
        // toggleActions: "restart reverse none none",
      },
    });
  }, []);
  return (
    <div className=" container-about c1 mb-28">
      <h1 className="dark:text-white">Explore My Portfolio</h1>
    </div>
  );
};

export default ScrollText;
