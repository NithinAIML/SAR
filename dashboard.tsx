import React, { useState } from "react";
import { callLLM } from "../utils/mockLLM";

interface ChatMessage {
  sender: "user" | "orchestrator";
  text: string;
}

const Dashboard: React.FC = () => {
  const [chat, setChat] = useState<ChatMessage[]>([
    { sender: "orchestrator", text: "Welcome! Ask me anything." },
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    setChat((prev) => [...prev, { sender: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    try {
      const result = await callLLM(`Answer: ${trimmed}`);
      setChat((prev) => [
        ...prev,
        { sender: "orchestrator", text: result },
      ]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        {
          sender: "orchestrator",
          text: "Sorry, I couldn't generate a response.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          marginBottom: "0.3rem",
        }}
      >
        Dashboard
      </h2>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginBottom: "1.3rem",
        }}
      >
        Security Readiness Advisor – ask questions and explore insights.
      </p>

      <div
        style={{
          borderRadius: "0.9rem",
          border: "1px solid #e5e7eb",
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          padding: "1.25rem 1.3rem",
          maxWidth: "720px",
        }}
      >
        <h3
          style={{
            margin: "0 0 0.8rem",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "#111827",
          }}
        >
          Security Readiness Advisor
        </h3>

        {/* Chat area */}
        <div
          style={{
            maxHeight: "260px",
            overflowY: "auto",
            padding: "0.15rem 0.1rem 0.75rem",
            marginBottom: "0.75rem",
            borderBottom: "1px solid #e5e7eb",
          }}
        >
          {chat.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "0.45rem",
              }}
            >
              <div
                style={{
                  maxWidth: "80%",
                  padding: "0.45rem 0.65rem",
                  borderRadius:
                    msg.sender === "user" ? "0.75rem 0.75rem 0.1rem 0.75rem" : "0.75rem 0.75rem 0.75rem 0.1rem",
                  backgroundColor:
                    msg.sender === "user" ? "#2563eb" : "#f3f4f6",
                  color: msg.sender === "user" ? "#ffffff" : "#111827",
                  fontSize: "0.85rem",
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isThinking && (
            <p
              style={{
                fontSize: "0.8rem",
                color: "#9ca3af",
                fontStyle: "italic",
              }}
            >
              Thinking…
            </p>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0.5rem" }}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            style={{
              flex: 1,
              borderRadius: "0.7rem",
              border: "1px solid #d1d5db",
              padding: "0.45rem 0.7rem",
              fontSize: "0.9rem",
            }}
          />
          <button
            type="submit"
            disabled={isThinking}
            style={{
              borderRadius: "0.7rem",
              border: "none",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "0.45rem 0.95rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: isThinking ? "default" : "pointer",
              opacity: isThinking ? 0.65 : 1,
            }}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
