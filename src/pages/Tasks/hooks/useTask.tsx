import ITask from "@/@types/Task";
import { useState } from "react";

const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return {
    tasks,
  };
};

export default useTask;
