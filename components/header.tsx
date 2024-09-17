"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Elastic, gsap, Power4 } from "gsap";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  // State to track if the audio is playing or not
  const [isPlaying, setIsPlaying] = useState(true);
  const magnetoRef = useRef<HTMLButtonElement>(null);
  const magnetoTextRef = useRef<HTMLSpanElement>(null);

  // Ref to store the audio element, with correct typing
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Function to toggle play/pause of audio
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const activateMagneto = (event: MouseEvent) => {
    const magneto = magnetoRef.current;
    const magnetoText = magnetoTextRef.current;
    if (!magneto || !magnetoText) return;

    let boundBox = magneto?.getBoundingClientRect();
    let magnetoToStrength = 30;
    const magnetoTextStrength = 30;
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

  return (
    <header className="z-[999] relative w-screen overflow-hidden  ">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40  bg-white bg-opacity-80  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.6rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[30rem] flex-wrap items-center justify-center gap-y-1 text-[1.2rem] sm:text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-2 relative ">
          {/* desktop */}
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 hidden sm:flex items-center justify-center relative hover:underline hover:text-gray-950 dark:hover:text-gray-200 hover:scale-105"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 transition dark:text-gray-500`,
                  {
                    "bg-gradient-to-t from-blue-500 dark:from-blue-300 dark:to-white  rounded-full   text-gray-950 dark:text-gray-200 ":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

          {/* mobile device */}
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className=" flex sm:hidden items-center justify-center relative "
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 transition dark:text-gray-500`,
                  {
                    // Apply hover effect only if the section is not active
                    "hover:bg-gradient-to-t from-blue-500  hover:rounded-full dark:from-blue-300 dark:to-white dark:hover:text-gray-500 hover:text-gray-950 ":
                      activeSection !== link.name,
                    "text-gray-950 dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.icon}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gradient-to-t from-blue-500 rounded-full absolute inset-0 -z-10 dark:from-blue-300 dark:to-white"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

          <button
            className=" h-12 w-12 p-2 sm:absolute top-24 sm:top-0 sm:-right-20 rounded-full flex items-center justify-center cursor-pointer border-white border-opacity-40  bg-white bg-opacity-80  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            onClick={toggleAudio}
            ref={magnetoRef}
          >
            <span className="box" ref={magnetoTextRef}></span>
          </button>
        </ul>
      </nav>
      {/* Audio element */}
      <div>
        <audio ref={audioRef} src="/bg-audio2.mp3" loop />
      </div>
    </header>
  );
};

export default Header;
