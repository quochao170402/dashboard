import { IPagination } from "@/@types/Common";
import { useState } from "react";

const useProjectPagination = () => {
  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    pageSize: 10,
  });

  const handlePageChange = (page: number, pageSize: number) => {
    setPagination({ pageSize: pageSize, current: page });
  };

  return {
    pagination,
    handlePageChange
  };
};

export default useProjectPagination;
