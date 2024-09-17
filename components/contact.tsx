"use client";
import { sendEmail } from "@/actions/sendEmail";
import { contactDetails } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import SectionHeading from "./section-heading";
import SubmitBtn from "./submit-btn";
import SubHeading from "./sub-heading";

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
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center max-w-[53rem] scroll-mt-28"
      id="contact"
    >
      <SubHeading>Let&apos;s Initiate our Converstion</SubHeading>
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
        className="mt-10 flex flex-col text-gray-900 dark:text-gray-100"
      >
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg border border-gray-400 focus:border-gray-600 dark:border-gray-500 dark:focus:border-gray-300 dark:bg-gray-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required={true}
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          placeholder="Your message"
          className="border border-gray-400 h-52 my-3 rounded-lg p-4 focus:border-gray-600 dark:border-gray-500 dark:focus:border-gray-300 dark:bg-gray-700 dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
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
            className="px-4 py-4 shadow-sm border-2 border-gray-400 dark:border-gray-600 rounded-lg dark:bg-gray-800"
          >
            <h1 className="mb-2 flex items-center justify-center gap-2 w-full font-bold text-gray-900 dark:text-gray-100">
              <span>{icon}</span>
              {name}
            </h1>

            <p className="text-sm text-gray-700 dark:text-gray-400">{detail}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Contact;
