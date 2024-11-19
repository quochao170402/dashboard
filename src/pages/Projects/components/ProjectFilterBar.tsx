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
  filter: IProjectFilter;
  handleFilter: () => void;
  handleRefetch: () => void;
  setFilter: (filter: IProjectFilter) => void;
}

const ProjectFilterBar = ({
  filter,
  handleFilter,
  handleRefetch,
  setFilter,
}: Props) => {
  return (
    <div className="flex gap-4 overflow-hidden p-2">
      <div className="flex flex-1 gap-4 items-center">
        <input
          className="flex-1 border p-2"
          type="text"
          placeholder="Keyword"
          value={filter.keyword}
          onChange={(e) => setFilter({ ...filter, keyword: e.target.value })}
        />
        <select
          className="flex-1 border appearance-none p-2"
          name="Type"
          onChange={(e) => setFilter({ ...filter, type: e.target.value })}
          value={filter.type || ""}
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
          onChange={(e) => setFilter({ ...filter, category: e.target.value })}
          value={filter.category || ""}
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
