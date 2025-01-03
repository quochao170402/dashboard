import { IPagination } from "@/@types/Common";

import { PropertyType } from "@/@types/Enums";
import { IProjectSetting } from "@/@types/Property";
import ProjectApi from "@/apis/Project.Apis";
import SettingApi from "@/apis/Setting.Apis";
import { selectProject } from "@/features/ProjectSlice";
import { RootState } from "@/stores/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { ColumnProps } from "antd/es/table";
import { SquarePen, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import IUpsertProject from "../common/IUpsertProject";

const useProject = () => {
  const { project } = useSelector((state: RootState) => state.project);
  const dispatch = useDispatch();

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

  // const { data: { data: projects = [], count = 0 } = {}, refetch } = useQuery({
  //   queryKey: [
  //     "filter-project",
  //     pagination.current,
  //     pagination.pageSize,
  //     searchParams.get("keyword"),
  //   ],
  //   queryFn: () =>
  //     ProjectApi.getProject(
  //       searchParams.get("keyword") ?? "",
  //       pagination.pageSize,
  //       pagination.current
  //     ),
  //   select: (res) => {
  //     const result = res.data.data;
  //     console.log("🚀 ~ useProject ~ result:", result);

  //     return result;
  //   },
  //   staleTime: Infinity,
  // });

  const { data: properties, refetch: refetchProperties } = useQuery({
    queryKey: ["get-projects-properties"],
    queryFn: () => SettingApi.getProperties(PropertyType.Project),
    select: (res) => {
      const result = res.data.data;
      return (result as IProjectSetting[]) ?? ([] as IProjectSetting[]);
    },
  });

  const { mutate: handleAddProject } = useMutation({
    mutationKey: ["add-project"],
    mutationFn: (project: IProject) => ProjectApi.addProject(project),
    onSuccess: () => {
      toast.success("Create project successful");
      refetch();
    },
    onError: () => {
      toast.error("Create project error");
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

  const { data: { data: projects = [], count = 0 } = {}, refetch } = useQuery({
    queryKey: ["project-paging", pagination.current, pagination.pageSize],
    queryFn: () =>
      ProjectApi.getPaging(pagination.pageSize, pagination.current),
    select: (res) => {
      const result = res.data.data;
      return result;
    },
  });

  const handlePageChange = (page: number, pageSize: number) => {
    setPagination({ pageSize: pageSize, current: page });
  };

  const handleDoubleClick = (row: IProject) => {
    if (project?.id != row.id) {
      dispatch(selectProject(row));
    }
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

  const renderColumns = () => {
    if (properties && properties.length > 0) {
      return properties
        .filter((x) => x.isUsed)
        .map(
          (property) =>
            ({
              dataIndex: property.name.toLowerCase(),
              title: property.label,
              align: "left",
            } as ColumnProps<IProjectResponse>)
        );
    } else {
      return [];
    }
  };

  const columns: Array<ColumnProps<IProjectResponse>> = [
    {
      title: "No",
      width: 100,
      align: "center",
      render: (_value, _row, rowIndex) => {
        return <>{rowIndex + 1}</>;
      },
    },
    ...renderColumns(),
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
    properties,
    refetchProperties,
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
