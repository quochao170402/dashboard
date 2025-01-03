import NoData from "@/components/no-data/NoData";
import Title from "@/components/title/Title";
import { Button, Table, TablePaginationConfig } from "antd";
import { ColumnProps } from "antd/es/table";
import { Settings2, SquarePen, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectModal from "./components/ProjectModal";
import ProjectSettingModal from "./components/ProjectSettingModal";
import useProjectProperty from "./hooks/useProjectProperty";
import useProjectV2 from "./hooks/useProjectV2";

type ModalType = "add" | "update" | "property-table" | undefined;

const ProjectV2 = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(undefined);

  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const { projects, count, addProject, pagination, setPagination } =
    useProjectV2();

  const { properties, refetchProperties } = useProjectProperty();

  const dataSource = projects.map((entity) => {
    const row: { id: string; [key: string]: string } = { id: entity.id };
    entity.properties.forEach((property) => {
      row[property.name] = property.value;
    });
    return row;
  });

  const renderColumns = () => {
    if (properties && properties.length > 0) {
      return properties
        .filter((x) => x.isUsed)
        .map(
          (property) =>
            ({
              dataIndex: property.name,
              title: property.label,
              align: "left",
              key: property.name,
              render(_value, record, _index) {
                const propertyKey = property.name;
                const value = record[propertyKey];

                return (
                  <div className="flex items-center justify-center min-w-20">
                    {value ?? "-"}
                  </div>
                );
              },
            } as ColumnProps<{ [key: string]: string }>)
        );
    } else {
      return [];
    }
  };

  const columns: Array<ColumnProps<{ [key: string]: string }>> = [
    {
      title: "Index", // Fixed column for the entity ID
      render: (_value, _record, index) => {
        return <>{index + 1}</>;
      },
    },
    ...renderColumns(),
    {
      title: "Actions",
      width: 100,
      align: "center",
      render: (_value, _row) => {
        return (
          <div className="flex gap-3 items-center justify-center">
            <button>
              <SquarePen size={18} color="#0c66e4" />
            </button>
            <button>
              <Trash2 size={18} color="red" />
            </button>
          </div>
        );
      },
    },
  ];

  const projectPagination = useMemo(() => {
    const handlePageChange = (page: number, pageSize: number) => {
      setPagination({ pageSize: pageSize, current: page });
    };

    return {
      position: ["bottomRight"],
      current: pagination.current,
      pageSize: pagination.pageSize,
      total: count,
      onChange: handlePageChange,
      showSizeChanger: true,
    } as TablePaginationConfig;
  }, [pagination, count, setPagination]);

  //#region functions

  const handleOpenModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(undefined);
  };
  //#endregion
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <Title title={"Project"} />
        <div className="flex gap-4">
          <Button
            variant="outlined"
            className="p-4 text-green-500"
            onClick={() => handleOpenModal("add")}
          >
            Create
          </Button>
          <Button
            variant="outlined"
            className="p-4 text-blue-500 outline-blue-500"
            onClick={() => {
              handleOpenModal("property-table");
            }}
          >
            Config
          </Button>
          <Button
            icon={<Settings2 />}
            variant="outlined"
            className="p-4 text-blue-500 outline-blue-500"
            onClick={() => {
              navigate("/settings");
            }}
          >
            Setting
          </Button>
        </div>
      </div>

      {projects.length > 0 ? (
        <div>
          <Table
            className="max-w-full overflow-x-auto"
            scroll={{ x: 1000 }}
            bordered
            columns={columns}
            dataSource={dataSource}
            onRow={(record) => {
              return {
                onDoubleClick: () => {
                  const key = record["Key"];
                  if (key) {
                    navigate(`/projects/${record["Key"]}`);
                  }
                },
                style: { cursor: "pointer" },
              };
            }}
            rowKey={(record) => record.id}
            pagination={projectPagination}
          />
        </div>
      ) : (
        <NoData />
      )}
      {/* <div>
        <UpsertProjectModal
          visible={upsertProjectData.visible}
          onClose={() => handleToggleModal(false)}
          data={upsertProjectData.data}
          updatable={upsertProjectData.updatable}
          onSubmit={upsertProjectData.onSubmit}
        />
      </div>*/}
      <div>
        <ProjectModal
          visible={activeModal === "add"}
          onClose={handleCloseModal}
          properties={properties ?? []}
          onSubmit={(values) => {
            addProject(values);
          }}
        />
      </div>
      <div>
        <ProjectSettingModal
          properties={properties || []}
          refetch={refetchProperties}
          visible={activeModal === "property-table"}
          onClose={() => {
            handleCloseModal();
          }}
        />
      </div>
    </div>
  );
};

export default ProjectV2;
