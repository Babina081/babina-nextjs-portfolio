import React from "react";

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="section-description bg-gradient-to-b dark:from-white dark:to-blue-300   dark:text-transparent bg-clip-text ">
      {children}
    </p>
  );
};

export default SubHeading;
