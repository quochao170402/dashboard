import { MenuItemType } from "@/@types/MenuItem";
import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./SidebarMenu/Sidebar";

interface Props {
  children: ReactNode;
}

const menuItems: MenuItemType[] = [
  {
    icon: "🏠",
    label: "Dashboard",
    path: "/dashboard",
    children: [
      {
        icon: "📊",
        label: "Overview",
        path: "/dashboard/overview",
        children: [],
      },
      {
        icon: "📅",
        label: "Calendar",
        path: "/dashboard/calendar",
        children: [],
      },
    ],
  },
  {
    icon: "📝",
    label: "Tasks",
    path: "/tasks",
    children: [
      {
        icon: "📋",
        label: "All Tasks",
        path: "/tasks/all",
        children: [],
      },
      {
        icon: "🔔",
        label: "Notifications",
        path: "/tasks/notifications",
        children: [],
      },
      {
        icon: "📈",
        label: "Task Reports",
        path: "/tasks/reports",
        children: [
          {
            icon: "📆",
            label: "Weekly Report",
            path: "/tasks/reports/weekly",
            children: [],
          },
          {
            icon: "📅",
            label: "Monthly Report",
            path: "/tasks/reports/monthly",
            children: [],
          },
        ],
      },
    ],
  },
  {
    icon: "👤",
    label: "Users",
    path: "/users",
    children: [
      {
        icon: "👥",
        label: "User List",
        path: "/users/list",
        children: [],
      },
      {
        icon: "🔒",
        label: "Roles & Permissions",
        path: "/users/roles",
        children: [],
      },
    ],
  },
  {
    icon: "⚙️",
    label: "Settings",
    path: "/settings",
    children: [
      {
        icon: "🔧",
        label: "General Settings",
        path: "/settings/general",
        children: [],
      },
      {
        icon: "🔔",
        label: "Notifications",
        path: "/settings/notifications",
        children: [],
      },
    ],
  },
  {
    icon: "📞",
    label: "Support",
    path: "/support",
    children: [],
  },
];

const Layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="bg-neutral-400 w-[240px]">
        <Sidebar menuItems={menuItems} />
      </div>

      <div className="flex flex-col h-screen w-full bg-green-300">
        <div className="flex-none h-14 bg-red-300">
          <Header />
        </div>
        <main className="flex-grow flex items-center justify-center bg-yellow-300">
          {children}
        </main>
        <div className="flex-none h-14 bg-red-300">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
