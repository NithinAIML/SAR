import React, { useState } from "react";

import Tabs from "../Tabs";
import Dashboard from "../Dashboard";
import Projects from "../Projects";
import Queue from "../Queue";
import Agents from "../Agents";
import Lifecycle from "../Lifecycle";
import Knowledge from "../Knowledge";
import Settings from "../Settings";
import Toast from "../Toast";
import Modal from "../Modal";

import styles from "./SecurityReadinessConsole.module.scss";

const SecurityReadinessConsole: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("dashboard");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalContent, setModalContent] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const openModal = (content: string) => setModalContent(content);
  const closeModal = () => setModalContent(null);

  let tabContent: React.ReactNode;

  switch (activeTab) {
    case "dashboard":
      tabContent = <Dashboard />;
      break;
    case "projects":
      tabContent = <Projects showToast={showToast} />;
      break;
    case "queue":
      tabContent = <Queue showToast={showToast} />;
      break;
    case "agents":
      tabContent = <Agents />;
      break;
    case "lifecycle":
      tabContent = <Lifecycle />;
      break;
    case "knowledge":
      tabContent = <Knowledge />;
      break;
    case "settings":
      tabContent = <Settings />;
      break;
    default:
      tabContent = null;
  }

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.shell}>
        {/* Header */}
        <header className={styles.header}>
          <div>
            <div className={styles.productBadge}>Security</div>
            <h1 className={styles.title}>Security Readiness AI Console</h1>
            <p className={styles.subtitle}>
              Monitor projects, agents, queues and readiness insights in one place.
            </p>
          </div>

          <div className={styles.headerActions}>
            <button className={styles.headerButton}>Docs</button>
            <button className={styles.headerButtonPrimary}>New Project</button>
          </div>
        </header>

        {/* Tabs bar */}
        <div className={styles.tabsWrapper}>
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Main content */}
        <main className={styles.mainContent}>{tabContent}</main>
      </div>

      {/* Toast */}
      {toastMessage && <Toast message={toastMessage} />}

      {/* Modal */}
      {modalContent && (
        <div className={styles.modal}>
          <div className={styles.modalCard}>
            <h2 className={styles.modalTitle}>Details</h2>
            <div className={styles.modalBody}>{modalContent}</div>
            <div className={styles.modalFooter}>
              <button
                className={styles.modalSecondary}
                onClick={closeModal}
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
