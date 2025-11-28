import React from "react";

const Lifecycle: React.FC = () => {
  const steps = [
    "Intake & Scoping",
    "Documentation Collection",
    "Pre-Assessment Review",
    "Assessment in Progress",
    "Final Reporting",
    "Closed",
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Assessment Lifecycle
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Standard phases each security assessment passes through.
        </p>
      </div>

      <ol className="relative space-y-4 border-l border-slate-200 pl-4">
        {steps.map((step, i) => (
          <li key={step} className="ml-2">
            <div className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-blue-500" />
            <div className="rounded-lg bg-white/70 px-4 py-3 shadow-sm">
              <p className="text-sm font-medium text-slate-900">
                {i + 1}. {step}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Lifecycle;
