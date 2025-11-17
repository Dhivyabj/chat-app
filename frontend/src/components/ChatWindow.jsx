import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TableResponse from "./TableResponse";

function ChatWindow() {
  const { sessionId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/session/${sessionId}`)
      .then(res => res.json())
      .then(setMessages);
  }, [sessionId]);

  const sendMessage = async () => {
    const res = await fetch(`http://localhost:5000/api/chat/${sessionId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input })
    });
    const data = await res.json();
    setMessages(prev => [...prev, { role: "user", message: input }, { role: "bot", message: data.message }]);
    setTableData(data.table);
    setInput("");
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      {messages.map((m, i) => (
        <div key={i} className={`mb-2 ${m.role === "user" ? "text-right" : "text-left"}`}>
         <div className="inline-block px-3 py-2 rounded bg-gray-200 dark:bg-gray-700">
          <p>{m.message}</p>
           {m.role === "bot" && (
          <div className="mt-2 flex gap-2 text-sm text-gray-600 dark:text-gray-300">
           <button className="hover:text-green-600">👍</button>
           <button className="hover:text-red-600">👎</button>
        </div>
    )}
    </div> 
        </div>
      ))}
      <div className="mt-4 flex">
        <input value={input} onChange={e => setInput(e.target.value)} className="flex-1 border p-2" />
        <button onClick={sendMessage} className="ml-2 bg-green-500 text-white px-4 py-2 rounded">Send</button>
      </div>
      {tableData && <TableResponse data={tableData} />}
    </div>
  );
}

export default ChatWindow;