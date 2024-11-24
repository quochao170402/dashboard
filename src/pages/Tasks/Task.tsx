import useTaskGlobal from "@/hooks/useTaskGlobal";
import { ReactNode, useMemo, useState } from "react";
import TaskBacklog from "./components/backlog/TaskBacklog";
import TaskBoard from "./components/board/TaskBoard";
import Header from "./components/Header";
import TaskList from "./components/list/TaskList";
import TaskModal from "./components/TaskModal";

export type ViewType = "backlog" | "board" | "list";

const Task = () => {
  const [view, setView] = useState<ViewType>("backlog");
  const { task: activeTask, setTask: setActiveTask } = useTaskGlobal();

  const taskViewMap: Record<ViewType, ReactNode> = useMemo(
    () => ({
      board: <TaskBoard />,
      backlog: <TaskBacklog />,
      list: <TaskList />,
    }),
    []
  );
  return (
    <>
      <div className="mb-3 border-b ">
        <Header view={view} onChangeView={setView} />
      </div>
      <div className="h-full">{taskViewMap[view]}</div>
      <div>
        {activeTask && (
          <TaskModal
            data={activeTask}
            visible={true}
            onClose={() => setActiveTask(undefined)}
          />
        )}
      </div>
    </>
  );
};

export default Task;
