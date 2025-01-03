// const stageNames: Record<TaskStatus, string> = {
//   [TaskStatus.TODO]: "To Do",
//   [TaskStatus.IN_PROGRESS]: "In Progress",
//   [TaskStatus.REVIEW]: "Review",
//   [TaskStatus.RELEASE]: "Release",
//   [TaskStatus.DONE]: "Done",
// };

import RadioInput from "@/components/properties/RadioDatatype/RadioInput";
import RadioView from "@/components/properties/RadioDatatype/RadioView";
import { Card, Divider } from "antd";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const options = [
  {
    label: (
      <span className="text-blue-500 font-bold">
        <h1>Option 1</h1>
      </span>
    ),
    value: "1",
  },
  {
    label: (
      <span>
        <PlusCircle type="star" size={10} />
      </span>
    ),
    value: "2",
  },
  { label: <span style={{ color: "red" }}>Option 3</span>, value: "3" },
];

const Dashboard = () => {
  const [value, setValue] = useState<string | number | null>(null);

  return (
    <Card
      title="Radio Input Example"
      style={{ maxWidth: 400, margin: "20px auto" }}
    >
      <h3>Select an Option</h3>
      <RadioInput value={value} onChange={setValue} options={options} />

      <Divider />

      <h3>Selected Option</h3>
      <RadioView value={value} options={options} />
    </Card>
  );
};

export default Dashboard;
