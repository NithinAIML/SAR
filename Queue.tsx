import React, { useState } from "react";
import { callLLM } from "../utils/mockLLM";

interface QueueProps {
  showToast: (msg: string) => void;
}

interface Task {
  id: string;
  title: string;
  assignee: string;
}

const Queue: React.FC<QueueProps> = ({ showToast }) => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "TSK-501",
      title: "Collect asset posture from Wiz",
      assignee: "Research Assistant",
    },
  ]);
  const [isThinking, setIsThinking] = useState(false);

  const generateTasks = async () => {
    setIsThinking(true);
    try {
      const result = await callLLM(
        "Suggest 5 to 7 high-level, actionable tasks"
      );
      const parsed: string[] = JSON.parse(result);
      const newTasks: Task[] = parsed.map((title) => ({
        id: `TSK-${Date.now()}-${Math.random().toString(36).slice(2, 5)}`,
        title,
        assignee: "Workflow Orchestrator",
      }));
      setTasks((prev) => [...prev, ...newTasks]);
      showToast("Tasks generated successfully");
    } catch {
      showToast("Failed to generate tasks");
    }
    setIsThinking(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Task Queue</h2>
          <p className="mt-1 text-sm text-slate-500">
            Upcoming actions for your agents to execute.
          </p>
        </div>

        <button
          onClick={generateTasks}
          disabled={isThinking}
          className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60"
        >
          {isThinking ? "Generating…" : "Suggest Tasks"}
        </button>
      </div>

      <div className="divide-y divide-slate-100 rounded-xl border border-slate-200 bg-white/60 shadow-sm">
        {tasks.map((task) => (
          <div key={task.id} className="flex gap-3 px-4 py-3 text-sm">
            <div className="mt-1 h-2 w-2 rounded-full bg-blue-500" />
            <div className="flex-1">
              <p className="font-medium text-slate-900">{task.title}</p>
              <p className="mt-1 text-xs text-slate-500">
                <span className="font-semibold text-slate-600">Assignee:</span>{" "}
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">
                  {task.assignee}
                </span>
              </p>
              <p className="mt-0.5 text-[11px] text-slate-400">{task.id}</p>
            </div>
          </div>
        ))}

        {tasks.length === 0 && (
          <div className="px-4 py-3 text-sm text-slate-500">
            No queued tasks. Generate new tasks to keep agents busy.
          </div>
        )}
      </div>
    </div>
  );
};

export default Queue;
