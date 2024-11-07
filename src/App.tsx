import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./custom-components/layout/Layout";
import Home from "./pages/Home/Home";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/tasks" element={<Home />} />
          {/* Add more routes as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}
