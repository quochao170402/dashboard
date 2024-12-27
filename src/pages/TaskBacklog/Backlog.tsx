import BacklogItem from "./components/BacklogItem";
import useTaskHook from "./hooks/useTaskHook";

const TaskBacklog = () => {
  const { tasks } = useTaskHook();
  console.log("🚀 ~ TaskBacklog ~ tasks:", tasks);
  return (
    <>
      {tasks?.map((x) => (
        <BacklogItem task={x} />
      ))}
    </>
  );
};

export default TaskBacklog;
