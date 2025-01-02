import { ISettingModel } from "@/@types/Property";
import SettingApi from "@/apis/Setting.Apis";
import { useMutation } from "@tanstack/react-query";
import { Button, Modal, Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table/Column";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

interface Props {
  properties: ISettingModel[];
  refetch: () => void;
  visible: boolean;
  onClose: () => void;
}

const ProjectSettingModal = ({
  properties,
  refetch,
  visible,
  onClose,
}: Props) => {
  const [usedIds, setUsedIds] = useState<string[]>([]);

  useEffect(() => {
    if (properties && properties.length > 0) {
      const defaultUsedIds = properties
        .filter((x) => x.isUsed)
        .map((x) => x.id);
      setUsedIds(defaultUsedIds);
    }
  }, [properties]);

  const { mutate } = useMutation({
    mutationKey: ["update-projects-properties-setting"],
    mutationFn: (request: { propertyId: string; isUsed: boolean }[]) =>
      SettingApi.updateProjectSetting(request),
    onSuccess: () => {
      refetch();
      handleClose();
      toast.success("Update project setting successful");
    },
    onError: () => {
      toast.error("Update project setting error");
    },
  });

  const columns: ColumnProps<ISettingModel>[] = [
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
    },
    {
      title: "Data Type",
      dataIndex: "datatype",
      key: "datatype",
      align: "right",
      // render: (_value, record) => {
      //   // return <PropertyInput />; // {DatatypeAliases[record.datatype]}</PropertyInput>;
      // },
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection: TableProps<ISettingModel>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: ISettingModel[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setUsedIds(selectedRowKeys.map((x) => x.toString()));
    },
    getCheckboxProps: (record: ISettingModel) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
    selectedRowKeys: usedIds,
  };

  const handleClose = () => {
    onClose();
    setUsedIds(properties?.filter((x) => x.isUsed).map((x) => x.id) || []);
  };

  const handleOk = () => {
    const request = properties.map((x) => {
      return {
        propertyId: x.id,
        isUsed: usedIds.includes(x.id),
      };
    });

    mutate(request);
  };

  return (
    <>
      <Modal
        width={800}
        title="Columns"
        open={visible}
        onOk={() => handleOk()}
        onClose={() => handleClose()}
        onCancel={() => handleClose()}
        destroyOnClose
        footer={() => {
          return (
            <div className="flex justify-end gap-2">
              <Button onClick={() => handleClose()} type="primary" danger>
                Cancel
              </Button>
              <Button type="primary" onClick={() => handleOk()}>
                Save
              </Button>
            </div>
          );
        }}
      >
        <Table
          dataSource={properties}
          rowKey="id"
          columns={columns}
          pagination={false}
          rowSelection={{ type: "checkbox", ...rowSelection }}
        />
      </Modal>
    </>
  );
};

export default ProjectSettingModal;
