import NoData from "@/components/no-data/NoData";
import Title from "@/components/title/Title";
import { Button, Table } from "antd";
import { Settings2 } from "lucide-react";
import { useState } from "react";
import ProjectSettingModal from "./components/ProjectSettingModal";
import UpsertProjectModal from "./components/UpsertProjectModal";
import useProject from "./hooks/useProject";

const Project = () => {
  const {
    totalRecord,
    pagination,
    columns,
    projects,
    properties,
    refetchProperties,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleDoubleClick,
  } = useProject();

  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Title title={"Project"} />
        <div className="flex gap-4">
          <Button
            variant="outlined"
            // type="text"
            className="p-4 text-green-500"
            onClick={() => {
              handleToggleModal(true);
            }}
          >
            Create
          </Button>
          <Button
            // color="default"
            variant="outlined"
            icon={<Settings2 />}
            className="p-4 text-blue-500 outline-blue-500"
            onClick={() => {
              setVisible(true);
            }}
          >
            Setting
          </Button>
        </div>
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
      <div>
        <ProjectSettingModal
          properties={properties || []}
          refetch={refetchProperties}
          visible={visible}
          onClose={() => {
            setVisible(false);
          }}
        />
      </div>
    </div>
  );
};

export default Project;
