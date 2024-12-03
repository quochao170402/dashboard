import { ReactNode, useState } from "react";
import TaskContext from "./TaskContext";

interface TaskProviderProps {
  children: ReactNode;
}

const TaskProvider = ({ children }: TaskProviderProps) => {
  const [task, setTask] = useState<ITask>();

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
