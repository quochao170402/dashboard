import { TaskStatus } from "@/@types/Enums";
import useTask from "../../hooks/useTask";
import Stage from "./components/Stage";
import useTaskGlobal from "@/hooks/useTaskGlobal";

const stageNames: Record<TaskStatus, string> = {
  [TaskStatus.TODO]: "To Do",
  [TaskStatus.IN_PROGRESS]: "In Progress",
  [TaskStatus.REVIEW]: "Review",
  [TaskStatus.RELEASE]: "Release",
  [TaskStatus.DONE]: "Done",
};
const TaskBoard = () => {
  const { tasks } = useTask();
  const stages = Array.from(Object.values(TaskStatus), (status) => status);
  const { task } = useTaskGlobal();
  console.log("🚀 ~ TaskBoard ~ task:", task);
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

export default TaskBoard;
