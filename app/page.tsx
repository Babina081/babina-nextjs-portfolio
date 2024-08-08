import About from "@/components/about";
import Academic from "@/components/academic";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import ScrollText from "@/components/scroll-text";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center  px-4">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <ScrollText></ScrollText>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Experience></Experience>
      <Academic></Academic>
      <Contact></Contact>
    </main>
  );
}
