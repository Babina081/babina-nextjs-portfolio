import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaHome,
  FaReact,
  FaTasks,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { PiMedalFill } from "react-icons/pi";
import { LuGraduationCap } from "react-icons/lu";
import gradeCalculator from "@/public/projects/grade-calculator-app.png";
import foodOrder from "@/public/projects/food-order-app.png";
import eshop from "@/public/projects/eshop-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
    icon: React.createElement(FaHome),
  },
  {
    name: "About",
    hash: "#about",
    icon: React.createElement(FaUser),
  },
  {
    name: "Projects",
    hash: "#projects",
    icon: React.createElement(FaTasks),
  },
  {
    name: "Skills",
    hash: "#skills",
    icon: React.createElement(PiMedalFill),
  },
  {
    name: "Experience",
    hash: "#experience",
    icon: React.createElement(FaUserGraduate),
  },
  {
    name: "Academic",
    hash: "#academic",
    icon: React.createElement(FaUserGraduate),
  },
  {
    name: "Contact",
    hash: "#contact",
    icon: React.createElement(FaMessage),
  },
] as const;

export const experiencesData = [
  {
    title: "Technical Writer",
    location: "Kathmandu, Nepal",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022-2023",
  },
  {
    title: "Front-End Developer",
    location: "Pokhara, Nepal",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
] as const;

export const projectsData = [
  // {
  //   title: "SkyGyan",
  //   description:
  //     "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
  //   tags: ["React", "Next.js", "Javascript", "Tailwind", "Redux"],
  //   imageUrl: eshop,
  //   gitpage: "https://github.com/Babina081/cryptocurrency-api-react-project",
  //   demo: "https://crypto-app-101.netlify.app/",
  // },
  {
    title: "College Grade Calculator",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      "React",
      "JavaScript",
      "Next.js",
      "Tailwind",
      "framer-motion",
      "daisyui",
    ],
    imageUrl: gradeCalculator,
    gitpage: "https://github.com/Babina081/cryptocurrency-api-react-project",
    demo: "https://crypto-app-101.netlify.app/",
  },
  {
    title: "Food Order App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Zod", "Nodejs", "Mongodb"],
    imageUrl: foodOrder,
    gitpage: "https://github.com/Babina081/cryptocurrency-api-react-project",
    demo: "https://crypto-app-101.netlify.app/",
  },
  {
    title: "E-shop",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Nodemailer", "MongoDB"],
    imageUrl: eshop,
    gitpage: "https://github.com/Babina081/cryptocurrency-api-react-project",
    demo: "https://crypto-app-101.netlify.app/",
  },
] as const;

export const skillsData = [
  { name: "HTML", image: "/skill-images/html.png" },
  { name: "CSS", image: "/skill-images/css.png" },
  { name: "JavaScript", image: "/skill-images/js.png" },
  { name: "TypeScript", image: "/skill-images/ts.png" },
  { name: "React", image: "/skill-images/react.png" },
  { name: "Next.js", image: "/skill-images/nextjs.png" },
  { name: "Tailwind", image: "/skill-images/tailwind.png" },
  { name: "Sass", image: "/skill-images/sass.png" },
  { name: "Prisma", image: "/skill-images/prisma.png" },
  { name: "Node.js", image: "/skill-images/nodejs.png" },
  { name: "Express", image: "/skill-images/express-js.png" },
  { name: "MongoDB", image: "/skill-images/mongo.png" },
  { name: "PostgreSQL", image: "/skill-images/postgre.png" },
  { name: "Redux", image: "/skill-images/redux.png" },
  { name: "Postman", image: "/skill-images/postman.png" },
  { name: "Git", image: "/skill-images/git.png" },
] as const;

export const academicData = [
  {
    date: "2017 - 2022",
    college: "Pokhara Engineering College",
    degree: "Bachelor in Computer Engineering",
    location: "Phire,Pokhara",
    affiliated: "Pokhara University",
  },
  {
    date: "2015-2017",
    college: "St. Marys Higher Secondary School ",
    degree: "+2 Level",
    location: "Nayagaun, Pokhara",
    affiliated: "Government of Nepal",
  },
  {
    date: "2005-2015",
    college: "Gyanodaya Bal Batika School",
    degree: "School Leaving Certificate (SLC)",
    location: "Sanepa, Lalitpur",
    affiliated: "Government of Nepal",
  },
] as const;
