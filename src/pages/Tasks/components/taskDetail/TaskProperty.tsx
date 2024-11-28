import { TaskStatus } from "@/@types/Enums";
import Input from "@/custom-components/inputs/Input";
import { Select } from "@/custom-components/selects";

interface Props {
  data: ITask;
  onChangeTask: (task: ITask) => void;
}

const TaskProperty = ({ data, onChangeTask }: Props) => {
  const statuses: string[] = Object.values(TaskStatus);
  const priorities: string[] = ["1", "2", "3", "4", "5"];
  return (
    <div className="p-2 flex flex-col gap-4">
      <div>
        <Select
          className="outline-none"
          value={data?.status}
          options={statuses.map((status) => ({
            label: status,
            value: status,
          }))}
          onChange={(e) =>
            onChangeTask({ ...data, status: e.target.value as TaskStatus })
          }
        />
      </div>
      <div className="flex flex-col gap-5">
        <div className="mr-4 flex flex-col gap-2">
          <label htmlFor="Assignee">Assignee</label>
          <Input
            value={data?.assigneeId}
            id="Assignee"
            onChange={(e) =>
              onChangeTask({ ...data, assigneeId: e.target.value })
            }
          />
        </div>
        <div className="mr-4 flex flex-col gap-2">
          <label htmlFor="Reporter">Reporter</label>
          <Input
            value={data?.reporterId}
            id="Reporter"
            onChange={(e) =>
              onChangeTask({ ...data, reporterId: e.target.value })
            }
          />
        </div>
        <div className="mr-4 flex flex-col gap-2">
          <label htmlFor="Label">Label</label>
          <Input
            value={data?.label}
            id="Label"
            onChange={(e) => onChangeTask({ ...data, label: e.target.value })}
          />
        </div>
        <div className="mr-4 flex flex-col gap-2">
          <label htmlFor="Key">Key</label>
          <Input value={data?.key} id="Key" />
        </div>
        <div className="mr-4 flex flex-col gap-2">
          <label htmlFor="Epic">Epic</label>
          <Input
            value={data?.epicId}
            id="Epic"
            onChange={(e) => onChangeTask({ ...data, epicId: e.target.value })}
          />
        </div>
        <div className="mr-4 flex flex-col gap-2">
          <label htmlFor="Sprint">Sprint</label>
          <Input
            value={data?.sprintId}
            id="Sprint"
            onChange={(e) =>
              onChangeTask({ ...data, sprintId: e.target.value })
            }
          />
        </div>
        <div className="mr-4 flex items-center gap-2">
          <label htmlFor="Priority" className="mr-2">
            Priority
          </label>
          <Select
            id="Priority"
            className="outline-none min-w-10 max-w-10"
            value={data?.priority?.toString()}
            options={priorities.map((priority) => ({
              label: priority,
              value: priority,
            }))}
            onChange={(e) =>
              onChangeTask({ ...data, priority: +e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TaskProperty;
