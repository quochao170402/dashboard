import API from "@/utils/API";

const endPoint = "api/v1/Task";

const TaskApi = {
  getTasks: (
    projectId: string,
    keyword: string,
    pageSize: number,
    pageIndex: number
  ) =>
    API.get(`${endPoint}/FilterTask/${projectId}`, {
      params: { keyword, pageSize, pageIndex },
    }),
  createTask: (task: ITask) => API.post(`${endPoint}/CreateTask`, task),
  updateTask: (id: string, task: ITask) =>
    API.put(`${endPoint}/UpdateTask/${id}`, task),
  updateTaskStatus: (id: string, task: ITask) =>
    API.patch(`${endPoint}/UpdateTaskStatus/${id}`, task),
  deleteTask: (id: string) => API.delete(`${endPoint}/${id}`),
};

export default TaskApi;
