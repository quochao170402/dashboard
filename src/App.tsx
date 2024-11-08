import { routes } from "@/utils/routeConfig"; // Adjust the import path as necessary
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Route as RouteType } from "./@types/MenuItem";
import Layout from "./custom-components/layout/Layout";

const renderRoutes = (routes: RouteType[]) => {
  return routes.map((route) => (
    <Route key={route.path} path={route.path} element={route.component}>
      {route.children && renderRoutes(route.children)}
    </Route>
  ));
};

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

        <Routes>{renderRoutes(routes)}</Routes>
      </Layout>
    </Router>
  );
}
