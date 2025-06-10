import { useState } from "react";
import { useChat } from "../context/ChatContext";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const { sendMessage, loading } = useChat();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    sendMessage(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
      <input
        type="text"
        value={input}
        disabled={loading}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask something..."
        className="flex-1 border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </form>
  );
}
