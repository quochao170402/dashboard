import { IPagination } from "@/@types/Common";
import TaskApi from "@/apis/Task.Apis";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const useTaskHook = () => {
  const { projectKey } = useParams();
  console.log("🚀 ~ useTaskHook ~ projectKey:", projectKey);
  const [searchParams] = useSearchParams();

  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    pageSize: 10,
  });

  const handlePageChange = (page: number, pageSize: number) => {
    setPagination({ pageSize: pageSize, current: page });
  };

  const { data: tasks, isLoading: tasksLoading } = useQuery({
    queryKey: [
      "tasks",
      projectKey,
      pagination.current,
      pagination.pageSize,
      searchParams.get("keyword"),
    ],
    queryFn: () =>
      TaskApi.getTasks(
        projectKey!,
        searchParams.get("keyword") ?? "",
        pagination.current,
        pagination.pageSize
      ),
    select: (res) => {
      const result = res.data.data.data;
      return (result as ITask[]) ?? [];
    },
  });

  return {
    tasks,
    tasksLoading,
    handlePageChange,
  };
};

export default useTaskHook;
