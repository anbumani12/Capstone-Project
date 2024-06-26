import Home from "../components/Home";
import Dashboard from "../components/admin/Dashboard";
import Service from "../components/admin/Service";
import SuperAdminProtectedRoute from "./SuperAdminProtectedRoute";
import AdminRoutes from "./AdminRoutes";
import { Navigate } from "react-router-dom";
import NewUser from "../components/NewUser";
import Viewpage from "../components/Viewpage";

const Approutes = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/new-user",
    element: <NewUser />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },

  {
    path: "/sevice",
    element: <Service />,
  },
  {
    path: "/viewpage",
    element: <Viewpage />,
  },

  {
    path: "/admin/dashboard",
    element: (
      <AdminRoutes>
        <Dashboard />
      </AdminRoutes>
    ),
  },
  {
    path: "/admin/service/:id",
    element: (
      <AdminRoutes>
        <Service />
      </AdminRoutes>
    ),
  },
  {
    path: "/admin/users",
    element: <SuperAdminProtectedRoute />,
  },
  {
    path: "/admin/*",
    element: <Navigate to="/admin/dashboard" />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

export default Approutes;
