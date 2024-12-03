import TaskContext from "@/contexts/task/TaskContext";
import { useContext } from "react";

const useTaskGlobal = () => {
  const taskContext = useContext(TaskContext);
  if (!taskContext) {
    throw new Error("useTaskGlobal must be used within a TaskProvider");
  }
  return taskContext;
};

export default useTaskGlobal;
