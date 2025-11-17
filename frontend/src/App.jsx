import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ChatWindow from "./components/ChatWindow";

function App() {
  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <Sidebar />
      <Routes>
        <Route path="/" element={<div className="p-4">Start a new chat</div>} />
        <Route path="/chat/:sessionId" element={<ChatWindow />} />
      </Routes>
    </div>
  );
}

export default App;
