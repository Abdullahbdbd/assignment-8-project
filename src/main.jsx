import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root/Root";
import Home from "./Component/Home Container/Home/Home";
import AllApps from "./Component/Apps Container/All Apps/AllApps";
import AppDetails from "./Component/App Details/AppDetails";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Root />
      </>
    ),

    children: [
      { index: true, path: "/", Component: Home },

      {
        path: "/apps",
        loader: () => fetch("Data.json"),
        Component: AllApps,
      },

      {
        path: "/apps/:Id",
        loader: () => fetch("/Data.json"),
        Component: AppDetails,
      },
    ],
  },
  {
    path: "*",
    element: <h1>Page not found this time</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
