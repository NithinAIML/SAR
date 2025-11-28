import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TABS = [
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
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        const base =
          "rounded-full px-3.5 py-1.5 text-xs font-medium border transition-colors";
        const activeClasses =
          "bg-blue-600 text-white border-transparent shadow-sm";
        const inactiveClasses =
          "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200";

        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`${base} ${isActive ? activeClasses : inactiveClasses}`}
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
