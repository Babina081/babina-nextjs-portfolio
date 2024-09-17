"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaRegCirclePlay } from "react-icons/fa6";

type ProjectProps = (typeof projectsData)[number];

function Project({
  title,
  description,
  tags,
  imageUrl,
  gitpage,
  demo,
}: ProjectProps) {
  const projectRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: projectRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={projectRef}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 flex gap-2 sm:flex-row "
    >
      <section className="order-1 sm:group-odd:order-2 bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem]  sm:group-odd:pl-8 hover:bg-gray-200 transition rounded-lg dark:bg-white/10 dark:hover:bg-white/20 dark:text-white  ">
        <div className="pt-4 pb-7 px-5  sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed  text-gray-700 dark:text-white/70 tracking-tighter">
            {" "}
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] py-1 px-3 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          className="absolute hidden sm:block  top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:-right-[initial] group-even:-left-40 group-even:group-hover:translate-x-1 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        ></Image>
      </section>
      <div className="flex flex-col gap-3 order-2 sm:group-odd:order-1">
        <Link href={gitpage} aria-label={`View code for ${title}`}>
          {" "}
          <FaGithub className="h-7 w-7 border rounded-full drop-shadow-md  bg-gradient-to-br dark:from-white dark:to-blue-500    cursor-pointer hover:scale-125 transition-all duration-200" />
        </Link>
        <Link
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Play demo video for ${title}`}
        >
          <FaRegCirclePlay className="h-7 w-7 border rounded-full drop-shadow-md  bg-gradient-to-br dark:from-white dark:to-blue-500  cursor-pointer hover:scale-125 transition-all duration-100" />
        </Link>
      </div>
    </motion.div>
  );
}
export default Project;
