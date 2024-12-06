import NoData from "@/custom-components/no-data/NoData";
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
    projects,
    handleAddProject,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleChangePageSize,
    handleDoubleClick,
    handleRefetch,
  } = useProject();

  return (
    <div>
      <div className="flex items-center justify-between px-2 pb-2 border-b">
        <Title title={"Project"} />
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
        <ProjectFilterBar
          handleFilter={() => {}}
          handleRefetch={handleRefetch}
        />
      </div>
      {projects.length > 0 ? (
        <div>
          <Table
            border={false}
            data={projects}
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
      ) : (
        <NoData />
      )}
      <div>
        <UpsertProjectModal
          visible={upsertProjectData.visible}
          onClose={() => handleToggleModal(false)}
          data={upsertProjectData.data}
          updatable={upsertProjectData.updatable}
          onSubmit={handleAddProject}
        />
      </div>
    </div>
  );
};

export default Project;
