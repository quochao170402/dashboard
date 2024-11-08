import { MenuItemType } from "@/@types/MenuItem";
import {
  Bell,
  CalendarDays,
  FolderKanban,
  FolderOpen,
  Info,
  LayoutDashboard,
  LayoutList,
  Settings,
  SquareChartGantt,
  User,
} from "lucide-react";
import { ReactNode, useState } from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Breadcrumbs from "./SidebarMenu/Breadcrumbs";
import Sidebar from "./SidebarMenu/Sidebar";

interface Props {
  children: ReactNode;
}

const menuItems: MenuItemType[] = [
  {
    icon: <LayoutDashboard size={24} />,
    label: "Dashboard",
    path: "/dashboard",
    children: [
      {
        icon: <SquareChartGantt size={24} />,
        label: "Overview",
        path: "/dashboard/overview",
        children: [],
      },
      {
        icon: <CalendarDays size={24} />,
        label: "Calendar",
        path: "/dashboard/calendar",
        children: [],
      },
    ],
  },
  {
    icon: <FolderKanban size={24} />,
    label: "Projects",
    path: "/projects",
    children: [
      {
        icon: <FolderOpen size={24} />,
        label: "Projects",
        path: "/projects",
        children: [],
      },
      {
        icon: <LayoutList size={24} />,
        label: "Tasks",
        path: "/projects/tasks",
        children: [],
      },
      {
        icon: <Bell size={24} />,
        label: "Notifications",
        path: "/projects/notifications",
        children: [],
      },
    ],
  },
  {
    icon: <User size={24} />,
    label: "Users",
    path: "/users",
    // children: [
    //   {
    //     icon: <PiUserBold size={24} />,
    //     label: "User List",
    //     path: "/users/list",
    //     children: [],
    //   },
    //   {
    //     icon: "🔒",
    //     label: "Roles & Permissions",
    //     path: "/users/roles",
    //     children: [],
    //   },
    // ],
  },
  {
    icon: <Settings size={24} />,
    label: "Settings",
    path: "/settings",
    // children: [
    //   {
    //     icon: "🔧",
    //     label: "General Settings",
    //     path: "/settings/general",
    //     children: [],
    //   },
    //   {
    //     icon: "🔔",
    //     label: "Notifications",
    //     path: "/settings/notifications",
    //     children: [],
    //   },
    // ],
  },
  {
    icon: <Info size={24} />,
    label: "Support",
    path: "/support",
    children: [],
  },
];

const Layout = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex h-screen">
      <div
        className={`duration-300 transition-width ${
          isExpanded ? "w-[12%]" : "w-[60px]"
        }`}
      >
        <div className="flex justify-center mb-5">
          <NavLink to={""}>
            <img
              width={56}
              height={56}
              src="/public/dashboard-icon.png"
              alt=""
              className="justify-center"
            />
          </NavLink>
        </div>
        <div className="ml-4">
          <Sidebar isExpanded={isExpanded} menuItems={menuItems} />
        </div>
      </div>

      <div
        className={`duration-300 transition-width flex flex-col h-screen bg-green-300 ${
          isExpanded ? "w-[88%]" : "w-[calc(100%-60px)]"
        }`}
      >
        <div className="flex items-center gap-4 p-4 bg-red-300">
          <TbLayoutSidebarLeftExpand
            onClick={handleToggle}
            size={24}
            className={`transition-transform duration-300 transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <Breadcrumbs />
        </div>

        <main className="flex items-center justify-center flex-grow bg-yellow-300">
          <div className="w-full h-full">{children}</div>
        </main>
        <div className="flex-none bg-red-300 h-14">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
