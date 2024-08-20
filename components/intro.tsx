"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import img1 from "@/public/intro1.png";
import img2 from "@/public/intro2.png";
import img3 from "@/public/intro3.png";
import starImage from "@/public/star.png";
import meImage from "@/public/me.jpg";
import { SparklesCore } from "./ui/sparkles";
import { useTheme } from "@/context/theme-context";

const Intro = () => {
  const { theme } = useTheme();
  const introRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("Home", 0.5);

  // Combine the refs using useEffect
  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(introRef.current);
    }
  }, [sectionInViewRef]);

  const { scrollYProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const words = ["Web Developer ", "React Developer ", "Nextjs Developer"];
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
          cursorTimeline.restart();
          cursorTimeline.pause();
        },
        onComplete: () => {
          cursorTimeline.play();
        },
      });

      mainTimeline.add(textTimeline);
    });

    // blinking cursor
    let cursorTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.8,
    });

    cursorTimeline
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
    <>
      <section
        ref={introRef}
        className="mt-14 pb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]  "
        id="home"
      >
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full "
            particleColor={theme === "light" ? "#5B99C2" : "#FFFFFF"}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <motion.img
                src={img1.src}
                alt="cylinder Image"
                width={300}
                height={300}
                className="hidden md:block -top-3 -left-32 md:absolute drop-shadow-md "
                style={{ rotate: -30, scale: 1.6 }}
                animate={{ translateY: [-20, 20] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.img>
              <motion.img
                src={img2.src}
                alt="noodle Image"
                width={220}
                height={220}
                className="hidden lg:block top-[200px] left-[380px] md:absolute rotate-[30deg]drop-shadow-md dark:invert"
                // style={{ rotate: 20, translateY: translateY }}
                style={{ rotate: 20 }}
                animate={{ translateY: [-20, 20] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.img>
              <motion.img
                src={img3.src}
                alt="noodle Image"
                width={220}
                height={220}
                className="hidden lg:block top-[150px] right-[400px] md:absolute rotate-[30deg]  drop-shadow-md"
                // style={{ translateY: translateY, rotate: -30 }}
                style={{ rotate: -30 }}
                animate={{ translateY: [-20, 20] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 3,
                  ease: "easeInOut",
                }}
              ></motion.img>
              <motion.img
                src={starImage.src}
                alt="star image"
                className="absolute left-[90px] top-[50px] sm:-top-[20px] sm:left-[150px]  -z-10"
                style={{ translateY: translateY, rotate: -80 }}
                animate={{ rotate: 360, scale: [1, 2, 1], opacity: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 10,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              ></motion.img>
              <Image
                src={meImage}
                alt=""
                width={192}
                height={192}
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl "
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
          className=" mt-2 px-4 font-medium !leading-[1.5] text-2xl sm:text-4xl relative z-10"
        >
          <span className="font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text dark:from-white dark:to-blue-300">
            Hey! I'm{" "}
          </span>
        </motion.h1>

        <motion.h1
          className="text-5xl lg:text-6xl xl:text-7xl font-sans pr-4 mb-10 tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text dark:from-white dark:to-blue-300 font-bold  relative z-10"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium relative z-10"
        >
          <Link
            href="#contact"
            className="group btn-gradient  text-white px-7 py-3 items-center flex gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact Me Here{" "}
            <BsArrowRight className="opacity-75 group-hover:translate-x-1 transition"></BsArrowRight>
          </Link>
          <a
            href="/CV.pdf"
            className="group btn-gradient-text px-7 py-3 items-center flex gap-2  rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack  dark:text-black/80"
            target="_blank"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition "></HiDownload>
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Intro;
