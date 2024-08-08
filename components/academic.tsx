"use client";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";

const Academic = () => {
  const { ref } = useSectionInView("Academic", 0.75);
  return (
    <div id="academic" ref={ref} className="scroll-mt-28 mb-28 ">
      <SectionHeading>Academic</SectionHeading>
    </div>
  );
};

export default Academic;
