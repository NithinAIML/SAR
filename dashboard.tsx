import React, { useState } from "react";
import { callLLM } from "../utils/mockLLM";

type Sender = "orchestrator" | "user";

interface ChatMessage {
  sender: Sender;
  text: string;
}

const Dashboard: React.FC = () => {
  const [chat, setChat] = useState<ChatMessage[]>([
    { sender: "orchestrator", text: "Welcome! Ask me anything." },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputEl = document.getElementById("advisor-input") as HTMLInputElement;
    if (!inputEl) return;
    const input = inputEl.value.trim();
    if (!input) return;

    setChat((prev) => [...prev, { sender: "user", text: input }]);
    inputEl.value = "";
    setIsThinking(true);

    const result = await callLLM(`Answer: ${input}`);
    setChat((prev) => [
      ...prev,
      { sender: "orchestrator", text: result },
    ]);
    setIsThinking(false);
  };

  return (
    <div>
      {/* Page heading */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p
          style={{
            fontSize: "11px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.18em",
            color: "#6b7280",
            margin: 0,
          }}
        >
          Dashboard
        </p>
        <h2
          style={{
            margin: "0.25rem 0 0",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#0f172a",
          }}
        >
          Security Readiness Advisor
        </h2>
        <p
          style={{
            margin: "0.35rem 0 0",
            fontSize: "0.9rem",
            color: "#6b7280",
          }}
        >
          Ask questions about security readiness, projects, agents, and tasks.
        </p>
      </div>

      {/* Advisor card */}
      <div
        style={{
          borderRadius: "1rem",
          border: "1px solid #e5e7eb",
          backgroundColor: "#f9fafb",
          padding: "1.25rem 1.5rem",
        }}
      >
        {/* Messages */}
        <div
          style={{
            marginBottom: "1rem",
            maxHeight: "18rem",
            overflowY: "auto",
          }}
        >
          {chat.map((msg, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                justifyContent:
                  msg.sender === "user" ? "flex-end" : "flex-start",
                marginBottom: "0.4rem",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  maxWidth: "80%",
                  padding: "0.4rem 0.7rem",
                  borderRadius: "0.75rem",
                  fontSize: "0.9rem",
                  boxShadow: "0 2px 6px rgba(15, 23, 42, 0.15)",
                  backgroundColor:
                    msg.sender === "user" ? "#2563eb" : "#ffffff",
                  color: msg.sender === "user" ? "#ffffff" : "#111827",
                }}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {isThinking && (
          <p
            style={{
              marginBottom: "0.5rem",
              fontSize: "0.8rem",
              fontStyle: "italic",
              color: "#9ca3af",
            }}
          >
            Thinking…
          </p>
        )}

        {/* Input row */}
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", gap: "0.75rem" }}
        >
          <input
            id="advisor-input"
            type="text"
            placeholder="Ask a question…"
            style={{
              flex: 1,
              borderRadius: "0.5rem",
              border: "1px solid #d1d5db",
              padding: "0.45rem 0.7rem",
              fontSize: "0.9rem",
              color: "#111827",
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={isThinking}
            style={{
              borderRadius: "0.5rem",
              border: "none",
              padding: "0.45rem 0.9rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "#ffffff",
              backgroundColor: isThinking ? "#93c5fd" : "#2563eb",
              cursor: isThinking ? "default" : "pointer",
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
