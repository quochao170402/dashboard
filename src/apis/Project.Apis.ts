import API from "@/utils/API";

const endPoint = "api/Project";

const ProjectApi = {
  getProject: () => {
    return API.get(`${endPoint}/Filter`);
  },
  deleteProject: (id: string) => API.delete(`${endPoint}/${id}`),
};

export default ProjectApi;
