import { useState, useEffect } from "react";
import { Send } from "@mui/icons-material";

const Chatbox = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "owner" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Predefined bot responses
  const botReplies = {
    "hello": "Hi there! How can I assist you?",
    "status": "Your shipment is currently in transit.",
    "driver": "Your assigned driver is Jackson Cole.",
    "truck": "You're using a MAN TGX truck.",
    "thank you": "You're welcome! Let me know if you need anything else.",
    "Kadavuley":"Ajitheyy.",
    "default": "I'm not sure about that. Can you rephrase?",
  };

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = { text: newMessage, sender: "user" };
    setMessages([...messages, userMessage]);
    setNewMessage("");

    // Auto-reply after a short delay
    setTimeout(() => {
      const lowerMessage = newMessage.toLowerCase();
      const reply = botReplies[lowerMessage] || botReplies["default"];

      setMessages((prev) => [...prev, { text: reply, sender: "owner" }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-white shadow-md rounded-lg p-3">
      {/* Chat Header */}
      <div className="font-semibold text-lg text-gray-900 border-b pb-2">
        User
      </div>

      {/* Messages Section */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg w-fit max-w-xs ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end ml-auto"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="border-t pt-2 flex items-center space-x-2">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg outline-none"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-600"
        >
          <Send fontSize="small" />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
