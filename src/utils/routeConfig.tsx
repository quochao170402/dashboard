import { MenuItemType } from "@/@types/MenuItem";

import { Dashboard } from "@/pages/Dashboard";
import { Task } from "@/pages/Tasks";
import User from "@/pages/Users/User";
import {
  Columns3,
  List,
  PanelsTopLeft,
  Settings,
  SquareKanban,
  Users,
} from "lucide-react";

export const projectMenuItems: MenuItemType[] = [
  {
    icon: () => <PanelsTopLeft size={24} />,
    label: "Overview",
    path: "/projects/:projectId/overview",
    component: <Dashboard />,
  },
  {
    icon: () => <Columns3 size={24} />,
    label: "Backlog",
    path: "/projects/:projectId/backlog",
    component: <Task />,
  },
  {
    icon: () => <List size={24} />,
    label: "List",
    path: "/projects/:projectId/list",
    component: <Task />,
  },
  {
    icon: () => <SquareKanban size={24} />,
    label: "Board",
    path: "/projects/:projectId/board",
    component: <Task />,
  },
  {
    icon: () => <Users size={24} />,
    label: "Users",
    path: "/projects/:projectId/users",
    component: <User />,
  },
  {
    icon: () => <Settings size={24} />,
    label: "Settings",
    path: "/projects/:projectId/settings",
    component: <Dashboard />,
  },
];
