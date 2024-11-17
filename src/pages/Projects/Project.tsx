import Pagination from "@/custom-components/pagination/Pagination";
import SizeChanger from "@/custom-components/sizeChanger/SizeChanger";
import Table from "@/custom-components/table/Table";
import Title from "@/custom-components/title/Title";
import { useNavigate } from "react-router-dom";
import ProjectFilterBar from "./components/ProjectFilterBar";
import useProject from "./hooks/useProject";

const Project = () => {
  const { pagination, columns, data, handlePageChange, handleChangePageSize } =
    useProject();
  const navigate = useNavigate(); // Initialize navigation
  return (
    <div>
      <div className="flex items-center justify-between px-2">
        <Title className="mb-4" title={"Project"} />
        <button
          className="py-2 px-4 rounded-md bg-green-500 text-white w-24"
          onClick={() => {
            navigate("/projects/addProject");
          }}
        >
          Create
        </button>
      </div>
      <div>
        <ProjectFilterBar />
      </div>
      <div>
        <Table border={false} data={data} columns={columns} />
        <div className="my-4 flex items-center justify-between">
          <SizeChanger visible={false} onChange={handleChangePageSize} />
          <Pagination
            totalPage={pagination.totalPage}
            currentPage={pagination.current}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
