import { Datatype } from "@/@types/Enums";
import { IProperty } from "@/@types/Property";
import { DatatypeAliases, getAllDatatypeAliases } from "@/lib/utils";
import { Input, Modal, Select, Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table/Column";
import { Controller, useFieldArray, useForm } from "react-hook-form";

interface Props {
  visible: boolean;
  onClose: () => void;
}

interface IUpdatableProperty extends IProperty {
  updatable: boolean;
}

interface FormValues {
  items: IUpdatableProperty[];
}

const ProjectSetting = ({ visible, onClose }: Props) => {
  const properties: IUpdatableProperty[] = [
    {
      id: "1", // Guid as a string
      isDeleted: false,
      createdAt: new Date(),
      createdBy: "123e4567-e89b-12d3-a456-426614174000", // Guid
      latestUpdatedAt: new Date(),
      latestUpdatedBy: "123e4567-e89b-12d3-a456-426614174001", // Guid
      name: "TaskName",
      label: "Task Name",
      datatype: Datatype.Text, // Enum value
      note: "Name of the task",
      updatable: false,
    },
    {
      id: "2",
      isDeleted: false,
      createdAt: new Date(),
      createdBy: "123e4567-e89b-12d3-a456-426614174002",
      latestUpdatedAt: new Date(),
      latestUpdatedBy: "123e4567-e89b-12d3-a456-426614174003",
      name: "TaskPriority",
      label: "Task Priority",
      datatype: Datatype.Number,
      note: "Priority of the task",
      updatable: false,
    },
    {
      id: "3",
      isDeleted: false,
      createdAt: new Date(),
      createdBy: "123e4567-e89b-12d3-a456-426614174004",
      latestUpdatedAt: new Date(),
      latestUpdatedBy: "123e4567-e89b-12d3-a456-426614174005",
      name: "TaskDeadline",
      label: "Task Deadline",
      datatype: Datatype.DateTime,
      note: "Deadline of the task",
      updatable: false,
    },
  ];

  const { control } = useForm<FormValues>({
    defaultValues: {
      items: properties,
    },
  });

  const { fields } = useFieldArray({
    control,
    name: "items",
  });

  const options = getAllDatatypeAliases().map((item) => {
    return {
      value: item.value,
      label: item.alias,
    };
  });

  const columns: ColumnProps<IUpdatableProperty>[] = [
    {
      title: "No",
      key: "index",
      render: (_value, _record, index) => {
        return <>{index + 1}</>;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_value, record, index) => {
        return (
          <>
            {record.updatable ? (
              <>
                <Controller
                  defaultValue={record.name}
                  control={control}
                  name={`items.${index}.name`}
                  render={({ field }) => (
                    <Input
                      id="name"
                      disabled={!record.updatable}
                      placeholder="Name"
                      type="text"
                      className="p-2 border rounded-md"
                      {...field}
                    />
                  )}
                />
              </>
            ) : (
              record.name
            )}
          </>
        );
      },
    },
    {
      title: "Data Type",
      dataIndex: "datatype",
      key: "datatype",
      align: "right",
      render: (_value, record, index) => {
        return (
          <>
            {record.updatable ? (
              <>
                <Controller
                  defaultValue={record.datatype}
                  control={control}
                  name={`items.${index}.datatype`}
                  disabled={!record.updatable}
                  render={({ field }) => (
                    <Select
                      className="w-44"
                      showSearch
                      placeholder="Select a type"
                      optionFilterProp="label"
                      value={field}
                      onChange={(x) => field.onChange(x)}
                      options={options}
                    />
                  )}
                />
              </>
            ) : (
              DatatypeAliases[record.datatype]
            )}
          </>
        );
      },
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection: TableProps<IUpdatableProperty>["rowSelection"] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: IUpdatableProperty[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: IProperty) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  const handleClose = () => {
    onClose();
  };

  const handleOk = () => {};

  return (
    <>
      <Modal
        width={800}
        title="Project properties"
        open={visible}
        onOk={() => handleOk()}
        onClose={() => handleClose()}
        onCancel={() => handleClose()}
        destroyOnClose
      >
        <Table
          dataSource={fields}
          rowKey="id"
          columns={columns}
          pagination={false}
          rowSelection={{ type: "checkbox", ...rowSelection }}
        />
      </Modal>
    </>
  );
};

export default ProjectSetting;
