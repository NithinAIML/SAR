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
        {/* Top header */}
        <header className={styles.header}>
          <div>
            <div className={styles.productBadge}>Security</div>
            <h1 className={styles.title}>Security Readiness AI Console</h1>
            <p className={styles.subtitle}>
              Monitor projects, agents and readiness insights in one place.
            </p>
          </div>
          <div className={styles.headerActions}>
            <button className={styles.headerButton}>Docs</button>
            <button className={styles.headerButtonPrimary}>New Project</button>
          </div>
        </header>

        {/* Tabs row */}
        <div className={styles.tabsWrapper}>
          <Tabs activeTab={tab} onTabChange={setTab} />
        </div>

        {/* Main content */}
        <main className={styles.mainContent}>
          {tab === "dashboard" && <Dashboard />}
          {tab === "projects" && <Projects showToast={showToast} />}
          {tab === "queue" && <Queue showToast={showToast} />}
          {tab === "agents" && <Agents />}
          {tab === "lifecycle" && <Lifecycle />}
          {tab === "knowledge" && <Knowledge />}
          {tab === "settings" && <Settings />}
        </main>
      </div>

      {/* Toast */}
      {toastMessage && <div className={styles.toast}>{toastMessage}</div>}

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
