import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style.css";
import Layout from "./routing/Layout";
import LandingPage from "./pages/LandingPage";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Services from "./components/services/Services";
import WebDev from "./components/services/web-development/WebDev";
import AppDev from "./components/services/app-development/AppDev";
import WebSecurity from "./components/services/web-security/WebSecurity";
import ApiIntegration from "./components/services/api-integration/ApiIntegration";
import Maintenance from "./components/services/maintenance/Maintenance";
import MernStack from "./components/courses/mern-stack/MernStack";
import JSFullStack from "./components/courses/js-fullstack/JSFullStack";
import PyFullStack from "./components/courses/python-fullstack/PyFullStack";
import AllCourses from "./components/courses/all-courses/AllCourses";
//! Lazy Loading for Courses component
let LazyCourses = React.lazy(() => import("./components/courses/Courses"));

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
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/services",
          element: <Services />,
          children: [
            {
              path: "/services/web-development",
              element: <WebDev />,
            },
            {
              path: "/services/app-development",
              element: <AppDev />,
            },
            {
              path: "/services/web-security",
              element: <WebSecurity />,
            },
            {
              path: "/services/api-integration",
              element: <ApiIntegration />,
            },
            {
              path: "/services/maintenance",
              element: <Maintenance />,
            },
          ],
        },
        {
          path: "/courses",
          element: (
            <React.Suspense fallback="Loading....">
              <LazyCourses />
            </React.Suspense>
          ),
          children: [
            {
              path: "/courses/mern-stack",
              element: <MernStack />,
            },
            {
              path: "/courses/js-fullstack",
              element: <JSFullStack />,
            },
            {
              path: "/courses/python-fullstack",
              element: <PyFullStack />,
            },
            {
              path: "/courses/all-courses",
              element: <AllCourses />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
export default App;
