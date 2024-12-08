import { routes } from "@/utils/routeConfig"; // Adjust the import path as necessary
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import ToastContainer from "./components/toast/ToastContainer";
import TaskProvider from "./contexts/task/TaskProvider";
import ThemeProvider from "./contexts/theme/ThemeProvider";
import ToastProvider from "./contexts/toast/ToastProvider";
import { Dashboard } from "./pages/Dashboard";

import store from "@/stores/store"; // Your Redux store
import { Provider } from "react-redux"; // Redux Provider
import LayoutSwitcher from "./components/layout/LayoutSwitcher";
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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <ToastProvider>
            <ToastContainer />
            <Router
              future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
              }}
            >
              <TaskProvider>
                <LayoutSwitcher>
                  <Routes>
                    <Route index key={"home"} path="/" element={<Dashboard />} />
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
                </LayoutSwitcher>
              </TaskProvider>
            </Router>
          </ToastProvider>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
}
