import { PropertyType } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import API from "@/utils/API";

const endPoint = "projects/v1/Setting";

const SettingApi = {
  getProperties: (propertyType: PropertyType) =>
    API.get(`${endPoint}/GetProperties/${propertyType}`),
  updateProjectSetting: (request: { propertyId: string; isUsed: boolean }[]) =>
    API.post(`${endPoint}/UpdateProjectSetting`, {
      settings: request,
    }),
  addProperty: (request: ISettingModel) =>
    API.post(`${endPoint}/AddProperty`, request),
  updateProperty: (request: ISettingModel) =>
    API.put(`${endPoint}/UpdateProperty/${request.id}`, request),
};

export default SettingApi;
