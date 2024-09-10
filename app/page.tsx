import About from "@/components/about";
import Achievement from "@/components/achievement";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import ScrollText from "@/components/scroll-text";
import Skills from "@/components/skills";

import { TimelineDemo } from "@/components/timeline-academic";

export default function Home() {
  return (
    <main className="flex flex-col items-center  px-4">
      <Intro></Intro>
      <ScrollText></ScrollText> 
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <TimelineDemo></TimelineDemo>
      <Achievement></Achievement>
      <Contact></Contact> 
    </main>
  );
}
