import { useState } from "react";
import { enhanceWithAI } from "../services/aiService";

export const useAIEnhancement = () => {
  const [loading, setLoading] = useState(false);

  const enhance = async (text: string) => {
    setLoading(true);
    const result = await enhanceWithAI(text);
    setLoading(false);
    return result;
  };

  return { enhance, loading };
};