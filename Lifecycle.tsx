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
    <div style={{ paddingTop: "0.5rem" }}>
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          marginBottom: "0.3rem",
        }}
      >
        Assessment Lifecycle
      </h2>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginBottom: "1.3rem",
        }}
      >
        Standard phases each security assessment passes through.
      </p>

      <div
        style={{
          borderRadius: "0.9rem",
          border: "1px solid #e5e7eb",
          backgroundColor: "rgba(255,255,255,0.95)",
          boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
          padding: "0.4rem 0.4rem 0.2rem",
        }}
      >
        {steps.map((step, index) => (
          <div
            key={step}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.8rem",
              padding: "0.7rem 0.9rem",
              borderBottom:
                index === steps.length - 1 ? "none" : "1px solid #e5e7eb",
            }}
          >
            <span
              style={{
                width: "1.6rem",
                textAlign: "right",
                fontSize: "0.85rem",
                color: "#6b7280",
              }}
            >
              {index + 1}.
            </span>
            <span
              style={{
                fontSize: "0.95rem",
                color: "#111827",
              }}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lifecycle;
