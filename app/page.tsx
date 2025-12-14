import Contact from "@/components/Contact";
import HeroLeft from "@/components/HeroLeft";
import HeroRight from "@/components/HeroRight";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans pt-40">
      <div className="grid gap-36 md:grid-cols-2 md:gap-8 px-4" id="Home">
         <HeroLeft />
         <HeroRight />
      </div>

      <div className="flex flex-row gap-4 pt-40" id="projects">
        <Projects />
      </div>

      <div className="flex flex-row gap-4 pt-40" id="skills">
        <Skills />
      </div>

      <div className="flex flex-row gap-4 pt-40" id="highlights">
        <Highlights />
      </div>

      <div className="" id="contact">
        <Contact />
      </div>
    </div>
  );
}
