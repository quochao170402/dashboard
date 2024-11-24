import useTaskGlobal from "@/hooks/useTaskGlobal";

const TaskBacklog = () => {
  const { task, setTask } = useTaskGlobal();
  console.log("🚀 ~ TaskBacklog ~ task:", task);
  return <div>{task?.summary}</div>;
};

export default TaskBacklog;
