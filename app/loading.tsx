"use client";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "@/context/theme-context";

const Loading = () => {
  const { theme } = useTheme();
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <div
        className={`spinner w-screen h-screen items-center justify-center flex bg-gray-50 dark:bg-gray-900  relative z-50 text-gray-950  dark:text-opacity-90 `}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem]  -z-10 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>{" "}
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full "
            particleColor={theme === "light" ? "#5B99C2" : "#FFFFFF"}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
