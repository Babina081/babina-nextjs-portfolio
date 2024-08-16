"use client";
import React, { useEffect, useRef } from "react";
import { Power4, Elastic, gsap } from "gsap";
import { FaHandPointUp } from "react-icons/fa";

const Footer = () => {
  const magnetoRef = useRef<HTMLButtonElement>(null);
  const magnetoTextRef = useRef<HTMLSpanElement>(null);

  const dbgr = document.querySelector("#debugger");

  const activateMagneto = (event: MouseEvent) => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;
    if (!magneto || !magnetoText) return;

    let boundBox = magneto?.getBoundingClientRect();
    let magnetoToStrength = 40;
    const magnetoTextStrength = 80;
    const newX = (event.clientX - boundBox.left) / boundBox.width - 0.5;
    const newY = (event.clientY - boundBox.top) / boundBox.height - 0.5;
    gsap.to(magneto, {
      duration: 1,
      x: newX * magnetoToStrength,
      y: newY * magnetoToStrength,
      ease: Power4.easeOut,
    });
    gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: Power4.easeOut,
    });
  };

  const resetMagneto = (event: any) => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;
    if (!magneto || !magnetoText) return;
    gsap.to(magneto, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });
    gsap.to(magnetoText, {
      duration: 1,
      x: 0,
      y: 0,
      ease: Elastic.easeOut,
    });
  };

  useEffect(() => {
    const magneto = magnetoRef.current;
    if (!magneto) return;
    magneto.addEventListener("mousemove", activateMagneto);
    magneto.addEventListener("mouseleave", resetMagneto);

    return () => {
      if (magneto) {
        magneto.removeEventListener("mousemove", activateMagneto);
        magneto.removeEventListener("mouseleave", resetMagneto);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mb-10 px-4 text-center text-gray-500 flex flex-col items-center justify-center gap-4">
      {/* back to top button */}
      <button
        className="magneto bg-gradient-to-b from-black to-blue-400 "
        ref={magnetoRef}
        onClick={scrollToTop}
      >
        <span
          className="text flex flex-col items-center justify-center "
          ref={magnetoTextRef}
        >
          <FaHandPointUp className="h-8 w-8" /> Back To Top
        </span>
      </button>
      <div id="debugger"></div>

      <small className="mb-2  text-xs flex items-center justify-center">
        &copy; 2024 Babina Gurung Personal Portfolio 💼. All rights reserved.
      </small>
    </footer>
  );
};

export default Footer;
