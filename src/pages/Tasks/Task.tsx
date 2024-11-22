import { useState } from "react";
import Header from "./components/Header";

export type ViewType = "backlog" | "board" | "list";

const Task = () => {
  const [view, setView] = useState<ViewType>("backlog");
  return (
    <div>
      <div className="mb-3 border-b ">
        <Header view={view} onChangeView={setView} />
      </div>
      <div>{view}</div>
    </div>
  );
};

export default Task;
