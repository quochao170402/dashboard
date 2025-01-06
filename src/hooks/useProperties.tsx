import { PropertyType } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import SettingApi from "@/apis/Setting.Apis";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface IProps {
  projectKey?: string;
}

const useProperties = ({ projectKey }: IProps) => {
  const [properties, setProperties] = useState<ISettingModel[]>([]);

  // TODO: fetch properties table and config project table columns => api getProperties
  // const { data: properties, refetch: refetchProperties } = useQuery({
  //   queryKey: ["get-projects-properties"],
  //   queryFn: () => SettingApi.getProperties(PropertyType.Project),
  //   select: (res) => {
  //     const result = res.data.data;
  //     return (result as ISettingModel[]) ?? ([] as ISettingModel[]);
  //   },
  // });

  const { mutate } = useMutation({
    mutationKey: ["get-projects-properties"],
    mutationFn: () =>
      SettingApi.getProperties(
        projectKey ? PropertyType.Task : PropertyType.Project
      ),
    onSuccess: (result) => {
      const data = result.data.data;
      setProperties(data as ISettingModel[]);
    },
  });

  return {
    properties,
    mutate,
  };
};

export default useProperties;
