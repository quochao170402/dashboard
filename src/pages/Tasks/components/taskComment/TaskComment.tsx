interface Props {
  comments: IComment[];
}

const TaskComment = ({ comments }: Props) => {
  return (
    <>
      <div className="w-full h-fit">
        <>
          {comments.map((x) => (
            <div key={x.id}>{x.content}</div>
          ))}
        </>
      </div>
    </>
  );
};

export default TaskComment;
