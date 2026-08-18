import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Layout from "./routing/Layout";
import LandingPage from "./pages/LandingPage";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <LandingPage></LandingPage>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
