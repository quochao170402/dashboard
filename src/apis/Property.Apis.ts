import API from "@/utils/API";

const endPoint = "projects/v1/Setting";

const PropertyApi = {
  getProperties: () => API.get(`${endPoint}/GetProjectProperties`),
};

export default PropertyApi;
