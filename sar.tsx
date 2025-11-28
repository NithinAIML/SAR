// src/securityreadiness/SecurityReadinessConsole.tsx
import React, { useState } from "react";
import Tabs from "../Tabs";
import Dashboard from "../Dashboard";
import Projects from "../Projects";
import Queue from "../Queue";
import Agents from "../Agents";
import Lifecycle from "../Lifecycle";
import Knowledge from "../Knowledge";
import Settings from "../Settings";
import styles from "./SecurityReadinessConsole.module.scss";

const TAB_LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  projects: "Projects",
  queue: "Queue",
  agents: "Agents",
  lifecycle: "Lifecycle",
  knowledge: "Knowledge",
  settings: "Settings",
};

const SecurityReadinessConsole: React.FC = () => {
  const [tab, setTab] = useState("dashboard");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.shell}>
        {/* Top navigation bar */}
        <header className={styles.topBar}>
          <div className={styles.logoBlock}>
            <span className={styles.productBadge}>Security</span>
            <span className={styles.productName}>Security Readiness AI Console</span>
          </div>
          <div className={styles.topBarActions}>
            <button className={styles.topBarButton}>Docs</button>
            <button className={styles.topBarButtonPrimary}>New Project</button>
          </div>
        </header>

        {/* Main layout: sidebar + content */}
        <div className={styles.layout}>
          {/* Left sidebar with tabs */}
          <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>Workspace</div>
            <nav className={styles.tabsWrapper}>
              {/* Tabs component renders the buttons; we style them in SCSS */}
              <Tabs activeTab={tab} onTabChange={setTab} />
            </nav>
            <div className={styles.sidebarFooter}>
              <span className={styles.sidebarHint}>SECURITY READINESS</span>
            </div>
          </aside>

          {/* Main content area */}
          <main className={styles.mainContent}>
            <div className={styles.pageHeader}>
              <h1 className={styles.pageTitle}>{TAB_LABELS[tab]}</h1>
              <p className={styles.pageSubtitle}>
                {tab === "dashboard"
                  ? "Overview of your security readiness, agents, and current activity."
                  : tab === "projects"
                  ? "Manage and review security readiness projects."
                  : tab === "queue"
                  ? "Monitor queued analyses and automation runs."
                  : tab === "agents"
                  ? "Configure and observe your AI security agents."
                  : tab === "lifecycle"
                  ? "Track assessment lifecycle and remediation status."
                  : tab === "knowledge"
                  ? "Browse and curate security knowledge and playbooks."
                  : "Configure console and integration settings."}
              </p>
            </div>

            <div className={styles.pageBody}>
              {tab === "dashboard" && <Dashboard />}
              {tab === "projects" && <Projects showToast={showToast} />}
              {tab === "queue" && <Queue showToast={showToast} />}
              {tab === "agents" && <Agents />}
              {tab === "lifecycle" && <Lifecycle />}
              {tab === "knowledge" && <Knowledge />}
              {tab === "settings" && <Settings />}
            </div>
          </main>
        </div>
      </div>

      {/* Toast */}
      {toastMessage && (
        <div className={styles.toast}>
          {toastMessage}
        </div>
      )}

      {/* Modal */}
      {modalContent && (
        <div className={styles.modal}>
          <div className={styles.modalCard}>
            <h2 className={styles.modalTitle}>Details</h2>
            <div className={styles.modalBody}>{modalContent}</div>
            <div className={styles.modalFooter}>
              <button
                className={styles.modalSecondary}
                onClick={() => setModalContent(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SecurityReadinessConsole;
