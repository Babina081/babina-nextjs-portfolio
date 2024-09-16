import chatAI from "@/public/projects/chatAI.png";
import eshop from "@/public/projects/eshop-app.png";
import foodOrder from "@/public/projects/food-order-app.png";
import gradeCalculator from "@/public/projects/grade-calculator-app.png";
import inventoryManagement from "@/public/projects/inventory management.png";
import saas from "@/public/projects/saas-app.png";
import skygyan from "@/public/projects/skygyan.jpg";
import wedapp from "@/public/projects/wedapp.png";
import xClone from "@/public/projects/x-clone.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import {
  FaHome,
  FaLocationArrow,
  FaTasks,
  FaUser,
  FaUserGraduate,
} from "react-icons/fa";
import { FaMessage, FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { PiMedalFill } from "react-icons/pi";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  //   icon: React.createElement(FaUserGraduate),
  // },
  {
    name: "Qualifications",
    hash: "#academic",
    icon: React.createElement(FaUserGraduate),
  },
  {
    name: "Achievement",
    hash: "#achievement",
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
    title: "Front-End Developer - Intern",
    company: "Skybase Innovation",
    location: "Pokhara, Nepal",
    description:
      "During my internship as a Frontend Next.js Developer, I mastered Next.js and Tailwind CSS, translating design mockups into functional, responsive web applications. I also gained experience in API integration, testing, and Git, enhancing my ability to deliver clean, maintainable code.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
    type: "work",
  },
  {
    title: "Technical Research Engineer",
    company: "Entegra-source Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    description:
      "Worked remotely as a Technical Research Engineer, where I developed skills in technical writing, research, and content formatting, focusing on topics related to computer electronics and other fields,  while collaborating with teams to enhance my writing and thinking abilities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022-2023",
    type: "work",
  },
] as const;

export const projectsData = [
  {
    title: "SkyGyan",
    description:
      "I developed the SkyGyan app, a learning management system, solely during my internship. I implemented the provided design and integrated it with the backend API, which significantly enhanced my communication and problem-solving skills.",
    tags: ["React", "Next.js", "Javascript", "Tailwind", "Redux Toolkit"],
    imageUrl: skygyan,
    gitpage: "https://github.com/skybaseinnovations/skygyan-next",
    demo: "http://localhost:3000/home/explore",
  },
  {
    title: "College Grade Calculator",
    description:
      "I developed a College Grade Calculator app as well during my internship. This app calculates individual student grades and estimates the maximum and minimum grades achievable in remaining courses. It's user-friendly and fun to use.",
    tags: ["JavaScript", "Next.js", "Tailwind", "daisyui", "framer-motion"],
    imageUrl: gradeCalculator,
    gitpage: "https://github.com/Babina081/garde-calculator",
    demo: "https://garde-calculator.vercel.app/",
  },
  {
    title: "Food Order App",
    description:
      "I created a full-stack food app, handling both frontend and backend development. The app allows users to browse, order, and manage food items, providing a seamless and interactive experience.",
    tags: [
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Zod",
      "Nodejs",
      "Mongodb",
      "Shadcn",
    ],
    imageUrl: foodOrder,
    gitpage: "https://github.com/Babina081/food-order-nextjs",
    demo: "https://food-order-nextjs-six.vercel.app/home",
  },
  {
    title: "Wed App",
    description:
      "WedApp is a Next.js web app for effortless event management. It provides a seamless and organized planning experience for various types of events.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Redux Toolkit"],
    imageUrl: wedapp,
    gitpage: "https://github.com/Babina081/wed-app",
    demo: "https://wed-app-seven.vercel.app/",
  },
  {
    title: "E-shop",
    description:
      "I developed an eCommerce app, managing both the frontend and backend to provide a smooth shopping experience for users, including features like product browsing, purchasing, and order management.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Nodemailer", "MongoDB"],
    imageUrl: eshop,
    gitpage: "https://github.com/Babina081/fullstack-authentication-nextjs",
    demo: "https://fullstack-authentication-nextjs.vercel.app/",
  },
  {
    title: "SaaS Project",
    description:
      "I developed a frontend SaaS project, focusing on creating a beautiful UI and incorporating engaging animations to enhance the user experience.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Framer Motion"],
    imageUrl: saas,
    gitpage: "https://github.com/Babina081/saas-landing-page-nextjs",
    demo: "https://saas-landing-page-nextjs.vercel.app/",
  },
  {
    title: "Inventory Management App",
    description:
      "Developed a robust full-stack inventory management system using Next.js, PostgreSQL, and Prisma, enabling efficient tracking and management of inventory data.",
    tags: [
      "Next.js",
      "Tailwind",
      "Node",
      "Redux",
      "Express",
      "Postgres",
      "Prisma",
      "Recharts",
    ],
    imageUrl: inventoryManagement,
    gitpage:
      "https://github.com/Babina081/inventory-nextjs-postgres-prisma-project",
    demo: "https://inventory-nextjs-postgres-project.vercel.app/",
  },
  {
    title: "X-clone Authentication Project",
    description:
      "I created an X-clone project with a strong emphasis on authentication and post features, ensuring secure user access and smooth content management. It focus on delivering a user-friendly experience with reliable authentication flows.",
    tags: ["Javascript", "Next.js", "Tailwind", "Next-Auth", "Firebase"],
    imageUrl: xClone,
    gitpage: "https://github.com/Babina081/x-next",
    demo: "https://x-next-brown.vercel.app/",
  },
  {
    title: "AI chat with files App",
    description:
      "I developed an AI chat application that processes and interacts based on uploaded files, providing context-aware responses tailored to the content of the files. Integrated advanced AI capabilities to enhance user interaction and functionality.",
    tags: ["TypeScript", "Next.js", "Tailwind", "Firebase", "Clerk"],
    imageUrl: chatAI,
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
  { name: "Jest", image: "/skill-images/jest.jpg" },
  { name: "ReactHook Form", image: "/skill-images/react-hook-form.svg" },
  { name: "Zod", image: "/skill-images/zod.png" },
  { name: "Tanstack", image: "/skill-images/tanstack.png" },
  { name: "Vercel", image: "/skill-images/vercel.svg" },
] as const;

export const academicData = [
  {
    date: "2017-2022",
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
