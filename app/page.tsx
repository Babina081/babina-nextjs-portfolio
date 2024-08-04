import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center  px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
    </main>
  );
}
