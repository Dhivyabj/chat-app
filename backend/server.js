const express = require("express");
const cors = require("cors");
const { sessions, conversations } = require("./mockData");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/api/sessions", (req, res) => res.json(sessions));

app.get("/api/new-chat", (req, res) => {
  const newId = `session${Date.now()}`;
  sessions.push({ id: newId, title: "New Chat" });
  conversations[newId] = [];
  res.json({ id: newId });
});

app.get("/api/session/:id", (req, res) => {
  const { id } = req.params;
  res.json(conversations[id] || []);
});

app.post("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const { question } = req.body;
  const mockAnswer = {
    message: "Here is a structured response.",
    table: [
      { name: "React", type: "Library", language: "JavaScript" },
      { name: "Express", type: "Framework", language: "JavaScript" }
    ]
  };
  conversations[id].push({ role: "user", message: question });
  conversations[id].push({ role: "bot", message: mockAnswer.message });

  const session = sessions.find(s => s.id === id);
  if (session && session.title === "New Chat") {
    session.title = question.slice(0, 30) + "..."; // Use first 30 chars
  }

  res.json(mockAnswer);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));