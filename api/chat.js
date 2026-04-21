import { GoogleGenerativeAI } from "@google/generative-ai";
import { clubKnowledge } from "./knowledge.js";

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Solo se permite el método POST" });
  }

  try {
    const { message } = req.body;
    
    // Aquí es donde Vercel leerá la variable de entorno que vas a configurar
    // process.env.GEMINI_API_KEY será tu llave secreta.
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    
    // Usamos 'gemini-2.5-flash', el modelo rápido, económico/gratuito y perfecto para texto.
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // El System Prompt define la "personalidad" y los límites de tu asistente.
    const systemInstruction = `
      Eres Chispa-Bot, el asistente virtual amigable de "Chispeando Ideas", 
      un club de educación STEAM y robótica al aire libre en México para niños de 4 a 9 años.
      Tu objetivo principal es enamorar a los padres con el proyecto y convencerlos 
      sutilmente para que pidan una "clase de prueba".
      Usa un tono empático, alegre y usa emojis. 
      NUNCA salgas de tu personaje ni respondas preguntas que no sean relacionadas 
      a la educación STEAM, pedagogía o información de la academia. 
      Sé breve (máximo un párrafo corto). ¡Sé encantador!

      --- ESTA ES LA BASE DE CONOCIMIENTO SOBRE LA ACADEMIA: ---
      ${clubKnowledge}
    `;

    // Combinamos las instrucciones del sistema con el mensaje del padre
    const prompt = `${systemInstruction}\n\nMensaje del padre/madre: ${message}\n\nRespuesta de Chispa-Bot:`;

    // Solicitamos a Gemini que genere la respuesta
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Devolvemos el texto a la interfaz (React)
    return res.status(200).json({ text });
  } catch (error) {
    console.error("Error en la API de Gemini:", error);
    return res.status(500).json({ error: "Ocurrió un error al procesar tu solicitud con la IA." });
  }
}
