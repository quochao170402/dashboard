interface Props {
  task: ITask;
}

const BacklogItem = ({ task }: Props) => {
  console.log("asdfasdfasdfkljasdhflkajsdf");
  return (
    <div className="grid grid-cols-6 gap-4">
      <div>{task.key}</div>
      <div>{task.summary}</div>
      <div>{task.status}</div>
      <div>{task.priority}</div>
      <div>{task.assignee?.name}</div>
    </div>
  );
};

export default BacklogItem;
