"use client";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { useSectionInView } from "@/lib/hooks";
import meImage from "@/public/me.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { SparklesCore } from "./ui/sparkles";

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

    const words = [
      "Web Developer ",
      "React Developer ",
      "Nextjs Developer",
      "Frontend Developer",
    ];
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
        className="mt-14 pb-28 max-w-3xl mx-auto  text-center sm:mb-0 scroll-mt-[100rem]  inline-block"
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
            {/* <div className="chat-box sender">hello</div>
             */}

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "tween", duration: 0.8 }}
            >
              {/* <motion.img
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
              ></motion.img> */}

              <Image
                src={meImage}
                alt=""
                width={192}
                height={192}
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl shadow-neutral-600 dark:shadow-[#5e3f45]  box-border"
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
          <span className="font-bold tracking-tighter textLight  textDark">
            Hey! I'm{" "}
          </span>
        </motion.h1>
        <motion.h1
          className="text-5xl lg:text-6xl xl:text-7xl font-sans pr-4 mb-10 tracking-tighter textLight  textDark font-bold  relative z-10 "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          BABINA GURUNG
          <br />
          {/* Typewriter Container */}
          <div className="relative text-primary text-3xl sm:text-5xl lg:text-7xl max-w-3xl   bg-red-100 text-white w-full mt-10">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text dark:from-white dark:to-blue-300 w-96 flex-grow ">
              <span
                id="typewriter"
                className="text-primary text-3xl sm:text-5xl  "
              ></span>
              <span
                id="typewriter-cursor"
                className="text-primary text-3xl sm:text-5xl  "
              >
                |
              </span>
            </div>
          </div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium relative z-10 mt-32"
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
            rel="noreferrer"
            aria-label="resume download"
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
