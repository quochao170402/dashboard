import { menuItems } from "@/utils/routeConfig"; // Adjust the import path as necessary
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./custom-components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Layout>
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
