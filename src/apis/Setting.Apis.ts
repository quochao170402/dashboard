import { PropertyType } from "@/@types/Enums";
import API from "@/utils/API";

const endPoint = "projects/v1/Setting";

const SettingApi = {
  getProperties: (propertyType: PropertyType) =>
    API.get(`${endPoint}/GetProperties/${propertyType}`),
  updateProjectSetting: (request: { propertyId: string; isUsed: boolean }[]) =>
    API.post(`${endPoint}/UpdateProjectSetting`, {
      settings: request,
    }),
};

export default SettingApi;
