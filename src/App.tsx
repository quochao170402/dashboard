import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./custom-components/layout/Layout";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tasks" element={<Dashboard />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}
