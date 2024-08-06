"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const words = ["Web Developer ", "Web Designer ", "React Developer "];
    let mainTimeline = gsap.timeline({
      repeat: -1,
    });
    words.forEach((word) => {
      let textTimeline = gsap.timeline({
        repeat: 1,
        yoyo: true,
        repeatDelay: 3,
      });

      textTimeline.to("#typewriter", {
        text: word,
        duration: 1,
        onUpdate: () => {
          cusrsorTimeline.restart();
          cusrsorTimeline.pause();
        },
        onComplete: () => {
          cusrsorTimeline.play();
        },
      });

      mainTimeline.add(textTimeline);
    });

    // blinking cursor
    let cusrsorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
    });

    cusrsorTimeline
      .to("#typewriter-cursor", {
        opacity: 1,
        duration: 0,
      })
      .to("#typewriter-cursor", {
        opacity: 0,
        duration: 0,
        delay: 0.8,
      });
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={192}
              height={192}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              quality={95}
              priority={true}
            ></Image>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              duration: 0.7,
              delay: 0.1,
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className=" mt-2 px-4 font-medium !leading-[1.5] text-2xl sm:text-4xl"
      >
        <span className="font-bold">Hey! I'm </span>
      </motion.h1>

      <motion.h1
        className="text-5xl lg:text-6xl xl:text-7xl font-black font-sans pr-4 mb-10 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        BABINA GURUNG
        <br />
        <span className="text-primary" id="typewriter"></span>
        <span id="typewriter-cursor" className="text-primary">
          |
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 items-center flex gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact Me Here{" "}
          <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition"></BsArrowRight>
        </Link>
        <a
          href="/cv.pdf"
          className="group bg-white px-7 py-3 items-center flex gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          target="_blank"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition "></HiDownload>
        </a>
        <a
          className="bg-white p-4 text-gray-700  flex items-center gap-2 rounded-full    focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack  dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com"
          target="_blank"
        >
          <BsLinkedin></BsLinkedin>
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com "
          target="_blank"
        >
          <FaGithubSquare></FaGithubSquare>
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
