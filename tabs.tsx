import React from "react";

interface TabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    "dashboard",
    "projects",
    "agents",
    "queue",
    "lifecycle",
    "knowledge",
    "settings",
  ];

  return (
    <nav className="flex flex-wrap gap-2">
      {tabs.map((t) => {
        const isActive = activeTab === t;
        const label = t.charAt(0).toUpperCase() + t.slice(1);

        return (
          <button
            key={t}
            type="button"
            onClick={() => onTabChange(t)}
            className={isActive ? "active" : ""}
          >
            {label}
          </button>
        );
      })}
    </nav>
  );
};

export default Tabs;
