import { IPagination } from "@/@types/Common";

import ProjectApi from "@/apis/Project.Apis";
import { ColumnProps } from "@/custom-components/table/TableProps";
import useToast from "@/hooks/useToast";
import { useMutation, useQuery } from "@tanstack/react-query";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import IUpsertProject, { IProjectFilter } from "../common/IUpsertProject";

const defaultPageSize = 5;

const useProject = () => {
  const { toast } = useToast();

  const { data: { data: projects = [], count = 0 } = {} } = useQuery({
    queryKey: ["filter-project"],
    queryFn: () => ProjectApi.getProject(),
    select: (res) => {
      const result = res.data.data;
      return result;
    },
    staleTime: Infinity,
  });

  const { mutate: deleteProject } = useMutation({
    mutationKey: ["delete-project"],
    mutationFn: (id: string) => ProjectApi.deleteProject(id),
    onSuccess: () => {
      console.log("Delete project success");
    },
    onError: () => {
      console.log("Delete project error");
    },
  });

  const [pageSize, setPageSize] = useState(defaultPageSize);

  const [upsertProjectData, setUpsertProjectData] = useState<IUpsertProject>({
    visible: false,
    updatable: true,
    data: undefined,
  } as IUpsertProject);

  const [pagination, setPagination] = useState<IPagination>({
    current: 1,
    totalPage: Math.ceil(count / defaultPageSize),
  });

  const [newProject, setNewProject] = useState<IProject>();

  const handleDelete = (data: IProject) => {
    deleteProject(data.id);
    toast.success("Delete project successful");
  };

  const handleUpdate = (data: IProject) => {
    setUpsertProjectData({
      ...upsertProjectData,
      visible: true,
      data: data,
    });
    toast.success("Update project successful");
  };

  const handleAdd = () => {
    if (newProject && newProject.name) {
      // setProjects((prev) => [newProject, ...prev]);
      setUpsertProjectData({ ...upsertProjectData, visible: false });
    }
    toast.success("Create project successful");
  };

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

  const handleFilter = (filter: IProjectFilter) => {
    console.log("🚀 ~ handleFilter ~ filter:", filter);
    let temp: IProject[] = projects;

    if (filter.keyword && filter.keyword.length > 0) {
      temp = temp.filter((x) =>
        x.name.toLowerCase().includes(filter.keyword.toLowerCase())
      );
    }
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
            <button onClick={() => handleUpdate(row)}>
              <SquarePen size={18} color="#0c66e4" />
            </button>
            <button onClick={() => handleDelete(row)}>
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
    newProject,
    setNewProject,
    handleToggleModal,
    handlePageChange,
    handleChangePageSize,
    handleDelete,
    handleUpdate,
    handleAdd,
    handleDoubleClick,
    handleRefetch,
    handleFilter,
  };
};

export default useProject;
