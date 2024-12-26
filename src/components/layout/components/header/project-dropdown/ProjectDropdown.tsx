import ProjectApi from "@/apis/Project.Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectDropdown = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["getProjects"],
    mutationFn: () => ProjectApi.getAll(),
    onSuccess: (data) => {
      if (data.data.data) {
        const result = data.data.data as IProject[];
        queryClient.setQueryData(["dropdownProjects"], result);
        setProjects(data.data.data as IProject[]);
      }
    },
  });

  const items: MenuProps["items"] =
    projects.length > 0
      ? projects.map((project) => ({
          type: "item",
          key: project.id,
          label: (
            <Link
              to={`/projects/${project.key}`}
              className="flex items-center gap-4 py-1 px-4 text-lg"
            >
              {project.name}
            </Link>
          ),
        }))
      : [
          {
            type: "item",
            key: "no-project",
            label: (
              <div className="flex items-center gap-4 py-1 px-4 text-lg">
                No project
              </div>
            ),
          },
        ];

  return (
    <>
      <Dropdown
        menu={{ items }}
        arrow={{ pointAtCenter: true }}
        onOpenChange={(open) => {
          const clientData = queryClient.getQueryData<IProject[]>([
            "dropdownProjects",
          ]);
          if (open && !clientData) {
            mutate();
          } else {
            setProjects(clientData || []);
          }
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            Projects
            <ChevronDown />
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default ProjectDropdown;
