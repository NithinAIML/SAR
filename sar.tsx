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
// import Toast from "../Toast";
// import Modal from "../Modal";
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
      {/* Shell centers everything and gives nice card feel */}
      <div className={styles.shell}>
        {/* Top app bar */}
        <header className={styles.header}>
          <div>
            <div className={styles.productBadge}>Security</div>
            <h1 className={styles.title}>Security Readiness AI Console</h1>
            <p className={styles.subtitle}>
              Monitor projects, agents, and readiness insights in one place.
            </p>
          </div>

          {/* Right side – placeholder for user/avatar/settings */}
          <div className={styles.headerActions}>
            <button className={styles.headerButton}>Docs</button>
            <button className={styles.headerButtonPrimary}>New Project</button>
          </div>
        </header>

        {/* Primary navigation tabs */}
        <nav className={styles.tabsWrapper}>
          <Tabs activeTab={tab} onTabChange={setTab} />
        </nav>

        {/* Page body */}
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
      {toastMessage && (
        <div className={styles.toast}>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Modal (generic) */}
      {modalContent && (
        <div className={styles.modal}>
          <div>
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
