import React from "react";
type SectionHeadingProps = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <h2 className=" capitalize mb-8  text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter textLight textDark relative z-20">
      {children}
    </h2>
  );
};

export default SectionHeading;
