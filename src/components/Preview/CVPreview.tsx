import React from "react";
import { PersonalHeader } from "./PersonalHeader";
import { SkillsSection } from "./SkillsSection";
import { ExperienceSection } from "./ExperienceSection";

export const CVPreview = () => {
  return (
    <div className="border p-4 rounded space-y-4">
      <PersonalHeader />
      <SkillsSection />
      <ExperienceSection />
    </div>
  );
};