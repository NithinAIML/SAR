import React from "react";

const Agents: React.FC = () => {
  const agents = [
    {
      name: "Workflow Orchestrator",
      desc: "Coordinates multi-step assessments and routes tasks to other agents.",
    },
    {
      name: "Research Assistant",
      desc: "Collects context from sources and summarizes security findings.",
    },
  ];

  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          marginBottom: "0.3rem",
        }}
      >
        Agents
      </h2>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginBottom: "1.3rem",
        }}
      >
        AI agents that power your security readiness workflows.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {agents.map((a) => (
          <div
            key={a.name}
            style={{
              borderRadius: "0.9rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "rgba(255,255,255,0.95)",
              boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
              padding: "1.1rem 1.3rem",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              {a.name}
            </h3>
            <p
              style={{
                marginTop: "0.4rem",
                fontSize: "0.9rem",
                color: "#4b5563",
              }}
            >
              {a.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
