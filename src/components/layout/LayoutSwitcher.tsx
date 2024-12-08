import { RootState } from "@/stores/store";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";
import MainLayout from "./MainLayout";

interface Props {
  children: ReactNode;
}

const LayoutSwitcher = ({ children }: Props) => {
  const projectId = useSelector(
    (state: RootState) => state.project.selectedProject
  );

  return (
    <>
      {projectId ? (
        <MainLayout>{children}</MainLayout>
      ) : (
        <Layout>{children}</Layout>
      )}
    </>
  );
};

export default LayoutSwitcher;
