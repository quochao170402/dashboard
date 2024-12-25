// const stageNames: Record<TaskStatus, string> = {
//   [TaskStatus.TODO]: "To Do",
//   [TaskStatus.IN_PROGRESS]: "In Progress",
//   [TaskStatus.REVIEW]: "Review",
//   [TaskStatus.RELEASE]: "Release",
//   [TaskStatus.DONE]: "Done",
// };

import ProjectDropdown from "@/components/layout/components/header/project-dropdown/ProjectDropdown";

const Dashboard = () => {
  return (
    <>
      <ProjectDropdown />
    </>
  );
};

export default Dashboard;
