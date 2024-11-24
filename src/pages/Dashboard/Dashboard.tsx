import { TaskStatus } from "@/@types/Enums";
import Stage from "@/pages/Tasks/components/board/components/Stage";
import useTask from "../Tasks/hooks/useTask";

const stageNames: Record<TaskStatus, string> = {
  [TaskStatus.TODO]: "To Do",
  [TaskStatus.IN_PROGRESS]: "In Progress",
  [TaskStatus.REVIEW]: "Review",
  [TaskStatus.RELEASE]: "Release",
  [TaskStatus.DONE]: "Done",
};

const Dashboard = () => {
  const { tasks } = useTask();
  const stages = Array.from(Object.values(TaskStatus), (status) => status);
 
  return (
    <div className="flex gap-4 w-fit pr-4">
      {stages.map((stage) => (
        <Stage
          tasks={tasks.filter((x) => x.status === stage)}
          title={stageNames[stage]}
        />
      ))}
    </div>
  );
};

export default Dashboard;
