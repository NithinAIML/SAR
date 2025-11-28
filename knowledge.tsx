import React from "react";

const Knowledge: React.FC = () => {
  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          marginBottom: "0.3rem",
        }}
      >
        Knowledge Base
      </h2>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginBottom: "1.3rem",
        }}
      >
        Manage shared data sources and playbooks accessible to all agents and
        projects.
      </p>

      <div
        style={{
          borderRadius: "0.9rem",
          border: "1px dashed #d1d5db",
          backgroundColor: "rgba(255,255,255,0.9)",
          boxShadow: "0 3px 10px rgba(15,23,42,0.04)",
          padding: "1.2rem 1.3rem",
          fontSize: "0.9rem",
          color: "#4b5563",
        }}
      >
        Future area for connecting sources like Confluence, Google Drive, and
        code repositories. Centralize everything your agents should know about
        your environment.
      </div>
    </div>
  );
};

export default Knowledge;
