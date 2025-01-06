import { Property } from "@/@types/Property";
import SettingApi, { UpdatePropertyRequest } from "@/apis/Setting.Apis";
import NoData from "@/components/no-data/NoData";
import PropertyInput from "@/components/properties/PropertyInput/PropertyInput";
import PropertyView from "@/components/properties/PropertyView/PropertyView";
import Title from "@/components/title/Title";
import { useMutation } from "@tanstack/react-query";
import { Button, Table, TablePaginationConfig, Tooltip } from "antd";
import { ColumnProps } from "antd/es/table";
import { SendHorizontal, Settings2, Trash2, XCircle } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProjectModal from "./components/ProjectModal";
import ProjectSettingModal from "./components/ProjectSettingModal";
import useProjectProperty from "./hooks/useProjectProperty";
import useProjectV2 from "./hooks/useProjectV2";

type ModalType = "add" | "update" | "property-table" | undefined;

const ProjectV2 = () => {
  const tableRef = useRef<HTMLDivElement>(null);

  const [activeModal, setActiveModal] = useState<ModalType>(undefined);

  const navigate = useNavigate();

  const { projects, count, addProject, pagination, setPagination, refetch } =
    useProjectV2();

  const { properties, refetchProperties } = useProjectProperty();

  const { mutate } = useMutation({
    mutationKey: ["update-property-setting"],
    mutationFn: (request: UpdatePropertyRequest) =>
      SettingApi.updatePropertySetting(request),
    onSuccess: () => {
      toast.success("Update property setting successfully");
      setSelectedCell({ propertyId: "", projectId: "", value: "" });
      refetch();
    },
    onError: () => {
      toast.error("Update property setting error");
    },
  });

  const dataSource = projects.map((entity) => {
    const row: { id: string; [key: string]: string } = { id: entity.id };
    entity.properties.forEach((property) => {
      row[property.name] = property.value;
    });
    return row;
  });

  const [selectedCell, setSelectedCell] = useState({
    propertyId: "",
    projectId: "",
    value: "",
  });

  console.log("selectedCell :>> ", selectedCell);

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
                  <div
                    className="flex items-center justify-center w-full"
                    onClick={() =>
                      setSelectedCell({
                        propertyId: property.id,
                        projectId: record.id,
                        value: value,
                      })
                    }
                  >
                    {selectedCell.propertyId === property.id ? (
                      <PropertyInput
                        property={{ ...property, value: value } as Property}
                        onChange={(_propertyId, value) => {
                          setSelectedCell((prev) => ({ ...prev, value }));
                        }}
                      />
                    ) : (
                      <PropertyView
                        property={{ ...property, value } as Property}
                      />
                    )}
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
      width: 50,
      render: (_value, _record, index) => {
        return <>{index + 1}</>;
      },
    },
    ...renderColumns(),
    {
      title: "Actions",
      width: 50,
      align: "center",
      render: (_value, _row) => {
        return selectedCell.projectId.length > 0 ? (
          <div>
            <Tooltip title="Cancel">
              <XCircle
                size={18}
                color="red"
                onClick={() =>
                  setSelectedCell({ propertyId: "", projectId: "", value: "" })
                }
              />
            </Tooltip>
            <Tooltip title="Save">
              <SendHorizontal
                size={18}
                color="green"
                onClick={() =>
                  mutate({
                    propertyId: selectedCell.propertyId,
                    entityId: selectedCell.projectId,
                    value: selectedCell.value,
                  } as UpdatePropertyRequest)
                }
              />
            </Tooltip>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <Tooltip title="Delete">
              <Trash2 size={18} color="red" />
            </Tooltip>
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

  const handleClickOutside = (event: MouseEvent) => {
    if (tableRef.current && !tableRef.current.contains(event.target as Node)) {
      setSelectedCell({ propertyId: "", projectId: "", value: "" });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <style>
        {`.ant-typography
            {
              margin-bottom: 0px !important;
            }`}
      </style>
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
        <div ref={tableRef}>
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
