interface Props {
  data: IComment;
}

const CommentItem = ({ data }: Props) => {
  return (
    <>
      <div className="w-full flex flex-col gap-2 mt-2 border p-2">
        {/* Header */}
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <img
              src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY="
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-semibold">{data.userId}</span>
          </div>
          {/* Datetime */}
          <div>
            <span className="font-mono text-[gray]">
              {data.createdAt.toLocaleDateString()}
            </span>
          </div>
        </div>
<hr />
        {/* Content */}
        <div className="ml-2 p-2 text-lg flex items-center justify-between gap-2">
          <p>{data.content}</p>
        </div>
        {/* Actions */}
        {/* <div className={`flex items-center gap-6`}></div> */}
      </div>
      {/* {data.children && data.children.length > 0 && (
        <div className="ml-4">
          {data.children.map((child) => (
            <CommentItem data={child} />
          ))}
        </div>
      )} */}
    </>
  );
};

export default CommentItem;
