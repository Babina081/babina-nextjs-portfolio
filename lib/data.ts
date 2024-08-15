import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaHome,
  FaLocationArrow,
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
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

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
    title: "Front-End Developer",
    location: "Pokhara, Nepal",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
    type: "work",
  },
  {
    title: "Technical Writer",
    location: "Kathmandu, Nepal",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
    type: "work",
  },
] as const;

export const projectsData = [
  {
    title: "SkyGyan",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Javascript", "Tailwind", "Redux"],
    imageUrl: eshop,
    gitpage: "https://github.com/Babina081/cryptocurrency-api-react-project",
    demo: "https://crypto-app-101.netlify.app/",
  },
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
    gitpage: "https://github.com/Babina081/garde-calculator",
    demo: "https://garde-calculator.vercel.app/",
  },
  {
    title: "Food Order App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Zod", "Nodejs", "Mongodb"],
    imageUrl: foodOrder,
    gitpage: "https://github.com/Babina081/food-order-nextjs",
    demo: "https://crypto-app-101.netlify.app/",
  },
  {
    title: "E-shop",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Nodemailer", "MongoDB"],
    imageUrl: eshop,
    gitpage: "https://github.com/Babina081/fullstack-authentication-nextjs",
    demo: "https://fullstack-authentication-nextjs.vercel.app/",
  },
  {
    title: "Inventory Management App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Nodemailer", "MongoDB"],
    imageUrl: eshop,
    gitpage:
      "https://github.com/Babina081/inventory-nextjs-postgres-prisma-project",
    demo: "#",
  },
  {
    title: "X-clone Authentication Project",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Nodemailer", "MongoDB"],
    imageUrl: eshop,
    gitpage: "https://github.com/Babina081/x-next",
    demo: "https://x-next-brown.vercel.app/",
  },
  {
    title: "AI chat with files App",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Nodemailer", "MongoDB"],
    imageUrl: eshop,
    gitpage: "https://github.com/Babina081/chat-ai-nextjs-project",
    demo: "https://chat-ai-nextjs-project.vercel.app/",
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

export const projects = [
  {
    title: "Matthias Leidinger",
    description:
      "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF",
  },
  {
    title: "Clément Chapillon",
    description:
      "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D",
  },
  {
    title: "Zissou",
    description:
      "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D",
  },
];

export const contactDetails = [
  {
    name: "Email",
    icon: React.createElement(IoMdMail),
    detail: "babitamoo333@gmail.com",
  },
  {
    name: "Location",
    icon: React.createElement(FaLocationArrow),
    detail: "Nayagaun-15, Pokhara",
  },
  {
    name: "Phone",
    icon: React.createElement(FaPhone),
    detail: "+977 9812345678",
  },
] as const;
