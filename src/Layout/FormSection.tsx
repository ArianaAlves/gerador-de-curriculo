import type { CVData, Experience, Education } from "../hooks/useCVData";
import {
  UserIcon,
  BriefcaseIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  TrashIcon,
  PlusIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

interface FormProps {
  data: CVData;
  setData: React.Dispatch<React.SetStateAction<CVData>>;
}

export default function FormSection({ data, setData }: FormProps) {
  // --- Manipuladores Genéricos ---
  const handlePersonalChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, skills: e.target.value.split(",") }));
  };

  // --- Manipuladores de EXPERIÊNCIA ---
  const handleExperienceChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newExperiences = [...data.experiences];
    newExperiences[index] = { ...newExperiences[index], [name]: value };
    setData((prev) => ({ ...prev, experiences: newExperiences }));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now(), role: "", company: "", period: "", description: "",
    };
    setData((prev) => ({ ...prev, experiences: [...prev.experiences, newExperience] }));
  };

  const removeExperience = (id: number) => {
    setData((prev) => ({ ...prev, experiences: prev.experiences.filter((exp) => exp.id !== id) }));
  };

  // --- Manipuladores de EDUCAÇÃO ---
  const handleEducationChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    const newEducation = [...data.education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setData((prev) => ({ ...prev, education: newEducation }));
  };

  const addEducation = () => {
    const newEducationItem: Education = {
      id: Date.now(), degree: "", institution: "", period: "",
    };
    setData((prev) => ({ ...prev, education: [...prev.education, newEducationItem] }));
  };

  const removeEducation = (id: number) => {
    setData((prev) => ({ ...prev, education: prev.education.filter((edu) => edu.id !== id) }));
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-xl p-6 text-white h-fit">
      <div className="mb-6 pb-4 border-b border-gray-700">
        <h2 className="text-2xl font-bold text-gray-100">Informações do Currículo</h2>
        <p className="text-sm text-gray-400 mt-1">
          Preencha os dados
        </p>
      </div>

      {/* --- Seção Dados Pessoais --- */}
      <div className="bg-gray-700 p-5 rounded-lg mb-6 shadow-inner">
        <div className="flex items-center mb-4">
          <UserIcon className="h-6 w-6 text-gray-300 mr-2" />
          <h3 className="text-lg font-semibold text-gray-100">Dados Pessoais</h3>
        </div>
        <form className="space-y-4">
          {/* Nome Completo */}
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Nome Completo</span>
            <input type="text" name="name" value={data.name} onChange={handlePersonalChange} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md p-2" />
          </label>

          {/* Email */}
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Email</span>
            <input type="email" name="email" value={data.email} onChange={handlePersonalChange} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md p-2" />
          </label>

          {/* Telefone e LinkedIn */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-300">Telefone</span>
              <input type="tel" name="phone" value={data.phone} onChange={handlePersonalChange} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md p-2" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-300">LinkedIn</span>
              <input type="url" name="linkedin" value={data.linkedin} onChange={handlePersonalChange} className="mt-1 block w-full bg-gray-900 border border-gray-600 rounded-md p-2" />
            </label>
          </div>

          {/* Resumo Profissional */}
          <label className="block">
            <span className="text-sm font-medium text-gray-300">Resumo Profissional</span>
            <div className="relative mt-1">
              <textarea name="about" value={data.about} onChange={handlePersonalChange} rows={4} maxLength={300} className="block w-full bg-gray-900 border border-gray-600 rounded-md p-2 pr-28"/>
              <div className="absolute top-2 right-2 flex items-center space-x-2">
                <span className="text-xs text-gray-400">{data.about.length}/300</span>
              </div>
            </div>
          </label>
        </form>
      </div>

      {/* --- Seção Experiência Profissional --- */}
      <div className="bg-gray-700 p-5 rounded-lg mb-6 shadow-inner">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <BriefcaseIcon className="h-6 w-6 text-white-300 mr-2" />
            <h3 className="text-lg font-semibold">Experiência Profissional</h3>
          </div>
          <button onClick={addExperience} className="flex items-center text-sm text-white-400 hover:text-white-300 font-semibold">
            <PlusIcon className="h-5 w-5 mr-1" /> Adicionar
          </button>
        </div>
        {data.experiences.map((exp, index) => (
          <div key={exp.id} className="p-4 bg-gray-800 rounded-md mb-4 relative border border-gray-600">
            <button onClick={() => removeExperience(exp.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
              <TrashIcon className="h-5 w-5" />
            </button>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="role" value={exp.role} onChange={(e) => handleExperienceChange(index, e)} placeholder="Cargo" className="bg-gray-900 border border-gray-600 rounded p-2" />
              <input name="company" value={exp.company} onChange={(e) => handleExperienceChange(index, e)} placeholder="Empresa" className="bg-gray-900 border border-gray-600 rounded p-2" />
            </div>
            <input name="period" value={exp.period} onChange={(e) => handleExperienceChange(index, e)} placeholder="Período (Ex: Jan 2022 - Fev 2023)" className="mt-4 w-full bg-gray-900 border border-gray-600 rounded p-2" />
            <textarea name="description" value={exp.description} onChange={(e) => handleExperienceChange(index, e)} placeholder="Descrição das atividades" rows={3} className="mt-4 w-full bg-gray-900 border border-gray-600 rounded p-2" />
          </div>
        ))}
      </div>

      {/* --- Seção Educação --- */}
      <div className="bg-gray-700 p-5 rounded-lg mb-6 shadow-inner">
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
                <AcademicCapIcon className="h-6 w-6 text-gray-300 mr-2" />
                <h3 className="text-lg font-semibold">Educação</h3>
            </div>
            <button onClick={addEducation} className="flex items-center text-sm text-white-400 hover:text-white-300 font-semibold">
                <PlusIcon className="h-5 w-5 mr-1" /> Adicionar
            </button>
        </div>
        {data.education.map((edu, index) => (
          <div key={edu.id} className="p-4 bg-gray-800 rounded-md mb-4 relative border border-gray-600">
             <button onClick={() => removeEducation(edu.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <TrashIcon className="h-5 w-5" />
            </button>
            <input name="degree" value={edu.degree} onChange={(e) => handleEducationChange(index, e)} placeholder="Curso / Graduação" className="w-full bg-gray-900 border border-gray-600 rounded p-2 mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="institution" value={edu.institution} onChange={(e) => handleEducationChange(index, e)} placeholder="Instituição de Ensino" className="bg-gray-900 border border-gray-600 rounded p-2" />
                <input name="period" value={edu.period} onChange={(e) => handleEducationChange(index, e)} placeholder="Período" className="bg-gray-900 border border-gray-600 rounded p-2" />
            </div>
          </div>
        ))}
      </div>
      
      {/* --- Seção Habilidades --- */}
      <div className="bg-gray-700 p-5 rounded-lg shadow-inner">
        <div className="flex items-center mb-4">
          <WrenchScrewdriverIcon className="h-6 w-6 text-gray-300 mr-2" />
          <h3 className="text-lg font-semibold">Habilidades</h3>
        </div>
        <p className="text-xs text-gray-400 mb-2">Separe as habilidades por vírgula</p>
        <input type="text" value={data.skills.join(", ")} onChange={handleSkillsChange} placeholder="Ex: React, TypeScript, Liderança" className="w-full bg-gray-900 border border-gray-600 rounded-md p-2 text-white placeholder-gray-500" />
      </div>
    </div>
  );
}