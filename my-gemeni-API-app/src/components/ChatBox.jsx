import { useChat } from "../context/ChatContext";
import Message from "./Message";

export default function ChatBox() {
  const { messages, loading, error } = useChat();

  return (
    <div className="flex flex-col p-4 overflow-y-auto h-[400px] border rounded">
      {messages.map((msg, index) => (
        <Message key={index} role={msg.role} text={msg.text} />
      ))}
      {loading && <Message role="bot" text="Typing..." />}
      {error && (
        <p className="text-red-500 text-sm mt-2">Error: {error}</p>
      )}
    </div>
  );
}
