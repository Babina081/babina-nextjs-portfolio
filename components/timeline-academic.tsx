"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Timeline } from "@/components/ui/timeline";
import SectionHeading from "./section-heading";

type ModalId = "skybase" | "entegra" | null;

export function TimelineDemo() {
  const [openModalId, setOpenModalId] = useState<ModalId>(null); // null means no modal is open

  const openModal = (id: ModalId) => {
    setOpenModalId(id); // Set the ID of the open modal
  };

  const closeModal = () => {
    setOpenModalId(null); // Close the modal by resetting the ID
  };
  const data = [
    {
      title: "Present",
      content: (
        <div className="shadow-md dark:shadow-white/10 flex flex-col items-start justify-start border border-blue-500/10 pt-6 rounded-lg w-full">
          <div className="w-full flex items-center justify-center gap-2">
            <SectionHeading>In Search </SectionHeading>
            <div className="dot-container">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="shadow-md dark:shadow-white/10 flex flex-col items-start justify-start border border-blue-500/10 px-10 py-2 rounded-lg w-full">
          <div className="w-full flex items-center justify-center">
            <SectionHeading>Front-End Developer - Intern</SectionHeading>
          </div>
          <div className="w-full justify-end text-right">
            <p className="text-xl text-red-400 font-bold">Skybase Innovation</p>
            <p className="text-lg underline">Pokhara, Nepal</p>
          </div>
          <p className="tracking-tighter md:tracking-wider text-lg md:text-xl  mt-10">
            After a few months break, I joined an IT company as a React intern,
            with the goal of becoming a frontend developer specializing in
            React.js. During this internship, I mastered Next.js and Tailwind
            CSS, translating design mockups into functional, responsive web
            applications. I also gained experience in API integration, testing,
            and Git, which enhanced my ability to deliver clean, maintainable
            code. Working alongside other developers and contributing to
            real-world projects, even though they were not deployed,
            significantly improved my problem-solving skills and expertise in
            exploring new tools and technologies. Over the course of the
            four-month internship, I learned valuable lessons from both my
            successes and mistakes. The guidance and support from my seniors and
            colleagues further fueled my passion and desire to grow as a
            developer in the days to come.
          </p>
          <div className="mt-5 text-right w-full">
            <div
              onClick={() => openModal("skybase")}
              className="text-blue-500 underline"
            >
              View Certificate
            </div>
          </div>
          {/* Modal for Skybase */}
          {openModalId === "skybase" && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="bg-gray-300 rounded-lg shadow-lg max-w-4xl w-full h-auto p-6 relative">
                {/* Close button styled similar to Gmail */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="w-full h-full flex justify-center items-center">
                  <img
                    src="/skybase.jpeg" // Path to your Skybase certificate image
                    alt="Skybase Certificate"
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="shadow-md dark:shadow-white/10 flex flex-col items-start justify-start border border-blue-500/10 px-10 py-2 rounded-lg w-full">
          <div className="w-full flex items-center justify-center">
            <SectionHeading>Technical Research Engineer</SectionHeading>
          </div>
          <div className="w-full justify-end text-right">
            <p className="text-xl text-red-400 font-bold">
              Entegra-source Pvt. Ltd.
            </p>
            <p className="text-lg underline">Kathmandu, Nepal</p>
          </div>
          <p className="tracking-tighter md:tracking-wider text-lg md:text-xl  mt-10">
            After completing my final semester exams for my bachelor's degree, I
            took on a remote role as a technical writer, working for nearly four
            months. This was my first real-world job opportunity, and it
            provided me with invaluable experiences. During this time, I had the
            chance to interact with colleagues from various backgrounds, which
            significantly enhanced my communication and technical thinking
            skills. I also learned the correct formats for writing reports and
            documentation, which deepened my understanding of technical writing
            standards focusing on topics related to computer electronics and
            other fields. More importantly, the experience helped me learn new
            things, both professionally and personally, which allowed me to
            enhance my writing and thinking abilities.
          </p>
          <div className="mt-5 text-right w-full">
            <div
              onClick={() => openModal("entegra")}
              className="text-blue-500 underline"
            >
              View Certificate
            </div>
          </div>
          {/* Modal for Entegra */}
          {openModalId === "entegra" && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
              <div className="bg-gray-300 rounded-lg shadow-lg max-w-4xl w-full h-auto p-6 relative ">
                {/* Close button styled similar to Gmail */}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                <div className="h-full flex justify-center items-center  ">
                  <img
                    src="/entegra.jpeg" // Path to your Entegra certificate image
                    alt="Entegra Certificate"
                    className="w-full h-auto max-h-[80vh] object-contain "
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="shadow-md dark:shadow-white/10 flex flex-col items-start justify-start border border-blue-500/10 px-10 py-2 rounded-lg w-full">
          <div className="w-full flex items-center justify-center">
            <SectionHeading>Bachelor in Computer Engineering</SectionHeading>
          </div>
          <div className="w-full justify-end text-right">
            <p className="text-xl text-red-400 font-bold">
              Pokhara Engineering College
            </p>
            <p className="italic">Affiliated: Pokhara University</p>
            <p className="text-lg underline">Phire, Pokhara</p>
          </div>
          <p className="tracking-tighter md:tracking-wider text-lg md:text-xl  mt-10">
            The real turning point in my academic journey was when I joined an
            engineering college to pursue computer engineering. My curiosity
            about the rapid advancements in technology pushed me towards this
            field. Every day was an opportunity to learn something new, whether
            it was about programming, algorithms, or the broader impact of
            technology on the world. Engineering not only sharpened my technical
            skills but also fueled my passion for innovation and problem-solving
            in today’s digital age.
          </p>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div className="shadow-md dark:shadow-white/10 flex flex-col items-start justify-start border border-blue-500/10 px-10 py-2 rounded-lg">
          <div className="w-full flex justify-center items-center">
            <SectionHeading>Higher Secondary (+2 Level)</SectionHeading>
          </div>
          <div className="w-full justify-end text-right">
            <p className="text-xl text-red-400">
              St. Marys Higher Secondary School{" "}
            </p>
            <p className="italic">Affiliated: Government of Nepal</p>
            <p className="text-lg underline">Nayagaun, Pokhara</p>
          </div>
          <p className="tracking-tighter md:tracking-wider text-lg md:text-xl  mt-10">
            After completing my SLC, I decided to pursue my +2 in the science
            faculty, driven by a passion for the technical world. I knew early
            on that I wanted to dive deeper into this field, which is why I
            chose the non-medical path, focusing on mathematics. This decision
            was a stepping stone towards understanding the logic and reasoning
            that form the backbone of technology. It was a challenging yet
            rewarding time, as it helped shape my career path and solidify my
            interest in engineering.
          </p>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div className="shadow-md dark:shadow-white/10 flex flex-col items-start justify-start border border-blue-500/10 px-10 py-2 rounded-lg">
          <div className="flex w-full justify-center items-center">
            <SectionHeading>School Leaving Certificate (SLC)</SectionHeading>
          </div>
          <div className="w-full justify-end text-right">
            <p className="text-lg text-red-400">Gyanodaya Bal Batika School</p>
            <p className="italic">Affiliated: Government of Nepal</p>
            <p className="text-lg underline">Sanepa, Lalitpur</p>
          </div>
          <p className="tracking-tighter md:tracking-wider text-lg md:text-xl  mt-10">
            Completing my SLC was a significant milestone in my academic life.
            Those years were filled with wonderful experiences, from learning
            new things every day to making lifelong friends. The teachers were
            incredibly supportive, creating an environment where I could thrive
            both academically and personally. My childhood was shaped by these
            experiences, where school was not just about education but also
            about developing values and forming memories that I still cherish
            today.
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
