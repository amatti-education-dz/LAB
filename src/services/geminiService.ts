import { GoogleGenAI, Type } from "@google/genai";

export interface ChemicalIntelligence {
  nameEn: string;
  nameAr: string;
  formula: string;
  casNumber: string;
  storageTemp: string;
  hazardClass: 'safe' | 'danger';
  ghs: string[];
  expiryYears: number;
  notes: string;
}

export async function getChemicalIntelligence(name: string, retries = 5, delay = 3000): Promise<ChemicalIntelligence | null> {
  try {
    // Initialize GoogleGenAI inside the function to ensure the most up-to-date API key is used
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || process.env.GEMINI_API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide detailed chemical information for: "${name}". 
      Return the data in JSON format with the following fields:
      - nameEn: English name
      - nameAr: Arabic name
      - formula: Chemical formula
      - casNumber: CAS registry number
      - storageTemp: Recommended storage temperature (e.g. "2-8°C", "Room Temp")
      - hazardClass: either 'safe' or 'danger'
      - ghs: array of GHS codes (e.g. ["GHS01", "GHS02"])
      - expiryYears: typical shelf life in years as a number
      - notes: brief safety and storage notes in Arabic`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            nameEn: { type: Type.STRING },
            nameAr: { type: Type.STRING },
            formula: { type: Type.STRING },
            casNumber: { type: Type.STRING },
            storageTemp: { type: Type.STRING },
            hazardClass: { type: Type.STRING, enum: ['safe', 'danger'] },
            ghs: { type: Type.ARRAY, items: { type: Type.STRING } },
            expiryYears: { type: Type.NUMBER },
            notes: { type: Type.STRING },
          },
          required: ["nameEn", "nameAr", "formula", "casNumber", "storageTemp", "hazardClass", "ghs", "expiryYears", "notes"],
        },
      },
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text.trim()) as ChemicalIntelligence;
  } catch (error: any) {
    const errorMessage = error?.message || String(error);
    const isQuotaExceeded = errorMessage.includes("quota") || errorMessage.includes("RESOURCE_EXHAUSTED");
    
    // Handle rate limit (429) errors with exponential backoff
    if (error?.status === 'RESOURCE_EXHAUSTED' || error?.code === 429 || isQuotaExceeded) {
      // If it's a hard quota limit (daily/monthly), retrying won't help immediately
      if (errorMessage.includes("check your plan and billing details") || errorMessage.includes("Hard quota limit reached")) {
        console.error("Hard quota limit reached. Please check your Gemini API billing/plan.");
        
        // If the user hasn't selected their own key, prompt them to do so
        if (typeof window !== 'undefined' && (window as any).aistudio?.openSelectKey) {
          const hasKey = await (window as any).aistudio.hasSelectedApiKey();
          if (!hasKey) {
            console.warn("Prompting user to select their own API key due to quota exhaustion.");
            await (window as any).aistudio.openSelectKey();
            // After selecting a key, we can try one more time
            return getChemicalIntelligence(name, 1, delay);
          }
        }
        return null;
      }

      if (retries > 0) {
        console.warn(`Rate limit hit for "${name}". Retrying in ${delay}ms... (${retries} retries left)`);
        await new Promise(resolve => setTimeout(resolve, delay));
        return getChemicalIntelligence(name, retries - 1, delay * 1.5);
      }
    }
    
    console.error("Error fetching chemical intelligence:", error);
    return null;
  }
}
