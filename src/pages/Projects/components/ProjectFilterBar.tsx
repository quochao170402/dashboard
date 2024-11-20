import Input from "@/custom-components/inputs/Input";
import Select from "@/custom-components/selects/Select";
import { useState } from "react";
import { IProjectFilter } from "../common/IUpsertProject";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];
const types = ["Type A", "Type B", "Type C", "Type D", "Type E"];

interface Props {
  handleFilter: (filter: IProjectFilter) => void;
  handleRefetch: () => void;
}

const initialState: IProjectFilter = {
  keyword: "",
  type: "",
  category: "",
};

const ProjectFilterBar = ({ handleFilter, handleRefetch }: Props) => {
  const [filter, setFilter] = useState<IProjectFilter>(initialState);
  return (
    <div className="flex gap-4 overflow-hidden p-2">
      <div className="grid grid-cols-3 flex-1 gap-4 items-center">
        <Input
          placeholder="Keyword"
          value={filter.keyword}
          onChange={(e) => setFilter({ ...filter, keyword: e.target.value })}
        />
        <Select
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          options={types.map((x) => ({ label: x, value: x }))}
          value={filter.type}
          placeholder="Select Type"
        ></Select>
        <Select
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          options={categories.map((x) => ({ label: x, value: x }))}
          value={filter.category}
          placeholder="Select Category"
        ></Select>
      </div>
      <div className="flex gap-4">
        <button
          className="p-2 rounded-md w-24 bg-gray-100"
          onClick={() => {
            setFilter(initialState);
            handleRefetch();
          }}
        >
          Refetch
        </button>
        <button
          className="p-2 rounded-md w-24 bg-blue-500 text-white"
          onClick={() => handleFilter(filter)}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProjectFilterBar;
