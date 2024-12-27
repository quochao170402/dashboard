import { IOptionData } from "@/@types/Common";
import ProjectApi from "@/apis/Project.Apis";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectDropdown = () => {
  const [options, setOptions] = useState<IOptionData[]>([]);
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["getProjects"],
    mutationFn: () => ProjectApi.getProjectOptions(),
    onSuccess: (data) => {
      if (data.data.data) {
        const result = data.data.data as IOptionData[];
        queryClient.setQueryData(["dropdownProjects"], result);
        setOptions(data.data.data as IOptionData[]);
      }
    },
  });
  console.log("options :>> ", options);
  const items: MenuProps["items"] =
    options.length > 0
      ? options.map((value) => ({
          type: "item",
          key: value.key,
          label: (
            <Link
              to={`/projects/${value.key}`}
              className="flex items-center gap-4 py-1 px-4 text-lg"
            >
              {value.value}
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
          const clientData = queryClient.getQueryData<IOptionData[]>([
            "dropdownProjects",
          ]);
          if (open && !clientData) {
            mutate();
          } else {
            setOptions(clientData || []);
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
