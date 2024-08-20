import { SparklesCore } from "@/components/ui/sparkles";
import React from "react";

const Loading = () => {
  return (
    <div className="spinner w-screen h-screen items-center justify-center flex m-auto bg-gradient-to-b from-black to-blue-500 dark:from-white dark:to-blue-500 relative z-50">
      {" "}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full "
          particleColor="#FFFFFF"
        />
      </div>
    </div>
  );
};

export default Loading;
