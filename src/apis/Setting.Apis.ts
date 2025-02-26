import { PropertyType } from "@/@types/Enums";
import { ISettingModel } from "@/@types/Property";
import API from "@/utils/API";

export interface UpdatePropertyRequest {
  propertyId: string;
  entityId: string;
  value: string;
}

const endPoint = "projects/v1/Setting";

const SettingApi = {
  getProperties: (
    propertyType: PropertyType,
    pageIndex?: number,
    pageSize?: number
  ) =>
    API.get(
      `${endPoint}/GetProperties/${propertyType}?pageIndex=${pageIndex}&pageSize=${pageSize}`
    ),
  updateProjectSetting: (request: { propertyId: string; isUsed: boolean }[]) =>
    API.put(`${endPoint}/UpdateSetting`, {
      settings: request,
    }),
  addProperty: (request: ISettingModel) =>
    API.post(`${endPoint}/AddProperty`, request),
  updateProperty: (request: ISettingModel) =>
    API.put(`${endPoint}/UpdateProperty/${request.id}`, request),
  getAllProperties: (type: PropertyType) =>
    API.get(`${endPoint}/GetAllProperties/${type}`),
  updatePropertySetting: (request: UpdatePropertyRequest) =>
    API.put(`${endPoint}/UpdatePropertySetting`, request),
  deleteProperty: (id: string) => API.delete(`${endPoint}/DeleteProperty/${id}`),
};

export default SettingApi;
