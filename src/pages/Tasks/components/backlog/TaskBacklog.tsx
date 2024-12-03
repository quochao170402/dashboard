import useTaskGlobal from "@/hooks/useTaskGlobal";

const TaskBacklog = () => {
  const { task } = useTaskGlobal();
  console.log("🚀 ~ TaskBacklog ~ task:", task);
  return <div>{task?.summary}</div>;
};

export default TaskBacklog;
