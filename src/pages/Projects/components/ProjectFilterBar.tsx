import Input from "@/components/inputs/Input";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

interface Props {
  handleRefetch: () => void;
}
const ProjectFilterBar = ({ handleRefetch }: Props) => {
  const [keyword, setKeyword] = useState<string>("");
  const [, setSearchParams] = useSearchParams();
  return (
    <div className="flex gap-4 overflow-hidden p-2">
      <div className="grid grid-cols-3 flex-1 gap-4 items-center">
        <Input
          placeholder="Keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      <div className="flex gap-4">
        <button
          className="p-2 rounded-md w-24 bg-gray-100"
          onClick={() => {
            setKeyword("");
            setSearchParams({});
            handleRefetch();
          }}
        >
          Refetch
        </button>
        <button
          className="p-2 rounded-md w-24 bg-blue-500 text-white"
          onClick={() => {
            setSearchParams((prev) => {
              prev.set("keyword", keyword);
              return prev;
            });
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default ProjectFilterBar;
