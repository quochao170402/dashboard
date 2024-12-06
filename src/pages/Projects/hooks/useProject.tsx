import { IPagination } from "@/@types/Common";

import ProjectApi from "@/apis/Project.Apis";
import { ColumnProps } from "@/custom-components/table/TableProps";
import useToast from "@/hooks/useToast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import IUpsertProject from "../common/IUpsertProject";

const defaultPageSize = 5;

const useProject = () => {
  const { toast } = useToast();
  const [pageSize, setPageSize] = useState(defaultPageSize);

  const { data: { data: projects = [], count = 0 } = {}, refetch } = useQuery({
    queryKey: ["filter-project"],
    queryFn: () => ProjectApi.getProject(),
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

  const [upsertProjectData, setUpsertProjectData] = useState<IUpsertProject>({
    visible: false,
    updatable: true,
    data: undefined,
  } as IUpsertProject);

  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    totalPage: Math.ceil(count / defaultPageSize),
  });

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, current: page });
  };

  const handleChangePageSize = (pageSize: number) => {
    if (pageSize > 0) {
      setPageSize(pageSize);
    }
  };

  const handleDoubleClick = (row: IProject, _rowIndex: number) => {
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
    });
  };

  const handleToggleModal = (isOpen: boolean) => {
    setUpsertProjectData({
      ...upsertProjectData,
      data: undefined,
      visible: isOpen,
      updatable: true,
    });
  };

  const handleRefetch = () => {
    setPagination({ ...pagination, current: 1 });
  };

  const columns: Array<ColumnProps<IProject>> = [
    {
      key: "id",
      header: "Index",
      width: 100,
      align: "center",
      render: (_value, _row, rowIndex) => {
        return <>{pagination.current * pageSize - pageSize + rowIndex + 1}</>;
      },
    },
    {
      key: "name",
      header: "Name",
      width: 500,
      align: "left",
      render: (_value, _row) => {
        return (
          <>
            <div className="flex gap-4">{_row.name}</div>
          </>
        );
      },
    },
    { key: "key", header: "Key", width: 200, align: "left" },
    { key: "url", header: "URL", width: 250, align: "left" },
    {
      header: "",
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
    pagination,
    pageSize,
    columns,
    projects,
    upsertProjectData,
    handleToggleModal,
    handlePageChange,
    handleChangePageSize,
    handleAddProject,
    handleDoubleClick,
    handleRefetch,
    handleOpenUpdateModal,
  };
};

export default useProject;
