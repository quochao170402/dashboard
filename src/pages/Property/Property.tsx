import { IPagination } from "@/@types/Common";
import { Datatype, PropertyType } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import SettingApi from "@/apis/Setting.Apis";
import Title from "@/components/title/Title";
import { DatatypeAliases } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Tooltip } from "antd";
import Table, { ColumnProps, TablePaginationConfig } from "antd/es/table";
import { SquarePen, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import PropertyForm from "./components/PropertyForm";

type OpenType = "create" | "edit" | undefined;

const Property = () => {
  const { projectKey } = useParams();

  const initPropertyValue: ISettingModel = {
    id: "",
    name: "",
    label: "",
    datatype: Datatype.Text,
    note: "",
    isDefault: false,
    isUsed: false,
    propertyType: projectKey ? PropertyType.Task : PropertyType.Project,
  };

  const [open, setOpen] = useState<OpenType>(undefined);
  const [selectedProperty, setSelectedProperty] = useState<ISettingModel>();

  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    pageSize: 10,
  });

  const { data: { data: properties = [], count = 0 } = {}, refetch } = useQuery(
    {
      queryKey: [
        "get-projects-properties",
        pagination.current,
        pagination.pageSize,
      ],
      queryFn: () =>
        SettingApi.getProperties(
          projectKey ? PropertyType.Task : PropertyType.Project,
          pagination.current,
          pagination.pageSize
        ),
      select: (res) => {
        const result = res.data.data as {
          data: ISettingModel[];
          count: number;
        };
        return result;
      },
    }
  );

  const { mutate: addProperty } = useMutation({
    mutationKey: ["add-property"],
    mutationFn: (request: ISettingModel) => SettingApi.addProperty(request),
    onSuccess: () => {
      refetch();
      handleToggleForm(undefined, undefined);
      toast.success("Property added successfully");
    },
    onError: () => {
      toast.error(`Property added failed`);
    },
  });

  const { mutate: updateProperty } = useMutation({
    mutationKey: ["update-property"],
    mutationFn: (request: ISettingModel) => SettingApi.updateProperty(request),
    onSuccess: () => {
      refetch();
      handleToggleForm(undefined, undefined);
      toast.success("Property updated successfully");
    },
  });

  const { mutate: deleteProperty } = useMutation({
    mutationKey: ["delete-property"],
    mutationFn: (id: string) => SettingApi.deleteProperty(id),
    onSuccess: () => {
      refetch();
      toast.success("Property deleted successfully");
    },
    onError: () => {
      toast.error(`Property deleted error`);
    },
  });

  const columns: Array<ColumnProps<ISettingModel>> = [
    {
      title: "No.",
      align: "center",
      width: 50,
      render: (_value, _record, index) => index + 1,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Datatype",
      align: "center",
      width: 150,
      key: "datatype",
      render: (_value, record) => <>{DatatypeAliases[record.datatype]}</>,
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
    },
    {
      title: "Default",
      dataIndex: "isDefault",
      align: "center",
      key: "isDefault",
      render: (_value, record) => <Checkbox checked={record.isDefault} />,
    },
    {
      title: "Used",
      dataIndex: "isUsed",
      align: "center",
      key: "isUsed",
      render: (_value, record) => <Checkbox checked={record.isUsed} />,
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: (_value, record) => (
        <div className="flex gap-3 items-center justify-center">
          <Tooltip title="Edit">
            <Button
              icon={
                <SquarePen
                  size={18}
                  color="#0c66e4"
                  onClick={() => handleToggleForm("edit", record)}
                />
              }
            />
          </Tooltip>
          <Tooltip title="Delete">
            <Button
              onClick={() => deleteProperty(record.id)}
              icon={<Trash2 size={18} color="red" />}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  const handleDoubleClick = (record: ISettingModel) => {
    handleToggleForm("edit", record);
  };

  const handleToggleForm = (open: OpenType, value?: ISettingModel) => {
    console.log("handleToggleForm :>> ", { open, value });
    setOpen(open);
    setSelectedProperty(value);
  };

  const paginationConfig = useMemo(() => {
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
  }, [pagination, count]);

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Title title="Setting" />
        <div className="flex gap-4">
          <Button
            variant="outlined"
            className="p-4 py-5 text-green-500"
            onClick={() => handleToggleForm("create", initPropertyValue)}
          >
            Create
          </Button>
        </div>
      </div>
      <Table
        bordered
        columns={columns}
        dataSource={
          // newProperty && newProperty.id.length === 0
          //   ? [newProperty, ...(properties ?? [])]
          //   : properties
          properties
        }
        rowKey="id"
        pagination={{ ...paginationConfig }}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              handleDoubleClick(record);
            },
          };
        }}
      />
      {open && (
        <PropertyForm
          data={selectedProperty ?? undefined}
          open={open !== undefined}
          onClose={() => handleToggleForm(undefined, undefined)}
          onSubmit={open === "create" ? addProperty : updateProperty}
        ></PropertyForm>
      )}
    </>
  );
};

export default Property;
