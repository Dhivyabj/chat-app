import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

 function Sidebar() {
   const [sessions, setSessions] = useState([]);
   const navigate = useNavigate();

   useEffect(() => {
     fetch("http://localhost:5000/api/sessions")
       .then(res => res.json())
       .then(setSessions);
   }, []);

   const startNewChat = async () => {
     const res = await fetch("http://localhost:5000/api/new-chat");
     const data = await res.json();
     navigate(`/chat/${data.id}`);
   };

   return (
     <div className="w-64 bg-gray-100 dark:bg-gray-800 p-4">
       <button onClick={startNewChat} className="mb-4 bg-blue-500 text-white px-4 py-2 rounded">
         + New Chat
       </button>
       <ul className="space-y-2">
        {sessions.map(s => (
          <li
            key={s.id}
            onClick={() => navigate(`/chat/${s.id}`)}
            className="cursor-pointer px-3 py-2 rounded hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <span className="block text-sm font-medium truncate text-gray-800 dark:text-gray-200">
              {s.title}
            </span>
          </li>
        ))}
       </ul>
     </div>
   );
 }



export default Sidebar;