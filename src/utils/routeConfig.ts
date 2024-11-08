import { Route } from "@/@types/MenuItem";
import { Dashboard } from "@/pages/Dashboard";
import { Project } from "@/pages/ProjectManagement";
import { Task } from "@/pages/TaskManagement";

export const routes: Route[] = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/overview",
        name: "Overview",
        component: Dashboard,
      },
    ],
  },

  {
    path: "/projects",
    name: "Projects",
    component: Project,
  },
  { path: "/tasks", name: "Tasks", component: Task },
  // Add more routes as needed
];
