import React, { useState } from "react";

interface ProjectsProps {
  showToast: (msg: string) => void;
}

interface Project {
  id: string;
  name: string;
  owner: string;
  status: "Running" | "In Review" | "Queued";
  riskScore: number;
}

const Projects: React.FC<ProjectsProps> = ({ showToast }) => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "PX-1042",
      name: "SOC2 Readiness",
      owner: "ES&F",
      status: "In Review",
      riskScore: 82,
    },
    {
      id: "ASR-88",
      name: "Attack Surface Reduction",
      owner: "Platform",
      status: "Running",
      riskScore: 65,
    },
    {
      id: "IAM-12",
      name: "IAM Modernization",
      owner: "Security",
      status: "Queued",
      riskScore: 40,
    },
  ]);

  const deleteProject = (id: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== id));
    showToast(`Project ${id} deleted`);
  };

  const statusClasses = (status: Project["status"]) => {
    switch (status) {
      case "Running":
        return "background-color:#dcfce7;color:#166534;";
      case "In Review":
        return "background-color:#fef3c7;color:#92400e;";
      case "Queued":
      default:
        return "background-color:#e5e7eb;color:#374151;";
    }
  };

  const riskClasses = (score: number) => {
    if (score >= 80) return "background-color:#fee2e2;color:#991b1b;";
    if (score >= 60) return "background-color:#fef3c7;color:#92400e;";
    return "background-color:#dcfce7;color:#166534;";
  };

  return (
    <div style={{ paddingTop: "0.5rem" }}>
      <h2 style={{ fontSize: "1.7rem", fontWeight: 700, marginBottom: "0.3rem" }}>
        Projects
      </h2>
      <p style={{ color: "#6b7280", fontSize: "0.9rem", marginBottom: "1.3rem" }}>
        Active security readiness initiatives and their current risk posture.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {projects.map((p) => (
          <article
            key={p.id}
            style={{
              padding: "1.1rem 1.3rem",
              borderRadius: "0.9rem",
              border: "1px solid #e5e7eb",
              backgroundColor: "rgba(255,255,255,0.95)",
              boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
            }}
          >
            {/* Top row */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "0.75rem",
              }}
            >
              <div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "#111827",
                  }}
                >
                  {p.name}
                </h3>

                <div
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    marginTop: "0.45rem",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      borderRadius: 999,
                      padding: "0.15rem 0.6rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      ...styleFromString(statusClasses(p.status)),
                    }}
                  >
                    {p.status}
                  </span>
                  <span
                    style={{
                      borderRadius: 999,
                      padding: "0.15rem 0.6rem",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      ...styleFromString(riskClasses(p.riskScore)),
                    }}
                  >
                    Risk {p.riskScore}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteProject(p.id)}
                style={{
                  borderRadius: "0.6rem",
                  border: "1px solid #fecaca",
                  backgroundColor: "#fee2e2",
                  color: "#b91c1c",
                  padding: "0.35rem 0.75rem",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>

            {/* Meta info */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
                gap: "0.4rem",
                marginTop: "0.9rem",
                fontSize: "0.9rem",
                color: "#374151",
              }}
            >
              <p>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>ID:</span>{" "}
                {p.id}
              </p>
              <p>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>Owner:</span>{" "}
                {p.owner}
              </p>
              <p>
                <span style={{ color: "#6b7280", fontWeight: 500 }}>
                  Risk Score:
                </span>{" "}
                {p.riskScore}
              </p>
            </div>
          </article>
        ))}

        {projects.length === 0 && (
          <p style={{ fontSize: "0.9rem", color: "#6b7280" }}>
            No active projects. Use “New Project” in the header to start a new
            assessment.
          </p>
        )}
      </div>
    </div>
  );
};

/* helper: convert "a:b;c:d" into a style object */
function styleFromString(style: string): React.CSSProperties {
  const obj: Record<string, string> = {};
  style.split(";").forEach((s) => {
    const [k, v] = s.split(":");
    if (!k || !v) return;
    const key = k.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    obj[key] = v.trim();
  });
  return obj;
}

export default Projects;
