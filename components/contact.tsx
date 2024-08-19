"use client";
import React, { useEffect, useRef } from "react";
import SectionHeading from "./section-heading";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import { toast } from "react-hot-toast";
import { contactDetails } from "@/lib/data";

const Contact = () => {
  const contactRef = useRef(null);
  const { ref: sectionInViewRef } = useSectionInView("Contact", 0.75);

  useEffect(() => {
    if (sectionInViewRef) {
      sectionInViewRef(contactRef.current);
    }
  }, [sectionInViewRef]);

  const { scrollYProgress } = useScroll({
    target: contactRef,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.2, 1]);

  return (
    <motion.section
      ref={contactRef}
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1 }}
      // viewport={{ once: true }}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center max-w-[53rem] scroll-mt-28 "
      id="contact"
    >
      <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
        Let's Initiate our Converstion
      </p>
      <SectionHeading>Contact Me</SectionHeading>

      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col dark:text-black/80"
      >
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none "
          required={true}
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          placeholder="Your message"
          className="borderBlack  h-52 my-3 rounded-lg p-4  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          maxLength={500}
          required
          name="message"
        ></textarea>
        <SubmitBtn></SubmitBtn>
      </form>

      <div className="flex flex-col md:flex-row gap-6  pb-6 mt-4 justify-between ">
        {contactDetails.map(({ name, icon, detail }) => (
          <div
            key={name}
            className=" px-2 py-4 shadow-sm border-2  rounded-lg "
          >
            <h1 className="mb-2 flex items-center justify-center gap-2 w-full font-bold">
              <span>{icon}</span>
              {name}
            </h1>

            <p className="text-sm">{detail}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
