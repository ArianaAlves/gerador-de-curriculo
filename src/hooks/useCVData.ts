import { useState } from "react";
import { CVData } from "../types/cv.types";

export const useCVData = () => {
  const [data, setData] = useState<CVData>({ name: "", skills: [], experience: [] });
  return { data, setData };
};