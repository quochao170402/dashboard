import { routes } from "@/utils/routeConfig"; // Adjust the import path as necessary
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ThemeProvider from "./contexts/theme/ThemeProvider";
import ToastProvider from "./contexts/toast/ToastProvider";
import Layout from "./custom-components/layout/Layout";
import ToastContainer from "./custom-components/toast/ToastContainer";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <ThemeProvider>
        <ToastProvider>
          <ToastContainer />
          <Layout>
            <Routes>
              <Route key={"home"} path="/" element={<Dashboard />} />
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                >
                  {route.children &&
                    route.children?.map((child) => (
                      <Route
                        key={child.path}
                        path={child.path}
                        element={child.component}
                      />
                    ))}
                </Route>
              ))}
            </Routes>
          </Layout>
        </ToastProvider>
      </ThemeProvider>
    </Router>
  );
}
