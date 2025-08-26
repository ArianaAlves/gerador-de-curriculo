import React from "react";
import { PersonalInfo } from "../Form/PersonalInfo";
import { Skills } from "../Form/Skills";
import { Experience } from "../Form/Experience";
import { AIEnhanceButton } from "../Form/AIEnhanceButton";

export const FormSection = () => {
  return (
    <div className="space-y-4 p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold">Informações</h2>
      <PersonalInfo />
      <Skills />
      <Experience />
      <AIEnhanceButton />
    </div>
  );
};