import { Route } from "@/@types/MenuItem";
import { Dashboard } from "@/pages/Dashboard";
import { Project } from "@/pages/ProjectManagement";
import { Task } from "@/pages/TaskManagement";
export const routes: Route[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: <Dashboard />,
    children: [
      {
        path: "/dashboard/overview",
        name: "Overview",
        component: <Dashboard />,
      },
      {
        path: "/dashboard/calendar",
        name: "Calendar",
        component: <Dashboard />,
      },
    ],
  },
  {
    path: "/projects",
    name: "Projects",
    component: <Project />,
    children: [
      {
        path: "/projects/list",
        name: "Project Home",
        component: <Project />,
      },
      {
        path: "/projects/tasks",
        name: "Tasks",
        component: <Task />,
      },
      {
        path: "/projects/notifications",
        name: "Notifications",
        component: <Project />,
      },
    ],
  },
  { path: "/tasks", name: "Tasks", component: <Task /> },
  { path: "/users", name: "User", component: <Task /> },
  { path: "/settings", name: "Setting", component: <Task /> },
  { path: "/support", name: "Support", component: <Task /> },
];
