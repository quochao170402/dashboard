import { IProperty } from "@/@types/Property";
import { DatatypeAliases } from "@/lib/utils";
import { Modal, Table, TableProps } from "antd";
import { ColumnProps } from "antd/es/table/Column";

interface Props {
  properties: IProperty[];
  setProperties: (properties: IProperty[]) => void;
  visible: boolean;
  onClose: () => void;
}

const ProjectSettingModal = ({ properties, visible, onClose }: Props) => {
  const columns: ColumnProps<IProperty>[] = [
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
  const rowSelection: TableProps<IProperty>["rowSelection"] = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IProperty[]) => {
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
