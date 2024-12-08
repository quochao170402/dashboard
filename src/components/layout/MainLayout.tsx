import { ReactNode } from "react";
import Breadcrumbs from "./components/breadcrumb/Breadcrumbs";
import Header from "./components/header/Header";

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen flex-col">
      <div>
        <Header />
      </div>
      <div className="duration-300 transition-width flex flex-col flex-grow h-full px-6">
        <div className="flex items-center gap-4 py-4">
          <Breadcrumbs />
        </div>

        <main className="flex items-center justify-center flex-grow">
          <div className="w-full h-full">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
