import Modal from "@/custom-components/modal/Modal";
import Pagination from "@/custom-components/pagination/Pagination";
import Table from "@/custom-components/table/Table";
import Title from "@/custom-components/title/Title";
import { useState } from "react";
import useProject from "./hooks/useProject";

const Project = () => {
  const { pagination, columns, data, handlePageChange } = useProject();
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Title className="mb-4" title={"Project"} />
      <div>
        <Table border={false} data={data} columns={columns} />
        <div className="my-4">
          <Pagination
            totalPage={pagination.totalPage}
            currentPage={pagination.current}
            onPageChange={handlePageChange}
          />
        </div>
        <Modal
          visible={visible}
          onClose={() => {
            console.log("onClose visible", visible);
            setVisible(false);
          }}
        />
      </div>
    </div>
  );
};

export default Project;
