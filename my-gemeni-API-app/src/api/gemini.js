import axios from "axios";

const API_KEY = "YOUR_GEMINI_API_KEY";

export const sendMessageToGemini = async (messages) => {
  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: messages.map((msg) => ({
              text: msg.text,
            })),
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";
  } catch (error) {
    throw new Error("Error communicating with Gemini API.");
  }
};
