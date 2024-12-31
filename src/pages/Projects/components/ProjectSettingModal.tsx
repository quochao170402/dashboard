import { IProjectSetting } from "@/@types/Property";
import SettingApi from "@/apis/Setting.Apis";
import { DatatypeAliases } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { Modal, Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table/Column";
import { useState } from "react";
import { toast } from "react-toastify";

interface Props {
  properties: IProjectSetting[];
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

  const { mutate } = useMutation({
    mutationKey: ["update-projects-properties-setting"],
    mutationFn: (request: { propertyId: string; isUsed: boolean }[]) =>
      SettingApi.updateProjectSetting(request),
    onSuccess: () => {
      refetch();
      toast.success("Update project setting successful");
    },
    onError: () => {
      toast.error("Update project setting error");
    },
  });

  const columns: ColumnProps<IProjectSetting>[] = [
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
      render: (_value, record) => {
        return <>{DatatypeAliases[record.datatype]}</>;
      },
    },
  ];

  // rowSelection object indicates the need for row selection
  const rowSelection: TableProps<IProjectSetting>["rowSelection"] = {
    onChange: (
      selectedRowKeys: React.Key[],
      selectedRows: IProjectSetting[]
    ) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );

      setUsedIds(selectedRows.map((x) => x.id));
    },
    getCheckboxProps: (record: IProjectSetting) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
    selectedRowKeys:
      usedIds || properties?.filter((x) => x.isUsed).map((x) => x.id),
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
        title="Project properties"
        open={visible}
        onOk={() => handleOk()}
        onClose={() => handleClose()}
        onCancel={() => handleClose()}
        destroyOnClose
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
