import { useState } from "react";
import FormSection from "./Layout/FormSection";
import PreviewSection from "./Layout/PreviewSection";
import type { CVData } from "./hooks/useCVData";
import {
  Square2StackIcon, // Ícone para "Cole sua API"
} from "@heroicons/react/24/outline";

export default function App() {
  const [data, setData] = useState<CVData>({
    // ... (dados pessoais existentes)
    name: "Seu Nome Completo",
    email: "seu.email@exemplo.com",
    phone: "(11) 99999-9999",
    linkedin: "linkedin.com/in/seuperfil",
    role: "Seu Cargo ou Posição",
    about:
      "Descreva brevemente sua experiência e objetivos profissionais. Destaque suas principais habilidades e o que você busca na sua próxima oportunidade.",
    
    // Novos campos com dados de exemplo
    experiences: [
      {
        id: 1,
        role: "Desenvolvedor Frontend",
        company: "Empresa Incrível",
        period: "Jan 2022 - Presente",
        description:
          "Desenvolvimento e manutenção de interfaces de usuário reativas utilizando React, TypeScript e Tailwind CSS. Colaborei com equipes de UI/UX para criar experiências de usuário intuitivas.",
      },
    ],
    education: [
      {
        id: 1,
        degree: "Bacharelado em Ciência da Computação",
        institution: "Universidade de Tecnologia",
        period: "2018 - 2021",
      },
    ],
    skills: ["React", "TypeScript", "Node.js", "SQL", "Git"],
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <Square2StackIcon className="h-7 w-7 text-white-400 mr-2" />
            <div className="flex flex-col">
              <span className="text-xl font-bold">Gerador de Currículos IA</span>
              <span className="text-sm text-gray-400">
                Gerador Inteligente de Currículos com IA
              </span>
            </div>
          </div>
          <button className="flex items-center bg-gray-700 hover:bg-gray-600 text-white text-sm px-4 py-2 rounded-lg transition-colors duration-200">
            <Square2StackIcon className="h-5 w-5 mr-2 text-gray-300" />
            Cole sua API
          </button>
        </div>
      </nav>
       <main className="max-w-7xl mx-auto pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FormSection data={data} setData={setData} />
          <PreviewSection data={data} />
        </div>
      </main>
    </div>
  );
}
