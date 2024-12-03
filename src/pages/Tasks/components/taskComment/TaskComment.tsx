import { UserRole } from "@/@types/Enums";
import Editor from "@/custom-components/editor/Editor";
import { useMemo } from "react";
import CommentItem from "./CommentItem";

interface Props {
  comments: IComment[];
}
const generateRandomId = (): string =>
  Math.random().toString(36).substring(2, 10);

// Generate dummy data for IUser
const generateDummyUser = (): IUser => ({
  id: generateRandomId(),
  name: `User ${generateRandomId()}`,
  email: `${generateRandomId()}@example.com`,
  role: UserRole.User,
  createdAt: new Date(),
  updatedAt: new Date(),
  isActive: false,
});

const generateDummyComments = (count: number): IComment[] => {
  const comments: IComment[] = [];

  for (let i = 0; i < count; i++) {
    const id = generateRandomId();
    const createdAt = new Date();
    const updatedAt = new Date();

    const comment: IComment = {
      id: id,
      content: `This is comment This is comment This is comment This is commentThis is commentThis is comment ${
        i + 1
      }`,
      createdAt: createdAt,
      updatedAt: updatedAt,
      userId: `user-${generateRandomId()}`,
      taskId: `task-${generateRandomId()}`,
      user: generateDummyUser(),
    };

    comments.push(comment);
  }

  return comments;
};

const TaskComment = ({ comments }: Props) => {
  const dummyData: IComment[] = useMemo(
    () => generateDummyComments(Math.random() * 10),
    []
  );

  return (
    <>
      <div className="w-full h-fit flex flex-col">
        {/* Form */}
        <div className="w-full h-full flex-row items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=170667a&w=0&k=20&c=LPUo_WZjbXXNnF6ok4uQr8I_Zj6WUVnH_FpREg21qaY="
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-semibold">User</span>
          </div>
          <div className="w-full h-full flex items-center mt-2 bg-indigo-300">
            {/* <Input className="w-full" /> */}
            <Editor
              value=""
              onChange={(e) => console.log("Editor Change :>> ", e)}
            />
            <div className="h-full cursor-pointer">
              <button className="rotate-90 font-medium">Send</button>
            </div>
          </div>
        </div>
        <div className="w-full h-fit">
          <>
            {dummyData.map((x) => (
              <CommentItem key={x.id} data={x} />
            ))}
          </>
        </div>
      </div>
    </>
  );
};

export default TaskComment;
