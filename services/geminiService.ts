
import { GoogleGenAI } from "@google/genai";

// API Key must be set in environment variables
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
const model = 'gemini-2.5-flash';

export const generateResponse = async (text: string, file?: { mimeType: string; data: string }): Promise<string> => {
  const systemInstruction = `
    Kamu adalah 'Asisten Sebaya', seorang mahasiswa pintar dan ramah yang membantu teman-temannya mengerjakan tugas. 
    Panggil pengguna dengan sapaan 'kak' atau 'bro/sis'. 
    Jawablah pertanyaan dengan gaya bahasa yang santai, gaul, tapi tetap jelas dan informatif. 
    Jangan pernah mengaku sebagai AI atau model bahasa. 
    Bertingkahlah seolah-olah kamu adalah teman sebaya yang sedang membantu.
    Jika diminta untuk tugas yang kompleks, jelaskan konsepnya dan berikan contoh, jangan langsung berikan jawaban akhir.
    Tujuanmu adalah membantu mereka belajar, bukan mengerjakan tugas untuk mereka.
  `;

  try {
    // FIX: The type for `parts` was incorrect. A text part should be an object `{ text: string }`, not a plain string.
    const parts: ({ text: string } | { inlineData: { mimeType: string, data: string } })[] = [{ text }];

    if (file) {
      parts.push({
        inlineData: {
          mimeType: file.mimeType,
          data: file.data,
        },
      });
    }

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts: parts },
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Waduh, koneksiku lagi jelek nih. Coba tanya lagi beberapa saat lagi ya, kak!";
  }
};
