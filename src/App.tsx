import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import TaskProvider from "./contexts/task/TaskProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";

import store from "@/stores/store"; // Your Redux store
import { Provider } from "react-redux"; // Redux Provider
import { Layout } from "./components/layout";
import MainLayout from "./components/layout/MainLayout";
import ProjectV2 from "./pages/Projects/ProjectV2";
import Property from "./pages/Property/Property";
import TaskBacklog from "./pages/TaskBacklog/Backlog";
import TaskKanban from "./pages/TaskKanban/TaskKanban";
import TaskList from "./pages/TaskList/TaskList";
import { User } from "./pages/Users";
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      retry: 0,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <TaskProvider>
            <ToastContainer />
            <Routes>
              <Route key="dashboard" path="" element={<MainLayout />}>
                <Route key="projects" path="/" element={<ProjectV2 />} />
                <Route key="projects" path="projects" element={<ProjectV2 />} />
                <Route key="users" path="users" element={<User />} />
                <Route key="settings" path="settings" element={<Property />} />
              </Route>
              <Route
                key="projects-detail"
                path="projects/:projectKey"
                element={<Layout />}
              >
                <Route
                  index
                  key="overview"
                  element={<h1>Project overview</h1>}
                />
                <Route key="backlog" path="backlog" element={<TaskBacklog />} />
                <Route key="list" path="list" element={<TaskList />} />
                <Route key="board" path="board" element={<TaskKanban />} />
                <Route key="users" path="users" element={<User />} />
                <Route key="settings" path="settings" element={<Property />} />
              </Route>
            </Routes>
          </TaskProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
