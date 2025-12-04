// import React from "react";
// import styles from "../securityreadiness/SecurityReadinessConsole.module.scss";

// interface TabsProps {
//   activeTab: string;
//   onTabChange: (tab: string) => void;
// }

// const TABS = [
//   { id: "dashboard", label: "Dashboard" },
//   { id: "projects", label: "Projects" },
//   { id: "agents", label: "Agents" },
//   { id: "queue", label: "Queue" },
//   { id: "lifecycle", label: "Lifecycle" },
//   { id: "knowledge", label: "Knowledge" },
//   { id: "settings", label: "Settings" },
// ];

// const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
//   return (
//     <nav className={styles.tabsInner} aria-label="Security Readiness sections">
//       {TABS.map((tab) => {
//         const isActive = activeTab === tab.id;

//         return (
//           <button
//             key={tab.id}
//             type="button"
//             onClick={() => onTabChange(tab.id)}
//             className={`${styles.tabButton} ${
//               isActive ? styles.tabButtonActive : ""
//             }`}
//             aria-current={isActive ? "page" : undefined}
//           >
//             {tab.label}
//           </button>
//         );
//       })}
//     </nav>
//   );
// };

// export default Tabs;

import React from "react";
import styles from "../securityreadiness/SecurityReadinessConsole.module.scss";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
  { id: "dashboard", label: "Dashboard" },
  { id: "projects", label: "Projects" },
  { id: "agents", label: "Agents" },
  { id: "queue", label: "Queue" },
  { id: "sar-review", label: "SAR Review" },  // 👈 NEW
  { id: "lifecycle", label: "Lifecycle" },
  { id: "knowledge", label: "Knowledge" },
  { id: "settings", label: "Settings" },
];

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav className={styles.tabsInner} aria-label="Security Readiness sections">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`${styles.tabButton} ${
              isActive ? styles.tabButtonActive : ""
            }`}
            aria-current={isActive ? "page" : undefined}
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
