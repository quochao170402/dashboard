import API from "@/utils/API";

const endPoint = "projects/v1/Project";

const ProjectApi = {
  getProject: (keyword?: string, pageSize?: number, pageIndex?: number) =>
    API.get(`${endPoint}/Filter`, { params: { keyword, pageSize, pageIndex } }),
  addProject: (project: IProject) =>
    API.post(`${endPoint}/AddProject`, project),
  updateProject: (id: string, project: IProject) =>
    API.put(`${endPoint}/UpdateProject/${id}`, project),
  updateProjectStatus: (id: string, project: IProject) =>
    API.patch(`${endPoint}/UpdateProjectStatus/${id}`, project),
  deleteProject: (id: string) => API.delete(`${endPoint}/${id}`),
  getAll: () => API.get(`${endPoint}/GetAll`),
};

export default ProjectApi;
