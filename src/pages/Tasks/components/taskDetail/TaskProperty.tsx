import { Button } from "@/custom-components/button";
import Input from "@/custom-components/inputs/Input";
import { User } from "lucide-react";

interface Props {
  data: ITask;
}

const TaskProperty = ({ data }: Props) => {
  return (
    <div className="p-2 flex flex-col gap-4">
      <div>
        <Button
          icon={<User />}
          label={"Review"}
          variant={"primary"}
          size="md"
          onClick={() => console.log("Button")}
        />
      </div>
      <div className="flex flex-col gap-4">
        <div className="mr-4">
          <label htmlFor="Assignee">Assignee</label>
          <Input
            value={data.assigneeId}
            id="Assignee"
            onChange={(e) => console.log("Assignee", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Reporter">Reporter</label>
          <Input
            value={data.reporterId}
            id="Reporter"
            onChange={(e) => console.log("Reporter", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Status">Status</label>
          <Input
            value={data.status}
            id="Status"
            onChange={(e) => console.log("Status", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Label">Label</label>
          <Input
            value={data.label}
            id="Label"
            onChange={(e) => console.log("Label", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Key">Key</label>
          <Input
            value={data.key}
            id="Key"
            onChange={(e) => console.log("Key", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Epic">Epic</label>
          <Input
            value={data.epicId}
            id="Epic"
            onChange={(e) => console.log("Epic", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Sprint">Sprint</label>
          <Input
            value={data.sprintId}
            id="Sprint"
            onChange={(e) => console.log("Sprint", e.target.value)}
          />
        </div>
        <div className="mr-4">
          <label htmlFor="Priority">Priority</label>
          <Input
            value={data.priority}
            id="Priority"
            onChange={(e) => console.log("Priority", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskProperty;
