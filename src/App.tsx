import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";

import ToastContainer from "./components/toast/ToastContainer";
import TaskProvider from "./contexts/task/TaskProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import ToastProvider from "./contexts/toast/ToastProvider";

import store from "@/stores/store"; // Your Redux store
import { Provider } from "react-redux"; // Redux Provider
import { Layout } from "./components/layout";
import MainLayout from "./components/layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Project } from "./pages/Projects";
import ProjectSetting from "./pages/ProjectSetting/ProjectSetting";
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
          <ToastProvider>
            <ToastContainer />

            <TaskProvider>
              <Routes>
                <Route key="dashboard" path="" element={<MainLayout />}>
                  <Route key="projects" path="/" element={<Dashboard />} />
                  <Route key="projects" path="projects" element={<Project />} />
                  <Route key="users" path="users" element={<User />} />
                </Route>
                <Route
                  key="projects-detail"
                  path="projects/:projectId"
                  element={<Layout />}
                >
                  <Route
                    index
                    key="overview"
                    element={<h1>Project overview</h1>}
                  />
                  <Route
                    key="backlog"
                    path="backlog"
                    element={<TaskBacklog />}
                  />
                  <Route key="list" path="list" element={<TaskList />} />
                  <Route key="board" path="board" element={<TaskKanban />} />
                  <Route key="users" path="users" element={<User />} />
                  <Route
                    key="settings"
                    path="settings"
                    element={<ProjectSetting />}
                  />
                </Route>
              </Routes>
            </TaskProvider>
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
