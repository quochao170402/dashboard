import { TaskStatus } from "@/@types/Enums";
import Editor from "@/custom-components/editor/Editor";
import { useState } from "react";

const stageNames: Record<TaskStatus, string> = {
  [TaskStatus.TODO]: "To Do",
  [TaskStatus.IN_PROGRESS]: "In Progress",
  [TaskStatus.REVIEW]: "Review",
  [TaskStatus.RELEASE]: "Release",
  [TaskStatus.DONE]: "Done",
};

const Dashboard = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex w-full h-full">
      <Editor value={value} onChange={setValue} />
    </div>
  );
};

export default Dashboard;
