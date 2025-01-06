import { PropertyType } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import SettingApi from "@/apis/Setting.Apis";
import { useQuery } from "@tanstack/react-query";

const useProjectProperty = () => {
  // TODO: fetch properties table and config project table columns => api getProperties
  const { data: properties, refetch: refetchProperties } = useQuery({
    queryKey: ["get-all-properties"],
    queryFn: () => SettingApi.getAllProperties(PropertyType.Project),
    select: (res) => {
      const result = res.data.data;
      return (result as ISettingModel[]) ?? ([] as ISettingModel[]);
    },
  });

  return {
    properties,
    refetchProperties,
  };
};

export default useProjectProperty;
