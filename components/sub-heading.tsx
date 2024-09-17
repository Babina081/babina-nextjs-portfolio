import React from "react";

const SubHeading = ({ children }: { children: React.ReactNode }) => {
  return <p className="section-description textLight textDark">{children}</p>;
};

export default SubHeading;
