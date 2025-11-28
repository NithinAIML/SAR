import React, { useState } from "react";
import { callLLM } from "../utils/mockLLM";

interface QueueProps {
  showToast: (msg: string) => void;
}

interface Task {
  id: string;
  title: string;
  assignee: string;
}

const Queue: React.FC<QueueProps> = ({ showToast }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "TSK-501",
      title: "Collect asset posture from Wiz",
      assignee: "Research Assistant",
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const generateTasks = async () => {
    setIsThinking(true);
    try {
      const result = await callLLM("Suggest 5 to 7 high-level, actionable tasks");
      const parsed: string[] = JSON.parse(result);
      const newTasks: Task[] = parsed.map((title) => ({
        id: `TSK-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
        title,
        assignee: "Workflow Orchestrator",
      }));
      setTasks((prev) => [...prev, ...newTasks]);
      showToast("Tasks generated successfully");
    } catch (e) {
      showToast("Failed to generate tasks");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: "1rem",
          marginBottom: "1.1rem",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "1.7rem",
              fontWeight: 700,
              marginBottom: "0.3rem",
            }}
          >
            Task Queue
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: "0.9rem",
            }}
          >
            Upcoming actions for your agents to execute.
          </p>
        </div>

        <button
          onClick={generateTasks}
          disabled={isThinking}
          style={{
            borderRadius: "0.7rem",
            border: "none",
            backgroundColor: "#2563eb",
            color: "#ffffff",
            padding: "0.4rem 0.9rem",
            fontSize: "0.85rem",
            fontWeight: 600,
            cursor: isThinking ? "default" : "pointer",
            opacity: isThinking ? 0.6 : 1,
          }}
        >
          {isThinking ? "Generating…" : "Suggest Tasks"}
        </button>
      </div>

      <div
        style={{
          borderRadius: "0.9rem",
          border: "1px solid #e5e7eb",
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          padding: "1.1rem 1.3rem",
        }}
      >
        {tasks.length === 0 ? (
          <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            No queued tasks. Generate tasks to keep agents busy.
          </p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {tasks.map((t) => (
              <li
                key={t.id}
                style={{
                  padding: "0.6rem 0",
                  borderBottom: "1px solid #e5e7eb",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    color: "#111827",
                  }}
                >
                  {t.title}
                </p>
                <p
                  style={{
                    margin: "0.2rem 0 0",
                    fontSize: "0.85rem",
                    color: "#4b5563",
                  }}
                >
                  <strong>Assignee:</strong> {t.assignee}
                </p>
                <p
                  style={{
                    margin: "0.15rem 0 0",
                    fontSize: "0.8rem",
                    color: "#9ca3af",
                  }}
                >
                  {t.id}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Queue;
