import { routes } from "@/utils/routeConfig"; // Adjust the import path as necessary
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import ToastContainer from "./components/toast/ToastContainer";
import TaskProvider from "./contexts/task/TaskProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import ToastProvider from "./contexts/toast/ToastProvider";
import { Dashboard } from "./pages/Dashboard";
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true,
      retry: 0,
    },
  },
});
export default function App() {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ToastProvider>
            <ToastContainer />
            <TaskProvider>
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
            </TaskProvider>
          </ToastProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Router>
  );
}
