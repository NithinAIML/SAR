import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "dashboard", label: "Dashboard" },
  { id: "projects", label: "Projects" },
  { id: "agents", label: "Agents" },
  { id: "queue", label: "Queue" },
  { id: "lifecycle", label: "Lifecycle" },
  { id: "knowledge", label: "Knowledge" },
  { id: "settings", label: "Settings" },
];

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <nav
      className="flex flex-wrap gap-2"
      aria-label="Security Readiness sections"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          onClick={() => onTabChange(tab.id)}
          className={activeTab === tab.id ? "active" : ""}
          aria-current={activeTab === tab.id ? "page" : undefined}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Tabs;
