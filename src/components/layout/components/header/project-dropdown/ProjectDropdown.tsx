import ProjectApi from "@/apis/Project.Apis";
import { useMutation } from "@tanstack/react-query";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectDropdown = () => {
  const [projects, setProjects] = useState<IProject[]>([]);

  const { mutate } = useMutation({
    mutationKey: ["getProjects"],
    mutationFn: () => ProjectApi.getProject(),
    onSuccess: (data) => {
      setProjects(data.data.data.data as IProject[]);
    },
  });

  const items: MenuProps["items"] = projects.map((project) => ({
    type: "item",
    key: project.id,
    label: (
      <Link
        to={`/projects/${project.id}`}
        className="flex items-center gap-4 py-1 px-4 text-lg"
      >
        {project.name}
      </Link>
    ),
  }));

  return (
    <>
      <Dropdown
        menu={{ items }}
        arrow={{ pointAtCenter: true }}
        onOpenChange={(open) => {
          if (open) {
            mutate();
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
