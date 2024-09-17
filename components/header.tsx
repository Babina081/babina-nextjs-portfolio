"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  // State to track if the audio is playing or not
  const [isPlaying, setIsPlaying] = useState(true);

  // Ref to store the audio element, with correct typing
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Effect to handle automatic audio play when the component mounts
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          await audioRef.current.play();
          setIsPlaying(true); // Update state to reflect that audio is playing
        } catch (error) {
          console.error("Autoplay was prevented by the browser:", error);
          setIsPlaying(false); // Handle the case where autoplay is blocked
        }
      }
    };
    playAudio();
  }, []);

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

  return (
    <header className="z-[999] relative w-screen overflow-hidden  ">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40  bg-white bg-opacity-80  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[42rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.6rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
        <ul className="flex w-[30rem] flex-wrap items-center justify-center gap-y-1 text-[1.2rem] sm:text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap gap-3 sm:gap-2 relative ">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="h-3/4 hidden sm:flex items-center justify-center relative hover:bg-gradient-to-t from-blue-300 hover:rounded-full"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link.hash}
                className={clsx(
                  `flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 hover:underline  `,
                  {
                    "text-gray-950 dark:text-gray-200 hover:no-underline":
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
                    className="bg-gradient-to-t from-blue-500 rounded-full absolute inset-0 -z-10 dark:from-blue-300 dark:to-white"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

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

          <div
            className=" sm:h-12 sm:w-12 p-2 sm:absolute sm:-right-20 rounded-full flex items-center justify-center cursor-pointer border-white border-opacity-40  bg-white bg-opacity-80  shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
            onClick={toggleAudio}
          >
            <div className="box"></div>
          </div>
        </ul>
      </nav>
      {/* Audio element */}
      <div>
        <audio ref={audioRef} src="/bg-audio3.mp3" loop />
      </div>
    </header>
  );
};

export default Header;
