
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
Sen "Mesa Hukuk Asistanı" adlı yapay zeka yardımcısısın. 
Görevin, kullanıcılara temel hukuki bilgiler vermek ve Mesa Hukuk'un (Mesa Law Firm) hizmetlerini tanıtmaktır.
ÖNEMLİ: Sen bir avukat değilsin. Her cevabında veya konuşmanın başında bunun bir profesyonel hukuki tavsiye olmadığını, sadece bilgilendirme amaçlı olduğunu belirtmelisin.
Kullanıcıların ciddi hukuki sorunları için mutlaka Mesa Hukuk ekibi ile iletişime geçmelerini önermelisin.
Cevaplarını kısa, son derece profesyonel, güven verici ve elit bir dille sun.
Hukuki konularda genel prensiplerden bahset ancak spesifik sonuç garantisi verme.
`;

export async function getLegalAssistantResponse(history: Message[]): Promise<string> {
  try {
    // Initializing with exact configuration from guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const model = 'gemini-3-flash-preview';

    // Map history to the Content[] format expected by the API
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    // Calling generateContent with full context history
    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    // Access the text property directly (property, not a method)
    return response.text || "Şu anda size yanıt veremiyorum, lütfen daha sonra tekrar deneyiniz veya doğrudan ofisimizle iletişime geçiniz.";
  } catch (error) {
    console.error("AI Assistant Error:", error);
    return "Bağlantı sırasında bir hata oluştu. Mesa Hukuk olarak size en iyi hizmeti vermek isteriz, lütfen telefon numaramızdan bize ulaşın.";
  }
}
