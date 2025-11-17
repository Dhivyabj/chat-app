const sessions = [
  { id: "session1", title: "React Basics" },
  { id: "session2", title: "Node.js Overview" }
];

const conversations = {
  session1: [
    { role: "user", message: "What is React?" },
    { role: "bot", message: "React is a JavaScript library for building UIs." }
  ],
  session2: [
    { role: "user", message: "What is Node.js?" },
    { role: "bot", message: "Node.js is a runtime for executing JavaScript on the server." }
  ]
};

module.exports = { sessions, conversations };