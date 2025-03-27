import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage"; // Make sure this is correct
import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "../pages/DashboardPage"; // Import DashboardPage
import AboutPage from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound"; // Handle unmatched routes
import ProtectedRoute from "./ProtectedRoute";
import LoginForm from "../components/LoginForm";
import BitcoinPage from "../pages/BitcoinPage";
import BitcoinRates from "../components/BitcoinRates";
// AppRoutes component: defines all possible routes for the app
function AppRoutes(props) {
  return (
    <Routes>
      {/* Index route: default or home page */}
      <Route index element={<Homepage {...props} />} />
      {/* Nested routes under /dash */}
      <Route
        path="dash"
        element={
          <ProtectedRoute>
            <DashboardPage {...props} />
          </ProtectedRoute>
        }
      >
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="login" element={<LoginForm />} />
      {/* About page route */}
      <Route path="/about" element={<AboutPage {...props} />} />
      {/* Special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
      {/* bitcoin route*/}
      <Route path="/bitcoin" element={<BitcoinPage />} />
    </Routes>
  );
}

export default AppRoutes;
