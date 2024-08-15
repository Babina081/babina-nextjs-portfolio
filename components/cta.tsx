"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <div className="fixed bottom-5 left-5  flex flex-col gap-1 items-center justify-center p-2 rounded-lg ">
      {" "}
      <motion.span
        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium uppercase "
        animate={{ backgroundPositionX: "100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          duration: 1,
        }}
      >
        Socials
      </motion.span>
      <div className="flex gap-2 items-center justify-center">
        <motion.a
          className="bg-white  p-4 text-gray-700  flex items-center gap-2 rounded-full    focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack  dark:bg-white/10 dark:text-white/60 shadow-md"
          href="https://linkedin.com"
          target="_blank"
          animate={{ backgroundPositionX: "100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
            duration: 1,
          }}
        >
          <BsLinkedin></BsLinkedin>
        </motion.a>

        <motion.a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com "
          target="_blank"
        >
          <FaGithubSquare></FaGithubSquare>
        </motion.a>
      </div>
    </div>
  );
};

export default CTA;