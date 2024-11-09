import { menuItems } from "@/utils/routeConfig"; // Adjust the import path as necessary
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./custom-components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Layout>
        {/* <Routes>
          <Route path="/" element={<>Home</>} />
          <Route
            path="dashboard"
            element={<Dashboard />}
            children={[
              <Route path="dashboard/overview" element={<Dashboard />} />,
              <Route path="dashboard/calendar" element={<Dashboard />} />,
            ]}
          />
          <Route
            path="projects"
            element={<Dashboard />}
            children={[
              <Route path="projects" element={<Dashboard />} />,
              <Route path="projects/tasks" element={<Dashboard />} />,
              <Route path="projects/notifications" element={<Dashboard />} />,
            ]}
          />
          <Route path="users" element={<>User</>} />
          <Route path="settings" element={<>Setting</>} />
          <Route path="support" element={<>Support</>} />
        </Routes> */}

        <Routes>
          <Route key={"home"} path="/" element={<Dashboard />} />
          {menuItems.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
