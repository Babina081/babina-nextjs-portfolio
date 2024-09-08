import About from "@/components/about";
import Academic from "@/components/academic";
import Achievement from "@/components/achievement";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import { InfiniteMovingCardsDemo } from "@/components/infinite-moving-cards-demo";
import Intro from "@/components/intro";
import PlaceItemInCircle from "@/components/placeItemInCircle";
import Projects from "@/components/projects";
import ScrollText from "@/components/scroll-text";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import { TimelineDemo } from "@/components/timeline-academic";

export default function Home() {
  return (
    <main className="flex flex-col items-center  px-4">
      <Intro></Intro>
      {/* <SectionDivider></SectionDivider> */}
      <ScrollText></ScrollText>
      {/* <InfiniteMovingCardsDemo></InfiniteMovingCardsDemo> */}
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      {/* <PlaceItemInCircle></PlaceItemInCircle> */}
      {/* <Experience></Experience> */}
      <TimelineDemo></TimelineDemo>
      <Achievement></Achievement>
      {/* <Academic></Academic> */}
      <Contact></Contact>
    </main>
  );
}
