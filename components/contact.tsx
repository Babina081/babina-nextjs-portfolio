"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitBtn from "./submit-btn";
import { toast } from "react-hot-toast";

const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.75);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a href="mailto:babitamoo333@gmail.com" className="underline">
          abc@gmail.com
        </a>
        or through this form.
      </p>
      <form
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack "
          required={true}
          maxLength={500}
          name="senderEmail"
        />
        <textarea
          placeholder="Your message"
          className="borderBlack  h-52 my-3 rounded-lg p-4"
          maxLength={500}
          required
          name="message"
        ></textarea>
        <SubmitBtn></SubmitBtn>
      </form>
    </motion.section>
  );
};

export default Contact;
