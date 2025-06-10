import ChatBox from "./components/ChatBox";
import ChatInput from "./components/ChatInput";
import { ChatProvider } from "./context/ChatContext";

function App() {
  return (
    <ChatProvider>
      <div className="max-w-md mx-auto mt-10 p-4 border shadow rounded bg-white">
        <h1 className="text-xl font-bold mb-4">Gemini Chat Widget</h1>
        <ChatBox />
        <ChatInput />
      </div>
    </ChatProvider>
  );
}

export default App;
