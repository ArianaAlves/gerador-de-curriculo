import React from "react";
import { CVPreview } from "../Preview/CVPreview";

export const PreviewSection = () => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Pré-visualização</h2>
      <CVPreview />
    </div>
  );
};