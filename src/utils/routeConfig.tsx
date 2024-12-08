import { MenuItemType, Route } from "@/@types/MenuItem";
import ChatIcon from "@/assets/icons/ChatIcon";
import OverviewIcon from "@/assets/icons/OverviewIcon";
import ProjectIcon from "@/assets/icons/ProjectIcon";
import SettingIcon from "@/assets/icons/SettingIcon";
import TaskIcon from "@/assets/icons/TaskIcon";
import UserIcon from "@/assets/icons/UserIcon";
import { Dashboard } from "@/pages/Dashboard";
import { Project } from "@/pages/Projects";
import { Task } from "@/pages/Tasks";
import User from "@/pages/Users/User";

export const menuItems: MenuItemType[] = [
  {
    icon: (props) => <OverviewIcon size={24} filled={props.filled} />,
    label: "Overview",
    path: "/overview",
    component: <Dashboard />,
  },
  {
    icon: (props) => <TaskIcon size={24} filled={props.filled} />,
    label: "Tasks",
    path: "/tasks",
    component: <Task />,
  },
  {
    icon: (props) => <ProjectIcon size={24} filled={props.filled} />,
    label: "Projects",
    path: "/projects",
    component: <Project />,
  },
  {
    icon: (props) => <UserIcon size={24} filled={props.filled} />,
    label: "Users",
    path: "/users",
    component: <User />,
  },
  {
    icon: (props) => <ChatIcon size={24} filled={props.filled} />,
    label: "Chat",
    path: "/chat",
    component: <User />,
  },
  {
    icon: (props) => <SettingIcon size={24} filled={props.filled} />,
    label: "Settings",
    path: "/settings",
    component: <Dashboard />,
  },
];

export const projectMenuItems: MenuItemType[] = [
  {
    icon: (props) => <OverviewIcon size={24} filled={props.filled} />,
    label: "Overview",
    path: "/projects/:projectId/overview",
    component: <Dashboard />,
  },
  {
    icon: (props) => <TaskIcon size={24} filled={props.filled} />,
    label: "Backlog",
    path: "/projects/:projectId/backlog",
    component: <Task />,
  },
  {
    icon: (props) => <TaskIcon size={24} filled={props.filled} />,
    label: "List",
    path: "/projects/:projectId/list",
    component: <Task />,
  },
  {
    icon: (props) => <TaskIcon size={24} filled={props.filled} />,
    label: "Board",
    path: "/projects/:projectId/board",
    component: <Task />,
  },
  {
    icon: (props) => <UserIcon size={24} filled={props.filled} />,
    label: "Users",
    path: "/projects/:projectId/users",
    component: <User />,
  },
  {
    icon: (props) => <ChatIcon size={24} filled={props.filled} />,
    label: "Chat",
    path: "/projects/:projectId/chat",
    component: <User />,
  },
  {
    icon: (props) => <SettingIcon size={24} filled={props.filled} />,
    label: "Settings",
    path: "/projects/:projectId/settings",
    component: <Dashboard />,
  },
];

export const routes: Route[] = [
  {
    label: "Overview",
    path: "/overview",
    component: <Dashboard />,
  },
  {
    label: "Tasks",
    path: "/tasks",
    component: <Task />,
  },
  {
    label: "Projects",
    path: "/projects",
    component: <Project />,
    children: [],
  },
  {
    label: "Project Detail",
    path: "/projects/:projectId",
    component: <Project />,
    children: [
      {
        label: "Backlog",
        path: "board",
        component: <User />,
      },
      {
        label: "List",
        path: "list",
        component: <User />,
      },
      {
        label: "Kanban",
        path: "kanban",
        component: <User />,
      },
    ],
  },
  {
    label: "Users",
    path: "/users",
    component: <User />,
  },
  {
    label: "Chat",
    path: "/chat",
    component: <User />,
  },
  {
    label: "Settings",
    path: "/settings",
    component: <Dashboard />,
  },
];

export const routesNewVersion: Route[] = [
  {
    label: "Projects",
    path: "/projects",
    component: <Project />,
    children: [
      {
        label: "Projects",
        path: ":projectId",
        component: <Project />,
      }
    ],
  },
  {
    label: "Project Overview",
    path: "/projects/:projectId",
    component: <Project />,
    children: [
      {
        label: "Backlog",
        path: "board",
        component: <User />,
      },
      {
        label: "List",
        path: "list",
        component: <User />,
      },
      {
        label: "Kanban",
        path: "kanban",
        component: <User />,
      },
    ],
  },
  {
    label: "Users",
    path: "/users",
    component: <User />,
  },
  {
    label: "Chat",
    path: "/chat",
    component: <User />,
  },
  {
    label: "Settings",
    path: "/settings",
    component: <Dashboard />,
  },
];
