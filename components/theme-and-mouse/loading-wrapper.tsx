"use client";
import Loading from "@/app/loading";
import React, { useEffect, useState } from "react";

const LoadingWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return <div className="">{children}</div>;
};

export default LoadingWrapper;
