import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import AddData from "../components/AddData";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";
import UpdateData from "../components/UpdateData";
import ProtectedRoute from "../utils/ProtectedRoute";
export const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <ProtectedRoute><App /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <ProtectedRoute><Menu /></ProtectedRoute>
      },
      {
        path: '/dashboard/add-data',
        element: <ProtectedRoute><AddData /></ProtectedRoute>
      },
      {
        path: '/dashboard/update-data/:id',
        element: <ProtectedRoute><UpdateData /></ProtectedRoute>
      }
    ]
  },
  {
    path: '/',
    element: <Login />,
  },
]);

export default router;
