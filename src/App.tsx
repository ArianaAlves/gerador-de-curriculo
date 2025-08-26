import React from "react";
import { FormSection } from "./components/Layout/FormSection";
import { PreviewSection } from "./components/Layout/PreviewSection";

export default function App() {
  return (
    <div className="min-h-screen grid grid-cols-2 gap-4 p-6 bg-gray-50">
      <FormSection />
      <PreviewSection />
    </div>
  );
}