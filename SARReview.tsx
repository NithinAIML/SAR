// import React, { useState } from "react";

// interface UploadedFile {
//   name: string;
//   size: number;
// }

// const cardBase: React.CSSProperties = {
//   borderRadius: "0.9rem",
//   border: "1px solid #e5e7eb",
//   backgroundColor: "rgba(255,255,255,0.96)",
//   boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
//   padding: "1.1rem 1.3rem",
// };

// const labelStyle: React.CSSProperties = {
//   fontSize: "0.85rem",
//   fontWeight: 600,
//   color: "#4b5563",
//   marginBottom: "0.25rem",
// };

// const helperStyle: React.CSSProperties = {
//   fontSize: "0.8rem",
//   color: "#9ca3af",
//   marginBottom: "0.6rem",
// };

// const fileBadgeStyle: React.CSSProperties = {
//   fontSize: "0.8rem",
//   padding: "0.25rem 0.5rem",
//   borderRadius: "999px",
//   backgroundColor: "#eef2ff",
//   color: "#3730a3",
//   display: "inline-block",
//   marginRight: "0.35rem",
//   marginBottom: "0.25rem",
// };

// const uploadButtonStyle: React.CSSProperties = {
//   display: "inline-flex",
//   alignItems: "center",
//   justifyContent: "center",
//   padding: "0.4rem 0.9rem",
//   borderRadius: "0.7rem",
//   border: "1px solid #d1d5db",
//   backgroundColor: "#f9fafb",
//   cursor: "pointer",
//   fontSize: "0.85rem",
//   fontWeight: 500,
//   color: "#111827",
// };

// const SARReview: React.FC = () => {
//   const [archFiles, setArchFiles] = useState<UploadedFile[]>([]);
//   const [refFiles, setRefFiles] = useState<UploadedFile[]>([]);
//   const [reviewStarted, setReviewStarted] = useState(false);

//   const handleArchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     setArchFiles(files.map((f) => ({ name: f.name, size: f.size })));
//   };

//   const handleRefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = Array.from(e.target.files || []);
//     setRefFiles(files.map((f) => ({ name: f.name, size: f.size })));
//   };

//   const handleStartReview = () => {
//     // in a real app you’d trigger the backend here
//     setReviewStarted(true);
//   };

//   const totalDocs = archFiles.length + refFiles.length;

//   return (
//     <div style={{ paddingTop: "0.5rem" }}>
//       {/* Page heading */}
//       <h2
//         style={{
//           fontSize: "1.7rem",
//           fontWeight: 700,
//           marginBottom: "0.3rem",
//         }}
//       >
//         SAR Review
//       </h2>
//       <p
//         style={{
//           color: "#6b7280",
//           fontSize: "0.9rem",
//           marginBottom: "1.3rem",
//         }}
//       >
//         Prepare and analyze security architecture for a Security Assessment
//         Review (SAR). Upload diagrams and reference documents, then start the
//         automated review.
//       </p>

//       {/* Upload + summary row */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1.3fr)",
//           gap: "1rem",
//           marginBottom: "1rem",
//         }}
//       >
//         {/* Upload card */}
//         <section style={cardBase}>
//           <h3
//             style={{
//               margin: 0,
//               fontSize: "1.05rem",
//               fontWeight: 600,
//               color: "#111827",
//               marginBottom: "0.75rem",
//             }}
//           >
//             Inputs
//           </h3>

//           {/* Architecture diagram */}
//           <div style={{ marginBottom: "1rem" }}>
//             <div style={labelStyle}>1. Upload Architecture Diagram</div>
//             <div style={helperStyle}>
//               Supported: images (PNG, JPG) and PDF diagrams.
//             </div>

//             <label style={uploadButtonStyle}>
//               Choose files…
//               <input
//                 type="file"
//                 accept=".png,.jpg,.jpeg,.pdf"
//                 multiple
//                 onChange={handleArchChange}
//                 style={{ display: "none" }}
//               />
//             </label>

//             {archFiles.length > 0 && (
//               <div style={{ marginTop: "0.55rem" }}>
//                 {archFiles.map((f) => (
//                   <span key={f.name} style={fileBadgeStyle}>
//                     {f.name}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Reference documents */}
//           <div>
//             <div style={labelStyle}>2. Upload Reference Documents</div>
//             <div style={helperStyle}>
//               Supported: PDFs, docs, spreadsheets, and other evidence files.
//             </div>

//             <label style={uploadButtonStyle}>
//               Choose files…
//               <input
//                 type="file"
//                 multiple
//                 onChange={handleRefChange}
//                 style={{ display: "none" }}
//               />
//             </label>

//             {refFiles.length > 0 && (
//               <div style={{ marginTop: "0.55rem" }}>
//                 {refFiles.map((f) => (
//                   <span key={f.name} style={fileBadgeStyle}>
//                     {f.name}
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>
//         </section>

//         {/* Sidebar summary + action */}
//         <aside style={cardBase}>
//           <h3
//             style={{
//               margin: 0,
//               fontSize: "1.05rem",
//               fontWeight: 600,
//               color: "#111827",
//               marginBottom: "0.75rem",
//             }}
//           >
//             Review Setup
//           </h3>

//           <p
//             style={{
//               fontSize: "0.87rem",
//               color: "#4b5563",
//               marginBottom: "0.9rem",
//             }}
//           >
//             Provide at least one architecture diagram and any supporting
//             reference documents. The review will focus on data flows,
//             trust boundaries, and control coverage.
//           </p>

//           <ul
//             style={{
//               paddingLeft: "1.1rem",
//               margin: 0,
//               marginBottom: "0.9rem",
//               fontSize: "0.85rem",
//               color: "#4b5563",
//             }}
//           >
//             <li>{archFiles.length || "No"} architecture files selected</li>
//             <li>{refFiles.length || "No"} reference documents selected</li>
//           </ul>

//           <button
//             onClick={handleStartReview}
//             disabled={totalDocs === 0}
//             style={{
//               marginTop: "0.2rem",
//               width: "100%",
//               borderRadius: "0.8rem",
//               border: "none",
//               padding: "0.55rem 0.95rem",
//               fontSize: "0.9rem",
//               fontWeight: 600,
//               cursor: totalDocs === 0 ? "default" : "pointer",
//               background:
//                 totalDocs === 0
//                   ? "#e5e7eb"
//                   : "linear-gradient(135deg, #2563eb, #1d4ed8)",
//               color: totalDocs === 0 ? "#9ca3af" : "#ffffff",
//               boxShadow:
//                 totalDocs === 0
//                   ? "none"
//                   : "0 8px 18px rgba(37,99,235,0.35)",
//             }}
//           >
//             Start SAR Review
//           </button>
//         </aside>
//       </div>

//       {/* Analysis / Review Results */}
//       {reviewStarted && (
//         <section style={{ ...cardBase, marginTop: "0.25rem" }}>
//           <h3
//             style={{
//               margin: 0,
//               fontSize: "1.05rem",
//               fontWeight: 600,
//               color: "#111827",
//               marginBottom: "0.75rem",
//             }}
//           >
//             SAR Review – Draft Analysis
//           </h3>

//           {/* High-level summary */}
//           <div style={{ marginBottom: "1rem" }}>
//             <div style={labelStyle}>Summary</div>
//             <p
//               style={{
//                 fontSize: "0.9rem",
//                 color: "#4b5563",
//                 marginTop: "0.15rem",
//               }}
//             >
//               Architecture shows a standard three-tier layout with public-facing
//               web components, internal APIs, and a shared data layer. Overall
//               control coverage is{" "}
//               <span style={{ fontWeight: 600 }}>moderate</span> with clear
//               opportunities to strengthen network isolation and secrets
//               management.
//             </p>
//           </div>

//           {/* Key risks */}
//           <div style={{ marginBottom: "1rem" }}>
//             <div style={labelStyle}>Key Risks Identified</div>
//             <ul
//               style={{
//                 paddingLeft: "1.1rem",
//                 margin: "0.3rem 0 0.4rem",
//                 fontSize: "0.88rem",
//                 color: "#4b5563",
//               }}
//             >
//               <li>
//                 Ingress traffic from the internet terminates directly on web
//                 workloads; no dedicated WAF or API gateway is shown.
//               </li>
//               <li>
//                 Shared database cluster hosts both sensitive and non-sensitive
//                 workloads without clear tenant isolation.
//               </li>
//               <li>
//                 Secrets appear to be injected via environment variables; no
//                 explicit secrets vault integration is documented.
//               </li>
//             </ul>
//           </div>

//           {/* Recommended actions */}
//           <div style={{ marginBottom: "1rem" }}>
//             <div style={labelStyle}>Recommended Actions (Next 30–60 Days)</div>
//             <ol
//               style={{
//                 paddingLeft: "1.1rem",
//                 margin: "0.3rem 0 0.4rem",
//                 fontSize: "0.88rem",
//                 color: "#4b5563",
//               }}
//             >
//               <li>
//                 Introduce a managed WAF / API gateway tier for all public
//                 ingress and centralize TLS termination.
//               </li>
//               <li>
//                 Split the shared database into distinct clusters or schemas with
//                 strict role-based access controls.
//               </li>
//               <li>
//                 Integrate a secrets management solution (e.g., vault / KMS) and
//                 replace static credentials in deployment configs.
//               </li>
//               <li>
//                 Document data flows for PII and regulated data, including
//                 logging, backup, and retention controls.
//               </li>
//             </ol>
//           </div>

//           {/* Quick metrics row */}
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               gap: "0.75rem",
//               fontSize: "0.8rem",
//             }}
//           >
//             <div
//               style={{
//                 padding: "0.4rem 0.7rem",
//                 borderRadius: "0.7rem",
//                 backgroundColor: "#ecfdf5",
//                 color: "#166534",
//               }}
//             >
//               Architecture coverage: <strong>~80%</strong> of major components
//               represented
//             </div>
//             <div
//               style={{
//                 padding: "0.4rem 0.7rem",
//                 borderRadius: "0.7rem",
//                 backgroundColor: "#fef3c7",
//                 color: "#92400e",
//               }}
//             >
//               Open risks: <strong>3 high</strong>, <strong>4 medium</strong>
//             </div>
//             <div
//               style={{
//                 padding: "0.4rem 0.7rem",
//                 borderRadius: "0.7rem",
//                 backgroundColor: "#eff6ff",
//                 color: "#1d4ed8",
//               }}
//             >
//               Suggested follow-up: architecture review workshop (60–90 minutes)
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// };

// export default SARReview;


import React, { useState } from "react";

interface UploadedFile {
  name: string;
  size: number;
}

const cardBase: React.CSSProperties = {
  borderRadius: "0.9rem",
  border: "1px solid #e5e7eb",
  backgroundColor: "rgba(255,255,255,0.96)",
  boxShadow: "0 3px 10px rgba(15,23,42,0.06)",
  padding: "1.1rem 1.3rem",
};

const labelStyle: React.CSSProperties = {
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "#4b5563",
  marginBottom: "0.25rem",
};

const helperStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  color: "#9ca3af",
  marginBottom: "0.6rem",
};

const fileBadgeStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  padding: "0.25rem 0.5rem",
  borderRadius: "999px",
  backgroundColor: "#eef2ff",
  color: "#3730a3",
  display: "inline-block",
  marginRight: "0.35rem",
  marginBottom: "0.25rem",
};

const uploadButtonStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.4rem 0.9rem",
  borderRadius: "0.7rem",
  border: "1px solid #d1d5db",
  backgroundColor: "#f9fafb",
  cursor: "pointer",
  fontSize: "0.85rem",
  fontWeight: 500,
  color: "#111827",
};

const SARReview: React.FC = () => {
  const [archFiles, setArchFiles] = useState<UploadedFile[]>([]);
  const [narrative, setNarrative] = useState("");
  const [reviewStarted, setReviewStarted] = useState(false);

  const handleArchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setArchFiles(files.map((f) => ({ name: f.name, size: f.size })));
  };

  const handleStartReview = () => {
    // real app would trigger backend here
    setReviewStarted(true);
  };

  const hasInputs = archFiles.length > 0 || narrative.trim().length > 0;

  return (
    <div style={{ paddingTop: "0.5rem" }}>
      {/* Page heading */}
      <h2
        style={{
          fontSize: "1.7rem",
          fontWeight: 700,
          marginBottom: "0.3rem",
        }}
      >
        SAR Review
      </h2>
      <p
        style={{
          color: "#6b7280",
          fontSize: "0.9rem",
          marginBottom: "1.3rem",
        }}
      >
        Prepare and analyze security architecture for a Security Assessment
        Review (SAR). Upload diagrams and provide a narrative, then start the
        automated review.
      </p>

      {/* Upload + summary row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1.3fr)",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        {/* Inputs card */}
        <section style={cardBase}>
          <h3
            style={{
              margin: 0,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#111827",
              marginBottom: "0.75rem",
            }}
          >
            Inputs
          </h3>

          {/* 1. Architecture diagram uploads */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={labelStyle}>1. Upload Architecture Diagram</div>
            <div style={helperStyle}>
              Supported: <strong>any file type</strong> – diagrams, exports,
              ZIPs, and design artifacts. You can attach multiple files.
            </div>

            <label style={uploadButtonStyle}>
              Choose files…
              <input
                type="file"
                multiple
                onChange={handleArchChange}
                style={{ display: "none" }}
              />
            </label>

            {archFiles.length > 0 && (
              <div style={{ marginTop: "0.55rem" }}>
                {archFiles.map((f) => (
                  <span key={f.name} style={fileBadgeStyle}>
                    {f.name}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* 2. Narrative prompt */}
          <div>
            <div style={labelStyle}>2. Provide Narrative</div>
            <div style={helperStyle}>
              Describe the system, key data flows, threat model assumptions, and
              any specific questions you want the SAR to focus on.
            </div>

            <textarea
              value={narrative}
              onChange={(e) => setNarrative(e.target.value)}
              rows={5}
              placeholder="Example: Internet users access the web tier via CloudFront & WAF. Payment data flows into the PCI segment... Focus the review on cross-account access and secrets handling."
              style={{
                width: "100%",
                borderRadius: "0.75rem",
                border: "1px solid #d1d5db",
                padding: "0.6rem 0.75rem",
                fontSize: "0.88rem",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />
          </div>
        </section>

        {/* Sidebar summary + action */}
        <aside style={cardBase}>
          <h3
            style={{
              margin: 0,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#111827",
              marginBottom: "0.75rem",
            }}
          >
            Review Setup
          </h3>

          <p
            style={{
              fontSize: "0.87rem",
              color: "#4b5563",
              marginBottom: "0.9rem",
            }}
          >
            Provide at least one architecture artifact or narrative context.
            The review will analyze data flows, trust boundaries, and control
            coverage using the materials you provide.
          </p>

          <ul
            style={{
              paddingLeft: "1.1rem",
              margin: 0,
              marginBottom: "0.9rem",
              fontSize: "0.85rem",
              color: "#4b5563",
            }}
          >
            <li>
              {archFiles.length === 0
                ? "No architecture files selected"
                : `${archFiles.length} architecture file${
                    archFiles.length > 1 ? "s" : ""
                  } selected`}
            </li>
            <li>
              Narrative:{" "}
              {narrative.trim().length === 0
                ? "not provided"
                : `${Math.min(
                    narrative.trim().split(/\s+/).length,
                    999
                  )} words`}
            </li>
          </ul>

          <button
            onClick={handleStartReview}
            disabled={!hasInputs}
            style={{
              marginTop: "0.2rem",
              width: "100%",
              borderRadius: "0.8rem",
              border: "none",
              padding: "0.55rem 0.95rem",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: hasInputs ? "pointer" : "default",
              background: hasInputs
                ? "linear-gradient(135deg, #2563eb, #1d4ed8)"
                : "#e5e7eb",
              color: hasInputs ? "#ffffff" : "#9ca3af",
              boxShadow: hasInputs
                ? "0 8px 18px rgba(37,99,235,0.35)"
                : "none",
            }}
          >
            Start SAR Review
          </button>
        </aside>
      </div>

      {/* Analysis / Review Results */}
      {reviewStarted && (
        <section style={{ ...cardBase, marginTop: "0.25rem" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#111827",
              marginBottom: "0.75rem",
            }}
          >
            SAR Review – Draft Analysis
          </h3>

          {/* High-level summary */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={labelStyle}>Summary</div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "#4b5563",
                marginTop: "0.15rem",
              }}
            >
              Based on the uploaded architecture artifacts and narrative, the
              system follows a standard tiered design with internet-facing
              components, internal services, and a shared data layer. Overall
              control coverage is{" "}
              <span style={{ fontWeight: 600 }}>moderate</span>, with clear
              opportunities to strengthen network isolation, secrets
              management, and observability for high-risk data flows.
            </p>
          </div>

          {/* Key risks */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={labelStyle}>Key Risks Identified</div>
            <ul
              style={{
                paddingLeft: "1.1rem",
                margin: "0.3rem 0 0.4rem",
                fontSize: "0.88rem",
                color: "#4b5563",
              }}
            >
              <li>
                Ingress traffic from the internet appears to terminate directly
                on application workloads; no dedicated WAF / API gateway tier is
                consistently documented.
              </li>
              <li>
                Shared database or data platform hosts multiple trust levels
                without clear tenant isolation or row-level access controls.
              </li>
              <li>
                Secrets and credentials are likely managed via static
                configuration or environment variables instead of a centralized
                secrets vault.
              </li>
            </ul>
          </div>

          {/* Recommended actions */}
          <div style={{ marginBottom: "1rem" }}>
            <div style={labelStyle}>Recommended Actions (Next 30–60 Days)</div>
            <ol
              style={{
                paddingLeft: "1.1rem",
                margin: "0.3rem 0 0.4rem",
                fontSize: "0.88rem",
                color: "#4b5563",
              }}
            >
              <li>
                Introduce a managed WAF / API gateway layer for all public
                ingress and codify routing, authentication, and rate limiting.
              </li>
              <li>
                Separate high-sensitivity data into dedicated storage with
                strict RBAC and encryption key separation.
              </li>
              <li>
                Integrate a secrets management solution (Vault, KMS, or
                equivalent) and deprecate static credentials in CI/CD and
                runtime configs.
              </li>
              <li>
                Extend logging and metrics to cover security-relevant events for
                admin actions, authentication flows, and data exfiltration
                patterns.
              </li>
            </ol>
          </div>

          {/* Quick metrics row */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.75rem",
              fontSize: "0.8rem",
            }}
          >
            <div
              style={{
                padding: "0.4rem 0.7rem",
                borderRadius: "0.7rem",
                backgroundColor: "#ecfdf5",
                color: "#166534",
              }}
            >
              Architecture coverage: <strong>~80%</strong> of major components
              represented
            </div>
            <div
              style={{
                padding: "0.4rem 0.7rem",
                borderRadius: "0.7rem",
                backgroundColor: "#fef3c7",
                color: "#92400e",
              }}
            >
              Open risks: <strong>3 high</strong>, <strong>4 medium</strong>
            </div>
            <div
              style={{
                padding: "0.4rem 0.7rem",
                borderRadius: "0.7rem",
                backgroundColor: "#eff6ff",
                color: "#1d4ed8",
              }}
            >
              Suggested follow-up: SAR workshop with app + platform teams
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default SARReview;
