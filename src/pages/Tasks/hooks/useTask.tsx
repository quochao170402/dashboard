import { useState } from "react";

const useTask = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  return {
    tasks,
    setTasks,
  };
};

export default useTask;
