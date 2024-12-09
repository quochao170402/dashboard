import { MenuItemType } from "@/@types/MenuItem";
import ChatIcon from "@/assets/icons/ChatIcon";
import OverviewIcon from "@/assets/icons/OverviewIcon";
import SettingIcon from "@/assets/icons/SettingIcon";
import TaskIcon from "@/assets/icons/TaskIcon";
import UserIcon from "@/assets/icons/UserIcon";

import { Dashboard } from "@/pages/Dashboard";
import { Task } from "@/pages/Tasks";
import User from "@/pages/Users/User";

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
