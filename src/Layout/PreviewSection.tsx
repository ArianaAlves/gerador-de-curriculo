// src/components/PreviewSection.tsx

import type { CVData } from "../hooks/useCVData";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

interface PreviewProps {
  data: CVData;
}

export default function PreviewSection({ data }: PreviewProps) {
  return (
    <div className="bg-green-600 shadow-lg rounded-xl p-6 text-white h-fit sticky top-24">
      {/* Cabeçalho da Seção de Preview */}
      <div className="mb-6 pb-4 border-b border-green-500">
        <h2 className="text-2xl font-bold">Preview do Currículo</h2>
        <p className="text-sm text-green-200 mt-1">Visualização em tempo real</p>
      </div>

      {/* Conteúdo do Preview */}
      <div className="bg-white text-gray-900 rounded-lg p-6 shadow-inner">
        {/* Cabeçalho com dados pessoais */}
        <header className="pb-4 border-b border-gray-200 mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">{data.name}</h1>
          <p className="text-md font-medium text-blue-700">{data.role}</p>
          <div className="flex justify-center flex-wrap items-center text-gray-600 text-sm mt-2 space-x-4">
            <span>{data.email}</span>
            <span>{data.phone}</span>
          </div>
          {data.linkedin && (
            <a href={`https://${data.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-500 mt-1 block">
              {data.linkedin}
            </a>
          )}
        </header>

        {/* Resumo Profissional */}
        {data.about && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center border-b pb-2 mb-3">
              <UserCircleIcon className="h-5 w-5 mr-2 text-gray-600" />
              Resumo Profissional
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{data.about}</p>
          </section>
        )}

        {/* Experiência Profissional */}
        {data.experiences.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center border-b pb-2 mb-3">
              <BriefcaseIcon className="h-5 w-5 mr-2 text-gray-600" />
              Experiência Profissional
            </h2>
            {data.experiences.map((exp) => (
              <div key={exp.id} className="mb-4">
                <h3 className="font-bold text-md text-gray-800">{exp.role}</h3>
                <p className="font-semibold text-sm text-blue-700">{exp.company}</p>
                <p className="text-xs text-gray-500 mb-1">{exp.period}</p>
                <p className="text-gray-700 text-sm">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Educação */}
        {data.education.length > 0 && (
          <section className="mb-6">
            <h2 className="text-xl font-bold text-gray-800 flex items-center border-b pb-2 mb-3">
              <AcademicCapIcon className="h-5 w-5 mr-2 text-gray-600" />
              Educação
            </h2>
            {data.education.map((edu) => (
              <div key={edu.id} className="mb-3">
                <h3 className="font-bold text-md text-gray-800">{edu.degree}</h3>
                <p className="font-semibold text-sm text-gray-600">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.period}</p>
              </div>
            ))}
          </section>
        )}

        {/* Habilidades */}
        {data.skills.length > 0 && data.skills[0] !== "" && (
          <section>
            <h2 className="text-xl font-bold text-gray-800 flex items-center border-b pb-2 mb-3">
              <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-gray-600" />
              Habilidades
            </h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="bg-gray-200 text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                  {skill.trim()}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}