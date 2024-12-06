// const stageNames: Record<TaskStatus, string> = {
//   [TaskStatus.TODO]: "To Do",
//   [TaskStatus.IN_PROGRESS]: "In Progress",
//   [TaskStatus.REVIEW]: "Review",
//   [TaskStatus.RELEASE]: "Release",
//   [TaskStatus.DONE]: "Done",
// };

import DatePicker from "@/custom-components/date-picker/DatePicker";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <div className="w-48">
        <DatePicker
          value={date}
          onChange={(e) => {
            setDate(new Date(e.target.value));
          }}
        />
      </div>
    </>
  );
};

export default Dashboard;
