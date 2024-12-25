import NoData from "@/components/no-data/NoData";
import Title from "@/components/title/Title";
import { Table } from "antd";
import UpsertProjectModal from "./components/UpsertProjectModal";
import useProject from "./hooks/useProject";

const Project = () => {
  const {
    totalRecord,
    pagination,
    columns,
    projects,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleDoubleClick,
    handleRefetch,
  } = useProject();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
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

      {projects.length > 0 ? (
        <div>
          <Table
            bordered
            columns={columns}
            dataSource={projects}
            onRow={(record) => {
              return {
                onDoubleClick: () => {
                  handleDoubleClick(record);
                },
              };
            }}
            pagination={{
              position: ["bottomRight"],
              defaultCurrent: 1,
              defaultPageSize: 10,
              current: pagination.current,
              pageSize: pagination.pageSize,
              total: totalRecord,
              onChange(page, pageSize) {
                handlePageChange(page, pageSize);
              },
              showSizeChanger: true,
            }}
          />
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
          onSubmit={upsertProjectData.onSubmit}
        />
      </div>
    </div>
  );
};

export default Project;
