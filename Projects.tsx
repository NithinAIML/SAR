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
        return "bg-emerald-100 text-emerald-700";
      case "In Review":
        return "bg-amber-100 text-amber-700";
      case "Queued":
      default:
        return "bg-slate-100 text-slate-700";
    }
  };

  const riskTone = (score: number) => {
    if (score >= 80) return "bg-rose-100 text-rose-700";
    if (score >= 60) return "bg-amber-100 text-amber-700";
    return "bg-emerald-100 text-emerald-700";
  };

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Projects</h2>
        <p className="mt-1 text-sm text-slate-500">
          Active security readiness initiatives and their current risk posture.
        </p>
      </div>

      {/* Project cards */}
      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.id}
            className="rounded-xl border border-slate-200 bg-white/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.name}
                </h3>
                <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                  <span
                    className={
                      "inline-flex items-center rounded-full px-2 py-0.5 font-medium " +
                      statusClasses(p.status)
                    }
                  >
                    {p.status}
                  </span>
                  <span
                    className={
                      "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-semibold " +
                      riskTone(p.riskScore)
                    }
                  >
                    Risk {p.riskScore}
                  </span>
                </div>
              </div>

              <button
                onClick={() => deleteProject(p.id)}
                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:border-rose-300 hover:bg-rose-50 hover:text-rose-700"
              >
                Delete
              </button>
            </div>

            <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
              <p>
                <span className="font-medium text-slate-500">ID:</span> {p.id}
              </p>
              <p>
                <span className="font-medium text-slate-500">Owner:</span>{" "}
                {p.owner}
              </p>
              <p>
                <span className="font-medium text-slate-500">Risk Score:</span>{" "}
                {p.riskScore}
              </p>
            </div>
          </article>
        ))}

        {projects.length === 0 && (
          <p className="text-sm text-slate-500">
            No active projects. Start a new assessment from the header.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
