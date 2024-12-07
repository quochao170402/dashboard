import { IPagination } from "@/@types/Common";

import ProjectApi from "@/apis/Project.Apis";
import useToast from "@/hooks/useToast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ColumnProps } from "antd/es/table";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import IUpsertProject from "../common/IUpsertProject";

const useProject = () => {
  const { toast } = useToast();
  const [upsertProjectData, setUpsertProjectData] = useState<IUpsertProject>({
    visible: false,
    updatable: true,
    data: undefined,
    onSubmit: undefined,
  } as IUpsertProject);

  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    pageSize: 10,
  });

  const [searchParams] = useSearchParams();

  const { data: { data: projects = [], count = 0 } = {}, refetch } = useQuery({
    queryKey: [
      "filter-project",
      pagination.current,
      pagination.pageSize,
      searchParams.get("keyword"),
    ],
    queryFn: () =>
      ProjectApi.getProject(
        searchParams.get("keyword") ?? "",
        pagination.pageSize,
        pagination.current
      ),
    select: (res) => {
      const result = res.data.data;
      return result;
    },
    staleTime: Infinity,
  });

  const { mutate: handleAddProject } = useMutation({
    mutationKey: ["add-project"],
    mutationFn: (project: IProject) => ProjectApi.addProject(project),
    onSuccess: () => {
      toast.success("Create project successful");
      refetch();
    },
    onError: () => {
      toast.success("Create project error");
    },
  });

  const { mutate: handleUpdateProject } = useMutation({
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

  const handlePageChange = (page: number, pageSize: number) => {
    setPagination({ pageSize: pageSize, current: page });
  };

  const handleDoubleClick = (row: IProject) => {
    setUpsertProjectData({
      ...upsertProjectData,
      visible: true,
      data: row,
      updatable: false,
    });
  };

  const handleOpenUpdateModal = (row: IProject) => {
    setUpsertProjectData({
      ...upsertProjectData,
      visible: true,
      data: row,
      updatable: true,
      onSubmit: (project: IProject) =>
        handleUpdateProject({ id: row.id, project: project }),
    });
  };

  const handleToggleModal = (isOpen: boolean) => {
    setUpsertProjectData({
      ...upsertProjectData,
      data: undefined,
      visible: isOpen,
      updatable: true,
      onSubmit: (project: IProject) => handleAddProject(project),
    });
  };

  const handleRefetch = () => {
    setPagination({ ...pagination, current: 1 });
  };

  const columns: Array<ColumnProps<IProject>> = [
    {
      title: "No",
      width: 100,
      align: "center",
      render: (_value, _row, rowIndex) => {
        return <>{rowIndex + 1}</>;
      },
    },
    {
      dataIndex: "name",
      title: "Name",

      align: "left",
      render: (_value, _row) => {
        return (
          <>
            <div className="flex gap-4">{_row.name}</div>
          </>
        );
      },
    },
    {
      dataIndex: "key",
      width: 120,
      title: "Key",
      align: "left",
    },
    {
      title: "Leader",
      width: 120,
      align: "left",
      render: (_value, _row) => {
        return (
          <>
            <div className="flex gap-4">{_row.name}</div>
          </>
        );
      },
    },
    {
      dataIndex: "url",
      title: "Url",
      width: 300,
      align: "left",
      render(value) {
        return (
          <>
            <a href={value} className="text-blue-500 underline">
              {value}
            </a>
          </>
        );
      },
    },
    {
      title: "Actions",
      width: 100,
      align: "center",
      render: (_value, row) => {
        return (
          <div className="flex gap-3 items-center justify-center">
            <button onClick={() => handleOpenUpdateModal(row)}>
              <SquarePen size={18} color="#0c66e4" />
            </button>
            <button onClick={() => deleteProject(row.id)}>
              <Trash2 size={18} color="red" />
            </button>
          </div>
        );
      },
    },
  ];

  return {
    totalRecord: count,
    pagination,
    columns,
    projects,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleAddProject,
    handleDoubleClick,
    handleRefetch,
    handleOpenUpdateModal,
    handleUpdateProject,
  };
};

export default useProject;
