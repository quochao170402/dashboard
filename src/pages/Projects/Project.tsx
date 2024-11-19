import Pagination from "@/custom-components/pagination/Pagination";
import SizeChanger from "@/custom-components/sizeChanger/SizeChanger";
import Table from "@/custom-components/table/Table";
import Title from "@/custom-components/title/Title";
import ProjectFilterBar from "./components/ProjectFilterBar";
import UpsertProjectModal from "./components/UpsertProjectModal";
import useProject from "./hooks/useProject";

const Project = () => {
  const {
    pagination,
    columns,
    data,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleChangePageSize,
    handleDoubleClick,
  } = useProject();

  return (
    <div>
      <div className="flex items-center justify-between px-2">
        <Title className="mb-4" title={"Project"} />
        <button
          className="py-2 px-4 rounded-md bg-green-500 text-white w-24"
          onClick={() => {
            handleToggleModal(true);
          }}
        >
          Create
        </button>
      </div>
      <div>
        <ProjectFilterBar />
      </div>
      <div>
        <Table
          border={false}
          data={data}
          columns={columns}
          onDoubleClick={handleDoubleClick}
        />
        <div className="my-4 flex items-center justify-between">
          <SizeChanger visible={false} onChange={handleChangePageSize} />
          <Pagination
            totalPage={pagination.totalPage}
            currentPage={pagination.current}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div>
        <UpsertProjectModal
          visible={upsertProjectData.visible}
          onClose={() => handleToggleModal(false)}
          data={upsertProjectData.data}
          updatable={upsertProjectData.updatable}
        />
      </div>
    </div>
  );
};

export default Project;
