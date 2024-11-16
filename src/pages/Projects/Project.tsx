import Modal from "@/custom-components/modal/Modal";
import Pagination from "@/custom-components/pagination/Pagination";
import SizeChanger from "@/custom-components/sizeChanger/SizeChanger";
import Table from "@/custom-components/table/Table";
import Title from "@/custom-components/title/Title";
import { useState } from "react";
import useProject from "./hooks/useProject";

const Project = () => {
  const { pagination, columns, dummyData, handlePageChange } = useProject();
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Title className="mb-4" title={"Project"} />
      <div>
        <Table border={false} data={dummyData} columns={columns} />
        <div className="my-4 flex items-center justify-between">
          <SizeChanger visible={true} />
          <Pagination
            totalItems={pagination.totalItems}
            currentPage={pagination.current}
            onPageChange={handlePageChange}
          />
        </div>
        <Modal visible={visible} onClose={() => setVisible(false)} />
      </div>
    </div>
  );
};

export default Project;
