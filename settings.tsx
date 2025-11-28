import React from "react";

const Settings: React.FC = () => (
  <div className="space-y-6">
    <div>
      <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
      <p className="mt-1 text-sm text-slate-500">
        Modify AI agent configurations and system instructions.
      </p>
    </div>

    <div className="grid gap-4 md:grid-cols-2">
      <section className="rounded-xl border border-slate-200 bg-white/60 p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">
          System Instructions
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          High-level guidance that all agents should follow when answering
          questions.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white/60 p-4 shadow-sm">
        <h3 className="text-sm font-semibold text-slate-900">
          Integrations
        </h3>
        <p className="mt-1 text-xs text-slate-500">
          Configure connections to scanners, ticketing systems, and asset
          inventories.
        </p>
      </section>
    </div>
  </div>
);

export default Settings;
