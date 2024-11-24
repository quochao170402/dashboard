interface Props {
  data: ITask;
}

const TaskDetail = ({ data }: Props) => {
  return <div className=" first-line:w-full h-[1000px]">{data.summary}</div>;
};

export default TaskDetail;
