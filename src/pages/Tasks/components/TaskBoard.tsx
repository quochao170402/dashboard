import useTask from "../hooks/useTask";

const TaskBoard = () => {
  const { tasks } = useTask();
  return <div>TaskBoard</div>;
};

export default TaskBoard;
