import { createContext, useContext, useState } from "react";
import { sendMessageToGemini } from "../api/gemini";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (userText) => {
    const userMessage = { role: "user", text: userText };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setError(null);

    try {
      const aiReply = await sendMessageToGemini([...messages, userMessage]);
      setMessages((prev) => [...prev, { role: "bot", text: aiReply }]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage, loading, error }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
