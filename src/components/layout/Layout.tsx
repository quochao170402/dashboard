import { projectMenuItems } from "@/utils/routeConfig";
import { ReactNode, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/menu/Sidebar";

interface Props {
  children: ReactNode;
}

const Layout = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const handleToggle = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex h-screen flex-col">
      <div>
        <Header />
      </div>
      <div className="flex flex-grow">
        <div
          className={`duration-300 transition-width shadow-2xl ${
            isExpanded ? "w-[240px]" : "w-[60px]"
          }`}
        >
          <Sidebar isExpanded={isExpanded} menuItems={projectMenuItems} />
        </div>

        <div
          className={`duration-300 transition-width flex flex-col flex-grow h-full px-6 ${
            isExpanded ? "w-[calc(100%-240px)]" : "w-[calc(100%-60px)]"
          }`}
        >
          <main className="flex flex-col items-start justify-center flex-grow">
            <div className="w-full h-full gap-4 py-4">
              {/* <div className="flex items-center gap-4 py-4">
                <TbLayoutSidebarLeftExpand
                  onClick={handleToggle}
                  size={24}
                  className={`transition-transform duration-300 transform ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
                <Breadcrumbs />
              </div> */}
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
