import axios, { HttpStatusCode } from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_API_ENDPOINT ?? "https://localhost:8000";

const API = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json", Accept: "*/*" },
});

// Add a response interceptor
API.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (
      ![
        HttpStatusCode.UnprocessableEntity,
        HttpStatusCode.Unauthorized,
        HttpStatusCode.Conflict,
      ].includes(error.response?.status as number)
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any | undefined = error.response?.data;
      const message = data?.Message || error.message;
      toast.error(message || "Đã có lỗi xảy ra");
    }

    return Promise.reject(error);
  }
);
export default API;
