import React from "react";

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return <p className="section-description textLight textDark relative z-20">{children}</p>;
};

export default SubHeading;
