import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import AddData from "../components/AddData";
import Dashboard from "../components/Dashboard";
import Menu from "../components/Menu";
import UpdateData from "../components/UpdateData";
export const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <App />,
    children: [
      {
        index: true,
        element: <Menu />
      },
      {
        path: '/dashboard/add-data',
        element: <AddData />
      },
      {
        path: '/dashboard/update-data/:id',
        element: <UpdateData />
      }
    ]
  },
  {
    path: '/',
    element: <Login />,
  },
]);

export default router;
