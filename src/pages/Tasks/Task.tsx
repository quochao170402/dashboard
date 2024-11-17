import SizeChanger from "@/custom-components/sizeChanger/SizeChanger";
import { useSearchParams } from "react-router-dom";

const Task = () => {
  const [searchParams, _setSearchParams] = useSearchParams();
  const pageSize = searchParams.get("pageSize");
  return (
    <div>
      <SizeChanger visible={true} />
    </div>
  );
};

export default Task;
