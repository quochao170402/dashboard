import { useState } from "react";

const categories = [
  "Category 1",
  "Category 2",
  "Category 3",
  "Category 4",
  "Category 5",
];
const types = ["Type A", "Type B", "Type C", "Type D", "Type E"];

const ProjectFilterBar = () => {
  const [keyword, setKeyword] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const handleRefetch = () => {
    setKeyword("");
    setType("");
    setCategory("");
  };

  const handleFilter = () => {};

  return (
    <div className="flex gap-4 overflow-hidden p-2">
      <div className="flex flex-1 gap-4 items-center">
        <input
          className="flex-1 border p-2"
          type="text"
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <select
          className="flex-1 border appearance-none p-2"
          name="Type"
          onChange={(e) => setType(e.target.value)}
          defaultValue=""
        >
          {types.map((x) => (
            <option key={`option-${x}`} value={x}>
              {x}
            </option>
          ))}
        </select>
        <select
          className="flex-1 border appearance-none p-2"
          name="Category"
          defaultValue=""
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((x) => (
            <option key={`option-${x}`} value={x}>
              {x}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-4">
        <button
          className="p-2 rounded-md w-24 bg-gray-100"
          onClick={handleRefetch}
        >
          Refetch
        </button>
        <button
          className="p-2 rounded-md w-24 bg-blue-500 text-white"
          onClick={handleFilter}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProjectFilterBar;
