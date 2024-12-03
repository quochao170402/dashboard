import { Card } from "@/custom-components/card";
import useTaskGlobal from "@/hooks/useTaskGlobal";
import { ClipboardCheck, Copy, SquareCheck, UserCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  data: ITask;
}

type TaskType = "Story" | "Task" | "SubTask";

const taskType: Record<TaskType, ReactNode> = {
  Story: <ClipboardCheck color="green" size={16} />,
  Task: <SquareCheck color="#0c66e4" size={16} />,
  SubTask: <Copy color="#0c66e4" size={16} />,
};

const StageItem = ({ data }: Props) => {
  const { setTask } = useTaskGlobal();

  return (
    <div
      className="w-full h-full hover:cursor-pointer bg-white hover:bg-gray-50"
      onClick={() => setTask(data)}
    >
      <Card title={"Item"} isShowTitle={false}>
        <div className="flex flex-col gap-4">
          <span>{data.summary}</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div>{taskType[data.type as TaskType]}</div>
              <div>{data.key}</div>
            </div>
            <div className="flex items-center gap-2">
              <UserCircle2 color="#0c66e4" size={22} />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default StageItem;
