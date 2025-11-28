import React from "react";

const Settings: React.FC = () => {
  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          marginBottom: "0.3rem",
        }}
      >
        Settings
      </h2>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginBottom: "1.3rem",
        }}
      >
        Modify AI agent configurations and system instructions.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <section
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
            System Instructions
          </h3>
          <p
            style={{
              marginTop: "0.4rem",
              fontSize: "0.9rem",
              color: "#4b5563",
            }}
          >
            High-level guidance that all agents should follow when answering
            questions.
          </p>
        </section>

        <section
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
            Integrations
          </h3>
          <p
            style={{
              marginTop: "0.4rem",
              fontSize: "0.9rem",
              color: "#4b5563",
            }}
          >
            Configure connections to scanners, ticketing systems, and asset
            inventories.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Settings;
