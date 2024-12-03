import { useState } from "react";
import StageItem from "./StageItem";

interface Props {
  title: string;
  tasks: ITask[];
}

const Stage = ({ title, tasks }: Props) => {
  const [visible, setVisible] = useState(false);
  
  return (
    <div
      className="w-72 max-h-full min-h-40 flex flex-col items-center justify-start gap-4 py-4 px-2 rounded-md bg-[#f4f5f7] overflow-hidden"
      onMouseEnter={(e) => {
        const target = e.target as Element; // Cast EventTarget to Element
        if (!target.closest(".ignore-hover")) {
          setVisible(true);
        }
      }}
      onMouseLeave={() => setVisible(false)}
    >
      <span className="uppercase text-xl">{title}</span>
      <div className="w-full flex flex-col items-center justify-center gap-2 ignore-hover">
        {tasks.map((item) => (
          <StageItem key={item.id} data={item} />
        ))}
      </div>
      <div
        className={`p-2 rounded-md flex font-medium w-full justify-start items-center gap-4 shadow-sm
        border hover:bg-gray-100 hover:cursor-pointer  ${
          visible ? "" : "hidden"
        }`}
      >
        <span>+</span>
        <span>Create issue</span>
      </div>
    </div>
  );
};

export default Stage;
