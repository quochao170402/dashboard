import { Datatype, PropertyType } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import SettingApi from "@/apis/Setting.Apis";
import DatatypeSelect from "@/components/properties/DatatypeSelect/DatatypeSelect";
import Title from "@/components/title/Title";
import { DatatypeAliases } from "@/lib/utils";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button, Checkbox, Input, Tooltip } from "antd";
import Table, { ColumnProps } from "antd/es/table";
import { CircleCheck, CircleX, SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

type OpenType = "create" | "edit" | null;

const Property = () => {
  const [open, setOpen] = useState<OpenType>(null);

  const [newProperty, setNewProperty] = useState<ISettingModel | null>(null);

  const { projectKey } = useParams();
  const { data, refetch } = useQuery({
    queryKey: ["get-projects-properties"],
    queryFn: () =>
      SettingApi.getProperties(
        projectKey ? PropertyType.Task : PropertyType.Project
      ),
    select: (res) => {
      const result = res.data.data;
      return (result as ISettingModel[]) ?? ([] as ISettingModel[]);
    },
    
  });

  const { mutate: addProperty } = useMutation({
    mutationKey: ["add-property"],
    mutationFn: (request: ISettingModel) => SettingApi.addProperty(request),
    onSuccess: () => {
      refetch();
      setNewProperty(null);
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
      setNewProperty(null);
      setOpen(null);
      toast.success("Property updated successfully");
    },
  });

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
      render: (_value, record) => (
        <>
          {newProperty && record.id === newProperty.id ? (
            <Input
              type="text"
              value={newProperty.name}
              onChange={(e) =>
                setNewProperty({ ...newProperty, name: e.target.value })
              }
            />
          ) : (
            <>{record.name}</>
          )}
        </>
      ),
    },
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
      render: (_value, record) => (
        <>
          {newProperty && record.id === newProperty.id ? (
            <Input
              type="text"
              value={newProperty.label}
              onChange={(e) =>
                setNewProperty({ ...newProperty, label: e.target.value })
              }
            />
          ) : (
            <>{record.label}</>
          )}
        </>
      ),
    },
    {
      title: "Datatype",
      align: "center",
      width: 150,
      key: "datatype",
      render: (_value, record) => (
        <>
          {newProperty && record.id === newProperty.id ? (
            <DatatypeSelect
              value={record.datatype}
              onChange={(value) => {
                setNewProperty({ ...newProperty, datatype: value });
              }}
            />
          ) : (
            <>{DatatypeAliases[record.datatype]}</>
          )}
        </>
      ),
    },
    {
      title: "Note",
      dataIndex: "note",
      key: "note",
      render: (_value, record) => (
        <>
          {newProperty && record.id === newProperty.id ? (
            <Input
              type="text"
              value={newProperty.note}
              onChange={(e) =>
                setNewProperty({ ...newProperty, note: e.target.value })
              }
            />
          ) : (
            <>{record.note}</>
          )}
        </>
      ),
    },
    {
      title: "Default",
      dataIndex: "isDefault",
      align: "center",
      key: "isDefault",
      render: (_value, record) => (
        <>
          {newProperty && record.id === newProperty.id ? (
            <Checkbox
              checked={newProperty.isDefault}
              onChange={(e) =>
                setNewProperty({ ...newProperty, isDefault: e.target.checked })
              }
            />
          ) : (
            <Checkbox checked={record.isDefault} />
          )}
        </>
      ),
    },
    {
      title: "Used",
      dataIndex: "isUsed",
      align: "center",
      key: "isUsed",
      render: (_value, record) => (
        <>
          {newProperty && record.id === newProperty.id ? (
            <Checkbox
              checked={newProperty.isUsed}
              onChange={(e) =>
                setNewProperty({ ...newProperty, isUsed: e.target.checked })
              }
            />
          ) : (
            <Checkbox checked={record.isUsed} />
          )}
        </>
      ),
    },
    {
      title: "Action",
      align: "center",
      key: "action",
      render: (_value, record) => {
        if (newProperty && record.id === newProperty.id) {
          return (
            <div className="flex gap-3 items-center justify-center">
              <Tooltip title="Cancel">
                <Button
                  icon={<CircleX size={18} color="red" />}
                  onClick={() => setNewProperty(null)}
                />
              </Tooltip>
              <Tooltip title="Save">
                <Button
                  icon={<CircleCheck size={18} color="green" />}
                  onClick={() => {
                    if (newProperty.id.length > 0) {
                      handleUpdate();
                    } else {
                      handleAdd();
                    }
                  }}
                />
              </Tooltip>
            </div>
          );
        }
        return (
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
              <Button icon={<Trash2 size={18} color="red" />} />
            </Tooltip>
          </div>
        );
      },
    },
  ];

  const handleAdd = () => {
    if (newProperty != null) {
      addProperty(newProperty);
    } else {
      toast.error("Please fill in the required fields");
    }
  };

  const handleUpdate = () => {
    if (newProperty != null && newProperty.id.length > 0) {
      updateProperty(newProperty);
    } else {
      toast.error("Please fill in the required fields");
    }
  };

  const handleDoubleClick = (record: ISettingModel) => {
    handleToggleForm("edit", record);
  };

  const handleToggleForm = (open: OpenType, value: ISettingModel) => {
    setOpen(open);
    setNewProperty(open != null ? value : null);
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <Title title={"Project"} />
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
          newProperty && newProperty.id.length === 0
            ? [newProperty, ...(data ?? [])]
            : data
        }
        rowKey="id"
        pagination={false}
        onRow={(record) => {
          return {
            onDoubleClick: () => {
              handleDoubleClick(record);
            },
          };
        }}
      />
    </>
  );
};

export default Property;
