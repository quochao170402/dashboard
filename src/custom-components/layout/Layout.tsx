import { menuItems } from "@/utils/routeConfig";
import { ReactNode, useState } from "react";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Breadcrumbs from "./SidebarMenu/Breadcrumbs";
import Sidebar from "./SidebarMenu/Sidebar";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex h-screen">
      <div
        className={`duration-300 transition-width shadow-2xl ${
          isExpanded ? "w-[240px]" : "w-[60px]"
        }`}
      >
        <div className="flex justify-center mb-5">
          <NavLink to={"/"}>
            <img
              width={56}
              height={56}
              src="/public/dashboard-icon.png"
              alt=""
              className="justify-center"
            />
          </NavLink>
        </div>
        <div>
          <Sidebar isExpanded={isExpanded} menuItems={menuItems} />
        </div>
      </div>

      <div
        className={`duration-300 transition-width flex flex-col h-screen px-6 overflow-scroll ${
          isExpanded ? "w-[calc(100%-240px)]" : "w-[calc(100%-60px)]"
        }`}
      >
        <div className="flex items-center gap-4 py-4">
          <TbLayoutSidebarLeftExpand
            onClick={handleToggle}
            size={24}
            className={`transition-transform duration-300 transform ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
          <Breadcrumbs />
        </div>

        <main className="flex items-center justify-center flex-grow">
          <div className="w-full h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
