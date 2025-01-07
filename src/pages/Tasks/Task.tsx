import { ReactNode, useMemo, useState } from "react";
import TaskBacklog from "./components/backlog/TaskBacklog";
import TaskBoard from "./components/board/TaskBoard";
import Header from "./components/Header";
import TaskList from "./components/list/TaskList";

export type ViewType = "backlog" | "board" | "list";

const Task = () => {
  const [view, setView] = useState<ViewType>("backlog");

  const taskViewMap: Record<ViewType, ReactNode> = useMemo(
    () => ({
      board: <TaskBoard />,
      backlog: <TaskBacklog />,
      list: <TaskList />,
    }),
    []
  );
  // Implement task
  return (
    <>
      <div className="mb-3 border-b ">
        <Header view={view} onChangeView={setView} />
      </div>
      <div className="h-full">{taskViewMap[view]}</div>
      <div></div>
    </>
  );
};

export default Task;
