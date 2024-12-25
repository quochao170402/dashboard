import { projectMenuItems } from "@/utils/routeConfig";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/menu/Sidebar";

const Layout = () => {
  const [isExpanded] = useState(true);
  // const handleToggle = () => setIsExpanded((prev) => !prev);

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
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
