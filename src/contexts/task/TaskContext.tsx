import { createContext } from "react";

interface TaskContextType {
  task: ITask | undefined;
  setTask: (task: ITask | undefined) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export default TaskContext;
