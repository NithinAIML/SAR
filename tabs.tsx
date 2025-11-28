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
    <nav className="flex flex-wrap gap-2">
      {TABS.map((tab) => {
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={
              "rounded-full px-4 py-2 text-sm font-medium border transition-all " +
              (isActive
                ? "bg-blue-600 text-white border-blue-600 shadow-md"
                : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200")
            }
          >
            {tab.label}
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
