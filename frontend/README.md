 App (React + Node.js)

A simplified Chat-style application with session-based chat, structured responses, and a responsive UI. Built using React, TailwindCSS, and Express.js with mock JSON APIs — no database required.



 Features

 Frontend (React + TailwindCSS)
- Landing Page: Start a new chat instantly
- Sidebar Panel:
  - List of all sessions with dynamic titles
  - “New Chat” button
  - User info section
  - Collapsible layout
- Chat Interface:
  - Ask questions and receive structured tabular answers
  - Display full conversation history per session
  - Like 👍 / Dislike 👎 feedback buttons
- Theme Toggle:
  - Switch between dark and light modes
  - Responsive styling across mobile and desktop

 Backend (Node.js + Express)
- Mock Data APIs:
  - `GET /api/sessions` → List all sessions
  - `GET /api/new-chat` → Create new session
  - `GET /api/session/:id` → Fetch session history
  - `POST /api/chat/:id` → Submit question, return structured response
- Session Management:
  - Session ID embedded in URL
  - Dynamic session titles based on first question
  - No database — all data served from in-memory JSON



 Folder Structure
 chat-app/ ├── backend/ │   ├── server.js │   ├── mockData.js │   └── package.json └── frontend/ ├── src/ │   ├── App.jsx │   ├── main.jsx │   ├── index.css │   └── components/ │       ├── Sidebar.jsx │       ├── ChatWindow.jsx │       └── TableResponse.jsx ├── index.html ├── tailwind.config.js └── package.jso

