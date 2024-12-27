import API from "@/utils/API";

const endPoint = "projects/v1/Project";

const ProjectApi = {
  getProject: (keyword?: string, pageSize?: number, pageIndex?: number) =>
    API.get(`${endPoint}/Filter`, { params: { keyword, pageSize, pageIndex } }),
  addProject: (project: IProject) =>
    API.post(`${endPoint}/AddProject`, project),
  updateProject: (id: string, project: IProject) =>
    API.put(`${endPoint}/UpdateProject/${id}`, project),
  deleteProject: (id: string) => API.delete(`${endPoint}/DeleteProject/${id}`),
  getProjectOptions: () => API.get(`${endPoint}/GetOptions`),
  getProperties: () => API.get(`${endPoint}/GetProjectProperties`),
};

export default ProjectApi;