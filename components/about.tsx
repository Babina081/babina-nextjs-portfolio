"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import pyramidImage from "@/public/pyramid.png";
import tubeImage from "@/public/tube.png";
const About = () => {
  const aboutRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("About", 0.75);
  // Combine the refs using useEffect
  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(aboutRef.current);
    }
  }, [sectionInViewRef]);

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <motion.section
      ref={aboutRef}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28 relative"
    >
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        Get To Know
      </p>
      <SectionHeading>About Me</SectionHeading>
      <div className="relative">
        <motion.img
          src={pyramidImage.src}
          alt="Pyramid Image"
          className="hidden md:block absolute -right-36 -top-32 -z-10"
          height={262}
          width={262}
          style={{ translateY: translateY }}
        ></motion.img>
        <motion.img
          src={tubeImage.src}
          alt="Tube Image"
          className="hidden md:block absolute -bottom-40 -left-36 -z-10"
          height={248}
          width={248}
          style={{ translateY: translateY }}
        ></motion.img>
        <div className="border border-gray-200 p-10 rounded-tl-3xl rounded-br-3xl">
          <p className="mb-3 tracking-tighter">
            <span className="font-bold text-lg">Hello!</span> I'm{" "}
            <span className="font-bold">Babina Gurung</span> from the beautiful
            city of <span className="italic">Pokhara, Nepal</span>, and I hold a
            degree in <span className="underline">computer engineering</span>.
            My passion for <span className="font-semibold">coding</span> and web
            development drives me to constantly explore and master new
            technologies. I've gained proficiency in various frameworks and
            tools, both on the{" "}
            <span className="uppercase italic font-medium">frontend</span> and{" "}
            <span className="uppercase italic font-medium">backend</span>,
            including{" "}
            <span className="border-b border-dashed">
              JavaScript, HTML, CSS, React.js, Next.js, and TypeScript
            </span>
            . My backend expertise extends to{" "}
            <span className="border-b border-dashed">
              Node.js, Express.js, MongoDB, PostgreSQL, and Prisma
            </span>{" "}
            . I'm also familiar with testing tools like{" "}
            <span className="border-b border-dashed">Postman</span> and have
            experience working with{" "}
            <span className="border-b border-dashed">Git</span>.
          </p>

          <p className="mb-3 tracking-tighter">
            As a <span className="font-bold text-lg"> self-learner</span>, I'm
            always on the lookout for new challenges and opportunities to grow.
            My enthusiasm for{" "}
            <motion.span
              className="font-black bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text"
              animate={{ backgroundPositionX: "100%" }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
                duration: 1,
              }}
            >
              turning designs into reality
            </motion.span>{" "}
            fuels my drive to bring innovative ideas to life through code. I'm
            keen on expanding my knowledge in{" "}
            <span className="border-b border-dashed">
              React Native and Figma
            </span>
            , as I believe the journey of{" "}
            <span className="italic">learning never truly ends</span>.
          </p>

          <p className="tracking-tighter">
            I'm <span className="underline font-medium">determined</span> to
            continue honing my skills and am eager to collaborate with
            professionals who share my passion. If given the opportunity, I am{" "}
            <span className="underline font-medium">committed</span> to
            delivering impactful results and{" "}
            <span className="font-semibold">showcasing my abilities</span>{" "}
            through meaningful work.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
