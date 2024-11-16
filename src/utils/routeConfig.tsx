import { MenuItemType } from "@/@types/MenuItem";
import AnnouncementIcon from "@/assets/icons/AnnouncementIcon";
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

// export const routes: Route[] = [
//   {
//     path: "/dashboard",
//     name: "Dashboard",
//     component: <Dashboard />,
//     children: [
//       {
//         path: "/dashboard/overview",
//         name: "Overview",
//         component: <Dashboard />,
//       },
//       {
//         path: "/dashboard/calendar",
//         name: "Calendar",
//         component: <Dashboard />,
//       },
//     ],
//   },
//   {
//     path: "/projects",
//     name: "Projects",
//     component: <Project />,
//     children: [
//       {
//         path: "/projects/list",
//         name: "Project Home",
//         component: <Project />,
//       },
//       {
//         path: "/projects/tasks",
//         name: "Tasks",
//         component: <Task />,
//       },
//       {
//         path: "/projects/notifications",
//         name: "Notifications",
//         component: <Project />,
//       },
//     ],
//   },
//   { path: "/tasks", name: "Tasks", component: <Task /> },
//   { path: "/users", name: "User", component: <Task /> },
//   { path: "/settings", name: "Setting", component: <Task /> },
//   { path: "/support", name: "Support", component: <Task /> },
// ];

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
    icon: (props) => <AnnouncementIcon size={24} filled={props.filled} />,
    label: "Announcements",
    path: "/announcements",
    component: <Dashboard />,
  },
  {
    icon: (props) => <SettingIcon size={24} filled={props.filled} />,
    label: "Settings",
    path: "/settings",
    component: <Dashboard />,
  },
];
