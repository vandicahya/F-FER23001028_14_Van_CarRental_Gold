import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Search from "./pages/Search";
import CarDetail from "./pages/Search/CarDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <>404 PUUUUH</>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/search/:id",
        element: <CarDetail />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
