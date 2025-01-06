import { IPagination } from "@/@types/Common";
import ProjectApiV2 from "@/apis/Project.Api.V2";
import ProjectApi from "@/apis/Project.Apis";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-toastify";

const useProjectV2 = () => {
  // TODO: handle pagination

  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    pageSize: 10,
  });

  // TODO: fetch projects table => api getProjects
  const { data: { data: projects = [], count = 0 } = {}, refetch } = useQuery({
    queryKey: ["filter", pagination.current, pagination.pageSize],
    queryFn: () =>
      ProjectApi.getProject("", pagination.pageSize, pagination.current),
    select: (res) => {
      const result = res.data.data as {
        data: IProjectTableResponse[];
        count: number;
      };
      return result;
    },
  });

  const { mutate: addProject } = useMutation({
    mutationKey: ["add-project"],
    mutationFn: (properties: { PropertyId: string; Value: string }[]) =>
      ProjectApiV2.add(properties),
    onSuccess: () => {
      toast.success("Create project successful");
      refetch();
    },
    onError: () => {
      toast.error("Create project error");
    },
  });

  const { mutate: updateProject } = useMutation({
    mutationKey: ["update-project"],
    mutationFn: ({ id, project }: { id: string; project: IProject }) =>
      ProjectApi.updateProject(id, project),
    onSuccess: () => {
      toast.success("Create project successful");
      refetch();
    },
    onError: () => {
      toast.error("Create project error");
    },
  });

  const { mutate: deleteProject } = useMutation({
    mutationKey: ["delete-project"],
    mutationFn: (id: string) => ProjectApi.deleteProject(id),
    onSuccess: () => {
      toast.success("Delete project successful");
      refetch();
    },
    onError: () => {
      toast.error("Delete project error");
    },
  });

  return {
    // Projects
    projects,
    count,
    addProject,
    updateProject,
    deleteProject,
    // totalRecord: count,

    // Pagination
    pagination,
    setPagination,
    refetch
    // // columns,
    // dynamicColumns,
    // dataSource,
    // projects,

    // upsertProjectData,
    // handleToggleModal,
    // handlePageChange,
    // handleAddProject,
    // handleDoubleClick,
    // handleRefetch,
    // handleOpenUpdateModal,
    // handleUpdateProject,
  };
};

export default useProjectV2;
