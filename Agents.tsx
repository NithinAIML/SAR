import React from "react";

const Agents: React.FC = () => {
  const agents = [
    {
      name: "Workflow Orchestrator",
      desc: "Coordinates multi-step assessments and routes tasks to other agents.",
      initials: "WO",
    },
    {
      name: "Research Assistant",
      desc: "Collects context from sources and summarizes security findings.",
      initials: "RA",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">Agents</h2>
        <p className="mt-1 text-sm text-slate-500">
          AI agents that power your security readiness workflows.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {agents.map((a) => (
          <div
            key={a.name}
            className="flex gap-3 rounded-xl border border-slate-200 bg-white/60 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold uppercase tracking-wide text-white">
              {a.initials}
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                {a.name}
              </h3>
              <p className="mt-1 text-xs text-slate-500">{a.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Agents;
