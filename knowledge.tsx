import React from "react";

const Knowledge: React.FC = () => (
  <div className="space-y-4">
    <div>
      <h2 className="text-2xl font-semibold text-slate-900">Knowledge Base</h2>
      <p className="mt-1 text-sm text-slate-500">
        Manage shared data sources and playbooks accessible to all agents and
        projects.
      </p>
    </div>

    <div className="rounded-xl border border-dashed border-slate-300 bg-white/60 p-6 text-sm text-slate-500">
      Future area for connecting sources like Confluence, Google Drive, and
      code repositories. Centralize everything your agents should know about
      your environment.
    </div>
  </div>
);

export default Knowledge;
