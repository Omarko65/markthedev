import { Contact } from "@/components/Contact";
import { ExperienceSection } from "@/components/ExperienceSection";
import { HeroSection } from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import { SkillsSection } from "@/components/SkillsSection";
import WhatIDoSection from "@/components/WhatIDoSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <HeroSection/>
      <WhatIDoSection/>
      <ExperienceSection/>
      <ProjectSection/>
      <SkillsSection/>
      <Contact/>
    </div>
  );
}
