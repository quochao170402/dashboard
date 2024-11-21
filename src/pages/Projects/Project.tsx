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
    data,
    newProject,
    setNewProject,
    handleAdd,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleChangePageSize,
    handleDoubleClick,
    handleFilter,
    handleRefetch,
  } = useProject();

  return (
    <div>
      <div className="flex items-center justify-between px-2">
        <Title className="mb-4" title={"Project"} />
        <button
          className="py-2 px-4 rounded-md bg-green-500 text-white w-24"
          onClick={() => {
            setNewProject({} as IProject);
            handleToggleModal(true);
          }}
        >
          Create
        </button>
      </div>
      <div>
        <ProjectFilterBar
          handleFilter={handleFilter}
          handleRefetch={handleRefetch}
        />
      </div>
      {data.length > 0 ? (
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
      ) : (
        <NoData />
      )}
      <div>
        <UpsertProjectModal
          visible={upsertProjectData.visible}
          onClose={() => handleToggleModal(false)}
          data={newProject ?? upsertProjectData.data}
          updatable={upsertProjectData.updatable}
          onSubmit={handleAdd}
          setData={setNewProject}
        />
      </div>
    </div>
  );
};

export default Project;
